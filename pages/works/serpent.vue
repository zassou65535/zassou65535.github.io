<template>
	<div>
		<PageTitle>Serpent</PageTitle>
		<MainBodyContent>
            <WrapperWithTitle>
                <template v-slot:title><p>Introduction</p></template>
                <template v-slot:content>
                    <p> BlenderとUnityで都市をイメージしたステージを作りました。以下はその紹介動画です。</p>
                </template>
            </WrapperWithTitle>
            <div class="works_contents_wrapper">
                <div class="works_contents_wrapper-video_wrapper">
                    <iframe src="https://www.youtube.com/embed/mSqe-wVHDe0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
		</MainBodyContent>
	</div>
</template>

<script>
import PageTitle from "../component/Versatile/PageTitle.vue"
import MainBodyContent from "../component/Versatile/MainBodyContent.vue"
import WrapperWithTitle from "../component/Versatile/WrapperWithTitle.vue"
export default {
    name: "serpent",
    layout:"pageLayout",
    components: {
    	PageTitle,
    	MainBodyContent,
        WrapperWithTitle,
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
    &-video_wrapper{
        position:relative;
        width:100%;
        height:auto;
        border:solid 1px $color_white;
        iframe{
            position:relative;
            width:100%;
            height:59vw;
        }
    }
}
</style>

