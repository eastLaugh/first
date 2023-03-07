import {
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


const session_key = ref(uni.getStorageSync("session_key"))
export {
	session_key
}

watch(session_key, (value, oldValue) => {
	uni.setStorageSync("session_key", value)

})
export function login() {
	if (session_key.value) {
		console.log('#1')
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
				console.log(res)
				if (res.success) {

				} else {
					session_key.value = ""
					login()
				}
			},
			fail() {
				uni.showToast({
					title: '出错了'
				})
			}
		})

	} else {
		console.log('#2')
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
}
