<template>
	<view class="content">
		登录状态：{{isLogin}}
		<button type="default" @tap="login">使用微信账号登录</button>
		{{userInfo}}
		<label>昵称</label>
		<uni-easyinput v-model="nickname" type="nickname" placeholder="" />
		<button type="default" @tap="saveNickName">保存</button>
		
		{{session_key}}
		<button type="default" @tap="logoff">注销</button>
	</view>
</template>

<script>
	import{login,session_key, verify,userInfo,isLogin} from '../../src/send.js'
	export default {
		data() {
			return {
				session_key,
				nickname:'',
				userInfo,
				isLogin
			}
		},
		methods: {
			login,
			saveNickName(){
				console.log(this)
				uni.request({
					url:import.meta.env.VITE_SERVER+'/api/update',
					method:'POST',
					header:{
						'content-type': 'application/x-www-form-urlencoded'
					},
					data:{
						session_key:session_key.value,
						nickname:this.nickname
					},
					success() {
						verify()
					}
				})
			},
			logoff(){
				this.session_key=''
				uni.startPullDownRefresh()
			}
		},
		onLoad() {

		},
		onPullDownRefresh() {
			verify()
			uni.stopPullDownRefresh()
		},
		watch:{
			userInfo:{
				handler(value,oldValue){
					this.nickname=value?.nickname
				},
				immediate:true
			}
		}
	}
</script>

<style>

</style>
