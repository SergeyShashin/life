'use strict';

window.onload = () => {
  let interval = setInterval(() => timeEL.textContent = new Date(), 1000);
  let timeEL = document.querySelector('time');
}
