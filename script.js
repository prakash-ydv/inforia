document.getElementById('menu_bar').addEventListener('click', function () {
    document.querySelector('.dropMenu').classList.toggle('showDropMenu');
});

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000, // Animation speed in milliseconds
    easing: 'easeInOutCubic', // Easing function
    offset: 100, // Scroll offset in pixels
});


function toggleAnswer(id) {
    // Hide all answers
    document.querySelectorAll('.faq-answer').forEach(function(answer) {
        answer.classList.remove('show');
    });
    // Show the answer for the clicked question
    document.getElementById('answer' + id).classList.add('show');
}