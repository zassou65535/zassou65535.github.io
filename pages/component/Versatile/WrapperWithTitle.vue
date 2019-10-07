<template>
    <div class="wrapper_with_title">
        <div class="wrapper_with_title-title"><slot name="title"></slot></div>
        <div class="wrapper_with_title-content"><slot name="content"></slot></div>
    </div>
</template>

<style scoped lang="scss">
.wrapper_with_title{
    position:relative;
    width:100%;
    height:auto;
    margin-bottom:20px;
    display:flex;
    flex-direction:column;
    .wrapper_with_title-title{
        position:relative;
        width:auto;
        height:auto;
        margin-left:30px;
        color:$color_gray;
        font-size:20px;
    }
    .wrapper_with_title-content{
        position:relative;
        width:auto;
        height:auto;
        margin-left:30px;
        color:$color_white;
        font-size:20px;
    }
}
</style>

<script>
    export default {
        name: "PageTitle",
        props: {
        },
    };
</script>
