<template>
	<view class="content">
		<button type="default" @tap="navigate()">返回</button>
		<button type="default" @tap="send">发送</button>
		<input type="text" v-model="name" />
		<textarea v-model="content" placeholder="请输入内容..." />
	</view>
</template>

<script setup>
	import{ref } from 'vue'
	import {session_key} from '../../src/send.js'
	const name = ref('')
	const content = ref('')
	function navigate(url) {
		if (url) {

		} else {
			uni.navigateBack()
		}
	}
	function send(){
		uni.$emit('send',{
			name:name.value,
			content:content.value,
			session_key:session_key.value
		})
		uni.navigateBack()
	}

</script>
<script>
		
	export default{
		onUnload(){
			uni.$off('send')
		},
		onLoad() {
			console.log(userInfo.value)
			if(userInfo.value){
				
			}
		}
	}
	
</script>
<style>
	.content{
		display: flex;
		flex-flow: column;
		align-items: center;
	}
	
	button{
		width: 100%;
	}
	textarea{
		width: 75%;
		border: solid 1px gray;
	}
</style>
