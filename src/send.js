

	
export function bringUp(callback){
	
	uni.$once('send',(data)=>{
		if(callback)
			callback(data)
	})
	uni.navigateTo({
		url:'/pages/send/send'
	})
}