'use strict';

class World {
  info = {
    populationSize: {
      number: 8341290530,
      nameRu: 'человек',
    },
    landArea: {
      number: 149000000,
      nameRu: 'площадь суши (кв.км)',
    },
    waterArea: {
      number: 361000000,
      nameRu: 'площадь воды (кв.км)',
    },
    water: {
      number: 1400000000,
      nameRu: 'вода (куб.км)',
    },
    freshWater: {
      number: 35000000,
      nameRu: 'пресная вода (куб.км)',
    },
    hydrogen: {
      number: 5000000000000,
      nameRu: 'водород (т)',
    },
    oxygen: {
      number: '?',
      nameRu: 'кислород',
    },
    helium: {
      number: '?',
      nameRu: 'гелий',
    },
    lithium: {
      number: '?',
      nameRu: 'литий',
    },
    beryllium: {
      number: '?',
      nameRu: 'бериллий',
    },
    boron: {
      number: '?',
      nameRu: 'бор',
    },
    carbon: {
      number: '?',
      nameRu: 'углерод',
    },
    nitrogen: {
      number: '?',
      nameRu: 'азот',
    },
    fluorine: {
      number: '?',
      nameRu: 'фтор',
    },
    neon: {
      number: '?',
      nameRu: 'неон',
    },
    sodium: {
      number: '?',
      nameRu: 'натрий',
    },
    magnesium: {
      number: '?',
      nameRu: 'магний',
    },
    aluminum: {
      number: '?',
      nameRu: 'алюминий',
    },
    silicon: {
      number: '?',
      nameRu: 'кремний',
    },
    phosphorus: {
      number: '?',
      nameRu: 'фосфор',
    },
    sulfur: {
      number: '?',
      nameRu: 'сера',
    },
    chlorine: {
      number: '?',
      nameRu: 'хлор',
    },
    argon: {
      number: '?',
      nameRu: 'аргон',
    },
    potassium: {
      number: '?',
      nameRu: 'калий',
    },
    calcium: {
      number: '?',
      nameRu: 'кальций',
    },
    scandium: {
      number: '?',
      nameRu: 'скандий',
    },
    titanium: {
      number: '?',
      nameRu: 'титан',
    },
    vanadium: {
      number: '?',
      nameRu: 'ванадий',
    },
    chromium: {
      number: '?',
      nameRu: 'хром',
    },
    manganese: {
      number: '?',
      nameRu: 'марганец',
    },
    iron: {
      number: '?',
      nameRu: 'железо',
    },
    cobalt: {
      number: '?',
      nameRu: 'железо',
    },
    nickel: {
      number: '?',
      nameRu: 'никель',
    },
    copper: {
      number: '?',
      nameRu: 'медь',
    },
    zinc: {
      number: '?',
      nameRu: 'цинк',
    },
    gallium: {
      number: '?',
      nameRu: 'галий',
    },
    germanium: {
      number: '?',
      nameRu: 'германий',
    },
    garsenic: {
      number: '?',
      nameRu: 'мышьяк',
    },
    selenium: {
      number: '?',
      nameRu: 'селен',
    },
    bromine: {
      number: '?',
      nameRu: 'бром',
    },
    rubidium: {
      number: '?',
      nameRu: 'рубидий',
    },
    strontium: {
      number: '?',
      nameRu: 'стронций',
    },
    zirconium: {
      number: '?',
      nameRu: 'цирконий',
    },
    molybdenum: {
      number: '?',
      nameRu: 'молибден',
    },
    rhodium: {
      number: '?',
      nameRu: 'родий',
    },
    palladium: {
      number: '?',
      nameRu: 'палладий',
    },
    cadmium: {
      number: '?',
      nameRu: 'кадмий',
    },
    indium: {
      number: '?',
      nameRu: 'индий',
    },
    tin: {
      number: '?',
      nameRu: 'олово',
    },
    tellurium: {
      number: '?',
      nameRu: 'теллур',
    },
    xenon: {
      number: '?',
      nameRu: 'ксенон',
    },
    cesium: {
      number: '?',
      nameRu: 'цезий',
    },
    barium: {
      number: '?',
      nameRu: 'барий',
    },
    lanthanum: {
      number: '?',
      nameRu: 'лантан',
    },

  };
  galaxies = [];
  planets = [
    {
      earth: {
        people: [],
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
  ];
  stars = [
    {
      sun: {

      }
    }
  ]

  setGalaxies(galaxies) {
    this.galaxies = galaxies;
  }

  getGalaxies() {
    return this.galaxies;
  }

  addGalaxy(galaxy) {
    this.galaxies.push(galaxy);
  }

  setPlanets(planets) {
    this.planets = planets;
  }

  getPlanets() {
    return this.planets;
  }

  addPlanets(planet) {
    this.planets.push(planet);
  }

  setStars(stars) {
    this.stars = stars;
  }

  getStars() {
    return this.stars;
  }

  addStars(star) {
    this.stars.push(star);
  }

  setPeople(planet, people) {
    this.galaxies[planet]['people'] = people;
  }

  getPeople(planet) {
    return this.galaxies[planet]['people'];
  }

  addPeople(planet, human) {
    this.galaxies[planet]['people'].push(human);
  }

}