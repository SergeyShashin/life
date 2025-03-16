'use strict';

function World() {
  const world = {
    galaxies: [],
    planets: [
      {
        earth: {
          people: [
            {
              man: {
                age: null,
                anatomicalСharacteristics: {
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
                        connect(){

                        }
                      },
                    ]
                  }
                },
                firstName: null,
                lastName: null,
                siblings: [], //родственники 
                acquiredHabbits: [], //привычки          
                experience: [], //опыт
                skills: [], //навыки в работе
                beliefs: [], //убеждения
                emotions: [], //эмоции
                choose() { }, //выбирать
                watch() { }, //видеть
                hear() { }, //слышать
                feel() { }, //ощущать
                remember() { }, //запоминать
                speak() { },
                speakForTarget() { },
                smileSimple(){},
                smileForTarget(){},
                go() { },
              }
            }
          ],
          animals: [
            { mammals: [] },
            { birds: [] },
            {
              insects: []
            },
          ],
          plants: [],
          chemicalComposition: [
            {
              H: [],
            },
            {
              He: [],
            },
            {
              Li: [],
            },
            {
              Be: [],
            },
            {
              B: [],
            },
            {
              C: [],
            },
            {
              N: [],
            },
            {
              O: [],
            },
            {
              F: [],
            },
            {
              Ne: [],
            },
            {
              Na: [],
            },
            {
              Mg: [],
            },
            {
              Al: [],
            },
            {
              Si: [],
            },
            {
              P: [],
            },
            {
              S: [],
            },
            {
              Cl: [],
            },
            {
              Ar: [],
            },
            {
              K: [],
            },
            {
              Ca: [],
            },
            {
              Sc: [],
            },
            {
              Ti: [],
            },
            {
              V: [],
            },
            {
              Cr: [],
            },
            {
              Mn: [],
            },
            {
              Fe: [],
            },
            {
              Co: [],
            },
            {
              Ni: [],
            },
            {
              Cu: [],
            },
            {
              Zn: [],
            },
            {
              Ga: [],
            },
            {
              Ge: [],
            },
            {
              As: [],
            },
            {
              Se: [],
            },
            {
              Br: [],
            },
            {
              Kr: [],
            },
            {
              Rb: [],
            },
            {
              Sr: [],
            },
            {
              Y: [],
            },
            {
              Zr: [],
            },
            {
              Nb: [],
            },
            {
              Mo: [],
            },
            {
              Ru: [],
            },
            {
              Rh: [],
            },
            {
              Pd: [],
            },
            {
              Ag: [],
            },
            {
              Cd: [],
            },
            {
              In: [],
            },
            {
              Sn: [],
            },
            {
              Sb: [],
            },
            {
              Te: [],
            },
            {
              I: [],
            },
            {
              Xe: [],
            },
            {
              Cs: [],
            },
            {
              Ba: [],
            },
            {
              La: [],
            },
            {
              Ce: [],
            },
            {
              Pr: [],
            },
            {
              Nd: [],
            },
            {
              Sm: [],
            },
            {
              Eu: [],
            },
            {
              Gd: [],
            },
            {
              Tb: [],
            },
            {
              Dy: [],
            },
            {
              Ho: [],
            },
            {
              Er: [],
            },
            {
              Tm: [],
            },
            {
              Yb: [],
            },
            {
              Lu: [],
            },
            {
              Hf: [],
            },
            {
              Ta: [],
            },
            {
              W: [],
            },
            {
              Re: [],
            },
            {
              Os: [],
            },
            {
              Lr: [],
            },
            {
              Pt: [],
            },
            {
              Au: [],
            },
            {
              Hg: [],
            },
            {
              Tl: [],
            },
            {
              Pb: [],
            },
            {
              Bi: [],
            },
            {
              Th: [],
            },
            {
              U: [],
            },
            {
              Pu: [],
            },

          ]

        }
      }
    ],
    stars: [
      {
        sun: {

        }
      }
    ]


  }
}