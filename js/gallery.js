(function () {
	window.gallery = document.querySelector(".big-picture");
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
		var curentIndex = 0;
		for (var i = 0; i < window.data.pictures.length; i++) {
		  if (img === allFotos[i].src) {
			curentIndex = i;
		  }
		}
		galleryImg.src = img;
		galleryLike.textContent = window.data.pictures[curentIndex].likes;
		galleryDescription.textContent = window.data.pictures[curentIndex].description;
		galleryClose.addEventListener("click", function() {
			gallery.classList.add("hidden");
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