<template>
    <div class="canvas_wrapper">
        <canvas id="back_canvas"></canvas>
        <canvas id="fore_canvas"></canvas>
    </div>
</template>

<script>
    export default {
        name: "Canvas",
        props: {
        },
        created:function(){//on load
            this.DrawBackGround();
        },
        methods:{
            DrawBackGround:function(){
                if (!process.client) {
                  return;
                }
                var back_canv = document.querySelector("#back_canvas");
                var context = back_canv.getContext("2d");
                this.DrawCircle(context,100,100,10);
                context.stroke();
            },
            DrawCircle:function(context,x,y,radius){
                context.beginPath();//path reset
                context.arc(x,y,radius,0,2*Math.PI,false);
                context.fillstyle = "rgba(255,0,0,1)"
                context.fill();
                context.linewidth = 0;
            },
        }
    };
</script>

<style scoped lang="scss">
.canvas_wrapper{
    position:fixed;
    width:100%;
    height:100%;
    top:0px;
    left:0px;
    background:$color_black;
}
</style>