const local = document.cookie.split('')[6]

const shield = document.querySelector('.shield');
const score = document.querySelector('.score')
const filled = document.getElementsByClassName('star')
shield.style.background = `linear-gradient(45deg, #ff6b6b, #ffb3b3)`

        shield.addEventListener('mouseover', () => {
            shield.style.transform = 'scale(1.1)';
        });

        shield.addEventListener('mouseout', () => {
            shield.style.transform = 'scale(1)';
        });


