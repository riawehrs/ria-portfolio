document.addEventListener('DOMContentLoaded', function() {

  var $$ = function(el) {
    var matchedElements = document.querySelectorAll(el);
    if (matchedElements.length > 1) {
      return matchedElements;
    } else {
      return matchedElements[0];
    }
  };

  var hasClass = function (elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
  };

  var addClass = function (elem, className) {
    if (!hasClass(elem, className)) {
      elem.className += ' ' + className;
    }
  };

  var addClassToEach = function (nodeList, className) {
    for (var i = 0, len = nodeList.length; i < len; i++) {
      addClass(nodeList[i], className);
    }
  };

  // add classes for hero intro animations

  var heroHeadings = $$('#mindful-heading, #flailing-heading');
  var heroHeadingTimer = setTimeout(function() {
    addClassToEach(heroHeadings, 'in');
  }, 1000);

  var heroPhrases = $$('#hero-phrases');
  var heroPhrasesTimer = setTimeout(function() {
    addClass(heroPhrases, 'in');
  }, 1500);

  var heroBumpItems = $$('#hero, #coming-soon');
  var heroContentPushTimer = setTimeout(function() {
    addClassToEach(heroBumpItems, 'in');
  }, 3000);

});













