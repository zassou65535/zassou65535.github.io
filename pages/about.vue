<template>
	<div>
		<PageTitle>ABOUT</PageTitle>
		<MainBodyContent>
			<WrapperWithTitle>
				<template v-slot:title><p>Nickname</p></template>
				<template v-slot:content><p>zassou</p></template>
			</WrapperWithTitle>
			<WrapperWithTitle>
				<template v-slot:title><p>University</p></template>
				<template v-slot:content>
					<p>Tokyo Institute of Technology</p>
					<p>Department of Information and Communications Engineering</p>
				</template>
			</WrapperWithTitle>
			<WrapperWithTitle>
				<template v-slot:title><p>likes</p></template>
				<template v-slot:content>
					<p>CTF(Capture The Flag)</p>
					<p>Creating Game</p>
					<p>Linux</p>
					<p>Splatoon</p>
				</template>
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

