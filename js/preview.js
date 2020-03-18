(function () {
	
var uploadFIleInput = document.querySelector("#upload-file");
 window.editWindow = document.querySelector(".img-upload__overlay");
var imgPreview = window.editWindow.querySelector(".img-upload__preview");
var imgScale = window.editWindow.querySelector(".scale__line");


var onLoadFile = function() {
  //при загрузки фото открывается окно редактирование
  window.editWindow.classList.remove("hidden");
};
var onEditWindowOpen = function(e) {
  if (e.target.classList.contains("img-upload__cancel")) {
    //закрытие окно
    editWindow.classList.add("hidden");
    uploadFIleInput.value = "";
  } else if (e.target.classList.contains("effects__preview")) {
    //применение филтров при нажании на соответствющих блоках
    if (imgPreview.classList[1]) {
      imgPreview.classList.remove(imgPreview.classList[1]);
    }
    imgPreview.classList.add(e.target.classList[1]);
  }
};
var onScaleMouseup = function(e) {
  //изменение ползунка
  var scaleValue = editWindow.querySelector(".scale__value");
  var maxLevel = imgScale.offsetWidth;
  var scalePin = editWindow.querySelector(".scale__pin");
  var scaleLevel = editWindow.querySelector(".scale__level");
  var filterLevel = (Math.floor((e.offsetX * 100) / maxLevel) + 1) / 100;
  scaleValue = e.offsetX + "px";
  scaleLevel.style.width = scaleValue;
  scalePin.style.left = scaleValue;
};


uploadFIleInput.addEventListener("change", onLoadFile);
editWindow.addEventListener("click", onEditWindowOpen);
imgScale.addEventListener("mouseup", onScaleMouseup);
})()