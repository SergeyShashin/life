class Human {
  relatives;
  anatomy;
  dateBirth;
  placeBirth;
  firstName;
  surname;
  patronymic;
  daysLife;

  constructor(relatives, anatomy, dateBirth, placeBirth, firstName, surname, patronymic) {
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

}