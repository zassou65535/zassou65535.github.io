<template>
	<div>
		<MenuBar class="z_index_1"></MenuBar>
		<Canvas class="z_index_0"></Canvas>
		<BigTitle class="z-index_2"></BigTitle>
	</div>
</template>

<script>
import MenuBar from "./component/Menu/MenuBar.vue"
import Canvas from "./component/Top/Canvas.vue"
import BigTitle from "./component/Top/BigTitle.vue"
export default {
    name: "index",
    components: {
    	MenuBar,
    	Canvas,
    	BigTitle,
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
.z_index_2{
	z-index:2;
}
</style>

