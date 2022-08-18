// 导入类
import Model from '@/utils/http.js'
// const baseUrl = 'https://cnodejs.org/api/v2'
//继承类的方法
class Cnode extends Model {
	// constructor(baseUrl) {
	// 	super(baseUrl)
	// 	this.baseUrl = baseUrl
	// }
	//获取文章数据 //定义接口名
	// get
	// 轮播图，导航栏，最新列表
	swiper() {
		return this.get({
			url: '/index'
		})
	}
	// 优惠券
	coupon() {
		return this.get({
			url: '/coupon'
		})
	}
	// 拼团
	group() {
		return this.get({
			url: '/group'
		})
	}
}
const cnodeModel = new Cnode()
export default cnodeModel
