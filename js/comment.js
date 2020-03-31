(function () {
	window.renderComments = function (commentArray) {
		//отрисовка коментарии на основе шаблона
		var commentItem = window.gallery
			.querySelector(".social__comment--template")
			.content.querySelector(".social__comment--text");
		var commentsCount = window.gallery.querySelector(".comments-count");
		var commentText = commentItem.querySelector(".social__text");
		var commentAvatar = commentItem.querySelector(".social__picture");
		var commentsContainer = window.gallery.querySelector(".social__comments");
		var commentsLoadMore = window.gallery.querySelector(".social__comment-loadmore");
		commentsLoadMore.classList.add("visually-hidden");
		commentsCount.textContent = commentArray.length;
		commentsCount.parentElement.classList.add("visually-hidden");
		while (commentsContainer.firstChild) {
			commentsContainer.removeChild(commentsContainer.firstChild);
			}
		
			for (var i = 0; i < commentArray.length; i++) {
				commentAvatar.src = commentArray[i].avatar;
				commentText.textContent = commentArray[i].message;
				commentsContainer.appendChild(commentItem.cloneNode(true));
			}
		
	};
})()