'use strict';

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон']
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)']
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green']

var getRandomWizard = function() {
  var randomName = names[Math.floor(Math.random() * names.length)];
  var randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
  var randomCoatColor = coatColors[Math.floor(Math.random() * coatColors.length)];
  var randomEyesColor = eyesColors[Math.floor(Math.random() * eyesColors.length)];
  return {
    name : randomName + ' ' + randomSurname,
    coatColor : randomCoatColor,
    eyesColor : randomEyesColor
  }
}

var getSimilarWizards = function(quantity) {
  var result = [];
  for (var i = 0; i < quantity; i++) {
    result.push(getRandomWizard());
  }
  return result;
}

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var similarWizards = getSimilarWizards(4);

var similarWizardTemplate = document.querySelector('#similar-wizard-template');
var fragment = document.createDocumentFragment();
for (var i = 0; i < similarWizards.length; i++) {
  var wizardElement = similarWizardTemplate.content.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').innerHTML = similarWizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = similarWizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = similarWizards[i].eyesColor;

  fragment.appendChild(wizardElement);
}



var setupSimilarList = document.querySelector('.setup-similar-list');
setupSimilarList.appendChild(fragment);



var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
