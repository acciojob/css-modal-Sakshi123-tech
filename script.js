//your JS code here. If required.
// Get elements
const openModalBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModalBtn = document.querySelector('.close-modal');

// Function to open the modal
function openModal() {
    modal.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Open the modal when button is clicked
openModalBtn.addEventListener('click', openModal);

// Close the modal when the close button is clicked
closeModalBtn.addEventListener('click', closeModal);

// Close the modal if clicked outside the modal content
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        closeModal();
    }
});
