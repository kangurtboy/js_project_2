(function () { 
	var pictureContainer = document.querySelector(".pictures");
	
	window.renderPictures = function () {
	  //отрисовка фотографии в странице
	  var pictureElement = document
		.querySelector("#picture")
		.content.querySelector(".picture__link");
	  var pictureImg = pictureElement.querySelector(".picture__img");
	  var pictureLike = pictureElement.querySelector(".picture__stat--likes");
	  var pictureComment = pictureElement.querySelector(".picture__stat--comments");
	
	  for (var i = 0; i < window.data.pictures.length; i++) {
		pictureImg.src = window.data.pictures[i].url;
		pictureComment.textContent = window.data.pictures[i].comments.length;
		pictureLike.textContent = window.data.pictures[i].likes;
		pictureContainer.appendChild(pictureElement.cloneNode(true));
	  }
	}
})();
