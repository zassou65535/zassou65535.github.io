<template>
    <div class="canvas_wrapper">
        <canvas id="back_canvas"></canvas>
        <canvas id="fore_canvas"></canvas>
    </div>
</template>

<style scoped lang="scss">
.canvas_wrapper{
    position:fixed;
    width:100%;
    height:100%;
    top:0px;
    left:0px;
    background:$color_black;
}
#back_canvas{
    display:none;
}
#fore_canvas{
    background: $color_black;
}
</style>

<script>
    export default {
        name: "Canvas",
        props: {
        },
        data:function(){
            return{
                isLoaded:false,
                hue:100,
                back_element:null,
                fore_element:null,
                back_context:null,
                fore_context:null,
                twoPI:Math.PI*2,
                parts:null,
                size_base:0,
                content_width:0,
                content_height:0,
                counter:0,
            };
        },
        created:function(){//on load
            if (!process.client) {
              return;
            }
            this.DrawBackGround();
            this.Update();
            window.addEventListener('resize',this.RisizeEvent,false);
        },
        beforeDestroy: function () {
            if (!process.client) {
              return;
            }
            // インスタンスを破棄する前に、イベントリスナから削除
            window.removeEventListener('resize',this.RisizeEvent,false);
        },
        methods:{
            RisizeEvent:function(){
                this.DrawBackGround();
            },
            DrawBackGround:function(){
                if (!process.client) {
                  return;
                }
                this.back_element = document.querySelector("#back_canvas");
                this.fore_element = document.querySelector("#fore_canvas");
                this.content_width = this.back_element.width = this.fore_element.width = window.innerWidth;
                this.content_height = this.back_element.height = this.fore_element.height = window.innerHeight;
                this.size_base = this.content_width + this.content_height;
                this.counter = Math.floor(this.size_base*0.3);
                this.back_context = this.back_element.getContext("2d");
                this.fore_context = this.fore_element.getContext("2d");
                var opt = {
                    radiusMin:1,
                    radiusMax:this.size_base*0.04,
                    blurMin:10,
                    blurMax:this.size_base*0.04,
                    hueMin:this.hue,
                    hueMax:this.hue+100,
                    saturationMin:10,
                    saturationMax:70,
                    lightnessMin:20,
                    lightnessMax:50,
                    alphaMin:0.1,
                    alphaMax:0.5
                }
                this.back_context.clearRect(0,0,this.content_width,this.content_height);
                this.back_context.globalCompositeOperation = "lighter";//図形が重なった時の合成方法を指定
                while(this.counter--){
                    var radius = this.Rand(opt.radiusMin,opt.radiusMax);
                    var blur = this.Rand(opt.blurMin,opt.blurMax);
                    var x = this.Rand(0,this.content_width);
                    var y = this.Rand(0,this.content_height);
                    var hue = this.Rand(opt.hueMin,opt.hueMax);
                    var saturation = this.Rand(opt.saturationMin,opt.saturationMax);
                    var lightness = this.Rand(opt.lightnessMin,opt.lightnessMax);
                    var alpha = this.Rand(opt.alphaMin,opt.alphaMax);

                    this.back_context.shadowColor = this.GenerateHSLA(hue,saturation,lightness,alpha);
                    this.back_context.shadowBlur = blur;
                    this.back_context.beginPath();
                    this.back_context.arc(x,y,radius,0,this.twoPI);
                    this.back_context.closePath();
                    this.back_context.fill();
                }

                this.parts = [];
                for(var i=0;i<Math.floor((this.content_width+this.content_height)*0.03);i++){
                    this.parts.push({
                        radius:this.Rand(1,this.size_base*0.03),
                        x:this.Rand(0,this.content_width),
                        y:this.Rand(0,this.content_height),
                        angle:this.Rand(0,this.twoPI),
                        speed:this.Rand(0.1,0.5),
                        tick:this.Rand(0,10000),
                    });
                }
            },
            Update:function(){//毎フレームごとの処理
                requestAnimationFrame(this.Update);

                this.fore_context.clearRect(0,0,this.content_width,this.content_height);
                this.fore_context.globalCompositeOperation = 'source-over';
                this.fore_context.shadowBlur = 0;
                this.fore_context.drawImage(this.back_element,0,0);
                this.fore_context.globalCompositeOperation = 'lighter';

                var i = this.parts.length;
                this.fore_context.shadowBlur = 15;
                this.fore_context.shadowColor = '#FFFFFF';
                while(i--){
                    this.parts[i].x+=Math.cos(this.parts[i].angle)*this.parts[i].speed;
                    this.parts[i].y+=Math.sin(this.parts[i].angle)*this.parts[i].speed;
                    this.parts[i].angle+=this.Rand(-0.05,0.05);

                    this.fore_context.beginPath();
                    this.fore_context.arc(this.parts[i].x,this.parts[i].y,this.parts[i].radius,0,this.twoPI);
                    this.fore_context.fillStyle = this.GenerateHSLA(0,0,100,0.075+Math.cos(this.parts[i].tick*0.02)*0.05);
                    this.fore_context.fill();

                    if(this.parts[i].x-this.parts[i].radius > this.content_width) { this.parts[i].x = -this.parts[i].radius }
                    if(this.parts[i].x+this.parts[i].radius < 0)  { this.parts[i].x = this.content_width + this.parts[i].radius }
                    if(this.parts[i].y-this.parts[i].radius > this.content_height) { this.parts[i].y = -this.parts[i].radius }
                    if(this.parts[i].y+this.parts[i].radius < 0)  { this.parts[i].y = this.content_height + this.parts[i].radius }

                    this.parts[i].tick++;
                }
            },
            Rand:function(min,max){
                return Math.random()*(max-min)+min
            },
            GenerateHSLA:function(h,s,l,a){
                return 'hsla(' + h + ',' + s + '%,' + l + '%,' + a + ')';
            },
        }
    };
</script>
