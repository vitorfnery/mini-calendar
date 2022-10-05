"use script";

const monthNameEl = document.querySelector(".month-name");
const dayNameEl = document.querySelector(".day-name");
const dayNumberEl = document.querySelector(".day-number");
const yearEl = document.querySelector(".year");

const date = new Date();

const updateMonth = (calendarEl) =>
  (calendarEl.textContent = date.toLocaleString("en", { month: "long" }));

const updateWeekday = (calendarEl) =>
  (calendarEl.textContent = date.toLocaleString("en", {
    weekday: "long",
  }));

const updateDayNumber = () => (dayNumberEl.textContent = date.getDate());

const updateYear = () => (yearEl.textContent = date.getFullYear());

updateMonth(monthNameEl);
updateWeekday(dayNameEl);
updateDayNumber();
updateYear();
