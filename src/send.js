import {
	computed,
	ref,
	watch
} from 'vue'
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
console.log(
	import.meta.env.VITE_SERVER + '/api/verify')


const session_key = ref()
watch(session_key, (value, oldValue) => {
	console.log(value)
	uni.setStorageSync("session_key", value)
	if(value){
		verify()
	}else{
		// login()
	}
})
session_key.value=uni.getStorageSync("session_key")
export const isLogin = computed(()=>{
	return Boolean(userInfo.value);
})
export function login() {
	console.log('#login')
	wx.login({
		success(res) {
			wx.request({
				url: 'http://localhost:8080/api/login',
				header: {
					code: res.code
				},
				success(res) {
					session_key.value = res.data.session_key
				},
				fail() {
					uni.showToast({
						title: '出错了'
					})
				}
			})
		}
	})
}

const userInfo = ref() 
export {
	session_key,
	userInfo
}
export function verify() {
	console.log('#verify')
	uni.request({
		url: 'http://localhost:8080/api/verify',
		method: 'POST',
		header: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		data: {
			session_key: session_key.value
		},
		success: (res) => {
			if (res.data.success) {
				userInfo.value=res.data.data
			} else {
				// login()
				userInfo.value=''
			}
		},
		fail() {
			uni.showToast({
				title: '出错了'
			})
		}
	})

}
