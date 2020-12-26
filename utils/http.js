//开启全局调试信息
const debug = true;

//自定义打印信息
const log = {
	info(tip="提示信息：",info){
		console.log("%c%s","color:#266147;background-color:#f3f5f8;",info.toString());
	},
	err(tip="错误信息：",error){
		console.log("%c%s","color:#b03d38;background-color:#fee6ed",error.toString());
	},
	success(tip:"成功：",info="成功"){
		console.log("%c%s","color:#376780;background-color:#e7f6fa;",info.toString());
	}
}

const http = {
	fetch(option={},url="/",param={}){
		return new Promise((resolve,reject)=>{
			if(console){
				if(option.debug === undefined || option.debug){
					console.log('===========rquest log===========');
					console.log("url:",url);
					console.log("params:",param.toString());
				}				
			}
			uni.request({
				method:option.method || "GET",
				header:option.header,
				url:url,
				data:param,
				success(res) {
					resolve(res);
				},
				fail(err) {
					reject(err);
				}
			})
		})
	}
}

export default http;