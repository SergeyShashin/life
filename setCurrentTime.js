'use strict';

window.onload = () => {
  let timeEL = document.querySelector('time');
  let interval = setInterval(() => timeEL.textContent = new Date(), 1000);
}
