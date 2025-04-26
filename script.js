document.addEventListener('DOMContentLoaded', () => {
    const animatedText = document.querySelector('.animated-text');
    let textArray = ["Discover the future of web design.", "Experience innovation.", "Join us today."];
    let textIndex = 0;

    setInterval(() => {
        animatedText.textContent = textArray[textIndex];
        textIndex = (textIndex + 1) % textArray.length;
    }, 3000);
});