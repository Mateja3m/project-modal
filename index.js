// Selecting elements
const openBtn = document.querySelector('.open-btn'); 
const closeBtn = document.querySelector('.close-btn'); 
const modalOverlay = document.querySelector('.modal-overlay'); 
const mainArea = document.querySelector('.main');


// Modal functionality
openBtn.addEventListener('click', function () {
    modalOverlay.classList.remove('modal-overlay'); 
    mainArea.classList.add('modal-overlay'); 
})
closeBtn.addEventListener('click', function () {
    modalOverlay.classList.add('modal-overlay'); 
    mainArea.classList.remove('modal-overlay'); 
})