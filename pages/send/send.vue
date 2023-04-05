<template>
	<view class="content">
		<button type="default" @tap="navigate()">返回</button>
		<button type="default" @tap="send">发送</button>
		<uni-easyinput style="height: 100%;" v-model="content" placeholder="" type="textarea"/>
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
		}
	}
	
</script>
<style>
</style>
