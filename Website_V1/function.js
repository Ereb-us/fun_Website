window.onload = function() {
    const noButton = document.getElementById('no-btn');
    const wrapper = document.getElementById('wrapper');
    const headerImage = document.getElementById('header-image');
    const dateText = document.getElementById('date-text');
    let clickCount = 0; // Initialize click count

    function moveButton() {
        const maxWidth = wrapper.offsetWidth - noButton.offsetWidth;
        const maxHeight = wrapper.offsetHeight - noButton.offsetHeight;
        const newX = Math.floor(Math.random() * maxWidth);
        const newY = Math.floor(Math.random() * maxHeight);

        noButton.style.position = 'absolute';
        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;

        // Increment click count
        clickCount++;

        // Check if click count reaches 20
        if (clickCount === 20) {
            alert('Please just say yes');
            // Reset click count after displaying the message
            clickCount = 0;
        }
    }

    noButton.addEventListener('click', moveButton); // Change event to 'click'

    headerImage.addEventListener('animationend', () => {
        // Add animation to the date text after the image animation completes
        dateText.style.animation = 'fadeInText 1s forwards';
    });

    // Function to create a heart element
    function createHeart() {
        const heart = document.createElement('img');
        heart.src = './images/heart.png';
        heart.className = 'heart';
        document.body.appendChild(heart);
        
        // Randomize initial position
        const maxWidth = window.innerWidth - heart.offsetWidth;
        const newX = Math.floor(Math.random() * maxWidth);
        heart.style.position = 'absolute';
        heart.style.left = `${newX}px`;
        heart.style.top = '0';

        // Remove heart after animation ends
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    // Create hearts periodically
    const interval = setInterval(createHeart, 500); // Create a heart every second
    setTimeout(() => {
        clearInterval(interval); // Stop creating hearts after some time (adjust as needed)
    }, 5000); // Stop after 10 seconds
};