<template>
	<view class="learn-logo mt-auto">
		<image src="/static/noLogin.png"></image>
		<text class="text-muted my-2 font">登录后才可以查看我的学习哦</text>
		<button size="mini" type="default" plain='true' @click="navigateLogin()">立即登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			navigateLogin() {
				console.log(1);
				uni.navigateTo({
					url: '/pages/login/login'
				});
			}
		}
	}
</script>

<style lang="scss">
	.learn-logo {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #fff;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
</style>
