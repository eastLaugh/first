<template>
	<view>
		{{session_key}}
	</view>
</template>

<script>
	import{login,session_key} from '../../src/send.js'
	export default {
		data() {
			return {
				session_key
			}
		},
		methods: {
			
		},
		onLoad() {
			login()
		}
	}
</script>

<style>

</style>
