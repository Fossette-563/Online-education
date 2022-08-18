<template>
	<i-users-com :type="type" :checkedstatus="checkedstatus" :checkbox="checkbox" @status="checkboxstatus"
		@wx="getHandlewx" @Enter="getHandleEnter"></i-users-com>
</template>

<script>
	import cnodeModel from '@/model/cnode.js';
	export default {
		data() {
			return {
				searchValue: "",
				checkedstatus: false,
				checkbox: false,
				type: true
			};
		},
		onLoad() {
			clearInterval(this.timer);
			this.getHandleEnter()
		},
		methods: {
			// 点击登录按钮
			getHandleEnter() {

			},
			// 更改选中状态
			checkboxstatus() {
				this.checkbox = !this.checkbox
			},
			// 点击微信图标显示显示提示字
			getHandlewx() {
				if (this.checkbox === false) {
					this.checkedstatus = true
					setTimeout(() => {
						this.checkedstatus = false
					}, 2000);
				}
			}
		},
		computed: {}
	}
</script>

<style lang="scss">

</style>
