<template>
	<view>
		<button type="primary" @click="login">login</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			login(){
				uni.switchTab({
					url:"/pages/index/index"
				})
			}
		}
	}
</script>

<style>

</style>
