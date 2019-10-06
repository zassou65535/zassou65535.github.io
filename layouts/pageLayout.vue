<template>
  <div>
	<Canvas></Canvas>
    <nuxt />
    <MenuBar></MenuBar>
  </div>
</template>

<script>
import MenuBar from "@/pages/component/Menu/MenuBar.vue"
import Canvas from "@/pages/component/Top/Canvas.vue"
export default {
    name: "pageLayout",
    components: {
    	MenuBar,
    	Canvas,
    },
    props: {
    },
};
</script>

<style scoped lang="scss">
</style>
