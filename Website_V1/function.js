window.onload = function() {
    const noButton = document.getElementById('no-btn');
    const wrapper = document.getElementById('wrapper');
    const headerImage = document.getElementById('header-image');
    const dateText = document.getElementById('date-text');

    function moveButton() {
        const maxWidth = wrapper.offsetWidth - noButton.offsetWidth;
        const maxHeight = wrapper.offsetHeight - noButton.offsetHeight;
        const newX = Math.floor(Math.random() * maxWidth);
        const newY = Math.floor(Math.random() * maxHeight);

        noButton.style.position = 'absolute';
        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;
    }

    noButton.addEventListener('click', moveButton); // Change event to 'click'

    headerImage.addEventListener('animationend', () => {
        // Add animation to the date text after the image animation completes
        dateText.style.animation = 'fadeInText 1s forwards';
    });
};
