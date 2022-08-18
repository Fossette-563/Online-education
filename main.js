import App from './App'
// 全局引入跳转navigate跳转方法

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
// 挂载navigator方法
Vue.config.navigator = navigator
import store from "@/store/index"
App.mpType = 'app'
const app = new Vue({
	...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif

Vue.prototype.$baseUrl = "http://demonuxtapi.dishait.cn" //线上接口
