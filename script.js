
const startDate = new Date(2024, 0, 1, 0, 0); 

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    if (diff < 0) return; // Если дата в будущем

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

setInterval(updateTimer, 1000);
updateTimer();

const wishes = [
    "Ты делаешь каждый мой день лучше просто тем, что ты есть! ❤️",
    "Улыбнись прямо сейчас, тебе это так идет! ✨",
    "Ты самая невероятная, заботливая и прекрасная девушка на свете! 💕",
    "Я бесконечно рад, что мы есть друг у друга! 🥰",
    "Ты — мое главное вдохновение каждый день! 🌟",
    "Желаю тебе сегодняшнего дня, наполненного радостью и теплом!"
];

document.getElementById('wish-btn').addEventListener('click', () => {
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    document.getElementById('wish-text').innerText = randomWish;

    // Запуск салюта из конфетти
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.7 }
        });
    }
});

function openNote(title, text) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-body').innerText = text;
    document.getElementById('modal').style.display = 'flex';
}

function closeNote() {
    document.getElementById('modal').style.display = 'none';
}

window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeNote();
    }
});

const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');

if (musicBtn && music) {
    musicBtn.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            musicBtn.classList.add('playing');
        } else {
            music.pause();
            musicBtn.classList.remove('playing');
        }
    });
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.fontSize = Math.random() * 15 + 10 + 'px';
    
    document.getElementById('hearts-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 400);


document.addEventListener('click', function(e) {

    if (e.target.tagName === 'BUTTON' || e.target.classList.contains('note-box') || e.target.classList.contains('close-btn')) {
        return;
    }

    const heart = document.createElement('span');
    heart.innerText = '💖';
    heart.style.position = 'fixed';
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.fontSize = '20px';
    heart.style.animation = 'floatUp 1s forwards';
    heart.style.zIndex = '9999';
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
});
