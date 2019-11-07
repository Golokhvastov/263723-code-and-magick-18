'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_AMOUNT = 4;

var getRandomWizard = function () {
  var randomName = WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)];
  var randomSurname = WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)];
  var randomCoatColor = WIZARD_COAT_COLORS[Math.floor(Math.random() * WIZARD_COAT_COLORS.length)];
  var randomEyesColor = WIZARD_EYES_COLORS[Math.floor(Math.random() * WIZARD_EYES_COLORS.length)];
  return {
    name : randomName + ' ' + randomSurname,
    coatColor : randomCoatColor,
    eyesColor : randomEyesColor
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

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var similarWizards = getSimilarWizards(WIZARD_AMOUNT);

var similarWizardTemplate = document.querySelector('#similar-wizard-template');
var setupSimilarList = document.querySelector('.setup-similar-list');

renderSimilarWizards(setupSimilarList, similarWizardTemplate, similarWizards);

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
