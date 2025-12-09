'use strict';

class Capsule {
  capsuleHTMLEl;
  constructor() {
  }

  createHTMLEl() {
    this.capsuleHTMLEl = document.createElement('section');

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

    trEl.appendChild(thDestinationEl);
    trEl.appendChild(thTimeDestinationEl);
    trEl.appendChild(thStartingPointEl);
    trEl.appendChild(thTimeStartingPointEl);

    this.capsuleHTMLEl.appendChild(headerCapsuleHTMLEl);
    this.capsuleHTMLEl.appendChild(tableHTMLEl);
    return this.capsuleHTMLEl;
  }
}