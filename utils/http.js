import {log} from './util.js';
import env from '../env/env.js';
//开启全局调试信息 
const debug = env.mode==='dev' ? true : false;
const preUrl = env.url;
/**
 * @function request请求封装
 * @param {string} url:请求地址
 * @param {object} param:请求参数，param里‘method’和‘header’属性名只能用来设置请求方法和请求头
 * @param {object} option:配置信息 {method:'GET|POST',header:'xxx|localstorage',debug:true|false}  
 */
const http =function(param={},url="/",option={}) {
		return new Promise((resolve,reject)=>{
			//正式环境可注释或删除该调试信息
			consoleInfo(url,param,option);
			uni.showLoading({
				title:option.loading || '加载中...'
			});
			const fulUrl = preUrl + url;
			uni.request({
				method: option.method || "GET",
				header: option.header  || "",
				url: fulUrl, 
				data:param,
				success(res) {
					resolve(res.data);
					uni.hideLoading();
					if(debug && (option.debug?option.debug : true)){
						log.success(res.data);
					}
				},
				fail(err) {
					reject(err);
					uni.hideLoading();
					uni.showModal({
						title:'发生错误',
						showCancel:false,
						content:err.errMsg || '发生未知错误',
						success(res) {
							if(res.confirm){
								//todo
							}
						}
					})
					if(debug && (option.debug?option.debug : true)){
						log.err(err);
					}
				}
			})
		})
}

function consoleInfo(url,param,option){
	if(debug){
		if(option.debug === undefined || option.debug){
			log.info('','===========rquest log===========');
			log.info("url:",url);
			log.info("method:",param.method || option.method || "GET");
			log.info("header:",param.header || option.header || "")
			log.info("params:",param);
		}				
	}
}


export default http;