<template>
    <div class="content_cell_with_picture">
        <div class="content_cell_with_picture-border">
            <span class="content_cell_with_picture-border-left"></span>
            <span class="content_cell_with_picture-border-top"></span>
            <span class="content_cell_with_picture-border-right"></span>
            <span class="content_cell_with_picture-border-bottom"></span>
        </div>
        <div class="content_cell_with_picture-picture">
            <img :src="image.src" :alt="image.alt"/>
            <div class="content_cell_with_picture-picture-view_more">
                <p>VIEW MORE</p>
            </div>
        </div>
        <div class="content_cell_with_picture-title">
            <slot></slot>
        </div>
        <router-link v-if="isInternalLink" class="content_cell_with_picture-link" :to="linkURL"></router-link>
        <a v-else class="content_cell_with_picture-link" :href="linkURL"></a>
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
    &-border{
        position:absolute;
        top:0px;
        left:0px;
        width:100%;
        height:100%;
        background-color:rgba(0,0,0,0);
        span{
            position:absolute;
            background-color:$color_white;
            transition:all 0.2s ease;
        }
        &-left{
            width:1px;
            height:100%;
            top:0%;
            left:0%;
        }
        &-top{
            width:100%;
            height:1px;
            top:0%;
            left:0%;
        }
        &-right{
            width:1px;
            height:100%;
            bottom:0%;
            right:0%;
        }
        &-bottom{
            width:100%;
            height:1px;
            bottom:0%;
            right:0%;
        }
        &:after{
            content:"";
            position:absolute;
            bottom:0px;
            left:0px;
            width:100%;
            height:0%;
            background-color: $color_white;
            transition:all 0.2s ease;
        }
    }
    &-picture{
        position:relative;
        width:80%;
        height:auto;
        background:$color_white;
        font-size:30px;
        transition:all 0.15s ease;
        overflow:hidden;
        margin-top:20px;
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
        &-view_more{
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
                text-align:center;
            }
        }
    }
    &-title{
        position:relative;
        width:100%;
        height:auto;
        min-height:74px;
        margin-bottom:20px;

        display:flex;
        flex-direction:column;
        justify-content: center;/*水平方向*/
        align-items:center;/*垂直方向*/
        p{
            color:$color_white;
            font-size:25px;
            text-align: center;
            transition:all 0.2s ease;
        }
    }
    &:hover{
        .content_cell_with_picture-border{
            &:after{
                height:100%;
            }
        }
        .content_cell_with_picture-picture{
            img{
                transform:translateX(-50%) translateY(-50%) scaleX(1.2) scaleY(1.2);
            }
            &-view_more{
                background-color:rgba(0,0,0,0.6);
                p{
                    top:50%;
                    left:50%;
                    color:rgba(255,255,255,1);
                }
            }
        }
        .content_cell_with_picture-title{
            p{
                color:$color_black;
            }
        }
    }
    &-link{
        position:absolute;
        top:0px;
        left:0px;
        width:100%;
        height:100%;
        opacity:0;
    }
}
@media screen and (max-width: 780px){
    .content_cell_with_picture{
        width:90%;
        margin-left:0px;
        margin-right:0px;
        &-title{
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
        &-title{
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
            linkURL:String,
            image:Object,
            isInternalLink:Boolean,//内部リンクかどうか
        },
    };
</script>
