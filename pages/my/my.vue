<template>
	<view class="my-page">
		<h4 class="my-header">
			<text>我的</text>
			<uni-icons type="more-filled" size="20" style="color: #ffffff;right: 8rpx;position: absolute;"></uni-icons>
		</h4>
		<view class="my-bady">
			<view class="flex p-3" style="margin-top: 30rpx;">
				<!-- 头像 -->
				<view class="my-photo">
				</view>
				<!-- 立即登录 -->
				<view class="login-text flex flex-column pl-3 flex-1 text-white" @click="handleLogle">
					<text style="font-size: 30rpx;">立即登录</text>
					<text style="margin-top: 30rpx;font-size: 20rpx;">登录解锁更多功能</text>
				</view>
			</view>
			<view class="nav">
				<view class="model">
					<image src="../../static/demo/icon/今日菜单.png" style="width: 45rpx;height: 45rpx;"></image>
					<text style="font-size: 20rpx;color: #6c757d;">订单</text>
				</view>
				<view class="model">
					<image src="../../static/demo/icon/message.png" style="width: 45rpx;height: 45rpx;"></image>
					<text style="font-size: 20rpx;color: #6c757d;">消息</text>
				</view>
				<view class="model">
					<image src="../../static/demo/icon/star.png" style="width: 45rpx;height: 45rpx;"></image>
					<text style="font-size: 20rpx;color: #6c757d;">收藏</text>
				</view>
				<view class="model">
					<image src="../../static/demo/icon/编程.png" style="width: 45rpx;height: 45rpx;"></image>
					<text style="font-size: 20rpx;color: #6c757d;">在学</text>
				</view>
			</view>
		</view>
		<view class="my-list">
			<view class="list">
				<view class="">
					<image src="../../static/demo/icon/优惠券.png" style="width: 30rpx;height: 30rpx;"></image>
					<text style="margin-left: 30rpx;">我的优惠券</text>
				</view>
				<uni-icons type="forward" size="20" style="color: #cfcfcf;"></uni-icons>
			</view>
			<view class=" list">
				<view class="">
					<image src="../../static/demo/icon/help.png" style="width: 30rpx;height: 30rpx;"></image>
					<text style="margin-left: 30rpx;">常见问题</text>
				</view>
				<uni-icons type="forward" size="20" style="color: #cfcfcf;"></uni-icons>
			</view>
			<view class=" list">
				<view class="">
					<image src="../../static/demo/icon/自定义模块.png" style="width: 30rpx;height: 30rpx;"></image>
					<text style="margin-left: 30rpx;">设置</text>
				</view>
				<uni-icons type="forward" size="20" style="color: #cfcfcf;"></uni-icons>
			</view>
		</view>

	</view>

</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			handleLogle() {
				uni.navigateTo({
					url: '/pages/login/login'
				});
			}
		}
	}
</script>

<style lang="scss">
	.my-header {
		width: 100%;
		height: 60rpx;
		background-color: #5ccc84;
		color: #fffff;
		text-align: center;
		line-height: 60rpx;
		color: #ffffff;
		position: relative;

	}

	.my-bady {
		height: 182px;
		width: 100%;
		background-color: #5ccc84;
		border-bottom-left-radius: 52px;
		border-bottom-right-radius: 52px;
		display: flex;
		flex-direction: column;

		.my-photo {
			width: 110rpx;
			height: 110rpx;
			background-color: #ffffff;
			border-radius: 50%;
		}

		.nav {
			width: 93%;
			height: 160rpx;
			background-color: #ffffff;
			margin-left: 30rpx;
			border-radius: 10rpx;
			box-shadow: 0 1px 6px #f2f2f2;
			margin-top: 0rpx;
			display: flex;
			align-items: center;
			justify-content: space-around;

			.model {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}
		}
	}

	.my-list {
		width: 90%;
		margin-top: 30rpx;
		margin-left: 30rpx;
		display: flex;
		flex-direction: column;

		.list {
			width: 90%;
			height: 100rpx;
			border-bottom: 1px solid #cfcfcf;
			line-height: 100rpx;
			padding-left: 20rpx;
			display: flex;
			justify-content: space-between;
		}
	}
</style>
