<template>
	<view style="height: 400rpx;">
		<view style="background-color: #f5f5f3;height: 15rpx;">
		</view>
		<view class="align-center py-2 px-2">
			<text class="font-md font-weight-bold">拼团</text>
		</view>
		<view class="Spellgroup">
			<scroll-view scroll-x="true">
				<view class="content flex">
					<view class="scroll-row-item course course-two py-3 px-2" v-for="(item,index) in data" :key="index">
						<image style="width: 300rpx;height: 144rpx;" :src="item.cover">
						</image>
						<view class="flex flex-column flex-shrink">
							<text style="text-transform:none;white-space: nowrap;" class="my-1">{{item.title}}</text>
							<p><text style="color: red;font-size: 40rpx;" class="iconfont">￥{{item.price}}</text>
								<text>￥{{item.t_price}}</text>
							</p>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "i-group-list",
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
	.Spellgroup {
		width: 100%;
		height: 100px;
		max-height: inherit;
		background-color: white;
	}

	.course {
		overflow: hidden;
		min-width: 300rpx;
	}
</style>
