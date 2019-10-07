<template>
	<div>
		<PageTitle>ABOUT</PageTitle>
		<MainBodyContent>
		</MainBodyContent>
	</div>
</template>

<script>
import PageTitle from "./component/Versatile/PageTitle.vue"
import MainBodyContent from "./component/Versatile/MainBodyContent.vue"
export default {
    name: "about",
    layout:"pageLayout",
    components: {
    	PageTitle,
    	MainBodyContent,
    },
    props: {
    },
};
</script>

<style scoped lang="scss">
</style>

