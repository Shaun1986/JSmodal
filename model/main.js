const modal = document.getElementById('myModal');
const openModelButton = document.getElementById('openModalBtn');
const closeModalButton = document.getElementById('closeModalBtn');

// open modal
openModelButton.onclick = function () {
  modal.style.display = 'block';
};

closeModalButton.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target === 'modal') {
    modal.style.display = 'none';
  }
};
