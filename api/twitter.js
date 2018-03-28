const request = require('request');


module.exports = {
	get(url, token) {
		return new Promise(function(resolve, reject) {
			request({
				url: url,
				method: 'GET',
				headers: {
					'Authorization': `Bearer ${token}`
				}
			}, function(error, response, body) {
				if(error) {
					reject(error);
				} else {
					resolve(JSON.parse(body));
				}
			});
		});
	},

	post(url, base64Credentials) {
		return new Promise(function(resolve, reject) {
			request({
				url: url,
				method: 'POST',
				headers: {
					'Authorization': `Basic ${base64Credentials}`,
					'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
				},
				body: 'grant_type=client_credentials'
			}, function(error, response, body) {
				if(error) {
					reject(error);
				} else {
					resolve(JSON.parse(body).access_token);
				}
			});
		});
	}
};