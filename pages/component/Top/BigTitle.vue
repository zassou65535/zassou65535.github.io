<template>
    <div class="entire_wrapper">
        <div class="background_black"></div>
        <div class="bigtitle_wrapper">
            <div class="bigline">
                <MovingTitle v-bind:titleStrings="[['zassou\'s',0],['atelier',8]]"></MovingTitle>
            </div>
            <p class="subline">- Collection of works -</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
$wait_background_clear:1.2s;//ページが表示されてから、背景を透過し始めるまでの時間
$duration_background_clear:0.3s;//背景を透過するのにかける時間
$wait_subtitle_emerge:0.3s;//背景が透過し終わってから、副題を表示し始めるまでの時間

.entire_wrapper{
    position:absolute;
    width:100%;
    height:100%;
    top:0px;
    left:0px;
    background-color:rgba(0,0,0,0);
    .background_black{
        position:fixed;
        width:100%;
        height:100%;
        top:0px;
        left:0px;
        background-color:rgba(0,0,0,1);

        animation-name:background_black_fadeout;
        animation-duration:$duration_background_clear;
        animation-timing-function:ease;
        animation-delay:$wait_background_clear;
        animation-fill-mode:forwards;
    }
    @keyframes background_black_fadeout{
        0%{opacity:1;}
        100%{opacity:0;}
    }
    .bigtitle_wrapper{
        position:absolute;
        width:auto;
        height:auto;
        top:50%;
        left:50%;
        background-color:rgba(0,0,0,0);
        transform:translateX(-50%) translateY(-50%);
        .background_black{
            position:fixed;
            top:0px;
            left:0px;
            width:100%;
            height:100%;
            background-color:rgba(0,0,0,1);
        }
        .bigline{
            position:relative;
            width:100%;
            height:auto;
        }
        .subline{
            position: absolute;
            width:100%;
            height:auto;
            font-size:27px;
            background-color:rgba(0,0,0,0);
            color:$color_white;
            margin-top:14px;

            display: flex;
            flex-direction:row;
            justify-content: center;/*水平方向*/
            align-items:center;/*垂直方向*/

            opacity:0;
            animation-name:subline_emerge;
            animation-duration:$duration_background_clear;
            animation-timing-function:ease;
            animation-delay:$wait_background_clear+$wait_subtitle_emerge;
            animation-fill-mode:forwards;
        }
        @keyframes subline_emerge{
            0%{opacity:0;}
            100%{opacity:1;}
        }
    }
}
</style>

<script>
    import MovingTitle from "./MovingTitle.vue"

    export default {
        name: "BigTitle",
        components: {
            MovingTitle,
        },
        data:function(){
            return{
            };
        },
        created:function(){//on load
            if (!process.client) {
              return;
            }
        },
        methods:{
        }
    };
</script>
