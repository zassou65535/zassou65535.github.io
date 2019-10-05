<template>
    <div class="canvas">
    </div>
</template>

<script>
    export default {
        name: "Canvas",
        props: {
        },
    };
</script>

<style scoped lang="scss">
.canvas{
    position:fixed;
    width:100%;
    height:100%;
    top:0px;
    left:0px;
    background:$color_black;
}
</style>