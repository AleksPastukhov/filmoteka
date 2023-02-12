const bodyRef = document.querySelector('body');
const inputChange = document.querySelector('.theme-switch__toggle');
const modalDivContent = document.querySelector('.modal-film-main');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');
const footerKill = document.querySelector('.footer');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const delClassElem = () => {
  bodyRef.classList.remove(Theme.LIGHT, Theme.DARK);
  modalDivContent.classList.remove(Theme.LIGHT, Theme.DARK);
  sunIcon.classList.toggle('is-selected-sun');
  moonIcon.classList.toggle('is-selected-moon');
};
inputChange.addEventListener('change', () => {
  delClassElem();
  if (inputChange.checked) {
    localStorage.setItem('Theme', 'darkTheme');
    bodyRef.classList.add(Theme.DARK);
    modalDivContent.classList.add(Theme.DARK);
  } else {
    localStorage.setItem('Theme', 'lightTheme');
    bodyRef.classList.add(Theme.LIGHT);
    modalDivContent.classList.add(Theme.LIGHT);
  }
});
if (localStorage.getItem('Theme') === 'darkTheme') {
  sunIcon.classList.toggle('is-selected-sun');
  moonIcon.classList.toggle('is-selected-moon');
  inputChange.setAttribute('checked', true);
  bodyRef.classList.add(Theme.DARK);
  modalDivContent.classList.add(Theme.DARK);
}

//FOOTER BILD
const ThemeFooter = {
  FOOTERLIGHT: 'footer-light',
  FOOTERDARK: 'footer-dark',
};

const delClassElemFooter = () => {
  footerKill.classList.remove(ThemeFooter.FOOTERLIGHT, ThemeFooter.FOOTERDARK);
};

inputChange.addEventListener('change', () => {
  delClassElemFooter();
  if (inputChange.checked) {
    localStorage.setItem('ThemeFooter', 'footer-dark');
    footerKill.classList.add(ThemeFooter.FOOTERDARK);
  } else {
    localStorage.setItem('ThemeFooter', 'footer-light');
    footerKill.classList.add(ThemeFooter.FOOTERLIGHT);
  }
});
if (localStorage.getItem('ThemeFooter') === 'footer-dark') {
  inputChange.setAttribute('checked', true);
  footerKill.classList.add(ThemeFooter.FOOTERDARK);
}
