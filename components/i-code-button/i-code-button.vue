<template>
	<view @click="handleSendCode" class="code-button bg-main text-white" hover-class="bg-main-hover">
		{{time > 0 ? (time + 's') : '发送'}}
	</view>
</template>

<script>
	import userModel from "@/model/User.js"
	export default {
		name: "i-code-button",
		props: {
			phone: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				time: 0
			};
		},
		methods: {
			// 倒计时方法
			handleCountDown() {
				this.time = 60
				let timer = setInterval(() => {
					this.time--
					if (this.time <= 0) {
						clearInterval(timer)
					}
				}, 1000)
			},
			// 请求验证码
			async handleSendCode() {
				try {
					console.log(this.phone, 'o');
					const res = await userModel.captcha({
						data: {
							phone: this.phone
						}
					})
					console.log(res.data);
					uni.showLoading({
						title: "验证码" + res.data,
						icon: 'none'
					})
					this.handleCountDown()
				} catch (e) {
					//TODO handle the exception
					console.log(e);
				} finally {
					uni.hideLoading()
				}

			}
		}
	}
</script>

<style lang="scss">
	.code-button {
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		width: 200rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-top-right-radius: 10rpx;
		border-bottom-right-radius: 10rpx;
		font-size: 14px;
	}
</style>
