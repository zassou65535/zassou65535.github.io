<template>
	<div>
		<PageTitle>{{ error.statusCode }}</PageTitle>
		<MainBodyContent>
            <WrapperWithTitle>
                <template v-slot:title><p>{{ error.statusCode }}&nbsp;Error</p></template>
                <template v-slot:content>
                    <p v-if="error.statusCode === 404">
                    	This page couldn't be found.
                    </p>
                    <p v-else>
                    	An error occurred.
                    </p>
                </template>
            </WrapperWithTitle>
		</MainBodyContent>
	</div>
</template>

<script>
import PageTitle from "../pages/component/Versatile/PageTitle.vue"
import MainBodyContent from "../pages/component/Versatile/MainBodyContent.vue"
import WrapperWithTitle from "../pages/component/Versatile/WrapperWithTitle.vue"
export default {
    name: "error",
    layout:"pageLayout",
    components: {
    	PageTitle,
    	MainBodyContent,
        WrapperWithTitle,
    },
    props: ['error'],
};
</script>

<style scoped lang="scss">
</style>

