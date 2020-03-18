(function () {
	var renderComments = function() {
		//отрисовка коментарии на основе шаблона
		var commentItem = gallery
		  .querySelector(".social__comment--template")
		  .content.querySelector(".social__comment--text");
		var commentsCount = window.gallery.querySelector(".comments-count");
		var commentText = commentItem.querySelector(".social__text");
		var commentAvatar = commentItem.querySelector(".social__picture");
		var commentsContainer = window.gallery.querySelector(".social__comments");
		var commentsLoadMore = window.gallery.querySelector(".social__comment-loadmore");
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
})()