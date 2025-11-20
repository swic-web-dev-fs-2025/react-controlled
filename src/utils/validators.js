/**
 * Checks if two passwords match
 * @param {string} password - Original password
 * @param {string} confirmPassword - Confirmation password
 * @returns {boolean} - True if they match
 */
export const doPasswordsMatch = (password, confirmPassword) => {
  return password === confirmPassword && password.length > 0;
};

/**
 * Calculates password strength
 * @param {string} password - Password to check
 * @returns {"weak"|"medium"|"strong"} - Strength level
 */
export const getPasswordStrength = (password) => {
  if (password.length < 8) return "weak";

  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const strengthScore = [hasUpperCase, hasNumber, hasSymbol].filter(
    Boolean
  ).length;

  if (strengthScore === 0) return "weak";
  if (strengthScore === 1) return "medium";

  return "strong"; // 2 or 3
};

/**
 * Checks if string has minimum length
 * @param {string} str - String to check
 * @param {number} [min=8] - Minimum length
 * @returns {boolean} - True if string length >= min
 */
export const hasMinLength = (str, min = 8) => str.length >= min;

/**
 * Checks if string contains a number
 * @param {string} str - String to check
 * @returns {boolean} - True if string contains a number
 */
export const hasNumber = (str) => /[0-9]/.test(str);

/**
 * Checks if string contains a symbol
 * @param {string} str - String to check
 * @returns {boolean} - True if string contains a symbol
 */
export const hasSymbol = (str) => /[!@#$%^&*(),.?":{}|<>]/.test(str);

/**
 * Checks if string contains an uppercase letter
 * @param {string} str - String to check
 * @returns {boolean} - True if string contains an uppercase letter
 */
export const hasUpperCase = (str) => /[A-Z]/.test(str);

/**
 * Validates email format using a simple pattern
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email format
 */
export const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
};
