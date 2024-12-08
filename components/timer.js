// Wrap everything in an IIFE to avoid global scope pollution
(() => {
  let timeLeft = 23 * 3600 + 59 * 60 + 59;
  let timerInterval;

  function updateCountdown() {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      return;
    }

    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
      countdownElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
      timeLeft--;
    } else {
      // Clean up if the element no longer exists
      clearInterval(timerInterval);
    }
  }

  function closeBanner() {
    const banner = document.querySelector('.bg-\\[\\#BFFFD1\\]');
    if (banner) {
      banner.style.display = 'none';
      clearInterval(timerInterval); // Stop the timer when banner is closed
    }
  }

  // Initialize the timer
  updateCountdown();
  timerInterval = setInterval(updateCountdown, 1000);
})();
