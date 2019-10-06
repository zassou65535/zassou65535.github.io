<template>
    <div class="bigtitle_wrapper">
        <div class="bigline">
            <MovingTitle v-bind:titleStrings="['zassou\'s','atelier']"></MovingTitle>
        </div>
        <p class="subline">- Collection of works -</p>
    </div>
</template>

<style scoped lang="scss">
.bigtitle_wrapper{
    position:absolute;
    width:auto;
    height:auto;
    top:50%;
    left:50%;
    background-color:rgba(0,0,0,0);
    transform:translateX(-50%) translateY(-50%);
    .bigline{
        position:rerative;
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

        display: flex;
        flex-direction:row;
        justify-content: center;/*水平方向*/
        align-items:center center;/*垂直方向*/
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
