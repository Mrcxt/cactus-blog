
<template>
	<div class="anchor">
		<a-anchor>
			<AnchorItem :data="toc" />
		</a-anchor>
	</div>
</template>

<script>
	import { h, watchEffect } from "vue";
	import { toc } from "@/util/marked";
	import AnchorItem from "./anchor-item.vue";

	export default {
		name: "Anchor",
		components: { AnchorItem },
		setup() {
			return {
				toc,
			};
		},
	};
</script>

<style lang="less" scoped>
	.anchor {
		::v-deep(.ant-anchor-wrapper) {
			margin-left: -5px;
			padding-left: 5px;
			.ant-anchor-link-title {
				&:hover {
					border-bottom: 1px solid transparent;
					color: var(--main-color);
				}
			}
			.ant-anchor-ink-ball {
				border-color: var(--main-color);
			}
			.ant-anchor-link-title-active {
				color: var(--main-color);
			}
		}
	}
</style>