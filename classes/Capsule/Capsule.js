'use strict';

class Capsule {
  capsuleHTMLEl;
  routesTableHTMLEl;
  counterRoutes = 0;
  routes = {};
  coordinates = [
    'ул. Ленинского Комсомола, 21, Рязань, 54.62181095827267, 39.72299809466142',
    'ул. Островского, 111, Рязань, 54.617713826143124, 39.689331708034025',
    'Семчинская улица, 8, Рязань, 54.686852, 39.639150',
    'Татарская улица, 93, Рязань, 54.611163, 39.713324',
    'Татарская улица, 91, Рязань, 54.611842, 39.713584',
    'Черновицкая ул., 27, Рязань, 54.59847746672958, 39.712440130320914',
    'пл. Димитрова, 3, Рязань, 54.628567, 39.703409',
    'Юбилейная улица, 16, Рязань, 54.639109, 39.640930',
    'Вокзальная улица, 51А, Рязань, 54.632165, 39.713423',
    'Касимовское шоссе, 23, Рязань, 54.623594, 39.783032',
    'ул. Новаторов, 9в, Рязань, 54.635654185534506, 39.64219596731907',
    'Электрозаводская улица, 9в, Рязань, 54.620938, 39.779095',
    'пл. Ленина, Рязань, 54.62906241524983, 39.73445184706703',
    'Центральный парк культуры и отдыха, 54.60871795574971, 39.725422482013734',
  ];

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

    this.capsuleHTMLEl.appendChild(this.createDatalistCapsuleStartingPointAndDestinationHTMLEl());

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

        switch (col) {
          case 1:
            inputForTdEl.type = 'time';
            inputForTdEl.value = '08:00';
            break;
          case 4:
            inputForTdEl.type = 'number';
            inputForTdEl.value = 4;
            inputForTdEl.min = 1;
            inputForTdEl.max = 12;
            break;
          case 0:
          case 2:
            inputForTdEl.setAttribute('list', 'datalistCapsuleStartingPointAndDestinationHTMLEl');
            break;

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
    let route = this.routes[idRoute];
    route.remove();
  }

  /**
  * Создаёт datalist для выбора для выбора пунктов назначения/отправления в инпутах.
  * 
  * @returns {HTMLElement} datalist для выбора для выбора пунктов назначения/отправления в инпутах.
  */
  createDatalistCapsuleStartingPointAndDestinationHTMLEl() {
    this.datalistCapsuleStartingPointAndDestinationHTMLEl = document.createElement('datalist');
    this.datalistCapsuleStartingPointAndDestinationHTMLEl.id = 'datalistCapsuleStartingPointAndDestinationHTMLEl';

    for (let point of this.coordinates) {
      let optionEl = document.createElement('option');
      optionEl.value = point;
      this.datalistCapsuleStartingPointAndDestinationHTMLEl.appendChild(optionEl);
    }

    return this.datalistCapsuleStartingPointAndDestinationHTMLEl;
  };
}