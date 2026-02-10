/**
 * Utility functions for the Akshit Jaswal Portfolio
 * Written in plain JavaScript to support core logic.
 */

/**
 * Calculates the time elapsed since a given date
 * @param {string} date - ISO date string
 * @returns {string} - Human readable string (e.g., "2 mins ago")
 */
export const getTimeAgo = (date) => {
  const now = new Date();
  const past = new Date(date);
  const diffInMs = now - past;
  const diffInSecs = Math.floor(diffInMs / 1000);
  const diffInMins = Math.floor(diffInSecs / 60);
  const diffInHours = Math.floor(diffInMins / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInDays > 0) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  if (diffInHours > 0) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  if (diffInMins > 0) return `${diffInMins} min${diffInMins > 1 ? 's' : ''} ago`;
  return 'just now';
};

/**
 * Generates a smooth parallax value based on scroll position
 * @param {number} scrollY - Current scroll Y position
 * @param {number} speed - Parallax speed factor
 * @returns {number} - Transformed value
 */
export const calculateParallax = (scrollY, speed = 0.5) => {
  return scrollY * speed;
};

/**
 * Formats phone numbers to a standard Indian format
 * @param {string} phone - Raw phone number
 * @returns {string} - Formatted phone number
 */
export const formatPhoneNumber = (phone) => {
  const cleaned = ('' + phone).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{5})$/);
  if (match) {
    return `+${match[1]} ${match[2]}-${match[3]}`;
  }
  return phone;
};
