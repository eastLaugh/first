<template>
	<view class="content">

		<button type="default" @tap="SwicthToSendPage">留言</button>
		
		
		<uni-list>
			<uni-list-item v-for="item in newsInfo"  @tap="SwicthToPostPage(item.id)" :key="item.id" :title="item.message" :note="item.name ? item.name : '未留名'" link>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		bringUp
	} from '../../src/send.js'
	import{
		onPullDownRefresh
	} from '@dcloudio/uni-app'
	import {SwicthToPostPage} from '../../src/send.js'
	

	function SwicthToSendPage() {
		bringUp((data) => {
			uni.showToast({
				title: '已发送',
				duration: 2000
			});
			uni.request({
				url: 'http://localhost:8080/api/send',
				method: 'POST',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				data:{
					...data,
					openid:2333
				},
				success(res) {
					uni.startPullDownRefresh()
				},
				fail() {
					uni.showToast({
						title:'出错了'
					})
				}
			})
		})
	}

	const newsInfo = ref()
	uni.startPullDownRefresh()
	
	onPullDownRefresh(() => {
		refresh()
		uni.showLoading()
	})
	
	function refresh() {
		uni.request({
			url: 'http://localhost:8080/api/getall',
			method: 'GET',
			success(response) {
				newsInfo.value = response.data;
				uni.hideLoading()
				uni.stopPullDownRefresh()
			}
		})
	}
</script>
<style>
		
	button{
		width: 100%;
	}

</style>
