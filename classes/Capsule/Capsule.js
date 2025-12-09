'use strict';

class Capsule {
  capsuleHTMLEl;
  routesTableHTMLEl;
  counterRoutes = 0;
  routes = {};

  constructor() {
  }

  createCapsuleHTMLEl() {
    this.capsuleHTMLEl = document.createElement('section');
    this.capsuleHTMLEl.classList.add('capsuleHTMLEl');

    let headerCapsuleHTMLEl = document.createElement('h3');
    headerCapsuleHTMLEl.textContent = 'Капсула';

    this.routesTableHTMLEl = document.createElement('table');

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

    //HTML элемент. Размер капсулы. Выбирается. 1-12
    let thRepeatEl = document.createElement('th');
    thRepeatEl.textContent = 'переодичность';

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
    trEl.appendChild(thRepeatEl);
    trEl.appendChild(thAddEl);

    this.routesTableHTMLEl.appendChild(trEl);

    this.capsuleHTMLEl.appendChild(headerCapsuleHTMLEl);
    this.capsuleHTMLEl.appendChild(this.routesTableHTMLEl);

    return this.capsuleHTMLEl;
  }

  addRouteHTMLEl() {
    let trEl = document.createElement('tr');
    trEl.dataset.idRoute = `route${this.counterRoutes}`;
    let quantityColums = this.routesTableHTMLEl.querySelectorAll('th').length;

    for (let col = 0; col < quantityColums; col++) {
      let tdEl = document.createElement('td');

      if (col === quantityColums - 1) {
        let buttons = new Control([
          { class: 'btn', id: 'btnApproveRoute', textRu: 'ага' },
          { class: 'btn', id: 'btnDeleteRoute', textRu: '-' },
        ]);
        tdEl.appendChild(buttons.createControlHTMLEl());
      } else {
        let inputForTdEl = document.createElement('input');
        tdEl.appendChild(inputForTdEl);

        if (col === 1) {
          inputForTdEl.type = 'time';
          inputForTdEl.valu = '07:00';
        }

        if (col === 4) {
          inputForTdEl.type = 'number';
          inputForTdEl.value = 4;
          inputForTdEl.min = 1;
          inputForTdEl.max = 12;
        }
      }

      trEl.appendChild(tdEl);
    }


    this.routesTableHTMLEl.appendChild(trEl);
    this.routes[`route${this.counterRoutes}`] = trEl;

    this.counterRoutes++;
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
  hideCapsuleHTMLEl() {
    this.capsuleHTMLEl.style.display = 'none';
  }

  /**
  * Отключение видимости HTML элемента capsule. 
  */
  showCapsuleHTMLEl() {
    this.capsuleHTMLEl.style.display = 'block';
  }

  /**
  * Возвращает HTML элемент capsule.
  * @returns {HTMLElement}
  */
  getCapsuleHTMLEl() {
    return this.capsuleHTMLEl;
  }

  removeRoute(idRoute) {
    console.log(idRoute);
    let route = this.routes[idRoute];
    route.remove();
  }
}