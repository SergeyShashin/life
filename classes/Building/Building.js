'use strict';

/**
 * Класс здание.
 */
class Building {
  /**
   * Конструктор базового класса 
   */
  constructor(peopleAndResources) {
    this.peopleAndresources = peopleAndResources;
  }
  /**
   * HTML элемент здания
   */
  buildingHTMLEl;

  /**
   * Люди и ресурсы полученные из life.js
   */
  peopleAndResources;

  /**
   * Свойства объекта для создания инпутов в CreatorInputs.js
   * Цифры и текст в значениях value на 25.12.25 "от фонаря".
   */
  propertiesForInputs = [
    { header: 'наименование здания', id: 'nameBuildingId', name: 'nameBuildingName', class: 'buildingInput', type: 'text', value: 'производственный центр', needDatalist: false },
    { header: 'описание здания', id: 'descriptionBuildingId', name: 'descriptionBuildingName', class: 'buildingInput', type: 'text', value: 'Для счастливой жизни и производства всего необходимого для жизни.', needDatalist: false },
    { header: 'широта', id: 'latitudeBuildingId', name: 'latitudeBuildingName', class: 'buildingInput', type: 'number', value: 0, needDatalist: false },
    { header: 'долгота', id: 'longitudeBuildingId', name: 'longitudeBuildingName', class: 'buildingInput', type: 'number', value: 0, needDatalist: false },
    { header: 'наименование места', id: 'namePointBuildingId', name: 'namePointBuildingName', class: 'buildingInput', type: 'search', value: '', needDatalist: true },
    { header: 'ширина', id: 'widthBuildingId', name: 'widthBuildingName', class: 'buildingInput', type: 'number', value: 50, needDatalist: false },
    { header: 'длина', id: 'lengthBuildingId', name: 'lengthBuildingName', class: 'buildingInput', type: 'number', value: 50, needDatalist: false },
    { header: 'высота', id: 'heighthBuildingId', name: 'heightBuildingName', class: 'buildingInput', type: 'number', value: 100, needDatalist: false },
    { header: 'высота над землёй', id: 'heightAboveGroundBuildingId', name: 'heightAboveGroundBuildingName', class: 'buildingInput', type: 'number', value: 50, needDatalist: false },
    { header: 'высота под землёй', id: 'heightUndergroundBuildingId', name: 'heightUndergroundBuildingName', class: 'buildingInput', type: 'number', value: 50, needDatalist: false },
    { header: 'количество этажей', id: 'numberFloorBuildingId', name: 'numberFloorBuildingName', class: 'buildingInput', type: 'number', value: 5, needDatalist: false },
    { header: 'масса', id: 'weightBuildingId', name: 'weightBuildingName', class: 'buildingInput', type: 'number', value: 1, needDatalist: false },
    { header: 'класс энергоэффективности', id: 'energyEfficiencyClassBuildingId', name: 'energyEfficiencyClassBuildingName', class: 'buildingInput', type: 'search', value: 'A+++', needDatalist: true },
    { header: 'класс конструктивной пожарной опасности', id: 'structuralFireHazardClassBuildingId', name: 'structuralFireHazardClassBuildingName', class: 'buildingInput', type: 'search', value: 'K0(1440)', needDatalist: true },
    { header: 'класс функциональной пожарной опасности', id: 'functionalFireHazardClassBuildingId', name: 'functionalFireHazardClassBuildingName', class: 'buildingInput', type: 'search', value: 'Ф1', needDatalist: true },
    { header: 'долговечность', id: 'durabilityBuildingId', name: 'durabilityBuildingName', class: 'buildingInput', type: 'number', value: 2000, needDatalist: false },
    { header: 'дата постройки', id: 'dateOfConstructionBuildingId', name: 'dateOfConstructionBuildingName', class: 'buildingInput', type: 'date', value: '', needDatalist: false },
    { header: '3d модель снаружи', id: 'model3DFromOutsideBuildingId', name: 'model3DFromOutsideBuildingName', class: 'buildingInput', type: 'file', value: '', needDatalist: false },
    { header: '3d модель внутри', id: 'model3DFromInsideBuildingId', name: 'model3DFromInsideBuildingName', class: 'buildingInput', type: 'file', value: '', needDatalist: false },
    { header: 'архитектурный проект', id: 'architecturalProjectBuildingId', name: 'architecturalProjectBuildingName', class: 'buildingInput', type: 'file', value: '', needDatalist: false },
    { header: 'технические условия', id: 'technicalSpecificationsBuildingId', name: 'technicalSpecificationsBuildingName', class: 'buildingInput', type: 'file', value: '', needDatalist: false },
    { header: 'результаты инженерных', id: 'resultsOfEngineeringSurveysBuildingId', name: 'resultsOfEngineeringSurveysBuildingName', class: 'buildingInput', type: 'file', value: '', needDatalist: false },
    { header: 'результаты инженерных', id: 'landPlotPlanningSchemeBuildingId', name: 'landPlotPlanningSchemeBuildingName', class: 'buildingInput', type: 'file', value: '', needDatalist: false },
    { header: 'ресурсы для создания', id: 'resourcesForCreationBuildingId', name: 'resourcesForCreationBuildingName', class: 'buildingInput', type: 'search', value: '', needDatalist: true },
    { header: 'ресурсы при эксплуатации', id: 'operationalResourcesBuildingId', name: 'operationalResourcesBuildingName', class: 'buildingInput', type: 'search', value: '', needDatalist: true },
  ];

