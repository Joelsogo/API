const quotes = document.querySelector(".quotes");
// const quoted = document.querySelector(".two");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  async function adviceGenerator() {
    const advice = await fetch("https://api.adviceslip.com/advice");
    const data = await advice.json();
    quotes.textContent = `${data.slip.advice}`;
  }
  adviceGenerator();
});
