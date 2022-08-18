<template>
	<view class="skeleton" :class="getClass" :style="getStyle">

	</view>
</template>

<script>
	export default {
		props:{
			width: {
				type: [Number, String],
				default: 0
			},
			height: {
				type: [Number, String],
				default: 0
			},
			circle: {
				type: Boolean,
				default: false
			},
			oClass: {
				type: String,
				default: ""
			}
		},
		name: "i-skeleton",
		data() {
			return {
				
			};
		},
		
		computed: {
			getStyle() {
				console.log(`width:${this.width};height:${this.height}`);
				return `width:${this.width};height:${this.height}`
			},
			getClass() {
				let c = ''
				if (this.circle) {
					c += 'rounded-circle'
				}
				return `${c} ${this.oClass}`
			}
		}
	}
</script>

<style lang="scss">
	.skeleton {
		background-color: rgb(245, 245, 241);
		// background-color: red;
	}
</style>
