var pictureContainer = document.querySelector(".pictures");
var gallery = document.querySelector(".big-picture");

function randomLike() {
  // функция для возврата случайного число на диапазоне 15 , 200 предназначена для лайков фотографии
  var randomNum = Math.floor(Math.random() * 200 + 1);
  if (randomNum < 15) {
    randomNum += 15;
  }
  return randomNum;
}

function randowValue(arr) {
  //это функция возврашает случайное значение из массива
  if (Array.isArray(arr)) {
    var value = arr[Math.floor(Math.random() * arr.length)];
  }
  return value;
}



function renderPictures() {
  //отрисовка фотографии в странице
  var pictureElement = document
    .querySelector("#picture")
    .content.querySelector(".picture__link");
  var pictureImg = pictureElement.querySelector(".picture__img");
  var pictureLike = pictureElement.querySelector(".picture__stat--likes");
  var pictureComment = pictureElement.querySelector(".picture__stat--comments");

  for (var i = 0; i < pictures.length; i++) {
    pictureImg.src = pictures[i].url;
    pictureComment.textContent = pictures[i].comments;
    pictureLike.textContent = pictures[i].likes;
    pictureContainer.appendChild(pictureElement.cloneNode(true));
  }
}
renderPictures();
function renderGallery(img) {
  //отрисовка галлерея
  gallery.classList.remove("hidden");
  var galleryImg = gallery
    .querySelector(".big-picture__img")
    .querySelector("img");
  var galleryDescription = gallery.querySelector(".social__caption");
  var galleryLike = gallery.querySelector(".likes-count");
  var galleryClose = gallery.querySelector(".big-picture__cancel");
  var allFotos = document.querySelectorAll(".picture__img");
  var curentIndex = 0;
  for (var i = 0; i < pictures.length; i++) {
    if (img === allFotos[i].src) {
      curentIndex = i;
    }
  }
  galleryImg.src = img;
  galleryLike.textContent = pictures[curentIndex].likes;
  galleryDescription.textContent = pictures[curentIndex].description;
  galleryClose.addEventListener("click", function() {
    gallery.classList.add("hidden");
  });
}

var renderComments = function() {
  //отрисовка коментарии на основе шаблона
  var commentItem = gallery
    .querySelector(".social__comment--template")
    .content.querySelector(".social__comment--text");
  var commentsCount = gallery.querySelector(".comments-count");
  var commentText = commentItem.querySelector(".social__text");
  var commentAvatar = commentItem.querySelector(".social__picture");
  var commentsContainer = gallery.querySelector(".social__comments");
  var commentsLoadMore = gallery.querySelector(".social__comment-loadmore");
  commentsLoadMore.classList.add("visually-hidden");
  commentsCount.textContent = commentsList.length;
  commentsCount.parentElement.classList.add("visually-hidden");
  for (var i = 0; i < commentsList.length; i++) {
    var randomNum = Math.floor(Math.random() * 6 + 1);
    commentAvatar.src = `img/avatar-${randomNum}.svg`;
    commentText.textContent = commentsList[i];
    commentsContainer.appendChild(commentItem.cloneNode(true));
  }
};
renderComments()
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

gallery.classList.add("hidden");
var uploadFIleInput = document.querySelector("#upload-file");
var editWindow = document.querySelector(".img-upload__overlay");
var imgPreview = editWindow.querySelector(".img-upload__preview");
var imgScale = editWindow.querySelector(".scale__line");
var hashTag = editWindow.querySelector('.text__hashtags');

