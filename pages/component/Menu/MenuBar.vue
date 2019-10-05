<template>
    <div class="menubar_entity">
        <a href="/" class="top_link">
            <p>zassou's</p>
            <p>atelier</p>
        </a>
        <input id="menu_checkbox" type="checkbox" value="off"><!--メニューの開閉に使うチェックボックス display:noneで隠しておく-->
        <!--ul class="navigation">
            <li class="navigation__link"><a href="#about">ABOUT</a></li>
            <li class="navigation__link"><a href="#use">USE</a></li>
            <li class="navigation__link"><a href="#creator">CREATOR</a></li>
            <li class="navigation__link"><a href="#goods">GOODS</a></li>
            <li class="navigation__link"><a href="#festival">FESTIVAL</a></li>
            <li class="navigation__link"><a href="#contact">CONTACT</a></li>
        </ul>-->
        <label class="hamburger" for="menu_checkbox">
            <div class="bars">
                <span class="bar_top"></span>
                <span class="bar_middle"></span>
                <span class="bar_bottom"></span>
            </div>
            <p>MENU</p>
        </label>
    </div>
</template>

<script>
    export default {
        name: "menubar",
        props: {
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
    background:rgba(200,200,0,0.5);
    padding-left:7%;
    padding-right:7%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;/*水平方向*/
    align-items:center;/*垂直方向*/
    .top_link{
        position: relative;
        height:auto;
        width:auto;
        background:rgba(100,200,0,0);
        text-decoration: none;
        color:$color_white;

        display: flex;
        flex-direction: column;
        justify-content: center;/*水平方向*/
        align-items:flex-start;/*垂直方向*/
        p{
            text-decoration: none;
            font-size:23px;
        }
    }

    #menu_checkbox{
        display:none;
    }

    .hamburger{
        position: relative;
        width:65px;
        height:65px;
        background:rgba(100,200,0,0.5);

        display: flex;
        flex-direction: column;
        justify-content: center;/*水平方向*/
        align-items:center;/*垂直方向*/
        .bars{
            position: relative;
            width:50px;
            height:auto;
            margin-top:10%;
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
            }
            .bar_middle{
                margin-top:30%;
                margin-bottom:30%;
            }
        }
        p{
            width:90%;
            font-size:15px;
            text-align: center;
            color: $color_white;
        }
    }
}

</style>