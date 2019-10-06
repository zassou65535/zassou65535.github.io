<template>
    <div class="bigtitle_wrapper">
        <div class="bigline">
            <MovingTitle v-bind:titleStrings="['zassou\'s','atelier']"></MovingTitle>
        </div>
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
