(function () {
  var uploadFIleInput = document.querySelector("#upload-file");
  window.editWindow = document.querySelector(".img-upload__overlay");
  var imgPreview = window.editWindow.querySelector(".img-upload__preview");
  var closeEditWndowElement = window.editWindow.querySelector(
    ".img-upload__cancel"
  );
  var imgScale = window.editWindow.querySelector(".scale__line");
  var scaleValue = editWindow.querySelector(".scale__value");
  var scalePin = editWindow.querySelector(".scale__pin");
  var scaleLevel = editWindow.querySelector(".scale__level");
  var hashtagElement = editWindow.querySelector(".text__hashtags");
  var commentTextAreaElement = editWindow.querySelector(".text__description");
  var filterLevel;
  var defaultFilter = {
    chrome: "grayscale(0.2)",
    sepia: "sepia(0.2)",
    marvin: "invert(0.2)",
    phobos: "blur(1px)",
    heat: "brightness(0.60)",
  };
  var defaultValueImgScale = 100;
  var onLoadFile = function () {
    //при загрузки фото открывается окно редактирование
    window.editWindow.classList.remove("hidden");
    imgScale.parentElement.classList.add("hidden");
  };
  var filterClassMap = {
    "effects__preview--chrome": (imgPreview.style.filter =
      defaultFilter.chrome),
    "effects__preview--sepia": (imgPreview.style.filter = defaultFilter.sepia),
    "effects__preview--marvin": (imgPreview.style.filter =
      defaultFilter.marvin),
    "effects__preview--phobos": (imgPreview.style.filter =
      defaultFilter.phobos),
    "effects__preview--heat": (imgPreview.style.filter = defaultFilter.heat),
    "effects__preview--none": (imgPreview.style.filter = "none"),
  };
  var onSelectFilter = function (e) {
    if (e.target.classList.contains("effects__preview")) {
      //применение филтров при нажании на соответствющих блоках
      scaleLevel.style.width = "20%";
      scalePin.style.left = "20%";
      if (imgPreview.classList[1]) {
        imgPreview.classList.remove(imgPreview.classList[1]);
      }
      imgPreview.classList.add(e.target.classList[1]);
      imgScale.parentElement.classList.remove("hidden");
      if (e.target.classList.contains("effects__preview--none")) {
        imgScale.parentElement.classList.add("hidden");
      }
      imgPreview.style.filter = filterClassMap[e.target.classList[1]];
    }
  };
  var onEditWindowClose = function (e) {
    //закрытие окно
    editWindow.classList.add("hidden");
    uploadFIleInput.value = "";
    imgPreview.style.filter = "none";
    imgScale.parentElement.classList.add("hidden");
    hashtagElement.value = "";
    commentTextAreaElement.value = "";
  };
  var onScaleMouseup = function (e) {
    //изменение ползунка
    var maxLevel = imgScale.offsetWidth;
    scaleValue.value = e.offsetX;
    if (e.target !== scalePin) {
      scaleLevel.style.width = scaleValue.value + "px";
      filterLevel =
        (Math.floor((scaleLevel.offsetWidth * 100) / maxLevel) + 1) / 100;
      scalePin.style.left = scaleValue.value + "px";
    }
    //изменение уровня филтра при изменение ползунка
    if (imgPreview.classList.contains("effects__preview--chrome")) {
      imgPreview.style.filter = `grayscale(${filterLevel})`;
    } else if (imgPreview.classList.contains("effects__preview--sepia")) {
      imgPreview.style.filter = `sepia(${filterLevel})`;
    } else if (imgPreview.classList.contains("effects__preview--marvin")) {
      imgPreview.style.filter = `invert(${filterLevel})`;
    } else if (imgPreview.classList.contains("effects__preview--phobos")) {
      imgPreview.style.filter = `blur(${filterLevel * 5}px)`;
    } else if (imgPreview.classList.contains("effects__preview--heat")) {
      imgPreview.style.filter = `brightness(${filterLevel * 3})`;
    }
  };
  var onMouseDown = function (e) {
    var scale = window.editWindow.querySelector(".img-upload__scale");
    var startCoord =
      window.editWindow.offsetWidth / 2 -
      scale.offsetLeft +
      e.offsetX * 2 +
      imgScale.offsetLeft * 2;
    function onMouseMove(moveEvent) {
      var currentLevel = 0;
      currentLevel = moveEvent.clientX - startCoord;
      if (currentLevel > 0 && currentLevel <= imgScale.offsetWidth) {
        filterLevel =
          (Math.floor((scaleLevel.offsetWidth * 100) / imgScale.offsetWidth) +
            1) /
          100;
        scaleLevel.style.width = currentLevel + "px";
        scalePin.style.left = currentLevel + "px";
      }
      //изменение уровня филтра при перемешение ползунка
      if (imgPreview.classList.contains("effects__preview--chrome")) {
        imgPreview.style.filter = `grayscale(${filterLevel})`;
      } else if (imgPreview.classList.contains("effects__preview--sepia")) {
        imgPreview.style.filter = `sepia(${filterLevel})`;
      } else if (imgPreview.classList.contains("effects__preview--marvin")) {
        imgPreview.style.filter = `invert(${filterLevel})`;
      } else if (imgPreview.classList.contains("effects__preview--phobos")) {
        imgPreview.style.filter = `blur(${filterLevel * 5}px)`;
      } else if (imgPreview.classList.contains("effects__preview--heat")) {
        imgPreview.style.filter = `brightness(${filterLevel * 3})`;
      }
    }
    function onMouseUp(upEvent) {
      scale.removeEventListener("mousemove", onMouseMove);
    }
    window.editWindow.addEventListener("mouseup", onMouseUp);
    scale.addEventListener("mousemove", onMouseMove);
  };
  var onScaleImg = function (e) {
    //изменение масштаба изображение
    var resizePlusElement = window.editWindow.querySelector(
      ".resize__control--plus"
    );
    var resizeMinusElement = window.editWindow.querySelector(
      ".resize__control--minus"
    );
    var resizeValueElement = window.editWindow.querySelector(
      ".resize__control--value"
    );
    resizeValueElement.value = `${defaultValueImgScale}%`;
    if (e.target === resizePlusElement) {
      if (defaultValueImgScale <= 75) {
        defaultValueImgScale += 25;
        resizeValueElement.value = `${defaultValueImgScale}%`;
        imgPreview.style.transform = `scale(${defaultValueImgScale / 100})`;
      }
    }
    if (e.target === resizeMinusElement) {
      if (defaultValueImgScale >= 50) {
        defaultValueImgScale -= 25;
        resizeValueElement.value = `${defaultValueImgScale}%`;
        imgPreview.style.transform = `scale(0.${defaultValueImgScale})`;
      }
    }
  };
  var onFocusInput = function (e) {
    document.removeEventListener("keydown", onKeyDown);
  };
  var onBlurInput = function (e) {
    document.addEventListener("keydown", onKeyDown);
  };
  var onKeyDown = function (e) {
    if (e.keyCode === 27) {
      onEditWindowClose();
    }
  };
  document.addEventListener("keydown", onKeyDown);
  hashtagElement.addEventListener("focus", onFocusInput);
  hashtagElement.addEventListener("blur", onBlurInput);
  commentTextAreaElement.addEventListener("blur", onBlurInput);
  commentTextAreaElement.addEventListener("focus", onFocusInput);
  uploadFIleInput.addEventListener("change", onLoadFile);
  closeEditWndowElement.addEventListener("click", onEditWindowClose);
  window.editWindow.addEventListener("click", onSelectFilter);
  window.editWindow.addEventListener("click", onScaleImg);
  imgScale.addEventListener("click", onScaleMouseup);
  scalePin.addEventListener("mousedown", onMouseDown);
})();
