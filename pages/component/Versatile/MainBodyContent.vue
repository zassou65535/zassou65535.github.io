<template>
    <div class="wrapper">
    </div>
</template>

<style scoped lang="scss">
.wrapper{
    position:absolute;
    width:100%;
    height:100%;
    top:75%;
    left:0px;
    background-color:rgba(0,0,0,0.7);

    display: flex;
    flex-direction:column;
    justify-content: center;/*水平方向*/
    align-items:flex-start;/*垂直方向*/
}
</style>

<script>
    export default {
        name: "MainBodyContent",
        props: {
        },
    };
</script>
