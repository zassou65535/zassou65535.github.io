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
				<template v-slot:title><p>Likes</p></template>
				<template v-slot:content>
					<p>Machine learning</p>
					<p>CTF</p>
					<p>AtCoder</p>
					<p>Unity</p>
					<p>Blender</p>
					<p>Pokemon</p>
					<p>Splatoon</p>
				</template>
			</WrapperWithTitle>
			<WrapperWithTitle>
				<template v-slot:title><p>Contact</p></template>
				<template v-slot:content>
					<a class="a_green" target="_blank" href="https://github.com/zassou65535"><p class="p_with_outerlink">GitHub&nbsp;</p></a>
					<a class="a_green" target="_blank" href="https://twitter.com/zassouEX"><p class="p_with_outerlink">twitter&nbsp;</p></a>
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

