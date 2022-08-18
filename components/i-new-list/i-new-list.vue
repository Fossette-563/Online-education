<template>
	<view>
		<view style="background-color: #f5f5f3;height: 15rpx;">
		</view>
		<view class="align-center py-3 px-2 flex justify-between">
			<text class="font-md font-weight-bold">最新列表</text>
			<text style="color: #a9a5a0;font-size: 20rpx;">查看更多</text>
		</view>
		<!-- 列表内容渲染 -->
		<view class=" flex list py-3 px-2" v-for="(item,index) in data" :key="index">
			<image :src="item.cover" class="list-image"></image>
			<view class="text">
				<p>{{item.title}}</p>
				<p><text style="color: red;font-size: 40rpx;" class="iconfont">￥{{item.price}}</text>
					<text>￥{{item.t_price}}</text>
				</p>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "i-new-list",
		props: {
			data: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.list {
		display: flex;
		width: 100%;
		margin-right: 20rpx;

		.list-image {
			box-sizing: border-box;
			width: 310rpx;
			height: 175rpx;
		}

		.text {
			p {
				margin-left: 10rpx;

				&:first-child {
					margin-bottom: 70rpx;
				}
			}
		}
	}
</style>
