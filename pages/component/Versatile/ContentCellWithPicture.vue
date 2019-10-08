<template>
    <div class="content_cell_with_picture">
        <div class="content_cell_with_picture-picture">
            <img :src="image.src" :alt="image.alt"/>
            <div class="content_cell_with_picture-view_more">
                <p>VIEW MORE</p>
            </div>
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
        .content_cell_with_picture-view_more{
            position:absolute;
            top:0px;
            left:0px;
            width:100%;
            height:100%;
            background-color:rgba(0,0,0,0);
            transition:all 0.2s ease;
            p{
                position:absolute;
                width:100%;
                height:auto;
                top:70%;
                left:50%;
                font-size:30px;
                color:rgba(255,255,255,0);
                transform:translateX(-50%) translateY(-50%);
                transition:all 0.2s ease;
            }
        }
    }
    &:hover{
        .content_cell_with_picture-picture{
            img{
                transform:translateX(-50%) translateY(-50%) scaleX(1.2) scaleY(1.2);
            }
            .content_cell_with_picture-view_more{
                background-color:rgba(0,0,0,0.6);
                p{
                    top:50%;
                    left:50%;
                    color:rgba(255,255,255,1);
                }
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
