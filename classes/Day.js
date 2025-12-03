'use strict';

/**
 * День жизни * 
 */
class Day {
  numberDay;
  toDoList;
  dayHTMLEl;

  constructor(numberDay, numberHuman, toDoList) {
    this.numberDay = numberDay;
    this.numberHuman = numberHuman;
    this.toDoList = toDoList;
  }

  createDayHTMLEl() {
    this.dayHTMLEl = document.createElement('table');
    this.dayHTMLEl.classList.add('dayFromClassDayHTMLEl');
    let h3HTMLEl = document.createElement('h3');
    h3HTMLEl.textContent = `${this.numberHuman} человек`;
    let h4HTMLEl = document.createElement('h3');
    h4HTMLEl.textContent = `${this.numberDay} день`;
    this.dayHTMLEl.appendChild(h3HTMLEl);
    this.dayHTMLEl.appendChild(h4HTMLEl);

    let trEl = document.createElement('tr');
    let thHourEl = document.createElement('th');
    thHourEl.textContent = 'часы';
    let thMinuteEl = document.createElement('th');
    thMinuteEl.textContent = 'минуты';
    let thSecondEl = document.createElement('th');
    thSecondEl.textContent = 'секунды';
    let thBusinessEl = document.createElement('th');
    thBusinessEl.textContent = 'дело';
    trEl.appendChild(thHourEl);
    trEl.appendChild(thMinuteEl);
    trEl.appendChild(thSecondEl);
    trEl.appendChild(thBusinessEl);
    this.dayHTMLEl.appendChild(trEl);

    for (let { hour, minute, second, business } of this.toDoList) {
      let trHTMLEl = document.createElement('tr');
      let hourHTMLEl = document.createElement('td');
      hourHTMLEl.textContent = hour;
      let minuteHTMLEl = document.createElement('td');
      minuteHTMLEl.textContent = minute;
      let secondHTMLEl = document.createElement('td');
      secondHTMLEl.textContent = second;
      let businessHTMLEl = document.createElement('td');
      businessHTMLEl.textContent = business;
      trHTMLEl.appendChild(hourHTMLEl);
      trHTMLEl.appendChild(minuteHTMLEl);
      trHTMLEl.appendChild(secondHTMLEl);
      trHTMLEl.appendChild(businessHTMLEl);
      this.dayHTMLEl.appendChild(trHTMLEl);
    }

    return this.dayHTMLEl;
  }
}