<template>
	<div>
		<BigTitle></BigTitle>
	</div>
</template>

<script>
import BigTitle from "./component/Top/BigTitle.vue"
export default {
    name: "index",
    layout:"pageLayout",
    components: {
    	BigTitle,
    },
    props: {
    },
};
</script>

<style scoped lang="scss">
</style>

