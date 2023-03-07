<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	
	/*每个页面公共css */
	.content{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		align-items:stretch;
	}
</style>
