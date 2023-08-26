const targetDate = new Date("2023-08-27T01:15:00").getTime(); // Set your target date and time here
const timerElement = document.getElementById("countdown");
const giftElement = document.getElementById("gift");

function updateCountdown() {
    const now = new Date().getTime();
    console.log(now);
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds

    if (timeLeft <= 0) {
        timerElement.innerHTML = "   It's Time to reveal ! Sorry for late wishes...";
        giftElement.classList.remove("hidden");
    }
}

updateCountdown(); // Initial call
setInterval(updateCountdown, 1000); // Update every second



