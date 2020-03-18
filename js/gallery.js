(function () {
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