/**
 * @author 卜夋(crackzj)
 * @date	2020-12-26
 * @github	https://github.com/crackzj/uni-template
 * @blog	https://blog.boyhack.com
 * 工具集合
 * log: 自定义打印
 * db: storage封装
 */

//自定义打印信息
export const log = {
	info(tip="提示信息：",info){
		console.log("%c%s","color:#266147;background-color:#f3f5f8;",tip + JSON.stringify(info));
	},
	err(error,tip="错误信息："){
		console.log("%c%s","color:#b03d38;background-color:#fee6ed",tip + JSON.stringify(error));
	},
	success(info="成功!",tip="data："){
		console.log("%c%s","color:#376780;background-color:#e7f6fa;",tip + JSON.stringify(info));
	}
}

const utils = {
	log
}

export default utils;

