(function () {
  var commentItemElement = window.gallery
    .querySelector(".social__comment--template")
    .content.querySelector(".social__comment--text");
  var commentsCountElement = window.gallery.querySelector(".comments-count");
  var commentTextElement = commentItemElement.querySelector(".social__text");
  var commentAvatarElement = commentItemElement.querySelector(
    ".social__picture"
  );
  var commentsContainerElement = window.gallery.querySelector(
    ".social__comments"
  );
  var commentsLoadMoreElement = window.gallery.querySelector(
    ".social__comment-loadmore"
  );
  var loadedCommentsCountElement = window.gallery.querySelector(
    ".comments-count--showed"
  );
  var comments;
  var loadedCommentsCount = 5;
  window.renderComments = function (commentArray) {
    //отрисовка коментарии на основе шаблона
    comments = window.currentComments;
    commentsCountElement.textContent = commentArray.length;
    loadedCommentsCountElement.textContent = loadedCommentsCount;
    commentsContainerElement.innerHTML = "";
    for (var i = 0; i < loadedCommentsCount; i++) {
      commentAvatarElement.src = commentArray[i].avatar;
      commentTextElement.textContent = commentArray[i].message;
      commentsContainerElement.appendChild(commentItemElement.cloneNode(true));
    }
  };

  function onClickLoadmoreElement() {
    var remainderCommentsCount = comments.length - loadedCommentsCount;
    console.log(remainderCommentsCount < loadedCommentsCount);

    if (remainderCommentsCount < loadedCommentsCount) {
      loadedCommentsCount += remainderCommentsCount;
    } else {
      loadedCommentsCount += 5;
	  };
	  if (comments.length === loadedCommentsCount) {
		commentsLoadMoreElement.classList.add("hidden");
	  } else {
		commentsLoadMoreElement.classList.remove("hidden");
	  }
    renderComments(comments);
  }
  commentsLoadMoreElement.addEventListener("click", onClickLoadmoreElement);
})();
