<template>
	<view>
		<index-skeleton v-if="loadingStatus"></index-skeleton>
		<view class="container" v-else>
			<!-- 搜索框 -->
			<i-search-bar></i-search-bar>
			<!-- 轮播图 -->
			<i-swiper-list :data="swiper" @click="handleToDetail"></i-swiper-list>
			<!-- 分类导航栏 -->
			<i-icon-nav :list="iconNav"></i-icon-nav>
			<!-- 优惠券 -->
			<i-coupon-list :data='coupon'></i-coupon-list>
			<!-- 拼团 -->
			<i-group-list :data="SpellgroupIcon"></i-group-list>
			<!-- 最新列表 -->
			<i-new-list :data="newList"></i-new-list>
			<!-- ending…… -->
			<view style="background-color: #f5f5f3;height: 15rpx;"></view>
			<view class="footerView">
				<image
					src="https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/dishaweb/08C9150BC2B163AEC012D6E544C75DD2.png">
				</image>
			</view>
			<view style="background-color: #f5f5f3;height: 100rpx;"></view>
		</view>
	</view>

</template>

<script>
	import cnodeModel from '@/model/cnode.js';
	export default {
		data() {
			return {
				// 轮播图
				swiper: [],
				// 导航栏
				iconNav: [],
				// 优惠券
				coupon: [],
				// 拼团
				SpellgroupIcon: [],
				// 最新列表
				newList: [],
				// 骨架屏
				loadingStatus: false
			};
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.loadRequest()
			console.log('refresh');
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onLoad: function(options) {
			this.loadRequest()
			uni.startPullDownRefresh();
		},
		methods: {
			// 骨架屏刷新数据
			async loadRequest() {
				this.loadingStatus = true
				try {
					await this.getSwiper()
					await this.getcoupon()
					await this.getgroup()

					uni.startPullDownRefresh();
				} catch (e) {
					//TODO handle the exception
					uni.startPullDownRefresh();
				}
				this.loadingStatus = false
			},
			// 获取轮播图、导航菜单栏、最新列表
			async getSwiper() {
				const {
					data
				} = await cnodeModel.swiper()
				this.swiper = data[1].data
				this.iconNav = data[2].data
				this.newList = data[5].data
			},
			// 点击轮播图图片跳转
			handleToDetail(item) {
				// TODO 点击轮播图通过id跳转
				console.log(item, 'i');
			},
			// 获取优惠券列表数据
			async getcoupon() {
				const {
					data
				} = await cnodeModel.coupon()
				this.coupon = data
			},
			// 获取拼团列表
			async getgroup() {
				let query = {
					data: {
						page: 1,
					}
				}
				const {
					data
				} = await cnodeModel.group(query)
				this.SpellgroupIcon = data.rows
			}
		}
	}
</script>

<style lang="scss">
	.footerView {
		width: 100%;
		height: 350rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}
</style>
