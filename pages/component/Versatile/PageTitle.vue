<template>
    <div class="wrapper">
        <p>
            <slot></slot>
        </p>
    </div>
</template>

<style scoped lang="scss">
.wrapper{
    position:absolute;
    width:100%;
    height:calc(75% - 80px);
    top:80px;
    p{
        position:absolute;
        width:auto;
        height:auto;
        top:50%;
        left:47%;
        font-size:70px;
        color:$color_white;
        transform:translateX(-50%) translateY(-50%);
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
