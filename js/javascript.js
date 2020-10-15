// Родитель элементов star
var parentItems = document.querySelector('.stars');
// Массив из всех star
var allItems = document.querySelectorAll('.stars .star');
// Количетсво активных элементов
var activeItems = document.querySelectorAll('.stars .star.active').length;
var rezult = document.querySelector('.rezult');
rezult.innerHTML = `${activeItems}/10`;


// Функция проверяет куда нажали и меняет классы
var cStars = function(nowPos) {
 // Убираем у всех элементов active
 for (var i = 0; allItems.length > i; i++) {
 		allItems[i].classList.remove('active');
 }
 // Добавляет активный класс всем элементам до выбранного, включая выбранный
 for (var i = 0; nowPos + 1 > i; i++) {
    allItems[i].classList.toggle('active');
  } 
}

// При наведении
parentItems.addEventListener('mouseover', function(e) {
  var test = e.target.closest('span');
  if(test !== null){
    var myTarget = e.target;

    // Длина массива
    var i = allItems.length;

    // Находи выбранный элемент в массиве и заносим его индекс в переменную
    while(i--) {
      if(allItems[i] === myTarget) {
        var currentIndex = i;
        break;
      }
    }
    cStars(currentIndex);
  }
	
});

// При клике
parentItems.addEventListener('click', function(e) {
var test = e.target.closest('span');
  if(test !== null){
    // Выбранный элемент
    var myTarget = e.target;
    // Длина массива
    var i = allItems.length;
    // Находи выбранный элемент в массиве и заносим его индекс в переменную
    while(i--) {
        if(allItems[i] === myTarget) {
        var currentIndex = i;
        break;
        }
    }
    cStars(currentIndex);
        // Меняем количество активных айтемов
    activeItems = document.querySelectorAll('.stars .star.active').length;
    rezult.innerHTML = `${activeItems}/10`;
  }
});

// При мауслив
parentItems.addEventListener('mouseleave', function(e) {
  cStars(+activeItems - 1);
  rezult.innerHTML = `${activeItems}/10`;
});


/* конфигурация */

let width = 172; // ширина картинки
let count = 1; // видимое количество изображений

let list = carousel.querySelector('.series');
let listElems = carousel.querySelectorAll('a.card');

let position = 0; // положение ленты прокрутки

carousel.querySelector('.next').onclick = function() {
  // сдвиг вправо
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
  
};