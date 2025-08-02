const clockEl = document.getElementById("clock");
const dateEl = document.getElementById("date");
const citySelect = document.getElementById("city");
const themeToggle = document.getElementById("themeToggle");

// Month names for date formatting 
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "Agust", "September", "October", "November", "December"
];

function updateClock() {
  const selectedCity = citySelect.value;
  const now = new Date();

  try {
    const options = {
      timeZone: selectedCity,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };

    const dateOptions = {
      timeZone: selectedCity,
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    };

    const timeStr = new Intl.DateTimeFormat('tr-TR', options).format(now);
    const dateParts = new Intl.DateTimeFormat('tr-TR', dateOptions).format(now).split('.');
    const [gun, ay, yil] = dateParts;

    clockEl.textContent = timeStr;
    dateEl.textContent = `${gun} ${months[parseInt(ay) - 1]} ${yil}`;
  } catch (error) {
    clockEl.textContent = "Could not get time ";
    dateEl.textContent = "";
  }
}

// Update every second
setInterval(updateClock, 1000);
updateClock();

// Change theme
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
