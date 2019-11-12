'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARD_AMOUNT = 4;

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var getRandomWizard = function () {
  var randomName = WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)];
  var randomSurname = WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)];
  var randomCoatColor = WIZARD_COAT_COLORS[Math.floor(Math.random() * WIZARD_COAT_COLORS.length)];
  var randomEyesColor = WIZARD_EYES_COLORS[Math.floor(Math.random() * WIZARD_EYES_COLORS.length)];
  return {
    name: randomName + ' ' + randomSurname,
    coatColor: randomCoatColor,
    eyesColor: randomEyesColor
  };
};

var getSimilarWizards = function (amount) {
  var result = [];
  for (var i = 0; i < amount; i++) {
    result.push(getRandomWizard());
  }
  return result;
};

var createWizardElement = function (template, wizard) {
  var wizardElement = template.content.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var renderSimilarWizards = function (list, template, wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < similarWizards.length; i++) {
    fragment.appendChild(createWizardElement(template, wizards[i]));
  }
  list.appendChild(fragment);
};

var onPopupEscPress = function (evt) {
  if (document.activeElement !== setupUserName) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  }
};

var onButtonSubmitClick = function () {
  setupForm.submit();
};

var onButtonSubmitPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    onButtonSubmitClick();
  }
};

var onWizardCoatClick = function () {
  coatColorNumber++;
  if (coatColorNumber === WIZARD_COAT_COLORS.length) {
    coatColorNumber = 0;
  }
  wizardCoat.style.fill = WIZARD_COAT_COLORS[coatColorNumber];
  wizardCoatInput.value = WIZARD_COAT_COLORS[coatColorNumber];
};

var onWizardEyesClick = function () {
  eyesColorNumber++;
  if (eyesColorNumber === WIZARD_EYES_COLORS.length) {
    eyesColorNumber = 0;
  }
  wizardEyes.style.fill = WIZARD_EYES_COLORS[eyesColorNumber];
  wizardEyesInput.value = WIZARD_EYES_COLORS[eyesColorNumber];
};

var onWizardFireballClick = function () {
  fireballColorNumber++;
  if (fireballColorNumber === WIZARD_FIREBALL_COLORS.length) {
    fireballColorNumber = 0;
  }
  wizardFireball.style.backgroundColor = WIZARD_FIREBALL_COLORS[fireballColorNumber];
  wizardFireballInput.value = WIZARD_FIREBALL_COLORS[fireballColorNumber];
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  setupSubmit.addEventListener('click', onButtonSubmitClick);
  setupSubmit.addEventListener('keydown', onButtonSubmitPress);

  wizardCoat.addEventListener('click', onWizardCoatClick);
  wizardEyes.addEventListener('click', onWizardEyesClick);
  wizardFireball.addEventListener('click', onWizardFireballClick);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  setupSubmit.removeEventListener('click', onButtonSubmitClick);
  setupSubmit.removeEventListener('keydown', onButtonSubmitPress);

  wizardCoat.removeEventListener('click', onWizardCoatClick);
  wizardEyes.removeEventListener('click', onWizardEyesClick);
  wizardFireball.removeEventListener('click', onWizardFireballClick);
};


var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupUserName = document.querySelector('.setup-user-name');
var setupClose = document.querySelector('.setup-close');
var setupSubmit = document.querySelector('.setup-submit');
var setupForm = document.querySelector('.setup-wizard-form');

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardCoatInput = document.querySelector('.setup-wizard-appearance input[name = coat-color]');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardEyesInput = document.querySelector('.setup-wizard-appearance input[name = eyes-color]');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var wizardFireballInput = document.querySelector('.setup-fireball-wrap input[name = fireball-color]');

var coatColorNumber = 0;
var eyesColorNumber = 0;
var fireballColorNumber = 0;

setupOpen.tabIndex = '0';
setupOpen.focus();
setupClose.tabIndex = '0';

setupForm.setAttribute('action', 'https://js.dump.academy/code-and-magick');
setupUserName.setAttribute('minlength', '2');


setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});


var similarWizards = getSimilarWizards(WIZARD_AMOUNT);

var similarWizardTemplate = document.querySelector('#similar-wizard-template');
var setupSimilarList = document.querySelector('.setup-similar-list');

renderSimilarWizards(setupSimilarList, similarWizardTemplate, similarWizards);

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
