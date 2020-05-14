(function () {
	window.gallery = document.querySelector(".big-picture");
	window.CurrentPhotoIndex = 0;
	var focusedImg;
	var galleryClose = window.gallery.querySelector(".big-picture__cancel");
	function renderGallery(img) {
		//отрисовка галлерея
		window.gallery.classList.remove("hidden");
		var galleryImg = window.gallery
		  .querySelector(".big-picture__img")
		  .querySelector("img");
		var galleryDescription = window.gallery.querySelector(".social__caption");
		var galleryLike = window.gallery.querySelector(".likes-count");
		var allFotos = document.querySelectorAll(".picture__img");
		for (var i = 0; i < window.data.pictures.length; i++) {
		  if (img === allFotos[i].src) {
			CurrentPhotoIndex = i;
		  }
		};
		window.currentComments = window.data.pictures[CurrentPhotoIndex].comments;
		galleryImg.src = img;
		galleryLike.textContent = window.data.pictures[CurrentPhotoIndex].likes;
		galleryDescription.textContent = window.data.pictures[CurrentPhotoIndex].description;
		window.renderComments(window.data.pictures[CurrentPhotoIndex].comments);
	};
	var onClickPhotoItem = function(e) {
		//открытие фото в галлереи
		e.preventDefault();
		if (e.target.className === "picture__img") {
			renderGallery(e.target.src);	
		};
	};
	var onGalleryClose = function (e) {
		gallery.classList.add("hidden");
		window.resetComment();
	};
	document.addEventListener('keydown', function (e) {
		var focusElement = document.activeElement;
		 focusedImg = focusElement.querySelector('img');
		
	})
	window.utils.keyEvent(27, onGalleryClose);
	window.utils.keyEvent(13, function () {
		if (focusedImg) {
			renderGallery(focusedImg.src);
		}
	})
	galleryClose.addEventListener("click", onGalleryClose);
	document.body.addEventListener("click", onClickPhotoItem);
})()