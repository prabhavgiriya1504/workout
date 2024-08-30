/*
function showDetails(bodyPart) {
    const modal = document.getElementById('details-modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');

    switch(bodyPart) {
        case 'upper-body':
            title.textContent = 'Upper Body Workouts';
            description.textContent = 'Here you can check our best exercises for Chest';
            break;
        case 'lower-body':
            title.textContent = 'Lower Body Workouts';
            description.textContent = 'Exercises that focus on the lower body including legs, glutes, and calves.';
            break;
        case 'core':
            title.textContent = 'Core Workouts';
            description.textContent = 'Exercises that focus on strengthening the core muscles, including abs and lower back.';
            break;
        case 'full-body':
            title.textContent = 'Full Body Workouts';
            description.textContent = 'Exercises that engage all major muscle groups for a full-body workout.';
            break;
        default:
            title.textContent = '';
            description.textContent = '';
    }

    modal.style.display = 'block';
}
    */
function showDetails(card) {
    // Get the data attributes from the clicked card
    const title = card.getAttribute("data-title");
    const description = card.getAttribute("data-description");
    const link = card.getAttribute("data-link");

    // Update the modal content
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-description").textContent = description;

    // Update the button link
    document.getElementById("modal-button").setAttribute("href", link);

    // Show the modal
    document.getElementById("details-modal").style.display = "block";
}

function closeModal() {
    document.getElementById("details-modal").style.display = "none";
}


function closeModal() {
    const modal = document.getElementById('details-modal');
    modal.style.display = 'none';
}
function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('show');
}


window.onclick = function(event) {
    const modal = document.getElementById('details-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
