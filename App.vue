<script>
	import http from './utils/http.js';
	export default {
		onLaunch: function() {
			http({},"https://baidu.com/").then(res=>{
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

<style>
	/*每个页面公共css */
</style>
