'use strict';

class Capsule {
  capsuleHTMLEl;
  constructor() {
  }

  createCapsuleHTMLEl() {
    this.capsuleHTMLEl = document.createElement('section');
    this.capsuleHTMLEl.classList.add('capsuleHTMLEl');

    let headerCapsuleHTMLEl = document.createElement('h3');
    headerCapsuleHTMLEl.textContent = 'Капсула';

    let tableHTMLEl = document.createElement('table');

    let trEl = document.createElement('tr');

    //HTML элемент. Точка назначения. Выбирается.
    let thDestinationEl = document.createElement('th');
    thDestinationEl.textContent = 'назначение';

    //HTML элемент. Нужное время в точке назначения. Выбирается.
    let thTimeDestinationEl = document.createElement('th');
    thTimeDestinationEl.textContent = 'нужное время в точке назначения';

    //HTML элемент. Точка назначения. Выбирается.
    let thStartingPointEl = document.createElement('th');
    thStartingPointEl.textContent = 'отправление';

    //HTML элемент. Время в точке назначения. Устанавливается автоматически после ввода точки назначения и времени в точке назначения.
    let thTimeStartingPointEl = document.createElement('th');
    thTimeStartingPointEl.textContent = 'время в точке отправления';

    //HTML элемент. Размер капсулы. Выбирается. 1-12
    let thSizeEl = document.createElement('th');
    thSizeEl.textContent = 'размер';

    //HTML элемент. Кнопка для добавления нового маршрута.
    let thAddEl = document.createElement('th');
    let btnEl = document.createElement('button');
    btnEl.classList.add('btn');
    btnEl.id = 'btnAddRoute';
    btnEl.textContent = '+ маршрут';
    thAddEl.appendChild(btnEl);

    trEl.appendChild(thDestinationEl);
    trEl.appendChild(thTimeDestinationEl);
    trEl.appendChild(thStartingPointEl);
    trEl.appendChild(thTimeStartingPointEl);
    trEl.appendChild(thSizeEl);
    trEl.appendChild(thAddEl);

    tableHTMLEl.appendChild(trEl);

    this.capsuleHTMLEl.appendChild(headerCapsuleHTMLEl);
    this.capsuleHTMLEl.appendChild(tableHTMLEl);

    return this.capsuleHTMLEl;
  }

  /**
   * Включение/отключение видимости HTML элемента capsule.
   */
  toggleCapsuleHTMLEl() {
    this.capsuleHTMLEl.style.display = this.capsuleHTMLEl.style.display === 'none' ? 'block' : 'none';
  }

  /**
  * Отключение видимости HTML элемента capsule. 
  */
  hideMapHTMLEl() {
    this.capsuleHTMLEl.style.display = 'none';
  }

  /**
  * Отключение видимости HTML элемента capsule. 
  */
  showMapHTMLEl() {
    this.capsuleHTMLEl.style.display = 'block';
  }

  /**
  * Возвращает HTML элемент карты.
  * @returns {HTMLElement}
  */
  getCapsuleHTMLEl() {
    return this.capsuleHTMLEl;
  }
}