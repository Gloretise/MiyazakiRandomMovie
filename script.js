const movies = [
    "Замок Калиостро",
    "Навсикая из Долины ветров",
    "Небесный замок Лапута",
    "Мой сосед Тоторо",
    "Ведьмина служба доставки",
    "Порко Россо",
    "Принцесса Мононоке",
    "Унесенные призраками",
    "Ходячий замок",
    "Рыбка Поньо на утесе",
    "Ветер крепчает",
    "Мальчик и птица",
    "Могила светлячков",
    "Еще вчера",
    "Здесь слышен океан",
    "Помпоко: Война тануки в период Хэйсэй",
    "Шепот сердца",
    "Возвращение кота"
];

const frames = [
    'images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 
    'images/6.jpg', 'images/7.jpg', 'images/8.jpg', 'images/9.jpg', 'images/10.jpg', 
    'images/11.jpg', 'images/12.jpg', 'images/13.jpg', 'images/14.jpg', 'images/15.jpg', 
    'images/16.jpg', 'images/17.jpg', 'images/18.jpg', 'images/19.jpg', 'images/20.jpg', 
    'images/21.jpg', 'images/22.jpg', 'images/23.jpg', 'images/24.jpg', 'images/25.jpg', 
    'images/26.jpg', 'images/27.jpg', 'images/28.jpg', 'images/29.jpg', 'images/30.jpg', 
    'images/31.jpg', 'images/32.jpg', 'images/33.jpg'
];

let frameIndex = 0;
const loadingElement = document.getElementById('loading');
const movieTitleElement = document.getElementById('movie-title');
const randomButton = document.getElementById('random-button');
const screenElement = document.querySelector('.screen');

function showNextFrame() {
    frameIndex = (frameIndex + 1) % frames.length;
    screenElement.style.backgroundImage = `url(${frames[frameIndex]})`;
}

randomButton.addEventListener('click', () => {
    // Скрыть заголовок фильма и показать загрузку
    movieTitleElement.style.display = 'none';
    loadingElement.style.display = 'block';
    
    // Начать смену кадров
    const frameInterval = setInterval(showNextFrame, 300);

    // Через несколько секунд показать случайный фильм
    setTimeout(() => {
        clearInterval(frameInterval);
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        loadingElement.style.display = 'none';
        movieTitleElement.textContent = randomMovie;
        movieTitleElement.style.display = 'block';
    }, 3000); // 3 секунды
});
