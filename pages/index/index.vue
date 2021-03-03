<template>
	<view class="page">
		<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
		<view class="posts" v-for="item in 7">
			<view class="title">
				我是标题我是标题
			</view>
			<view class="content">
				我是内容我是内容
			</view>
			<view class="like">
				点赞 评论
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
						{
							name: '前端'
						}, 
						{
							name: 'vue',
						}, 
						{
							name: 'golang',
						},
						{
							name: 'mysql'
						},
						{
							name:'redis'
						}
				],
				current: 0
			}
		},
		onLoad() {

		},
		methods: {
			change(index) {
				this.current = index;
			}
		}
	}
</script>

<style lang="scss">
	.page{
		.posts{
			margin: 0 10rpx 18rpx;
			background-color: #fff;
			border-radius: 6rpx;
			box-shadow: 0 0 12rpx #f2f3f5;
			.title{
				margin: 0rpx 10rpx 10rpx;
				padding-top: 20rpx;
				font-size: 34rpx;
				font-weight: 500;
			}
			.content{
				margin: 8rpx 10rpx;
			}
			.like{
				margin: 10rpx;
				padding-bottom: 10rpx;
			}
		}
	}
</style>
