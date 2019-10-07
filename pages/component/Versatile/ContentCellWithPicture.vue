<template>
    <div class="content_cell_with_picture">
        <div class="content_cell_with_picture-picture"></div>
        <div class="content_cell_with_picture-title">
            <p>aaa</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.content_cell_with_picture{
    position:relative;
    width:30%;
    min-width:300px;
    height:auto;
    margin-bottom:20px;
    background:$color_gray;

    display:flex;
    flex-direction:column;
    justify-content: center;/*水平方向*/
    align-items:center;/*垂直方向*/
    .content_cell_with_picture-picture{
        position:relative;
        width:80%;
        height:auto;
        background:$color_white;
        font-size:30px;
        transition:all 0.15s ease;
        &:before{/*この要素のアスペクト比を固定する*/
            content:'';
            display:block;
            width:100%;
            height:0px;
            padding-bottom:59%;
        }
    }
    &:hover{
        .content_cell_with_picture-picture{
        }
    }
    .content_cell_with_picture-title{
        position:relative;
        width:100%;
        height:auto;

        display:flex;
        flex-direction:column;
        justify-content: center;/*水平方向*/
        align-items:center;/*垂直方向*/
        p{
            color:$color_white;
            font-size:30px;
        }
    }
}
@media screen and (max-width: 780px){
    .content_cell_with_picture{
        width:90%;
        margin-left:0px;
        margin-right:0px;
    }
}
@media screen and (min-width: 781px){
    .content_cell_with_picture{
        width:30%;
        margin-left:10px;
        margin-right:10px;
    }
}
</style>

<script>
    export default {
        name: "ContentCellWithPicture",
        props: {
        },
    };
</script>
