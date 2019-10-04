<template>
	<div>
		<MenuBar class="z_index_1"></MenuBar>
		<Canvas class="z_index_0"></Canvas>
	</div>
</template>

<script>
import MenuBar from "./component/Menu/MenuBar.vue"
import Canvas from "./component/Top/Canvas.vue"
export default {
    name: "index",
    components: {
    	MenuBar,
    	Canvas,
    },
    props: {
    },
};
</script>

<style scoped lang="scss">
.z_index_0{
	z-index:0;
}
.z_index_1{
	z-index:1;
}
</style>

