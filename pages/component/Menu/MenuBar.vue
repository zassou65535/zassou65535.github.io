<template>
    <div class="menubar_entity">
        <input id="menu_checkbox" type="checkbox" value="off">
        <ul class="navigation_sp">
            <li @click="CloseMenu();"><p>TOP</p><router-link to="/"></router-link></li>
            <li @click="CloseMenu();"><p>ABOUT</p><router-link to="/about"></router-link></li>
            <li @click="CloseMenu();"><p>WORKS</p><router-link to="/works"></router-link></li>
        </ul>
        <a href="/" class="top_link">
            <p>zassou's</p>
            <p>atelier</p>
        </a>
        <label class="hamburger" for="menu_checkbox">
            <div class="bars">
                <span class="bar_top"></span>
                <span class="bar_middle"></span>
                <span class="bar_bottom"></span>
            </div>
            <p>
                <span>M</span>
                <span>E</span>
                <span>N</span>
                <span>U</span>
            </p>
        </label>
        <ul class="navigation_pc">
            <li><p>Top</p><router-link to="/"></router-link></li>
            <li><p>ABOUT</p><router-link to="/about"></router-link></li>
            <li><p>WORKS</p><router-link to="/works"></router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "menubar",
        props: {
        },
        methods:{
            CloseMenu:function(){
                (document.querySelector("#menu_checkbox")).checked = false;
            }
        },
    };
</script>

<style scoped lang="scss">
.menubar_entity{
    position:fixed;
    width:100% - 7*2%;
    height:80px;
    top:0px;
    left:0px;
    background:rgba(0,0,0,0.5);
    padding-left:7%;
    padding-right:7%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;/*水平方向*/
    align-items:center;/*垂直方向*/
    #menu_checkbox{
        display:none;
    }
    .top_link{
        position: relative;
        height:auto;
        width:auto;
        background:rgba(100,200,0,0);
        text-decoration: none;
        color:$color_white;
        transition:all 0.2s ease;
        line-height:1.6rem;

        display: flex;
        flex-direction: column;
        justify-content: center;/*水平方向*/
        align-items:flex-start;/*垂直方向*/
        p{
            text-decoration: none;
            font-size:23px;
        }
    }

    @media screen and (min-width: 681px){
        ul.navigation_sp{display:none;}
        .hamburger{ display:none; }
        .navigation_pc{
            display:inline;
            position:relative;
            width:60%;
            height:100%;
            background-color: rgba(100,100,100,0);

            display: flex;
            flex-direction: row;
            justify-content: flex-end;/*水平方向*/
            align-items:center;/*垂直方向*/
            li{
                width:100px;
                height:45px;
                position:relative;
                list-style: none;
                margin-left:20px;
                transition:all 0.2s ease;
                background-color:rgba(0,0,200,0);

                display: flex;
                justify-content: center;/*水平方向*/
                align-items:center;/*垂直方向*/
                a{
                    text-decoration:none;
                    background-color:rgba(0,0,0,0);
                    position:absolute;
                    top:0px;
                    left:0px;
                    width:100%;
                    height:100%;

                    &::before{/*右*/
                        content:"";
                        position:absolute;
                        width:1px;
                        height:0%;
                        right:0px;
                        bottom:0px;
                        background:$color_white;
                        transition:all 0.2s ease;
                    }
                    &::after{/*下*/
                        content:"";
                        position:absolute;
                        width:0%;
                        height:1px;
                        right:0px;
                        bottom:0px;
                        background:$color_white;
                        transition:all 0.2s ease;
                    }
                }
                p{
                    font-size:15px;
                    color:$color_white;
                    padding-left:5px;
                    padding-right:5px;

                    &::before{/*左*/
                        content:"";
                        position:absolute;
                        width:1px;
                        height:0%;
                        left:0px;
                        top:0px;
                        background:$color_white;
                        transition:all 0.2s ease;
                    }
                    &::after{/*上*/
                        content:"";
                        position:absolute;
                        width:0%;
                        height:1px;
                        left:0px;
                        top:0px;
                        background:$color_white;
                        transition:all 0.2s ease;
                    }
                }
                &:hover{
                    a{
                        &::before{/*右*/
                            height:100%;
                        }
                        &::after{/*下*/
                            width:100%;
                        }
                    }
                    p{
                        &::before{/*左*/
                            height:100%;
                        }
                        &::after{/*上*/
                            width:100%;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 680px){
        ul.navigation_sp{
            visibility:hidden;
            position:fixed;
            top:0px;
            left:0px;
            width:100%;
            height:100%;
            padding-top:20%;
            padding-left:10%;
            background-color:$color_white;
            opacity:0;
            transition:all 0.2s ease;

            display: flex;
            flex-direction: column;
            justify-content: flex-start;/*水平方向*/
            align-items:flex-start;/*垂直方向*/
            li{
                position:relative;
                list-style: none;
                margin-top:70px;
                transition:all 0.2s ease;
                a{
                    text-decoration:none;
                    background-color:rgba(0,0,0,0);
                    position:absolute;
                    top:0px;
                    left:0px;
                    width:100%;
                    height:100%;
                }
                p{
                    font-size:30px;
                    color:$color_black;
                }
            }
        }

        .hamburger{
            display:inline;
            position: relative;
            width:65px;
            height:65px;
            background:rgba(100,200,0,0);
            cursor: pointer;

            display: flex;
            flex-direction: column;
            justify-content: center;/*水平方向*/
            align-items:center;/*垂直方向*/
            .bars{
                position: relative;
                width:50px;
                height:auto;
                margin-top:20%;
                margin-bottom:1%;

                display: flex;
                flex-direction: column;
                justify-content: center;/*水平方向*/
                align-items:center;/*垂直方向*/
                span{
                    position: relative;
                    width:100%;
                    height:2px;
                    background-color: $color_white;
                    border-radius:2px;
                    transition:all 0.2s ease;
                    transform:rotateZ(0deg);
                }
                .bar_middle{
                    margin-top:15px;
                    margin-bottom:15px;
                }
            }
            p{
                display: flex;
                justify-content: space-between;/*水平方向*/
                align-items:center;/*垂直方向*/

                width:85%;
                font-size:15px;
                color: $color_white;
            }
        }

        .navigation_pc{display:none;}

        #menu_checkbox:checked ~ .top_link{
            color:$color_black;
        }
        #menu_checkbox:checked ~ ul.navigation_sp{
            visibility:visible;
            opacity:1;
            li{
                margin-top:40px;
            }
        }
        #menu_checkbox:checked ~ .hamburger{
            .bars{
                span{
                    background-color: $color_black;
                }
                .bar_top{
                    transform:translateY(17px) rotateZ(135deg);
                }
                .bar_middle{
                    transform:rotateZ(45deg);
                }
                .bar_bottom{
                    transform:translateY(-17px) rotateZ(225deg);
                }
            }
            p{
                color: $color_black;
            }
        }
    }
}

</style>