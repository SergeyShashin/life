export class Human {
  relatives;
  anatomy;
  dateBirth;
  placeBirth;
  firstName;
  surname;
  patronymic;
  daysLife;
  

  constructor(relatives, anatomy, dateBirth, placeBirth, firstName, surname, patronymic) {
    this.relatives = relatives;
    this.anatomy = anatomy;
    this.dateBirth = dateBirth;
    this.placeBirth = placeBirth;
    this.firstName = firstName;
    this.surname = surname;
    this.patronymic = patronymic;
  }
}