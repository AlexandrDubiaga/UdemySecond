/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const reklama = document.querySelectorAll('.promo__adv img');
reklama.forEach(el=>el.remove());


const movieBackground =  document.querySelector('.promo__bg');
const genre =  movieBackground.querySelector('.promo__genre');
genre.textContent = 'Драма';
movieBackground.style.cssText = 'background-image: url("img/bg.jpg");width:700px;';




const listOfFilms = document.querySelector('.promo__interactive-list');
listOfFilms.innerHTML = "";
movieDB.movies.sort();


movieDB.movies.forEach((el,i)=>{
    listOfFilms.innerHTML +=`<li class="promo__interactive-item">${i+1} ${el}
    <div class="delete"></div>
</li>`;
});



















