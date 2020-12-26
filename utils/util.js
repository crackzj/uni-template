//自定义打印信息

export const log = {
	info(tip="提示信息：",info){
		console.log("%c%s","color:#266147;background-color:#f3f5f8;",tip + info.toString());
	},
	err(tip="错误信息：",error){
		console.log("%c%s","color:#b03d38;background-color:#fee6ed",tip + error.toString());
	},
	success(tip="成功：",info="成功"){
		console.log("%c%s","color:#376780;background-color:#e7f6fa;",tip + info.toString());
	}
}

export default util={
	log
};