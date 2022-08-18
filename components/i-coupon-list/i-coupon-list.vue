<template>
	<view class="p-2">
		<scroll-view scroll-x="true" class="scroll-row">
			<view v-for="(item,index) in data" :key="index" class="coupon">
				<view>
					<text>￥{{item.price}}</text>
					<text class="font">{{item.value.title}}</text>
				</view>
				<view hover-class="bg-hover-warning">
					领取
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			data: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {

			}
		},
	}
</script>

<style>
	.coupon {
		min-width: 310rpx;
		display: inline-flex;
		color: #ffffff;
		margin-right: 30rpx;
	}

	.coupon>view:first-child {
		padding: 20rpx 30rpx;
		background-color: #d39e00;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-right: 4rpx dashed;
	}

	.coupon>view:last-child {
		width: 120rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #ffc107;
		font-size: 30rpx !important;
	}
</style>
