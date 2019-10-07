<template>
	<div>
		<PageTitle>ABOUT</PageTitle>
		<MainBodyContent>
			<WrapperWithTitle>
				<template v-slot:title>aaa</template>
				<template v-slot:content>bb</template>
			</WrapperWithTitle>
			<WrapperWithTitle>
				<template v-slot:title>aaa</template>
				<template v-slot:content>bb</template>
			</WrapperWithTitle>
		</MainBodyContent>
	</div>
</template>

<script>
import PageTitle from "./component/Versatile/PageTitle.vue"
import MainBodyContent from "./component/Versatile/MainBodyContent.vue"
import WrapperWithTitle from "./component/Versatile/WrapperWithTitle.vue"
export default {
    name: "about",
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

