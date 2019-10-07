<template>
    <div class="wrapper">
        <div class="inner">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
.wrapper{
    position:absolute;
    width:100%;
    height:auto;
    top:75%;
    left:0px;
    background-color:rgba(0,0,0,0.7);
    .inner{
        position:relative;
        width:90%;
        margin-left:5%;
        margin-right:5%;
        margin-top:50px;
        margin-bottom:50px;
        height:auto;
        background-color:rgba(0,0,0,0);
    }
}
</style>

<script>
    export default {
        name: "MainBodyContent",
        props: {
        },
    };
</script>
