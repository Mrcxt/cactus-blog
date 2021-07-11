<template>
	<a-anchor-link v-for="item in data" :key="item.id" :href="item.anchor" :title="item.text">
		<AnchorItem v-if="item.children" :data="item.children" />
	</a-anchor-link>
</template>

<script>
	import { h, watchEffect } from "vue";

	export default {
		name: "AnchorItem",
		props: {
			data: {
				type: Array,
			},
		},
		setup(props) {
			return {};
		},
	};
</script>

<style lang="less" scoped>
</style>