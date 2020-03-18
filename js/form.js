(function () {
	var hashTag = editWindow.querySelector('.text__hashtags');
	var onInvalidHashtag = function (e) {
		//валидация хештега
		if (hashTag.value[0] !== '#') {
			hashTag.setCustomValidity('хештег должен начинатся с #');
		} else {
			hashTag.setCustomValidity('');
		}
	};
	hashTag.addEventListener('input', onInvalidHashtag);
})()