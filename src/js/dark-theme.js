const bodyRef = document.querySelector('body');
const inputChange = document.querySelector('.theme-switch__toggle');
const modalDivContent = document.querySelector('.modal-movie');
// const backdrop = document.querySelector('backdrop');
// const teamModal = document.querySelector('team-modal');
// const overlayDiv = document.querySelector('.lightbox__overlay');
// const lightbox = document.querySelector('.lightbox');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const delClassElem = () => {
  bodyRef.classList.remove(Theme.LIGHT, Theme.DARK);
  modalDivContent.classList.remove(Theme.LIGHT, Theme.DARK);
  // backdrop.classList.remove(Theme.LIGHT, Theme.DARK);
  // teamModal.classList.remove(Theme.LIGHT, Theme.DARK);
  // lightbox.classList.remove(Theme.LIGHT, Theme.DARK);
};
inputChange.addEventListener('change', () => {
  delClassElem();
  if (inputChange.checked) {
    localStorage.setItem('Theme', 'darkTheme');
    bodyRef.classList.add(Theme.DARK);
    modalDivContent.classList.add(Theme.DARK);
    // backdrop.classList.add(Theme.DARK);
    // teamModal.classList.add(Theme.DARK);
    //  lightbox.classList.add(Theme.DARK);
  } else {
    localStorage.setItem('Theme', 'lightTheme');
    bodyRef.classList.add(Theme.LIGHT);
    modalDivContent.classList.add(Theme.LIGHT);
    // backdrop.classList.add(Theme.LIGHT);
    //  teamModal.classList.add(Theme.LIGHT);
    // lightbox.classList.add(Theme.LIGHT);
  }
});
if (localStorage.getItem('Theme') === 'darkTheme') {
  inputChange.setAttribute('checked', true);
  bodyRef.classList.add(Theme.DARK);
  modalDivContent.classList.add(Theme.DARK);
  // backdrop.classList.add(Theme.DARK);
  //  teamModal.classList.add(Theme.DARK);
  // lightbox.classList.add(Theme.DARK);
}
