'use strict';

/**
 * Дни жизни
 */
class Days {
  toDoList;
  daysHTMLEl;
  /**
   * Конструктор класса
   * @param {number} numberHuman Номер человека в группе.
   * @param {Array} toDoList Расписаниние дней жизни под этим номером.
   */
  constructor(numberHuman, toDoList) {
    this.numberHuman = numberHuman;
    this.toDoList = toDoList;
    console.log(toDoList);
  }

  /**
   * Создаёт HTML элемент дня жизни.
   * @returns {HTMLElement} Возвращает HTML элемент.
   */
  createDayHTMLEl() {
    this.daysHTMLEl = document.createElement('section');
    this.daysHTMLEl.classList.add('dayFromClassDayHTMLEl');
    let h3HTMLEl = document.createElement('h3');
    h3HTMLEl.textContent = `${this.numberHuman} человек`;

    this.daysHTMLEl.appendChild(h3HTMLEl);

    let tableDayHTMLEl = document.createElement('table');

    let trEl = document.createElement('tr');
    let thDaysEl = document.createElement('th');
    thDaysEl.textContent = 'день';
    let thHourEl = document.createElement('th');
    thHourEl.textContent = 'часы';
    let thMinuteEl = document.createElement('th');
    thMinuteEl.textContent = 'минуты';
    let thSecondEl = document.createElement('th');
    thSecondEl.textContent = 'секунды';
    let thBusinessEl = document.createElement('th');
    thBusinessEl.textContent = 'дело';

    trEl.appendChild(thDaysEl);
    trEl.appendChild(thHourEl);
    trEl.appendChild(thMinuteEl);
    trEl.appendChild(thSecondEl);
    trEl.appendChild(thBusinessEl);

    tableDayHTMLEl.appendChild(trEl);

    for (let {day, hour, minute, second, business } of this.toDoList) {
      let trHTMLEl = document.createElement('tr');
      let dayHTMLEl = document.createElement('td');
      dayHTMLEl.textContent = day;
      let hourHTMLEl = document.createElement('td');
      hourHTMLEl.textContent = hour;
      let minuteHTMLEl = document.createElement('td');
      minuteHTMLEl.textContent = minute;
      let secondHTMLEl = document.createElement('td');
      secondHTMLEl.textContent = second;
      let businessHTMLEl = document.createElement('td');
      businessHTMLEl.textContent = business;

      trHTMLEl.appendChild(dayHTMLEl);
      trHTMLEl.appendChild(hourHTMLEl);
      trHTMLEl.appendChild(minuteHTMLEl);
      trHTMLEl.appendChild(secondHTMLEl);
      trHTMLEl.appendChild(businessHTMLEl);

      tableDayHTMLEl.appendChild(trHTMLEl);
    }

    this.daysHTMLEl.appendChild(tableDayHTMLEl);

    return this.daysHTMLEl;
  }
}