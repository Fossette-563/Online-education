<template>
	<i-users-com :type="type" :checkedstatus="checkedstatus" :checkbox="checkbox" :from="from" @status="checkboxstatus"
		@wx="getHandlewx" @setRegUser="RegUser(from)" @Enter="getHandleEnter(from)" @getEnroll="Enroll(type)"
		@goTologin="goTologin"></i-users-com>
</template>

<script>
	import userModel from '@/model/User.js';
	export default {
		data() {
			return {
				searchValue: "",
				checkedstatus: false,
				checkbox: false,
				type: true,
				from: {
					username: '',
					password: '',
					repassword: '',
				},
			};
		},
		onLoad() {
			clearInterval(this.timer);
			console.log();
		},
		methods: {
			// 点击登录按钮
			async getHandleEnter(from) {
				if (!this.checkbox) {
					return uni.showToast({
						title: "请已阅读并同意用户协议&隐私声明",
						icon: 'none'
					})
				}
				try {
					const res = await userModel.login({
						data: from
					})
					this.from = {}
					console.log(res, 'r');
					this.$store.dispatch('setUser', res.data)
					this.handleMobile()
					console.log(res);
				} catch (e) {
					//TODO handle the exception
					console.log(e);
				}
			},
			// 登录未绑定手机号
			handleMobile() {
				const user = this.$store.state.user
				if (!user.phone) {
					// 跳转到绑定手机号的页面
					setTimeout(() => {
						uni.redirectTo({
							url: "/pages/bind-phone/bind-phone"
						})
					}, 350)
					return
				}
			},
			// 注册按钮
			async RegUser(from) {
				try {
					console.log(from, 'from');
					const res = await userModel.reg({
						data: from
					})
					uni.showToast({
						title: "注册成功"
					})
					this.type = true
					console.log(this.type);
					this.from = {}
					console.log(res, 'res');
				} catch (e) {
					//TODO handle the exception
					console.log(e);
				}
			},
			// 去登陆字切换注册页面
			goTologin(type) {
				this.type = !type
			},
			// 点击注册切换注册页面
			Enroll(type) {
				this.type = !type
			},
			// 更改选中状态
			checkboxstatus() {
				this.checkbox = !this.checkbox
			},
			// 点击微信图标显示显示提示字
			getHandlewx() {
				if (this.checkbox === false) {
					this.checkedstatus = true
					setTimeout(() => {
						this.checkedstatus = false
					}, 2000);
				}
			}
		},
		computed: {}
	}
</script>

<style lang="scss">

</style>
