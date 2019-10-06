<template>
	<div>
		<MenuBar class="z_index_1"></MenuBar>
	</div>
</template>

<script>
import MenuBar from "./component/Menu/MenuBar.vue"
export default {
    name: "index",
    components: {
    	MenuBar,
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

