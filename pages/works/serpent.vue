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
                <video controls v-bind:src="serpentintroduce">
                    <p>動画の読み込みに失敗しました。</p>
                </video>
            </div>
		</MainBodyContent>
	</div>
</template>

<script>
import PageTitle from "../component/Versatile/PageTitle.vue"
import MainBodyContent from "../component/Versatile/MainBodyContent.vue"
import WrapperWithTitle from "../component/Versatile/WrapperWithTitle.vue"

import serpentintroduce from '~/assets/video/serpentintroduce.mp4';

export default {
    name: "serpent",
    layout:"pageLayout",
    components: {
    	PageTitle,
    	MainBodyContent,
        WrapperWithTitle,
    },
    data(){
        return{
            serpentintroduce:serpentintroduce,
        }
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
    video{
        position:relative;
        width:100%;
        height:auto;
        border:solid 1px $color_white;
    }
}
</style>

