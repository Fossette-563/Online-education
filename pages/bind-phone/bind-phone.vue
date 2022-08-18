<template>
	<view>
		<view style="display: block;">
			<!-- 返回图标 -->
			<view class="login-back">
				<navigator url="/pages/my/my" open-type="switchTab">
					<uni-icons type="back" size="30" style="color: rgb(255, 255, 255); font-size: 20px;"></uni-icons>
				</navigator>
			</view>
			<!-- 背景 -->
			<view class="login-bg">
			</view>
			<!-- 绑定手机页面 -->
			<view class="login-page">
				<view class="flex">
					<text style="font-size: 22px;margin-bottom: 26px;color: #35404b;">绑定手机号</text>
				</view>
				<!-- 输入框 -->
				<view class="login-from">
					<uni-icons type="person" size="15" style="margin-left: 33rpx;"></uni-icons>
					<input placeholder="请输入手机号" v-model="from.phone"
						style="background-color: #f5f5f5;margin-left: 35rpx;height: 100%;width: 100%;font-size: 35rpx;" />
				</view>
				<view class="login-from">
					<uni-icons type="locked" size="15" style="margin-left: 33rpx;"></uni-icons>
					<input placeholder="请输入验证码" type="text" v-model="from.code"
						style="background-color: #f5f5f5;margin-left: 35rpx;height: 100%;width: 100%;font-size: 35rpx;" />
					<i-code-button :phone="from.phone" @get="getCode"></i-code-button>
				</view>
				<!-- 绑定按钮 -->
				<button class="login-button" @click="handleSubmitForm">绑定</button>
			</view>
		</view>
	</view>
</template>

<script>
	import userModel from "@/model/User.js"
	export default {
		data() {
			return {
				from: {
					phone: '',
					code: '',
				}
			}
		},
		methods: {
			// 提交表单数据
			async handleSubmitForm() {
				uni.showLoading({
					title: '提交中...',
					mask: false
				})
				try {
					const res = await userModel.bindModel({
						data: this.from
					})
					console.log("bind", res)
					this.from = {}
					uni.showToast({
						title: "绑定成功",
						icon: "none"
					})

					setTimeout(() => {
						uni.switchTab({
							url: '/pages/my/my'
						})
					}, 350)
				} catch (err) {
					console.log(err)
				} finally {
					uni.hideLoading()
				}

			},
		}
	}
</script>

<style lang="scss">
	.login-back {
		position: fixed;
		top: 0;
		left: 0;
		width: 52px;
		height: 52px;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;
		top: 0;
	}

	.login-bg {
		height: 114px;
		background-image: linear-gradient(120deg, #3bfdaf, #70d6f2);
	}

	.login-page {
		position: absolute;
		top: 104px;
		left: 0;
		right: 0;
		background-color: #fff;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
		padding: 31px 36px 0 36px;

		.login-from {
			position: relative;
			margin-bottom: 26rpx;
			background-color: #f5f5f5;
			height: 100rpx;
			display: flex;
			align-items: center;
			margin-bottom: 53rpx;
		}

		.login-button {
			background-color: #5ccc84;
			height: 106rpx;
			color: #ffffff;
			font-size: 30rpx;
			text-align: center;
			line-height: 105rpx;
		}


	}
</style>
