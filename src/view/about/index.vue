<template>
	<div class="about">
		<MarkdownBody :md="About" />
	</div>
</template>

<script>
	import { defineComponent } from "vue";
	import About from "@/md/_about.md";
	import MarkdownBody from "@/view/post/component/markdownBody.vue";

	export default defineComponent({
		components: { MarkdownBody },
		setup() {
			return {
				About,
			};
		},
	});
</script>


<style lang="less" scoped>
</style>