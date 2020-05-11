(function () {
  window.utils = {};
  window.utils.randomLike = function () {
    // функция для возврата случайного число на диапазоне 15 , 200 предназначена для лайков фотографии
    var randomNum = Math.floor(Math.random() * 200 + 1);
    if (randomNum < 15) {
      randomNum += 15;
    }
    return randomNum;
  };
  window.utils.randowValue = function (arr) {
    //это функция возврашает случайное значение из массива
    if (Array.isArray(arr)) {
      var value = arr[Math.floor(Math.random() * arr.length)];
    }
    return value;
  };
	window.utils.keyEvent = function (keyCode, callback) {
	  //универсалная функция для обработки событии клавиатуры
    document.addEventListener("keydown", function (evt) {
      if (evt.keyCode === keyCode) {
        callback();
		};
    });
  };
})();
