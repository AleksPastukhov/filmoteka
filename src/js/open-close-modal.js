// FT-20 Реалізувати закриття модалки за натисканням на клавішу ESC і за кліком поза межами модалки, не забути зняти слухачів




// Змінений варіант!

const openModal = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const modalOverl = document.getElementById("modal-overl");

openModal.addEventListener("click", function() {
  modalOverl.style.display = "block";
});

closeModal.addEventListener("click", function() {
  modalOverl.style.display = "none";
});
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    modalOverl.style.display = "none";
  }
});

modalOverl.addEventListener("click", function(event) {
  if (event.target === modalOverl) {
    modalOverl.style.display = "none";
  }
});

// Скелет розмітки!!

// {/* <button id="openModal">. . . . .</button>
// <div id="modalOverl" style="display:none">
//   <div id="modal">
//     <p>. . . . . </p>
//     <button id="closeModal">. . . . . . </button>
//   </div>
// </div>  */}



// Варіант з  лекцій!

// const openModal = document.getElementById("openModal");
// const modal = document.getElementById("modal");
// const closeModal = document.getElementById("closeModal");

// openModal.addEventListener("click", function() {
//     modal.style.display = "block";
//   });

//   closeModal.addEventListener("click", function() {
//     modal.style.display = "none";
//   });

//   document.addEventListener("keydown", function(event) {
//     if (event.key === "Escape") {
//       modal.style.display = "none";
//     }
//   });

//   window.onclick = function(event) {
//     if(event.target == modal) {
//         modal.style.display = "none";
//     }
//   };

