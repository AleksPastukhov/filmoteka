// FT-20 Реалізувати закриття модалки за натисканням на клавішу ESC і за кліком поза межами модалки, не забути зняти слухачів
const openModal = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", function() {
    modal.style.display = "block";
  });

  closeModal.addEventListener("click", function() {
    modal.style.display = "none";
  });

  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      modal.style.display = "none";
    }
  });
  window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
  }
