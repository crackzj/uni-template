<script>
	export default {
		onLaunch: function() {
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

<style>
	/*每个页面公共css */
</style>