  /**
   * Наименование здания. 'Производcтdенный центр', ...
   */
  nameBuilding;

  /**
  * Описание здания.
  * Производственный центр - это место, где любые жители Земли смогут создать всё необходимое для жизни
  * (продукты питания, одежду, бытовую химию, инструменты, материалы,  мебель, бытовую технику, средства связи, ювелирные изделия, ...,
  * оборудование, транспортные средства, роботизированные системы, программное обеспечение), оказать/воспользоваться услугами врачей,
  * оказать/воспользоваться услугами строителей, оказать/воспользоваться услугами поваров, оказать/воспользоваться услугами парикмахеров,
  * оказать/воспользоваться услугами дизайнеров, оказать/воспользоваться услугами агрономов, оказать/воспользоваться услугами ветеринаров,
  * оказать/воспользоваться услугами учителей, оказать/воспользоваться услугами певцов, оказать/воспользоваться услугами музыкантов,
  * оказать/воспользоваться услугами танцоров, ..., оказать/воспользоваться услугами писателей, оказать/воспользоваться услугами научных исследователей.
  * В производственных центрах будут места для жизни и отдыха, как в пятизвёздочных отелях. В производственных центрах будут храмы, мечети, синагоги и др.
  * В производственных центрах будет действовать натуральная экономика.
  * Обмен на необходимые ресурсы будет по принципам натуральной экономики.
  * Между производственными центрами, местами добычи ресурсов, центральными площадями городов будут передвигаться
  * транспортные средства подобные Шанхайскому или JR-Maglev. 
  */
  descriptionBuilding;

  /**
   * Широта. Массив. 
   */
  latitude;

  /**
   * Долгота. Массив. 
   */
  longitude;

  /**
   * Наименование места. 'Землянская 8', ... 
   */
  namePoint;

  /**
   * Ширина в м. 
   */
  width;

  /**
   * Длина в м. 
   */
  length;

  /**
   * Высота в м. 
   */
  height;

  /**
   * Высота над землёй в м. 
   */
  heightAboveGround;

  /**
   * Высота под землёй в м. 
   */
  heightUnderground;

  /**
   * Количество этажей. 
   */
  numberFloor;

  /**
   * Масса в кг.
   */
  weight;

  /*
  * Класс энергоэффективности — это маркировка (буквы от A до G, а также A+, A++, A+++), которая показывает, насколько экономично прибор или здание
  * потребляет энергию; чем ближе к началу алфавита и чем больше знаков «+», тем выше класс и ниже расход ресурсов.
  */
  energyEfficiencyClass;

  /**
  * Классы конструктивной пожарной опасности зданий (К)
  * К0: Непожароопасные конструкции.
  * К1: Малопожароопасные.
  * К2: Умеренно пожароопасные.
  * К3: Пожароопасные (наиболее опасные).
  * Условные обозначения: К0(15), К1(30) — с цифрой в скобках, обозначающей время теплового воздействия в минутаx
  */
  structuralFireHazardClass;

  /**
  * Классы функциональной пожарной опасности зданий (Ф)
  * Ф1: Для постоянного/временного проживания людей (жилые дома, больницы).
  * Ф2: Зрелищные и культурно-просветительские учреждения (театры, музеи).
  * Ф3: Здания организаций обслуживания населения (магазины, вокзалы, общепит).
  * Ф4: Образовательные, научные, проектные организации и учреждения.
  * Ф5: Производственные и складские помещения (делятся на категории А, Б, В, Г, Д по взрывопожароопасности). 
  */
  functionalFireHazardClass;

  /**
   * Долговечность здания. 
   */
  durability;

  /**
   * 3d модель снаружи
   */
  model3DFromOutside;

  /**
   * 3d модель внутри
   */
  model3DFromInside;

