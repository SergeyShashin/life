'use strict';


/**
* Сделать сохранение/загрузку/редактирование маршрутов в файле, базе данных
* Сделать расчёт времени отправления. Нужно знать скорость перемещения капсул.
* 
* JR-Maglev (Япония): Промышленная эксплуатация планируется к 2027 году, с максимальной скоростью до 603 км/ч.
* 
* Китай, разогнали прототип маглев-поезда весом 1100 кг до скорости 650 км/ч за семь секунд на участке 600 м.
* Для разгона до этой скорости и полной остановки прототипу был отведен участок строящейся маглев-трассы длиной 1000 метров.
* Вся трасса предназначена для эксплуатационной скорости 800 км/ч. 
 */
class Capsule {
  //HTML элемент.
  capsuleHTMLEl;
  //HTML элемент маршрутов.
  routesTableHTMLEl;
  //Счётчик маршрутов.
  counterRoutes = 0;
  //Маршруты.
  routes = [];
  //Варианты выбора точек отправления/назначения.
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
  //Варианты выбора периодичности маршрута.
  repeatVariants = ['ежедневно', 'еженедельно', 'ежемесячно', 'ежеквартально', 'ежегодно', 'cб+вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

  //Конструктор базового класса.
  constructor() {
  }

  /**
  * Создаёт HTML элемент c заказом капсулы.
  * @returns {HTMLElement} HTML элемент .
  */
  createCapsuleHTMLEl() {
    //Создание HTML элемента.
    this.capsuleHTMLEl = document.createElement('section');
    //Добавление класса
    this.capsuleHTMLEl.classList.add('capsuleHTMLEl');
    //Создание HTML элемента для заголовка.
    let headerCapsuleHTMLEl = document.createElement('h3');
    //Установка текста заголовку.
    headerCapsuleHTMLEl.textContent = 'Капсула';
    //Создание HTML элемента таблицы.
    this.routesTableHTMLEl = document.createElement('table');

    //Создание HTML элемента строки таблицы.
    let trEl = document.createElement('tr');

    //HTML элемент. Точка назначения. Выбирается.
    let thDestinationEl = document.createElement('th');
    //Установка текста точке назначения.
    thDestinationEl.textContent = 'назначение';

    //HTML элемент. Нужное время в точке назначения. Выбирается.
    let thTimeDestinationEl = document.createElement('th');
    //Установка текста для времени в точке назначения.
    thTimeDestinationEl.textContent = 'нужное время в точке назначения';

    //HTML элемент. Точка назначения. Выбирается.
    let thStartingPointEl = document.createElement('th');
    //Установка текста для времени в точки отправления.
    thStartingPointEl.textContent = 'отправление';

    //HTML элемент. Время в точке назначения. Устанавливается автоматически после ввода точки назначения и времени в точке назначения.
    let thTimeStartingPointEl = document.createElement('th');
    //Установка текста для времени в точке отправления.
    thTimeStartingPointEl.textContent = 'время в точке отправления';

    //HTML элемент. Размер капсулы. Выбирается. Кол-во людей = от 1 до 12. Кол-во контейнеров, если доставляется груз от 1 до 12.
    let thSizeEl = document.createElement('th');
    //Установка текста для размера капсулы.
    thSizeEl.textContent = 'размер';

    //HTML элемент. Размер капсулы. Выбирается. 1-12
    let thRepeatEl = document.createElement('th');
    //Установка текста для периодичности.
    thRepeatEl.textContent = 'периодичность';

    //HTML элемент. Ячейка для кнопка добавления нового маршрута.
    let thAddEl = document.createElement('th');
    //HTML элемент. Кнопка для добавления нового маршрута.
    let btnEl = document.createElement('button');
    //Устанавливаем класс кнопке.
    btnEl.classList.add('btn');
    //Устанавливаем id кнопке.
    btnEl.id = 'btnAddRoute';
    //Устанавливаем текст кнопке.
    btnEl.textContent = '+ маршрут';
    //Добавляем кнопку в ячейку.
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
    this.capsuleHTMLEl.appendChild(this.createDatalistCapsuleRepeatVariantsHTMLEl());

    return this.capsuleHTMLEl;
  }

  /**
   * Добавление HTML элемента выбора маршрута.
   */
  addRouteHTMLEl() {
    //HTML элемент. Создаём строку таблицы.
    let trEl = document.createElement('tr');
    //Добавляем id маршрута.
    trEl.dataset.idRoute = `route${this.counterRoutes}`;
    //Количество колонок в таблице.
    let quantityColums = this.routesTableHTMLEl.querySelectorAll('th').length;

    //Добавляем HTML элементы колонок.
    for (let col = 0; col < quantityColums; col++) {
      let tdEl = document.createElement('td');

      //Если колонка последняя, добавляем кнопки для обновления/удаления маршрута.
      if (col === quantityColums - 1) {
        let buttons = new Control([
          { class: 'btn', id: 'btnApproveRoute', textRu: 'ага' },
          { class: 'btn', id: 'btnDeleteRoute', textRu: '-' },
        ]);
        tdEl.appendChild(buttons.createControlHTMLEl());
      } else {
        //Если колонка не последняя добавляем HTML элементы инпутов
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
            inputForTdEl.type = 'search';
            break;
          case 5:
            inputForTdEl.setAttribute('list', 'datalistCapsuleRepeatVariantsHTMLEl');
            inputForTdEl.type = 'search';
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

  /**
   * Удаления маршрута из DOM и this.routes
   * @param {string} idRoute  
   */
  removeRoute(idRoute) {
    let route = this.routes[idRoute];
    route.remove();
    delete this.routes[idRoute];
  }

  /**
  * Создаёт datalist для выбора пунктов назначения/отправления в инпутах. 
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

  /**
  * Создаёт datalist для выбора периодичности в инпутах.  
  * @returns {HTMLElement} datalist для выбора периодичности в инпутах.
  */
  createDatalistCapsuleRepeatVariantsHTMLEl() {
    this.datalistCapsuleRepeatVariantsHTMLEl = document.createElement('datalist');
    this.datalistCapsuleRepeatVariantsHTMLEl.id = 'datalistCapsuleRepeatVariantsHTMLEl';

    for (let variant of this.repeatVariants) {
      let optionEl = document.createElement('option');
      optionEl.value = variant;
      this.datalistCapsuleRepeatVariantsHTMLEl.appendChild(optionEl);
    }

    return this.datalistCapsuleRepeatVariantsHTMLEl;
  };
}