
// Get the modal and button elements
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

// Open the modal when the button is clicked
openModalBtn.addEventListener("click", function() {
  modal.style.display = "block";
});

// Close the modal when the 'x' is clicked
closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Close the modal if the user clicks outside the modal content
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});