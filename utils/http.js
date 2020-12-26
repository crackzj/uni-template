import {log} from './util.js';
//开启全局调试信息 
const debug = true;

const http = {
	fetch(option={},url="/",param={}){
		return new Promise((resolve,reject)=>{
			if(console){
				if(option.debug === undefined || option.debug){
					log.info('','===========rquest log===========');
					log.info("url:",url);
					log.info("method:",option.method || "GET");
					log.info("method:",option.header || "")
					log.info("params:",param.toString());
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