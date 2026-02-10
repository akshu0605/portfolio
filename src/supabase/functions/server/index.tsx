import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import * as kv from './kv_store.tsx';

const app = new Hono();

app.use('*', logger(console.log));
app.use('*', cors());

const PROJECT_ID = 'make-server-1bef722e';

// Helper to get Supabase client
const getSupabase = () => {
  return createClient(
    Deno.env.get('SUPABASE_URL') || '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''
  );
};

// Route: Get all contact messages (protected or for admin)
app.get(`/${PROJECT_ID}/messages`, async (c) => {
  const messages = await kv.getByPrefix('contact:');
  return c.json(messages);
});

// Route: Submit contact form
app.post(`/${PROJECT_ID}/contact`, async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    const id = crypto.randomUUID();
    const timestamp = new Date().toISOString();
    const contactData = { id, name, email, message, timestamp };

    await kv.set(`contact:${id}`, contactData);

    // Also update a global counter for stats
    const stats = await kv.get('stats:total_messages') || { count: 0 };
    await kv.set('stats:total_messages', { count: (stats.count || 0) + 1 });

    return c.json({ success: true, id });
  } catch (error) {
    console.error('Error saving contact message:', error);
    return c.json({ error: 'Failed to save message' }, 500);
  }
});

// Route: Get stats
app.get(`/${PROJECT_ID}/stats`, async (c) => {
  const totalMessages = await kv.get('stats:total_messages') || { count: 0 };
  const visitCount = await kv.get('stats:page_visits') || { count: 0 };
  
  return c.json({
    totalMessages: totalMessages.count,
    pageVisits: visitCount.count
  });
});

// Route: Increment page visits
app.post(`/${PROJECT_ID}/increment-visits`, async (c) => {
  const visitCount = await kv.get('stats:page_visits') || { count: 0 };
  const newCount = (visitCount.count || 0) + 1;
  await kv.set('stats:page_visits', { count: newCount });
  return c.json({ count: newCount });
});

Deno.serve(app.fetch);
