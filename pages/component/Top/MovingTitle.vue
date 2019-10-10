<template>
    <div class="movingtitle_wrapper">
        <template v-if="titleStrings!=null">
            <div class="line" v-for="index_line in titleStrings.length">
                <div 
                 v-bind:class="'each_character emerge_char'+(titleStrings[index_line-1][1]+index_char-1)"
                 v-for="index_char in titleStrings[index_line-1][0].length">
                    {{titleStrings[index_line-1][0][index_char-1]}}
                </div>
            </div>
        </template>
    </div>
</template>

<style scoped lang="scss">
$max_characters:20; //最大文字数
$emerge_duration:0.35s; //文字の出現にかかる時間
$wait_duration:-0.3s; //ある文字が出現してから、次の文字の出現にかかる時間

.movingtitle_wrapper{
    position:relative;
    width:100%;
    height:auto;
    background-color:rgba(0,0,0,0);
    color:$color_white;

    display: flex;
    flex-direction:column;
    justify-content: center;/*水平方向*/
    align-items:center;/*垂直方向*/
    .line{
        position:relative;
        width:100%;
        height:auto;
        line-height:90px;

        display: flex;
        flex-direction:row;
        justify-content: center;/*水平方向*/
        align-items:center center;/*垂直方向*/
        .each_character{
            position:relative;
            font-size:80px;
            opacity:0;
        }
    }
}

@keyframes emerge_char_base{
    0%{opacity:0;}
    100%{opacity:1;}
}
@for $i from 0 through $max_characters{
    .emerge_char#{$i}{
        animation-name:emerge_char_base;
        animation-duration:$emerge_duration;
        animation-timing-function:ease;
        animation-delay:($emerge_duration+$wait_duration)*$i;
        animation-fill-mode:forwards;
    }
}
</style>

<script>
    export default {
        name: "BigTitle",
        props: {
            titleStrings:Array,
        },
        data:function(){
            return{
                char_counter:0,
            };
        },
        created:function(){//on load
            if (!process.client) {
              return;
            }
        },
        methods:{
        },
    };
</script>
