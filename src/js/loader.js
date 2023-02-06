// preloader
document.body.onload = function () {
  setTimeout(() => {
    const preloader = document.querySelector('.preloader');
    if (preloader !== null && !preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 200);
};

// spinner
export class Spinner {
  constructor(selector) {
    this.spinner = document.querySelector(selector);
  }
  addSpinner() {
    this.spinner.classList.remove('hidden');
  }
  removeSpinner() {
    this.spinner.classList.add('hidden');
  }
}

// Щоб підключити спінер у своєму файлі:
// 1) import Spinner from "./loader";
// 2) const spinner = new Spinner('.spinner');
// 3) spinner.addSpinner(); - додати спінер
// 4) spinner.removeSpinner(); - зняти спінер
