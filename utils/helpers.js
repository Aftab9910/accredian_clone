// Format text (capitalize first letter of each word)
export function capitalizeWords(str = "") {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Simple email validation
export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Delay function (useful for loading simulation)
export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Truncate long text
export function truncateText(text = "", limit = 100) {
  if (text.length <= limit) return text;
  return text.substring(0, limit) + "...";
}

// Generate random ID (for UI keys if needed)
export function generateId() {
  return Math.random().toString(36).substring(2, 10);
}
