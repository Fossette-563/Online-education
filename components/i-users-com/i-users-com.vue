<template>
	<view>
		<view style="display: block;">
			<!-- 返回图标 -->
			<view class="login-back">
				<navigator url="/pages/learn/learn" open-type="switchTab">
					<uni-icons type="back" size="30" style="color: rgb(255, 255, 255); font-size: 20px;"></uni-icons>
				</navigator>
			</view>
			<!-- 背景 -->
			<view class="login-bg">
			</view>
			<!-- 登录页面 -->
			<view class="login-page">
				<view class="flex">
					<text style="font-size: 22px;margin-bottom: 26px;color: #35404b;">{{type===true?'登 录':'注 册'}}</text>
				</view>

				<!-- 输入框 -->
				<view class="login-from">
					<uni-icons type="person" size="15" style="margin-left: 33rpx;"></uni-icons>
					<input placeholder="请输入用户名" v-model="from.username"
						style="background-color: #f5f5f5;margin-left: 35rpx;height: 100%;width: 100%;font-size: 35rpx;" />
				</view>
				<view class="login-from">
					<uni-icons type="locked" size="15" style="margin-left: 33rpx;"></uni-icons>
					<input placeholder="请输入密码" type="text" v-model="from.password"
						style="background-color: #f5f5f5;margin-left: 35rpx;height: 100%;width: 100%;font-size: 35rpx;" />
				</view>
				<view class="login-from" v-if="type===false">
					<uni-icons type="locked" size="15" style="margin-left: 33rpx;"></uni-icons>
					<input placeholder="请输入确认密码" type="text" v-model="from.repassword"
						style="background-color: #f5f5f5;margin-left: 35rpx;height: 100%;width: 100%;font-size: 35rpx;" />
				</view>

				<!-- 登录按钮 -->
				<button class="login-button"
					@click="type===true?handleEnter(from):regUser(from)">{{type===true?'登 录':'注 册'}}</button>
				<!-- 注册登录字 -->
				<view class="login-font">
					<text style="color: #5ccc84;"
						@click="type===true?Enroll(type):goLogin(type)">{{type===true?'注册账号':'去登录'}}</text>
					<text style="color: #a9a5a0;">忘记密码?</text>
				</view>
				<!-- 图标 -->
				<view class="login-icon" @click="handlewx">
					<uni-icons type="weixin" size="30" style="color: #5ccc84;"></uni-icons>
				</view>
				<!-- 协议 -->
				<!-- 提示信息 -->
				<view style="position: relative;" v-if="checkedstatus">
					<view style="background-color:rgba(88, 88, 88, 0.8);" class="message-text">
						<text style="color: #ffffff;word-break:break-all;">
							<text>{{type===true?'请已阅读并同意用户协议&隐私声明':'提交中…'}}</text>
						</text>
					</view>
				</view>
				<view class="login-agreement" v-if="type===true">
					<checkbox-group @change="checkboxstatus">
						<label style="color:#a9a5a0 ;">
							<checkbox value="checkbox" :checked="checkbox" color="#5ccc84"
								style="transform:scale(0.7)" />
							已阅读并同意用户协议&隐私声明
						</label>
					</checkbox-group>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "i-users-com",
		props: {
			checkedstatus: {
				type: Boolean,
				default: false
			},
			checkbox: {
				type: Boolean,
				default: false
			},
			type: {
				type: Boolean,
				default: false
			},
			from: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {

			};
		},
		methods: {
			// 去登陆
			goLogin(type) {
				console.log("去登录");
				this.$emit("goTologin")
			},
			// 点击注册账号
			Enroll(type) {
				this.$emit("getEnroll", type)
			},
			// 改变复选框状态
			checkboxstatus() {
				this.$emit("status")
			},
			// 登录
			handleEnter(from) {
				this.$emit("Enter", from)
			},
			// 注册
			regUser(from) {
				this.$emit("setRegUser", from)
			},
			// wx图标
			handlewx() {
				this.$emit('wx')
			}
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

		.login-font {
			display: flex;
			justify-content: space-between;
			margin-top: 53rpx;
		}

		.login-icon {
			width: 100rpx;
			height: 100rpx;
			border: 1px solid #5ccc84;
			border-radius: 50%;
			text-align: center;
			line-height: 100rpx;
			margin: auto;
			margin-top: 71rpx;
		}

		.login-agreement {
			position: relative;
			margin-top: 44rpx;
			padding-left: 60rpx;
		}

		.message-text {
			line-height: 88rpx;
			height: 100rpx;
			font-size: 24rpx;
			text-align: center;
			border-radius: 10rpx;
			width: 400rpx;
			position: absolute;
			left: 110rpx;
			top: -180rpx
		}
	}
</style>
