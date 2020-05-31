(function() {
  var pictureContainer = document.querySelector('.pictures');
  var pictureElement = document
    .querySelector('#picture')
    .content.querySelector('.picture__link');
  var pictureImg = pictureElement.querySelector('.picture__img');
  var pictureLike = pictureElement.querySelector('.picture__stat--likes');
  var pictureComment = pictureElement.querySelector('.picture__stat--comments');
  var sortedPictures = [];
  var pictureFiltersTab = document.querySelector('.img-filters');

  window.renderPictures = function() {
    Array.from(pictureContainer.children).forEach(child => {
      if (child.className === 'picture__link') {
        pictureContainer.removeChild(child);
      }
    });
    //отрисовка фотографии в странице
    for (var i = 0; i < window.data.pictures.length; i++) {
      pictureImg.src = window.data.pictures[i].url;
      pictureComment.textContent = window.data.pictures[i].comments.length;
      pictureLike.textContent = window.data.pictures[i].likes;
      pictureContainer.appendChild(pictureElement.cloneNode(true));
    }
  };
  window.sortingPictures = function() {
    //сортировка фотографии на странице
    sortedPictures = window.data.pictures;
    pictureFiltersTab.classList.remove('img-filters--inactive');
    pictureFiltersTab.addEventListener('click', onSortingPictures);
  };
  function onSortingPictures(evt) {
    var currentTarget = evt.target;
    var activeElement = pictureFiltersTab.querySelector(
      '.img-filters__button--active'
    );
    if (currentTarget.classList.contains('img-filters__button')) {
      activeElement.classList.remove('img-filters__button--active');
      currentTarget.classList.add('img-filters__button--active');
    }
    if (currentTarget.id === 'filter-popular') {
      window.data.pictures = sortedPictures;
    } else if (currentTarget.id === 'filter-new') {
      //добавление 10 случайных и не повторяших фотографии
      window.data.pictures = [];
      window.data.pictures.push(window.utils.randowValue(sortedPictures));
      while (window.data.pictures.length < 10) {
        var randowPictureItem = window.utils.randowValue(sortedPictures);
        var cheking = window.data.pictures.every(function(item) {
          if (randowPictureItem !== item) {
            return true;
          } else {
            return false;
          }
        });
        if (cheking) {
          window.data.pictures.push(randowPictureItem);
        }
      }
    } else if (currentTarget.id === 'filter-discussed') {
      window.data.pictures = sortedPictures.slice();
      window.data.pictures.sort(function(a, b) {
        return b.comments.length - a.comments.length;
      });
    }
    window.renderPictures();
  }
})();
