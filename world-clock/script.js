const clockEl = document.getElementById("clock");
const dateEl = document.getElementById("date");
const citySelect = document.getElementById("city");
const themeToggle = document.getElementById("themeToggle");

// Tarih formatlama için ay isimleri
const aylar = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
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
    dateEl.textContent = `${gun} ${aylar[parseInt(ay) - 1]} ${yil}`;
  } catch (error) {
    clockEl.textContent = "Saat alınamadı";
    dateEl.textContent = "";
  }
}

// Her saniyede bir güncelle
setInterval(updateClock, 1000);
updateClock();

// Tema değiştirme
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
