import Model from '@/utils/http.js'

class User extends Model {
	// postxxx(options) {
	// 	options.url = '/api/xxx'
	// 	return this.post(options)
	// }
	// 注册接口
	reg(options) {
		console.log(options, 'oo');
		options.url = '/reg'
		return this.post(options)
	}
	// 登录接口
	login(options) {
		console.log(options, 'll');
		options.url = '/login'
		return this.post(options)
	}
	// 退出登录接口
	loginOut(options) {
		console.log(options, 'll');
		options.url = '/logout'
		return this.post(options)
	}
	// 绑定手机号
	bindModel(options) {
		options.url = '/bind_mobile'
		return this.post(options)
	}
	// 获取验证码
	captcha(options) {
		options.url = '/get_captcha'
		return this.post(options)
	}
}

const userModel = new User()
export default userModel
