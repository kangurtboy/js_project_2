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
  var loadedCommentsCount = 5;
  var comments;
  window.renderComments = function (commentArray) {
    comments = window.data.pictures[CurrentPhotoIndex].comments;
    loadedCommentsCount =
      commentArray.length <= loadedCommentsCount ? commentArray.length : 5;
    commentsContainerElement.innerHTML = "";
    //отрисовка коментарии на основе шаблона
    commentsCountElement.textContent = commentArray.length;
    loadedCommentsCountElement.textContent = loadedCommentsCount;
    for (var i = 0; i < loadedCommentsCount; i++) {
      commentAvatarElement.src = commentArray[i].avatar;
      commentTextElement.textContent = commentArray[i].message;
      commentsContainerElement.appendChild(commentItemElement.cloneNode(true));
    }
  };

  function onClickLoadmoreElement() {
    //нажание на кнопку загрузить еще
    var remainderCommentsCount = comments.length - loadedCommentsCount;
    console.log(loadedCommentsCount);
    if (remainderCommentsCount < loadedCommentsCount) {
      loadedCommentsCount += remainderCommentsCount;
	}

    if (comments.length === loadedCommentsCount) {
      commentsLoadMoreElement.classList.add("hidden");
    }
    renderComments(comments);
  }

  commentsLoadMoreElement.addEventListener("click", onClickLoadmoreElement);
})();
