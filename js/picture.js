(function () { 
	var pictureContainer = document.querySelector(".pictures__list");
	var pictureElement = document
		.querySelector("#picture")
		.content.querySelector(".picture__link");
	var pictureImg = pictureElement.querySelector(".picture__img");
	var pictureLike = pictureElement.querySelector(".picture__stat--likes");
	var pictureComment = pictureElement.querySelector(".picture__stat--comments");
	var sortedPictures = [];
	var pictureFiltersTab = document.querySelector('.img-filters');
	
	window.renderPictures = function () { 
		//отрисовка фотографии в странице
		pictureFiltersTab.classList.remove('img-filters--inactive');
		pictureContainer.innerHTML = '';
		if (sortedPictures.length === 0) {
			sortedPictures = window.data.pictures;
		}
		for (var i = 0; i < sortedPictures.length; i++) {
			pictureImg.src = sortedPictures[i].url;
			pictureComment.textContent = sortedPictures[i].comments.length;
			pictureLike.textContent = sortedPictures[i].likes;
			pictureContainer.appendChild(pictureElement.cloneNode(true));
		};
	};
	pictureFiltersTab.addEventListener('click', onSortingPictures);
	function onSortingPictures(evt) {
		if (evt.target.id === 'filter-popular') {
			sortedPictures = window.data.pictures;
			window.renderPictures();
		} else if (evt.target.id === 'filter-new') {
			sortedPictures = [];
			for (var i = 0; i < 10; i++){
				sortedPictures.push(window.utils.randowValue(window.data.pictures));
			};
			window.renderPictures();
		}
	}
})();
