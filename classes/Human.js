class Human {
  anatomy = {
    head: {
      quantity: null,
      brain: {
        quantity: null,
        medullaOblongata: {
          substantiaGrisea: [] //серое вещество
        }, //Продолговатый мозг
      },
      cranium: {
        inStock: true,
        nameLatin: 'cranium',
        nameRussian: 'Череп',
        description: 'Состоит из двадцати восьми костей. Защищает мозг и ограны чувств от повреждений.',
        pathImg: '',
        osFrontale: {
          inStock: true,
          nameLatin: 'os frontale',
          nameRussian: 'лобная кость',
          description: 'Образует лоб и верхние стенки глазниц. При рождении состоит из двух половин, которые затем срастаются между собой.',
          pathImg: ''
        },
        suturaСoronalis: {
          inStock: true,
          nameLatin: 'sutura coronalis',
          nameRussian: 'венечный шов',
          description: 'Сочленение лобной кости с теменными костями.',
          pathImg: ''
        },
        osParietale: {
          inStock: true,
          nameLatin: 'os parietale',
          nameRussian: 'теменная кость',
          description: 'Одна из двух парных костей, образующих крышку и боковые стенки черепа.',
          pathImg: ''
        },
        calvaria: {
          inStock: true,
          nameLatin: 'calvaria',
          nameRussian: 'свод черепа',
          description: 'Свод, прикрывающий сверху головной мозг.',
          pathImg: ''
        },
        glabella: {
          inStock: true,
          nameLatin: 'glabella',
          nameRussian: 'надпереносье',
          description: 'Место соединения носовых костей с лобными отростками верхних челюстей.',
          pathImg: ''
        },
        incisuraFrontalis: {
          inStock: true,
          nameLatin: 'incisura frontalis',
          nameRussian: 'Лобная вырезка',
          description: 'Отверстие или канавка в верхнем крае глазницы; место выхода кровеносных сосудов и нервов.',
          pathImg: ''
        },
        sinusFrontales: {
          inStock: true,
          nameLatin: 'sinus frontales',
          nameRussian: 'Лобные пазухи',
          description: 'Воздухоносные полости, сообщаются с носовой полостью; их функция не вполне ясна, но считается, что они придают опреденную форму глазницам, чем помогают обеспечивать бинокулярное зрение.',
          pathImg: ''
        },
        orbita: {
          inStock: true,
          nameLatin: 'orbita',
          nameRussian: 'Глазница',
          description: 'Полость, содержащая глазное яблоко, наружные мышца глаза, нервы и кровеносные сосуды.',
          pathImg: ''
        },
        osLacrimale: {
          inStock: true,
          nameLatin: 'os lacrimale',
          nameRussian: 'Слезная кость',
          description: 'Самая маленькая кость лицевого черепа. Является частью стенки глазницы.',
          pathImg: ''
        },
        nazion: {
          inStock: true,
          nameLatin: 'nazion',
          nameRussian: 'назион',
          description: 'Точка соединения носовых костей с лобной костью.',
          pathImg: ''
        },
        osNasale: {
          inStock: true,
          nameLatin: 'os nasale',
          nameRussian: 'Носовая кость',
          description: 'Парная кость, носовые кости образуют верхнюю часть спинки носа - переносицу.',
          pathImg: ''
        },
        cristaGalli: {
          inStock: true,
          nameLatin: 'crista galli',
          nameRussian: 'Петушистый гребень',
          description: 'Гребневидный отросток решётчатой кости.',
          pathImg: ''
        },
        cellulaeEthmoidales: {
          inStock: true,
          nameLatin: 'cellulae ethmoidales',
          nameRussian: 'Решётчатые ячейки',
          description: '8-10 небольших воздухоносных ячеек в наружном слое решётчатой кости.',
          pathImg: ''
        },
        septumNasi: {
          inStock: true,
          nameLatin: 'septum nasi',
          nameRussian: 'перегородка носа',
          description: 'Костное образование, разделяющее носовую полость на правый и левый носовые ходы.',
          pathImg: ''
        }
        
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
  currentEmotion;

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

  setBeliefs(beliefs) {
    this.beliefs = beliefs;
  }

  getBeliefs() {
    return this.beliefs;
  }

  setEmotions(emotions) {
    this.emotions = emotions;
  }

  getEmotions() {
    return this.emotions;
  }

  setCurrentEmotion(currentEmotion) {
    this.currentEmotion = currentEmotion;
  }

  getCurrentEmotion() {
    return this.currentEmotion;
  }

  think() { } //думать
  watch() { } //видеть
  choose() { } //выбирать
  hear() { } //слышать
  feel() { } //ощущать
  remember(data) { } //запоминать
  speak() { }
  speakForTarget() { }
  smileSimple() { }
  smileForTarget() { }
  go(targetPosition) { }

}