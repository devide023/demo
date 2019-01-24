(function() {
	var instance = axios.create({
		baseURL:'http://127.0.0.1:9000/api/',
		transformRequest: [function (data) {
		  return Qs.stringify(data);
		}],
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
	Vue.prototype.$axios = instance;
})();
