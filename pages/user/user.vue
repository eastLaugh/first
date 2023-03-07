<template>
	<view>
<!-- 		<button type="default" open-type="chooseAvatar">
			<image class="avatar" src="{{avatarUrl}}"></image>
		</button> -->
		<label>昵称</label>
		<uni-easyinput v-model="nickname" type="nickname" placeholder="" />
		<button type="default">保存</button>
		
		{{session_key}}
		<button type="default" @tap="()=>{
			session_key=''
		}">清除本地缓存</button>
	</view>
</template>

<script>
	import{login,session_key} from '../../src/send.js'
	export default {
		data() {
			return {
				session_key,
				nickname:''
			}
		},
		methods: {
			
		},
		mounted() {
			console.log('mounted不被调用')
		},
		onLoad() {
			login()
		},
		onPullDownRefresh() {
			login()
			uni.stopPullDownRefresh()
		},
		watch:{
			session_key(value,oldValue){
				console.log(value)
			}
		}
	}
</script>

<style>

</style>
