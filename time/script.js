function updateUI() {
  const now = new Date();
  const year = now.getFullYear();
  const start = new Date(year, 0, 1);
  const end = new Date(year + 1, 0, 1);
  
  const totalYearMs = end - start;
  const elapsedMs = now - start;
  
  const percent = (elapsedMs / totalYearMs) * 100;
  const daysLeft = Math.ceil((end - now) / (1000 * 60 * 60 * 24));

  // Update Year and Percentage
  document.getElementById("year").textContent = year;
  document.getElementById("percent").textContent = percent.toFixed(2) + "%";
  document.getElementById("progress-fill").style.width = percent + "%";
  document.getElementById("days-left").textContent = daysLeft;

  // Current Time (HH:MM)
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  document.getElementById("time").textContent = `${hours}:${minutes}`;

  // Full Date String
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById("today-date").textContent = now.toLocaleDateString('en-US', dateOptions);

  // Time left in the current day
  const endOfDay = new Date(now);
  endOfDay.setHours(23, 59, 59, 999);
  const msLeftToday = endOfDay - now;
  
  const hrsRemaining = Math.floor(msLeftToday / (1000 * 60 * 60));
  const minsRemaining = Math.floor((msLeftToday % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("day-left").textContent = `${hrsRemaining}h ${minsRemaining}m`;
}

// Run immediately on load
updateUI();

// Refresh every 60 seconds
setInterval(updateUI, 60000);