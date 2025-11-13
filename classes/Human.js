class Human {
  anatomy = {
    head: {
      quantity: null,
      brain: {
        quantity: null,
        medullaOblongata: {
          substantiaGrisea: [] //серое вещество
        }, //Продолговатый мозг
        think() { }, //думать
      },
      eyes: {},
      mouth: {},
      nose: {},
      nurse: {},
    },
    //центральная нервная система
    centralNervousSystem: {

      // нейроны
      neurons: [
        {
          quantity: null,

          cellBody: {}, // тело клетки
          dendrites: [{}], // дендриты
          axon: {}, // аксон

          /**
           * приём информации из вне
           */
          resivingInformationFromOutside() { },

          /**
           * обработка информации
           */
          dataProcessing() { },

          /**
           *хранение информации
           */
          dataStorage() { },

          /**
           * передача информации
           */
          transferOfInformation() { },

          /**
           * вывод информации вовне
           */
          outputOfInformationToOutside() {
            let electricalSignal;
            let chemicalSignal;
          },

          /**
           *объединение нейронов 
           */
          connect() {

          }
        },
      ]
    }

  };
  relatives; // связи
  siblings = []; //родственники 
  dateBirth;
  placeBirth;
  firstName;
  surname;
  patronymic;
  quantityDaysLife = 43800;
  numberDayLife = 1;
  acquiredHabbits = []; //привычки          
  experience = []; //опыт
  skills = []; //навыки
  beliefs = []; //убеждения
  emotions = []; //эмоции

  constructor(dateBirth, placeBirth, firstName, surname, patronymic) {
    this.dateBirth = dateBirth;
    this.placeBirth = placeBirth;
    this.firstName = firstName;
    this.surname = surname;
    this.patronymic = patronymic;
  }

  setAnatomy(anatomy) {
    this.anatomy = anatomy;
  }

  setRelatives(relatives) {
    this.relatives = relatives;
  }

  getRelatives() {
    return this.relatives;
  }

  getAnatomy() {
    return this.anatomy;
  }

  getDateBirth() {
    return this.dateBirth;
  }

  getPlaceBirth() {
    return this.placeBirth;
  }

  getfirstName() {
    return this.firstName;
  }

  getSurnName() {
    return this.surname;
  }

  getPatronymic() {
    return this.patronymic;
  }

  setNumberDayLife(numberDayLife) {
    this.numberDayLife = numberDayLife;
  }

  getNumberDayLife() {
    return this.numberDayLife;
  }

  setSiblings(siblings) {
    this.siblings = siblings;
  }

  getSiblings() {
    return this.siblings;
  }

  setAcquiredHabbits(acquiredHabbits) {
    this.acquiredHabbits = acquiredHabbits;
  }

  getAcquiredHabbits() {
    return this.acquiredHabbits;
  }

  setExperience(experience) {
    this.experience = this.experience;
  }

  getExperience() {
    return this.experience;
  }

  setSkills(skills) {
    this.skills = skills;
  }

  getSkills() {
    return this.skills;
  }

  choose() { } //выбирать

  watch() { } //видеть

  hear() { } //слышать

  feel() { } //ощущать

  remember() { } //запоминать

  speak() { }

  speakForTarget() { }

  smileSimple() { }

  smileForTarget() { }

  go() { }

}