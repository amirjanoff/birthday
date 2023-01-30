const elDataInput = document.querySelector("[data-input]");
const elCounter = document.querySelector("[data-text]");

elDataInput.addEventListener("change",() => {
 setInterval(() => {
   startTimer(new Date(elDataInput.value))
 }, 1000);
})

function startTimer(date) {
  const now = new Date();
  let diff = Math.trunc((date.getTime() - now.getTime()) / 1000);
  const second = diff % 60;
  diff = Math.trunc(diff / 60);
  const minute = diff % 60;
  diff = Math.trunc(diff / 60);
  const hour = diff % 24;
  diff = Math.trunc(diff / 24);

  elCounter.textContent = `${diff} kun, ${hour} soat, ${minute} minut, ${second} sekund`;
}