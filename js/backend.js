(function () {
	window.backend = {};
	window.data = {};
	window.data.pictures = [];
	var serverCodeMap = {
		400: "Неверный запрос",
		401: "Ползователь не авторизован",
		404: "Ничего не найдено",
		default: "Ошибка сервера"
	  };
	window.serverStatus = document.querySelector('.img-upload__message--error');
	var form = document.querySelector('.img-upload__form');
	window.backend.load = function () {
		//загрузка данных с сервера
		var xhr = new XMLHttpRequest();
		xhr.responseType = 'json';
		xhr.timeout = 100000;
		xhr.open('GET', 'https://javascript.pages.academy/kekstagram/data');
		xhr.addEventListener('load', function () {
			onLoad(xhr.response);
		});
		xhr.addEventListener('error', function () {
			onError(xhr.status);
		});
		xhr.addEventListener('timeout', function () {
			serverStatus.classList.remove('hidden');
			serverStatus.textContent = 'Превышено время подключение к серверу';
		})
		xhr.send();
	};
	window.backend.save = function (data) {
		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'https://javascript.pages.academy/kekstagram');
		xhr.addEventListener('load', function (e) {
			window.editWindow.classList.add('hidden');
		});
		xhr.addEventListener('error', function (e) {
			onError(xhr.status);
			window.editWindow.classList.add('hidden');

		});
		xhr.send(new FormData(data));
	};
	form.addEventListener('submit', function (e) {
		window.backend.save(form);
		e.preventDefault();
	});
	window.backend.load();
	function onLoad(data) {
		window.data.pictures = data;
		serverStatus.classList.add('hidden');
		window.sortingPictures();
		window.renderPictures();

	};
	function onError(errorStatus) {
		serverStatus.classList.remove('hidden');
		serverStatus.textContent = serverCodeMap[errorStatus] || serverCodeMap.default;
	};
})();