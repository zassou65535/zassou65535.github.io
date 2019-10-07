<template>
	<div>
		<PageTitle>WORKS</PageTitle>
		<MainBodyContent>
            <WrapperWithTitle>
                <template v-slot:title><p>Works</p></template>
                <template v-slot:content><p></p></template>
            </WrapperWithTitle>
            <div class="works_contents_wrapper">
                <ContentCellWithPicture/>
                <ContentCellWithPicture/>
                <ContentCellWithPicture/>
            </div>
		</MainBodyContent>
	</div>
</template>

<script>
import PageTitle from "./component/Versatile/PageTitle.vue"
import MainBodyContent from "./component/Versatile/MainBodyContent.vue"
import WrapperWithTitle from "./component/Versatile/WrapperWithTitle.vue"
import ContentCellWithPicture from "./component/Versatile/ContentCellWithPicture.vue"
export default {
    name: "works",
    layout:"pageLayout",
    components: {
    	PageTitle,
    	MainBodyContent,
        WrapperWithTitle,
        ContentCellWithPicture,
    },
    props: {
    },
};
</script>

<style scoped lang="scss">
.works_contents_wrapper{
    position:relative;
    width:100%;
    height:auto;

    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content: center;/*水平方向*/
    align-items:flex-start;/*垂直方向*/
}
</style>

