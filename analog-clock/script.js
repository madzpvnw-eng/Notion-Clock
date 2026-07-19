/* ========================================
   ELEMENT
======================================== */

const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const date = document.getElementById("date");

/* ========================================
   DATA
======================================== */

const dayNames = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu"
];

const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
];

/* ========================================
   FUNCTION
======================================== */

function updateClock() {

    const now = new Date();

    // DIGITAL CLOCK

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    hours.textContent = String(h).padStart(2, "0");
    minutes.textContent = String(m).padStart(2, "0");
    seconds.textContent = String(s).padStart(2, "0");

    // DATE

    const day = dayNames[now.getDay()];
    const tanggal = now.getDate();
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();

    date.textContent =
        `${day}, ${tanggal} ${month} ${year}`;

    // ANALOG CLOCK

    const hourDeg = ((h % 12) * 30) + (m * 0.5);

    const minuteDeg = (m * 6) + (s * 0.1);

    const secondDeg = s * 6;

    hourHand.style.transform =
        `translateX(-50%) rotate(${hourDeg}deg)`;

    minuteHand.style.transform =
        `translateX(-50%) rotate(${minuteDeg}deg)`;

    secondHand.style.transform =
        `translateX(-50%) rotate(${secondDeg}deg)`;

}

/* ========================================
   INITIALIZE
======================================== */

updateClock();

/* ========================================
   AUTO UPDATE
======================================== */

setInterval(updateClock,1000);