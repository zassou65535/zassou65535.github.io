<template>
    <div class="wrapper">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
.wrapper{
    position:absolute;
    width:auto;
    height:auto;
    top:calc(50% - 40px);
    left:50%;
    color:$color_white;
    font-size:70px;
    transform:translateX(-50%) translateY(-50%);

    display: flex;
    flex-direction:column;
    justify-content: center;/*水平方向*/
    align-items:flex-start;/*垂直方向*/
}
</style>

<script>
    export default {
        name: "PageTitle",
        props: {
        },
    };
</script>
