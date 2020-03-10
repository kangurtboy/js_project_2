var pictures = [
	//массив фото который появится на странице
];
var pictureContainer = document.querySelector('.pictures');
var commentsList = [
	//Массив с коментариями для фотографии
	'Всё отлично!',
	'В целом всё неплохо. Но не всё.',
	'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
	'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
	'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
	'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
var descriptionList = [
//Массив описании для фотографии
	"Тестим новую камеру!",
	"Затусили с друзьями на море",
	"Как же круто тут кормят",
	"Отдыхаем...",
	"Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......",
	"Вот это тачка!"
];

function randomLike() {
	// функция для возврата случайного число на диапазоне 15 , 200 предназначена для лайков фотографии
	var randomNum = Math.floor(Math.random() * 200 + 1);
	if (randomNum < 15) {
		randomNum += 15;
	}
	return randomNum
};

function randowValue(arr) {
	//это функция возврашает случайное значение из массива
	if (Array.isArray(arr)) {
		var value = arr[Math.floor(Math.random() * arr.length)];
	}
	return value
};

for (var i = 0; i < 25; i++){
	//заполню массив picture 25 рандомным данных
	pictures.push({
		url: `photos/${i + 1}.jpg`,
		likes: randomLike(),
		comments: randowValue(commentsList),
		description: randowValue(descriptionList)
	})
};

function renderPictures() {
	//отрисовка фотографии в странице
	var pictureElement = document.querySelector('#picture').content.querySelector('.picture__link');
	var pictureImg = pictureElement.querySelector('.picture__img');
	var pictureLike = pictureElement.querySelector('.picture__stat--likes');
	var pictureComment = pictureElement.querySelector('.picture__stat--comments');

	for (var i = 0; i < pictures.length; i++){
		pictureImg.src = pictures[i].url;
		pictureComment.textContent = pictures[i].comments;
		pictureLike.textContent = pictures[i].likes;
		pictureContainer.appendChild(pictureElement.cloneNode(true));
	};
}
renderPictures();
function renderGallery() {
	//отрисовка галлерея
	var gallery = document.querySelector('.big-picture');
	gallery.classList.remove('hidden');
	var galleryImg = gallery.querySelector('.big-picture__img').querySelector('img');
	var galleryDescription = gallery.querySelector('.social__caption');
	var galleryLike = gallery.querySelector('.likes-count');
	var galleryCommentsCount = gallery.querySelector('.comments-count');
	galleryImg.src = pictures[0].url;
	galleryCommentsCount.textContent = commentsList.length;
	galleryLike.textContent = pictures[0].likes;
	galleryDescription.textContent = pictures[0].description;
	//отрисовка коментарии на основе шаблона
	var commentItem = gallery.querySelector('.social__comment--template').content.querySelector('.social__comment--text');
	var commentText = commentItem.querySelector('.social__text');
	var commentAvatar = commentItem.querySelector('.social__picture');
	var commentsContainer = gallery.querySelector('.social__comments');
	for (var i = 0; i < commentsList.length; i++){
		var randomNum = Math.floor(Math.random() * 6 + 1);
		commentAvatar.src = `img/avatar-${randomNum}.svg`;
		commentText.textContent = commentsList[i];
		commentsContainer.appendChild(commentItem.cloneNode(true));
	}
}
renderGallery()
/* Задача
В файле pictures.js:
1. Создайте массив, состоящий из 25 сгенерированных JS объектов, которые будут описывать фотографии, размещённые другими пользователями:
o url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} это число от 1 до 25. Адреса картинок не должны повторяться.
o likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200
o comments, массив строк — список комментариев, оставленных другими пользователями к этой фотографии. Комментарий должен генерироваться случайным образом. Для каждого комментария нужно взять одно или два случайных предложений из предложенных ниже:
 Всё отлично!
 В целом всё неплохо. Но не всё.
 Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
 Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
 Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
 Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!
o description, строка, в которой есть одно из следующих предложений:
 Тестим новую камеру!
 Затусили с друзьями на море
 Как же круто тут кормят
 Отдыхаем...
 Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......
 Вот это тачка!
2. На основе данных, созданных в предыдущем пункте и шаблона #picture создайте DOM-элементы, соответствующие фотографиям и заполните их данными из массива:
o Адрес изображения url подставьте как src изображения.
o Количество лайков likes подставьте как текстовое содержание элемента .picture__stat--likes.
o Количество комментариев comments подставьте как текстовое содержание элемента .picture__stat--comments.
3. Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов используйте DocumentFragment.
4. Покажите элемент .big-picture, удалив у него класс .hidden и заполните его данными из первого элемента сгенерированного вами массива:
o Адрес изображения url подставьте как src изображения внутри блока.big-picture__img.
o Количество лайков likes подставьте как текстовое содержание элемента .likes-count.
o Количество комментариев comments подставьте как текстовое содержание элемента .comments-count.
o Список комментариев под фотографией: коментарии должны вставляться в блок .social__comments. Разметка каждого комментария должна выглядеть так:
<li class="social__comment social__comment--text">
<img class="social__picture" src="img/avatar-
{{случайное число от 1 до 6}}.svg"
alt="Аватар комментатора фотографии"
width="35" height="35">
<p class="social__text">{{текст комментария}}</p>
</li>
o Описание фотографии description вставьте строкой в блок .social__caption.
5. Спрячьте блоки счётчика комментариев .social__comment-count и загрузки новых комментариев .social__loadmore, добавив им класс .visually-hidden. */