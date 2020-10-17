function ajax(url) {
	return new Promise((resolve, reject) => {
		if (window.XMLHttpRequest) {
			var xhr = new XMLHttpRequest();
		} else {
			var xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}

		xhr.open("get", url, true);
		xhr.send();

		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					var data = xhr.responseText;
					resolve(data);
				} else {
					reject();
				}
			}
		}
	})

}