<template>
	<div>
		<PageTitle>WORKS</PageTitle>
		<MainBodyContent>
            <WrapperWithTitle>
                <template v-slot:title><p>Works</p></template>
                <template v-slot:content><p></p></template>
            </WrapperWithTitle>
            <div class="works_contents_wrapper">
                <ContentCellWithPicture
                    v-bind:image="{
                        src:image_koudaisai,
                        alt:'Tokyo Tech Fest 2018 Official Site'
                    }"
                    v-bind:linkURL="'https://2018.koudaisai.jp/'">
                    <p>Tokyo Tech Fest 2018</p>
                    <p class="p_with_outerlink">Official Site&nbsp;</p>
                </ContentCellWithPicture>

                <ContentCellWithPicture
                    v-bind:image="{
                        src:image_koudaisai,
                        alt:'Tokyo Tech Fest 2018 Official Site'
                    }"
                    v-bind:linkURL="'https://2018.koudaisai.jp/'">
                    <p>Tokyo Tech Fest 2018</p>
                </ContentCellWithPicture>

                <ContentCellWithPicture
                    v-bind:image="{
                        src:image_koudaisai,
                        alt:'Tokyo Tech Fest 2018 Official Site'
                    }"
                    v-bind:linkURL="'https://2018.koudaisai.jp/'">
                    <p>Tokyo Tech Fest 2018</p>
                    <p class="p_with_outerlink">Official Site&nbsp;</p>
                </ContentCellWithPicture>
            </div>
		</MainBodyContent>
	</div>
</template>

<script>
import PageTitle from "./component/Versatile/PageTitle.vue"
import MainBodyContent from "./component/Versatile/MainBodyContent.vue"
import WrapperWithTitle from "./component/Versatile/WrapperWithTitle.vue"
import ContentCellWithPicture from "./component/Versatile/ContentCellWithPicture.vue"

import image_koudaisai from '~/assets/img/koudaisai2018.png';

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
    data(){
        return{
            image_koudaisai:image_koudaisai,
        }
    }
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

