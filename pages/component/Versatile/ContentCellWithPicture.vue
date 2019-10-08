<template>
    <div class="content_cell_with_picture">
        <div class="content_cell_with_picture-picture">
            <img :src="image.src" :alt="image.alt"/>
        </div>
        <div class="content_cell_with_picture-title">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
.content_cell_with_picture{
    position:relative;
    width:30%;
    min-width:300px;
    height:auto;
    margin-bottom:50px;
    background-color:rgba(0,0,0,0);

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
        overflow:hidden;
        &:before{/*この要素のアスペクト比を固定する*/
            content:'';
            display:block;
            width:100%;
            height:0px;
            padding-bottom:59%;
        }
        img{
            position:absolute;
            top:50%;
            left:50%;
            width:104%;
            height:auto;
            min-height:100%;
            max-width:inherit;
            background-size:cover;
            transform:translateX(-50%) translateY(-50%) scaleX(1.0) scaleY(1.0);
            transition:all 0.2s ease;
        }
    }
    &:hover{
        .content_cell_with_picture-picture{
            img{
                position:absolute;
                top:50%;
                left:50%;
                width:100%;
                height:auto;
                min-width:100%;
                min-height:100%;
                max-width:inherit;
                background-size:cover;
                transform:translateX(-50%) translateY(-50%);
                transform:translateX(-50%) translateY(-50%) scaleX(1.2) scaleY(1.2);
            }
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
            font-size:25px;
            text-align: center;
        }
    }
}
@media screen and (max-width: 780px){
    .content_cell_with_picture{
        width:90%;
        margin-left:0px;
        margin-right:0px;
        .content_cell_with_picture-title{
            p{
                font-size:30px;
            }
        }
    }
}
@media screen and (min-width: 781px){
    .content_cell_with_picture{
        width:30%;
        margin-left:10px;
        margin-right:10px;
        .content_cell_with_picture-title{
            p{
                font-size:25px;
            }
        }
    }
}
</style>

<script>
    export default {
        name: "ContentCellWithPicture",
        props: {
            image:Object,
        },
    };
</script>
