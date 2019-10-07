<template>
    <div class="main_body_content">
        <div class="main_body_inner">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
.main_body_content{
    position:absolute;
    width:100%;
    height:auto;
    top:75%;
    left:0px;
    background-color:rgba(0,0,0,0.7);
    .main_body_inner{
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
