// 区分环境 ,HbuilderX编辑运行时dev开发环境，发行后自动时生成环境
import store from "@/store/index"
let baseUrl = ''
if (process.env.NODE_ENV === 'development') {
	console.log('开发环境')
	baseUrl = 'http://demonuxtapi.dishait.cn/mobile';
} else {
	console.log('生产环境')
	// baseUrl = 'https://cnodejs.org/api/v1/';
}
class Model {
	//定义接口
	api(opts = {}) {
		//监听网络链接
		uni.onNetworkStatusChange((res) => {
			if (!res.isConnected) {
				uni.showToast({
					title: '网络连接不可用！',
					icon: 'none'
				});
			}
			return false
		});
		//定义参数对象
		if (!opts.method) opts.method = 'get'
		if (opts.domain) baseUrl = opts.domain
		// token
		let token =store.state.token
		// 鉴权	
		let authorize = ''
		if (uni.getStorageSync('token')) token = uni.getStorageSync('token')
		if (uni.getStorageSync('Authorization')) authorize = uni.getStorageSync('Authorization')
		// 前端自定义token失效
		// if (token == '' || token == undefined || token == null) {
		//   uni.showToast({
		//     title: '账号已过期，请重新登录',
		//     icon: 'none',
		//     complete: function() {
		//       uni.reLaunch({
		//         url: '/pages/login/index'
		//       });
		//     }
		//   });
		// }
		const header = {
			token,
			'Content-Type': 'application/json; charset=UTF-8',
			appid: 'bd9d01ecc75dbbaaefce',
		}

		// 删除鉴权
		if (opts.noAuth) {
			delete header.Authorization
		}
		return new Promise((resolve, reject) => {
			uni.request({
				url: baseUrl + opts.url,
				data: opts.data,
				method: opts.method,
				header: header,
				success: res => {
					if (res.statusCode === 200) {
						if (res.data) {
							resolve(res.data);
							// token过期
						} else if (res.data.returnCode === '401') {
							uni.showModal({
								title: '提示',
								content: '登录过期，请重新登录',
								success: function(res) {
									if (res.confirm) {
										uni.redirectTo({
											url: '/pages/login/index'
										});
										uni.clearStorageSync();
									} else if (res.cancel) {
										uni.switchTab({
											url: '/pages/work/index'
										});
									}
								}
							});
							resolve(res.data);
						} else {
							uni.showToast({
								title: res.data.returnMessage,
								icon: 'none',
								duration: 1500
							});
							reject(res.data);
						}
					}
				},
				fail: () => {
					console.log('请求失败,请稍候重试');
					uni.hideLoading();
					uni.showToast({
						title: 'net error!',
						icon: 'none',
						duration: 1500
					});
				}
			});
		})
	}

	get(options = {}) {
		options.method = 'GET'
		return this.api(options)
	}
	post(options = {}) {
		options.method = 'POST'
		return this.api(options)
	}
	put(options = {}) {
		options.method = 'PUT'
		return this.api(options)
	}
	delete(options = {}) {
		options.method = 'DELETE'
		return this.api(options)
	}
}

export default Model
