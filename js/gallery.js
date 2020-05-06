(function () {
	window.gallery = document.querySelector(".big-picture");
	window.galleryOpen = false;
	window.CurrentPhotoIndex = 0;
	function renderGallery(img) {
		//отрисовка галлерея
		window.gallery.classList.remove("hidden");
		var galleryImg = window.gallery
		  .querySelector(".big-picture__img")
		  .querySelector("img");
		var galleryDescription = window.gallery.querySelector(".social__caption");
		var galleryLike = window.gallery.querySelector(".likes-count");
		var galleryClose = window.gallery.querySelector(".big-picture__cancel");
		var allFotos = document.querySelectorAll(".picture__img");
		for (var i = 0; i < window.data.pictures.length; i++) {
		  if (img === allFotos[i].src) {
			CurrentPhotoIndex = i;
		  }
		};
		window.galleryOpen = true;
		window.currentComments = window.data.pictures[CurrentPhotoIndex].comments;
		galleryImg.src = img;
		galleryLike.textContent = window.data.pictures[CurrentPhotoIndex].likes;
		galleryDescription.textContent = window.data.pictures[CurrentPhotoIndex].description;
		window.renderComments(window.data.pictures[CurrentPhotoIndex].comments);
		galleryClose.addEventListener("click", function() {
			gallery.classList.add("hidden");
			window.galleryOpen = false;
		});
	};
	var onClickPhotoItem = function(e) {
		//открытие фото в галлереи
		  if (e.target.className === "picture__img") {
			  e.preventDefault();
			renderGallery(e.target.src);
			
		}
	};
	document.body.addEventListener("click", onClickPhotoItem);
})()