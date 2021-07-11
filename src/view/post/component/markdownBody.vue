
<template>
	<div v-html="html" class="markdown_body"></div>
</template>

<script>
	import { defineComponent, computed, toRefs, watchEffect } from "vue";
	import marked from "@/util/marked";
	import "@/util/marked/style/index.less";

	export default defineComponent({
		props: {
			md: String,
		},
		setup(props, ctx) {
			const html = computed(() => marked(props.md));

			return { html };
		},
	});
</script>

<style lang="less" scoped>
</style>