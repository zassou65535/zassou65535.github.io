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
            </div>
		</MainBodyContent>
	</div>
</template>

<script>
import PageTitle from "../component/Versatile/PageTitle.vue"
import MainBodyContent from "../component/Versatile/MainBodyContent.vue"
import WrapperWithTitle from "../component/Versatile/WrapperWithTitle.vue"
import ContentCellWithPicture from "../component/Versatile/ContentCellWithPicture.vue"

export default {
    name: "serpent",
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

