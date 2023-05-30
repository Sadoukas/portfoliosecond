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
  }
);

    var themeButton = document.getElementById('changer-theme');
    var body = document.body;

    themeButton.addEventListener('click', function() {
      body.classList.toggle('theme-mode');
});

  function copyEmail() {
    var email = document.querySelector('.adresse-email h1');
    var tempInput = document.createElement('input');
    tempInput.setAttribute('value', email.textContent);
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Adresse e-mail copiée : ' + email.textContent);
}
