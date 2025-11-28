'use strict';

class Settings {
  sizeTeam = 14; //120
  settingsEl;
  sizeTeamEl;
  inputSizeTeamEl;
  typesFamily = [
    'программисты', 'инженеры', 'врачи', 'повара', 'дизайнеры', 'парикмахеры',
    'агрономы', 'ветеренары', 'cтроители', 'ювелиры', 'писатели', 'музыканты', 'певцы', 'танцоры'
  ];
  datalistTypesFamilyHTMLEl;

  createSettingsHTMLEl() {
    this.settingsEl = document.createElement('section');
    this.settingsEl.id = 'settings';

    let headerSettingsEl = document.createElement('h2');
    headerSettingsEl.textContent = 'Настройки';

    this.sizeTeamEl = document.createElement('div');
    this.sizeTeamEl.id = 'sizeTeam';
    let headerSizeTeamEl = document.createElement('h4');
    headerSizeTeamEl.textContent = 'размер группы';
    this.inputSizeTeamEl = document.createElement('input');
    this.inputSizeTeamEl.name = 'inputSizeTeam';
    this.inputSizeTeamEl.type = 'number';
    this.inputSizeTeamEl.min = 1;
    this.inputSizeTeamEl.value = this.sizeTeam;

    this.sizeTeamEl.appendChild(headerSizeTeamEl);
    this.sizeTeamEl.appendChild(this.inputSizeTeamEl);

    this.settingsEl.appendChild(headerSettingsEl);
    this.settingsEl.appendChild(this.sizeTeamEl);

    return this.settingsEl
  }

  getSettingsEl() {
    return this.settingsEl;
  }

  getSizeTeam() {
    return this.sizeTeam;
  }

  getSizeTeamEl() {
    return this.sizeTeamEl;
  }

  getInputSizeTeamEl() {
    return this.inputSizeTeamEl;
  }

  toggleSettingsEl() {
    this.settingsEl.style.display = this.settingsEl.style.display === 'none' ? 'inline-block' : 'none';
  }

  hideSettingsEl() {
    this.settingsEl.style.display = 'none';
  }

  showSettingsEl() {
    this.infoEl.style.display = 'inline-block';
  }

  createDatalistTypesFamilyHTMLEl() {
    this.datalistTypesFamilyHTMLEl = document.createElement('datalist');
    this.datalistTypesFamilyHTMLEl.id = 'datalistTypesFamilyHTMLEl';

    for (let typeFamily of this.typesFamily) {
      let optionEl = document.createElement('option');
      optionEl.value = typeFamily;
      this.datalistTypesFamilyHTMLEl.appendChild(optionEl);
    }

    return this.datalistTypesFamilyHTMLEl
  };
}