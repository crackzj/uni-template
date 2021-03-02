<script>
	export default {
		onLaunch: function() {
			this.$api().then(res=>{
				// console.log(res);
			})
			uni.login({
				provider:"weixin",
				success(res) {
					console.log(res);
				}
			})
		},
		
		onHide: function() {
			
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
</style>