var onLoadFile = function() {
  //при загрузки фото открывается окно редактирование
  editWindow.classList.remove("hidden");
};
var onEditWindowOpen = function(e) {
  if (e.target.classList.contains("img-upload__cancel")) {
    //закрытие окно
    editWindow.classList.add("hidden");
    uploadFIleInput.value = "";
  } else if (e.target.classList.contains("effects__preview")) {
    //применение филтров при нажании на соответствющих блоках
    if (imgPreview.classList[1]) {
      imgPreview.classList.remove(imgPreview.classList[1]);
    }
    imgPreview.classList.add(e.target.classList[1]);
  }
};
var onScaleMouseup = function(e) {
  //изменение ползунка
  var scaleValue = editWindow.querySelector(".scale__value");
  var maxLevel = imgScale.offsetWidth;
  var scalePin = editWindow.querySelector(".scale__pin");
  var scaleLevel = editWindow.querySelector(".scale__level");
  var filterLevel = (Math.floor((e.offsetX * 100) / maxLevel) + 1) / 100;
  scaleValue = e.offsetX + "px";
  scaleLevel.style.width = scaleValue;
  scalePin.style.left = scaleValue;
};
var onClickPhotoItem = function(e) {
  //открытие фото в галлереи
	if (e.target.className === "picture__img") {
		e.preventDefault();
	  renderGallery(e.target.src);
	  
  }
};
var onInvalidHashtag = function (e) {
	//валидация хештега
	if (hashTag.value[0] !== '#') {
		hashTag.setCustomValidity('хештег должен начинатся с #');
	} else {
		hashTag.setCustomValidity('');
	}
};
hashTag.addEventListener('input' , onInvalidHashtag)
uploadFIleInput.addEventListener("change", onLoadFile);
editWindow.addEventListener("click", onEditWindowOpen);
imgScale.addEventListener("mouseup", onScaleMouseup);
document.body.addEventListener("click", onClickPhotoItem);
// submitForm.addEventListener('submit', onSubmmitPhoto);

/* В этом задании мы начнём реализацию сценария загрузки изображения и его редактирования, а также опишем показ фотографий в полноэкранном режиме.
Перед выполнением этого задания, нужно вернуть страницу в исходное состояние. Согласно ТЗ, оверлей .big-picture, показывающий фотографию в полноэкранном режиме показывается только по клику на уменьшенное изображение. В прошлом разделе вы выполняли задание, в котором показывали оверлей при загрузке страницы и заполняли его данными из первой сгенерированной фотографии. Теперь нам нужно приберечь этот код до поры: оставим в коде метод, который отрисовывает полноэкранный оверлей, но уберём его вызов, чтобы позже прописать его в одном (или не в одном) из обработчиков событий.
Загрузка изображения и показ формы редактирования
В этом проекте загрузка и редактирование настоящего изображения необязательны, поэтому в этом пункте можно ограничиться просто обработкой изменения значения поля выбора файла #upload-file. При наступлении события change на этом поле, можно сразу показывать форму редактирования изображения.
При написании обработчиков, реагирующих на закрытие формы, обратите внимание на то, что при закрытии формы, дополнительно нужно сбрасывать значение поля выбора файла #upload-file. В принципе, всё будет работать, если
при повторной попытке загрузить в поле другую фотографию, но событие changeне сработает, если вы попробуете загрузить ту же фотографию. Применение эффекта для изображения и Редактирование размера изображения
Применение эффекта для изображения полностью программировать в этом задании не нужно. Уровень насыщенности эффекта изменяется перемещением ползунка, но перетаскивание — это тема следующей лекции и полностью реализовать перетаскивание у нас не получится, однако мы можем его сэмулировать.
Процесс перетаскивания состоит из трёх этапов: захват элемента, перемещение и отпускание. Два первых этапа мы разберём на будущей лекции, но пока что можем описать только отпускание. Для этого добавим на пин слайдера .scale__pin обработчик события mouseup, который будет согласно ТЗ изменять уровень насыщенности фильтра для изображения. Для определения уровня насыщенности, нужно рассчитать положение пина слайдера относительно всего блока и воспользоваться пропорцией, чтобы понять, какой уровень эффекта нужно применить.
Обратите внимание, что при переключении фильтра, уровень эффекта должен сразу cбрасываться до начального состояния, т.е. логика по определению уровня насыщенности должна срабатывать не только при «перемещении» слайдера, но и при переключении фильтров.
Показ изображения в полноэкранном режиме
После открытия страницы, нужно отрисовать пользовательские фотографии. Позже, в разделе про сеть, открытие страницы будет запускать загрузку фотографий, но пока что можно показать фотографии сразу.
Нажатие на фотографию приводит к показу фотографии в полноэкранном режиме. Получается, что для фотографий должны быть созданы обработчики событий, которые вызывают показ оверлея с соответствующими данными. */
