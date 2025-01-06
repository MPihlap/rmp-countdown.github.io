// 1. Set your target date (e.g., Dec 31 of this year)
const targetDate = new Date(new Date().getFullYear(), 7, 4);

// 2. Array/object of daily messages for specific day counts
const messagePool = [
  "pärast ei pea enam andiga tegelema",
  "UNESCO pärandi üritus ongi käes",
  "pärast ei pea enam peetri polkat harjutama",
  "Double-check your checklist!",
  "Excitement is in the air!",
  "Almost there!",
  "Get hyped!",
  "Enjoy the countdown!"
];

// 3. Calculate how many days remain
function calculateDaysRemaining() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const difference = targetDate - today;
  return Math.ceil(difference / (1000 * 60 * 60 * 24));
}

// 4. Update the countdown display
function updateCountdown() {
  const daysLeft = calculateDaysRemaining();
  const countdownElem = document.getElementById("countdown");
  
  // Get a random message from the pool
  const randomMessage = messagePool[Math.floor(Math.random() * messagePool.length)];
  
  // Update the countdown text with random message
  countdownElem.textContent = `${daysLeft} päev${daysLeft !== 1 ? 'a' : ''} ${randomMessage}`;
}

// Add button click handler
document.getElementById('changeMessage').addEventListener('click', updateCountdown);

// 5. Schedule daily updates at midnight
(function scheduleMidnightRefresh() {
  const now = new Date();
  const midnight = new Date();
  midnight.setDate(midnight.getDate() + 1);
  midnight.setHours(0, 0, 0, 0);

  const timeToMidnight = midnight - now;

  setTimeout(() => {
    // Update and schedule the next refresh
    updateCountdown();
    scheduleMidnightRefresh();
  }, timeToMidnight);
})();

// 6. Initial update on page load
updateCountdown();
