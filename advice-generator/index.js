const apiUrl = "https://api.adviceslip.com/advice";
const title = document.querySelector(".title");
const quote = document.querySelector(".quote");
const btn = document.querySelector(".icon-circle");

const advice = () => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => displayAdvice(data));
};

const displayAdvice = (data) => {
  title.textContent = `ADVICE #${data.slip.id}`;
  quote.textContent = `${data.slip.advice}`;
};

document.addEventListener("DOMContentLoaded", advice);
btn.addEventListener("click", advice);