  /**
   * Архитектурный проект (включает архитектурные, конструктивные решения и инженерные системы).
   */
  architecturalProject;

  /**
   * Технические условия (ТУ) на подключение к сетям (вода, газ, электричество, канализация)
   */
  technicalSpecifications;

  /**
   * Результаты инженерных изысканий (геология, геодезия).
   */
  resultsOfEngineeringSurveys;

  /**
   * Схема планировочной организации земельного участка. Схема расположения дома, коммуникаций, подъездов, показывающая соблюдение отступов.
   */
  landPlotPlanningScheme;

  /**
   * Дата постройки. 
   */
  dateOfConstruction;

  /**
   * Ресурсы для создания здания.
   */
  resourcesForCreation;

  /**
   * Ресурсы при эксплутации здания.
   */
  operationalResources;

  /**
   * Функциональность здания.
   */
  functionality = {
    livingSpaces: {
      nameRu: 'пространства для жизни 4 человек',
      quantity: 125000 // Сейчас цифра для примера. Поставить точную цифру.
    },
    waterExtraction: {
      nameRu: 'добыча воды',
      quantity: 125000 * 4 * 365 * 3 * 2.5 //Кол-во пространств для жизни * кол-во человек * кол-во дней в году * кол-во лет * нужно в день. Сделать константы вместо цифр.
    },
    productionOfEquipmentForWaterExtraction: {
      nameRu: 'производство оборудования для добычи воды',
      quantity: 125000 //Кол-во пространств для жизни.
    },
    productionOfToolsForWaterExtraction: {
      nameRu: 'производство инструментов для добычи воды',
      quantity: 125000 //Кол-во пространств для жизни.
    },
    waterPurification: {
      nameRu: 'очистка воды',
      quantity: 125000 * 4 * 365 * 3 * 2.5 //Кол-во пространств для жизни * кол-во человек * кол-во дней в году * кол-во лет * нужно в день. Сделать константы вместо цифр.
    },
    productionOfWaterPurificationEquipment: {
      nameRu: 'производство оборудования для очистки воды',
      quantity: 125000 //Кол-во пространств для жизни.
    },
    productionOfWaterPurificationTools: {
      nameRu: 'производство инструментов для очистки воды',
      quantity: 125000 //Кол-во пространств для жизни.
    },
    waterStorage: {
      nameRu: 'хранение воды',
      quantity: 125000 * 4 * 365 * 3 * 2.5 //Кол-во пространств для жизни * кол-во человек * кол-во дней в году * кол-во лет * нужно в день. Сделать константы вместо цифр.
    },
    productionOfWaterStorageEquipment: {
      nameRu: 'производство оборудования для хранения воды',
      quantity: 125000 //Кол-во пространств для жизни.
    },
    productionOfWaterStorageInstruments: {
      nameRu: 'производство инструментов для хранения воды',
      quantity: 125000 //Кол-во пространств для жизни.
    },
    productionOfWaterPipes: {
      nameRu: 'производство труб для воды',
      quantity: 125000 //На данный момент 'цифра от фонаря'. 
    },
    productionEquipmentForProductionWaterPipes: {
      nameRu: 'производство оборудования для производства труб для воды',
      quantity: 125000 //На данный момент 'цифра от фонаря'. 
    },
    productionOfToolsForProductionOfWaterPipes: {
      nameRu: 'производство инструментов для производства труб для воды',
      quantity: 125000 //На данный момент 'цифра от фонаря'. 
    },
    storageOfWaterPipes: {
      nameRu: 'хранение труб для воды',
      quantity: 125000 //На данный момент 'цифра от фонаря'. 
    },
    productionOfEquipmentForStoringWaterPipes: {
      nameRu: 'производство оборудования для хранения труб для воды',
      quantity: 125000 //На данный момент 'цифра от фонаря'. 
    },
    productionOfToolsForStoringWaterPipes: {
      nameRu: 'производство инструментов для хранения труб для воды',
      quantity: 125000 //На данный момент 'цифра от фонаря'. 
    },
    productionOfWaterContainers: {
      nameRu: 'производство емкостей для воды',
      quantity: 125000 * 4 * 365 * 3 //Кол-во пространств для жизни * кол-во человек * кол-во дней в году * кол-во лет. Сделать константы вместо цифр.
    },
    productionOfEquipmentForProductionOfWaterContainers: {
      nameRu: 'производство оборудования для производства ёмкостей для воды',
      quantity: 125000 //На данный момент 'цифра от фонаря'. 
    },
    productionOfToolsForProductionOfWaterContainers: {
      nameRu: 'производство инструментов для производства ёмкостей для воды',
      quantity: 125000 //На данный момент 'цифра от фонаря'. 
    },
    storageOfWaterContainers: {
      nameRu: 'хранение емкостей для воды',
      quantity: 125000 * 4 * 365 * 3 //Кол-во пространств для жизни * кол-во человек * кол-во дней в году * кол-во лет. Сделать константы вместо цифр.
    },
    wheatCreation: {
      nameRu: 'создание пшеницы',
      quantity: 125000 * 4 * 365 * 3 * 0.1206 //Кол-во пространств для жизни * кол-во человек * кол-во дней в году * кол-во лет * нужно в день. Сделать константы вместо цифр.
    },
    wheatStorage: {
      nameRu: 'хранение пшеницы',
      quantity: 125000 * 4 * 365 * 3 * 0.1206 //Кол-во пространств для жизни * кол-во человек * кол-во дней в году * кол-во лет * нужно в день. Сделать константы вместо цифр.
    },
    honeyCreation: {
      nameRu: 'создание мёда',
      quantity: 125000 * 4 * 365 * 3 * 0.1 //Кол-во пространств для жизни * кол-во дней в году * кол-во лет * нужно в день. Сделать константы вместо цифр.
    },
    honeyStorage: {
      nameRu: 'хранение мёда',
      quantity: 125000 * 4 * 365 * 3 * 0.1 //Кол-во пространств для жизни * кол-во дней в году * кол-во лет * нужно в день. Сделать константы вместо цифр.
    },
    milkCreation: {
      nameRu: 'создание молока',
      quantity: 125000 * 4 * 365 * 3 * 0.137 //Кол-во пространств для жизни * кол-во дней в году * кол-во лет * нужно в день. Сделать константы вместо цифр.
    },
    milkStorage: {
      nameRu: 'хранение молока',
      quantity: 125000 * 4 * 365 * 3 * 0.137 //Кол-во пространств для жизни * кол-во дней в году * кол-во лет * нужно в день. Сделать константы вместо цифр.
    },

    //.......добавить продукты, одежду, материалы, обородуования, инструменты и др.


    creatingDailyFoodKitsInReturnableContainers: {
      nameRu: 'создание комплектов продуктов на день в возвратных контейнерах для 4 человек',
      quantity: 125000
    },
    productionOfReturnableContainers: {
      nameRu: 'производство возвратных контейнеров',
      quantity: 125000 * 2, // 2 года. На данный момент "Цифра от фонаря". Делать константу. 
    },
    maintenanceOfReturnableContainers: {
      nameRu: 'техническое обслуживание возвратных контейнеров',
      quantity: 125000 * 2, // 2 года. На данный момент "Цифра от фонаря". Делать константу. 
    },
    recyclingOfReturnableContainers: {
      nameRu: 'переработка возвратных контейнеров',
      quantity: 125000 * 2, // 2 года. На данный момент "Цифра от фонаря". Делать константу. 
    },
    storageOfReturnableContainers: {
      nameRu: 'хранение возвратных контейнеров',
      quantity: 125000 * 2, // 2 года. На данный момент "Цифра от фонаря". Делать константу. 
    },
    creationСrushedStone: {
      nameRu: 'создание щебня',
      quantity: 125000 // 2 года. На данный момент "Цифра от фонаря". 
    },
    creationEquipmentForСreationCrushedStone: {
      nameRu: 'создание оборудование для создания щебня',
      quantity: 125000 // 2 года. На данный момент "Цифра от фонаря". 
    },
    creationToolsForCreationCrushedStone: {
      nameRu: 'создание инструментов для создания щебня',
      quantity: 125000 // 2 года. На данный момент "Цифра от фонаря". 
    },
    storageСrushedStone: {
      nameRu: 'хранение щебня',
      quantity: 125000 // 2 года. На данный момент "Цифра от фонаря". 
    },
  };

  init() {
    this.addFunctionalityPropertiesInPropertiesForInputs();
  }

  createBuildinHTMLEl() {
    this.init();
    this.buildingHTMLEl = document.createElement('section');

    return this.buildingHTMLEl;
  }

  getBuildingHTMLEl() {
    return this.buildingHTMLEl;
  }

  getPropertiesForInputs() {
    return this.propertiesForInputs;
  }

  addFunctionalityPropertiesInPropertiesForInputs() {
    Object.keys(this.functionality).map(key => {
      this.propertiesForInputs.push(
        { header: this.functionality[key].nameRu, id: key, name: key + 'BuildingName', class: 'buildingInput', type: 'number', value: this.functionality[key].quantity, needDatalist: false }
      );
    }
    );
  }


}