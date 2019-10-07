<template>
	<div>
		<PageTitle>WORKS</PageTitle>
		<MainBodyContent>
            <WrapperWithTitle>
                <template v-slot:title><p>Works</p></template>
                <template v-slot:content><p></p></template>
            </WrapperWithTitle>
		</MainBodyContent>
	</div>
</template>

<script>
import PageTitle from "./component/Versatile/PageTitle.vue"
import MainBodyContent from "./component/Versatile/MainBodyContent.vue"
import WrapperWithTitle from "./component/Versatile/WrapperWithTitle.vue"
export default {
    name: "works",
    layout:"pageLayout",
    components: {
    	PageTitle,
    	MainBodyContent,
        WrapperWithTitle,
    },
    props: {
    },
};
</script>

<style scoped lang="scss">
</style>

