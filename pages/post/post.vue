<template>
	<view class="content">
		<uni-list>
			<uni-list-item v-for="(item,index) in postInfo" @tap="()=>{
				if(index!=0)
					SwicthToPostPage(item.id)
			}" :key="item.id"  :note="item.name ? item.name : '[未留名]' " :title="item.message" link>
			233
				<template v-slot:footer style="font-size: small;">
					{{item.created_at}}
				</template>
			</uni-list-item>
		</uni-list>
	</view>
	
	<uni-fab 
		horizontal="right"
		@fabClick="review"
	></uni-fab>
</template>
<script>
	import {bringUp} from '../../src/send.js'
	import {SwicthToPostPage} from '../../src/send.js'
	export default {

		data() {
			return {
				postInfo: [],
				input:''
			}
		},
		onLoad(e) {
			this.post_id=e.post_id
			uni.startPullDownRefresh()
		},
		post_id:-1,
		methods: {
			SwicthToPostPage,
			refresh(post_id) {
				uni.showLoading()
				uni.request({
					url: 'http://localhost:8080/api/getdetails',
					method: 'GET',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					data: {
						post_id
					},
					success: (response) => {
						this.postInfo = response.data;
						uni.stopPullDownRefresh()
						uni.hideLoading()
					}
				})
			},		
			review(){
				bringUp((data)=>{
					console.log(data)
					uni.request({
						url:"http://localhost:8080/api/review",
						method:'POST',
						header:{
							'content-type':'application/x-www-form-urlencoded'
						},
						data:{
							...data,
							father_id:this.post_id
						},
						success:(response)=> {
							uni.showToast({
								title:"发送成功"
							})
							uni.startPullDownRefresh()
						}
					})
				})
			}
		},
		onPullDownRefresh() {
			this.refresh(this.post_id)
		}
	}
</script>

<style>

</style>
