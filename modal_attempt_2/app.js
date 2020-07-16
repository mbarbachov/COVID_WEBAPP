// getting all of our modal elements
let modal = document.getElementById('simpleModal');
let modalButton = document.getElementById('modalBtn');
let closeButton = document.getElementById('closeBtn');

// listen for events
modalButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);

// close and open functions
function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none'
}

function clickOutside(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}
