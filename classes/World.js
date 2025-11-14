'use strict';

class World {
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