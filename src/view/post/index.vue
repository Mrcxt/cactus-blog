<template>
	<div class="post">
		<div class="p-5 view">
			<Article :post_res="post_res" />
			<div class="sidebar">
				<Anchor class="p-5" />
			</div>
		</div>
	</div>
</template>

<script>
	import Article from "./component/article.vue";
	import Anchor from "./component/anchor.vue";

	import { reactive, onBeforeMount, computed, watch, defineComponent } from "vue";
	import { useRoute } from "vue-router";
	import { getIssueDetails } from "@/api/index.js";

	export default defineComponent({
		components: {
			Article,
			Anchor,
		},
		setup(props) {
			const route = useRoute();

			const post_res = reactive({});

			onBeforeMount(async () => {
				await getIssueDetails(route.params.id).then((res) => {
					Object.assign(post_res, res);
				});
			});

			return {
				post_res,
			};
		},
	});
</script>

<style lang="less" scoped>
	.post {
		.view {
			display: flex;
			flex: 1;
			justify-content: space-between;
		}

		.sidebar {
			width: 200px;
			margin-left: 20px;
		}
		@media screen and (max-width: 960px) {
			.sidebar {
				display: none;
			}
		}
	}
</style>