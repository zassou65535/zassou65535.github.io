<template>
	<div>
        <template v-if="isThisPageWorks">
    		<PageTitle>WORKS</PageTitle>
    		<MainBodyContent>
                <WrapperWithTitle>
                    <template v-slot:title><p>Joint works</p></template>
                    <template v-slot:content><p></p></template>
                </WrapperWithTitle>
                <div class="works_contents_wrapper">
                    <ContentCellWithPicture
                        v-bind:image="{
                            src:image_koudaisai,
                            alt:'Tokyo Tech Fest 2018 Official Site'
                        }"
                        v-bind:linkURL="'https://2018.koudaisai.jp/'"
                        v-bind:isInternalLink="false">
                        <p>Tokyo Tech Fest 2018</p>
                        <p class="p_with_outerlink">Official Site&nbsp;</p>
                    </ContentCellWithPicture>

                    <ContentCellWithPicture
                        v-bind:image="{
                            src:image_mascot,
                            alt:'JIZI Mascot Site'
                        }"
                        v-bind:linkURL="'https://mascot.koudaisai.jp/'"
                        v-bind:isInternalLink="false">
                        <p class="p_with_outerlink">JIZI Mascot Site&nbsp;</p>
                    </ContentCellWithPicture>
                </div>
                <WrapperWithTitle>
                    <template v-slot:title><p>personal works</p></template>
                    <template v-slot:content><p></p></template>
                </WrapperWithTitle>
                <div class="works_contents_wrapper">
                    <ContentCellWithPicture
                        v-bind:image="{
                            src:image_melicon_converter,
                            alt:'Mel Icon Converter'
                        }"
                        v-bind:linkURL="'https://qiita.com/zassou65535/items/4bc42fa36203c13fe2d3'"
                        v-bind:isInternalLink="false">
                        <p>Mel Icon</p>
                        <p class="p_with_outerlink">Converter&nbsp;</p>
                    </ContentCellWithPicture>

                    <ContentCellWithPicture
                        v-bind:image="{
                            src:image_melicon_generator_2,
                            alt:'Mel Icon Generator 2'
                        }"
                        v-bind:linkURL="'https://qiita.com/zassou65535/items/57fe3bd677159cdb2528'"
                        v-bind:isInternalLink="false">
                        <p>Mel Icon</p>
                        <p class="p_with_outerlink">Generator 2&nbsp;</p>
                    </ContentCellWithPicture>

                    <ContentCellWithPicture
                        v-bind:image="{
                            src:image_melicon_generator,
                            alt:'Mel Icon Generator'
                        }"
                        v-bind:linkURL="'https://qiita.com/zassou65535/items/cad3f61177880e8230ab'"
                        v-bind:isInternalLink="false">
                        <p>Mel Icon</p>
                        <p class="p_with_outerlink">Generator&nbsp;</p>
                    </ContentCellWithPicture>

                    <ContentCellWithPicture
                        v-bind:image="{
                            src:image_serpent,
                            alt:'Serpent'
                        }"
                        v-bind:linkURL="'/works/serpent'"
                        v-bind:isInternalLink="true">
                        <p>Serpent</p>
                    </ContentCellWithPicture>
                </div>
    		</MainBodyContent>
        </template>
        <nuxt-child></nuxt-child>
	</div>
</template>

<script>
import PageTitle from "./component/Versatile/PageTitle.vue"
import MainBodyContent from "./component/Versatile/MainBodyContent.vue"
import WrapperWithTitle from "./component/Versatile/WrapperWithTitle.vue"
import ContentCellWithPicture from "./component/Versatile/ContentCellWithPicture.vue"

import image_koudaisai from '~/assets/img/koudaisai2018.png';
import image_mascot from '~/assets/img/mascot.png';
import image_melicon_converter from '~/assets/img/melicon_converter.png';
import image_melicon_generator_2 from '~/assets/img/melicon_generator_2.gif';
import image_melicon_generator from '~/assets/img/melicon_generator.png';
import image_serpent from '~/assets/img/serpent.png';

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
            image_mascot:image_mascot,
            image_melicon_converter:image_melicon_converter,
            image_melicon_generator_2:image_melicon_generator_2,
            image_melicon_generator:image_melicon_generator,
            image_serpent:image_serpent,
        }
    },
    computed:{
        isThisPageWorks:function(){
            return this.$route.name==='works';
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
}
</style>

