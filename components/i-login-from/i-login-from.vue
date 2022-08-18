<template>
	<view>
		<view class="login-from">
			<uni-icons type="person" size="15" style="margin-left: 33rpx;"></uni-icons>
			<input placeholder="请输入用户名"
				style="background-color: #f5f5f5;margin-left: 35rpx;height: 100%;width: 100%;font-size: 35rpx;" />
		</view>
		<view class="login-from">
			<uni-icons type="locked" size="15" style="margin-left: 33rpx;"></uni-icons>
			<input placeholder="请输入密码"
				style="background-color: #f5f5f5;margin-left: 35rpx;height: 100%;width: 100%;font-size: 35rpx;" />
		</view>
		<view class="login-from" v-if="type===false">
			<uni-icons type="locked" size="15" style="margin-left: 33rpx;"></uni-icons>
			<input placeholder="请输入确认密码"
				style="background-color: #f5f5f5;margin-left: 35rpx;height: 100%;width: 100%;font-size: 35rpx;" />
		</view>
	</view>
</template>

<script>
	export default {
		name: "i-login-from",
		props: {
			type: {
				type: Boolean,
				default: ""
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.login-from {
		position: relative;
		margin-bottom: 26rpx;
		background-color: #f5f5f5;
		height: 100rpx;
		display: flex;
		align-items: center;
		margin-bottom: 53rpx;
	}
</style>
