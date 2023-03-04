<template>
	<view class="content">

		<button type="default" @tap="SwicthToSendPage">留言</button>
		<view class="post-wrapper" v-for="item in newsInfo" @tap="SwicthToPostPage(item.id)">
			<view class="name-wrapper">
				{{item.name ? item.name : "[未留名]"}} :
			</view>
			<view class="content-wrapper">
				{{item.message}}
			</view>
		</view>
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



	function SwicthToPostPage(post_id) {
		uni.navigateTo({
			url: '/pages/post/post?post_id=' + post_id
		})
	}

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
				data,
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
	button {
		width: 100%;

	}

	.content-wrapper {
		width: 96%;
		margin: 0px 2%;
		line-height: 1em;
	}

	.post-wrapper {
		width: 100%;

	}

	.name-wrapper {

		width: 96%;
		margin: 5px 2%;
		background: whitesmoke;
		box-shadow: 1px 1px 1px black;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
