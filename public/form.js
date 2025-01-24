const shield = document.querySelector('.shield');
        let score = document.getElementById('score').innerText;

        function updateScore() {
            const scoreElement = document.querySelector('.score');
            scoreElement.textContent = score;

            if (score < 50) {
                shield.style.background = `linear-gradient(45deg, #ff6b6b, #ffb3b3)`;
            } else if (score >= 50 && score < 80) {
                shield.style.background = `linear-gradient(45deg, #ffa5a5, #ffd3d3)`;
            } else {
                shield.style.background = `linear-gradient(45deg, #90ee90, #d0f0c0)`;
            }
        }

        updateScore();

        shield.addEventListener('mouseover', () => {
            shield.style.transform = 'scale(1.1)';
        });

        shield.addEventListener('mouseout', () => {
            shield.style.transform = 'scale(1)';
        });
