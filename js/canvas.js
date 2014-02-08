/**
 * Created by smoriarty on 2/2/14.
 */
$(function() {
    $('#canvas').css('background','black');
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    //Mouse Events
    c.addEventListener('click', canvasClick, false);

    /*c.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(c, evt);
        mouse.x = mousePos.x;
        mouse.y = mousePos.y;
        console.log("move");
    }, false);*/

    function getMousePos(c, evt) {
        var rect = c.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }


    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight - 20;

    //Set canvas size relative to browser size
    var canvasWidth = ctx.canvas.width;
    var canvasHeight = ctx.canvas.height;

    var startBar = {
        height: 20,
        width: canvasWidth,

        x:0,
        y:0,

        color:"#757575",

        draw:function() {
            //FIX LATER
            this.y = ctx.canvas.height - this.height;

            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    };

    var mouse = {
        x:100,
        y:100,

        height:5,
        width:5,

        color:"#FFFFFF",

        draw:function() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    var startButton = {
        height:40,
        width:40,

        x:20,
        y:0,

        color:"#404040",

        draw:function() {
            //FIX LATER
            this.y = ctx.canvas.height - this.height;

            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    var startMenu = {
        height:400,
        width:300,

        color:"#909090",
        fontColor:"#000000",

        x:5,
        y:0,

        visible:false,

        draw:function() {
            if(this.visible) {
                this.y = startBar.y - this.height;
                ctx.fillStyle = this.color;
                ctx.fillRect(this.x, this.y, this.width, this.height);

                ctx.fillStyle = this.fontColor;
                ctx.font="20px Georgia";
                ctx.fillText("Hello User",this.x + 10, this.y + 30);
            }
        }
    };

    var FPS = 60;
    setInterval(function() {
        update();
        draw();
    }, 1000/FPS);

    function update(){
        //console.log(startMenu.visible);
    }

    function draw() {
        //Clear Screen
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        startBar.draw();
        startButton.draw();
        mouse.draw();
        startMenu.draw();
    }

    function collision(arg1, arg2) {
        if(arg1.x + arg1.width >= arg2.x && arg1.x <= arg2.x + arg2.width && arg1.y + arg1.height >= arg2.y && arg1.y <= arg2.y + arg2.height) {
            return true;
        }
        else {
            return false;
        }
    }

    c.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(c, evt);
        mouse.x = mousePos.x;
        mouse.y = mousePos.y;
    }, false);

    function canvasClick(event) {
        //Open and close start menu
        if(collision(mouse, startButton)) {
            startMenu.visible = true;
        }
        else if(startMenu.visible == true && !collision(mouse, startMenu)) {
            startMenu.visible = false;
        }
    }

    $(window).on('resize', function() {
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight - 20;
    });


});

