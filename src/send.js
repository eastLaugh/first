import {ref,watch} from 'vue'
export function bringUp(callback) {

	uni.$once('send', (data) => {
		if (callback)
			callback(data)
	})
	uni.navigateTo({
		url: '/pages/send/send'
	})
}

export function SwicthToPostPage(post_id) {
	
	
	uni.navigateTo({
		url: '/pages/post/post?post_id=' + post_id
	})
}
console.log(import.meta.env.VITE_SERVER)


const session_key = ref()
export {session_key}
watch(session_key,(value,oldValue)=>{
	console.log(value)
	uni.setStorageSync("session_key",value)
	
})
export function login(){
	
	wx.login({
		success(res){
			console.log(res)
			wx.request({
				url:'http://localhost:8080/api/login',
				header:{
					code:res.code
				},
				success(res) {
					console.log(res)
					session_key.value=res.data.session_key
					console.log(session_key)
				}
			})
		}
	})
	
}