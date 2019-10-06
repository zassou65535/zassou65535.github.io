<template>
    <div class="movingtitle_wrapper">
        <div class="line" v-for="string in titleStrings">
            <div class="each_character" v-for="character in string">{{character}}</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.movingtitle_wrapper{
    position:relative;
    width:100%;
    height:auto;

    display: flex;
    flex-direction:column;
    justify-content: center;/*水平方向*/
    align-items:center;/*垂直方向*/
    .line{
        position:relative;
        width:100%;
        height:auto;

        display: flex;
        flex-direction:row;
        justify-content: flex-start;/*水平方向*/
        align-items:center center;/*垂直方向*/
        .each_character{
            position:relative;
            font-size:60px;
        }
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
