window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var sections = document.querySelectorAll('section');
  
    var currentSection = null;
    var headerColor = null;
  
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;
      var sectionBottom = sectionTop + sectionHeight;
  
      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
        currentSection = section;
        headerColor = getComputedStyle(currentSection).backgroundColor;
        break;
      }
    }
  
    if (currentSection && headerColor) {
      header.style.backgroundColor = headerColor;
    }
  });

