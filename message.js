
//this function provides 
function func(){
    const phrases = ["You can do it", "Dont give up!", "What would Tom Cruise Do?"];
    var randNum1 = Math.floor(Math.random() * phrases.length);
    var randNum2 = Math.floor(Math.random() * phrases.length);

    var completePhrase = phrases[randNum1] + " " + phrases[randNum2];

    document.getElementById('message').innerHTML = completePhrase;
}



//footer of the page
const tail = document.getElementById('tail');


//makes the canvas and footer larger when clicked
function size(){
    tail.style.zIndex = '1';
    tail.style.height = "790px";
}

//calls all methods for on click
function onClick(){
    setup();
    update();
    size();
    tail.removeEventListener('click',onClick);
}
//makes the tail clickable
tail.addEventListener('click', onClick);

//resizes the window and makes the starfeild scalable 
window.onresize = function(){
    setup();
}

//get canvas
const canvas = document.getElementById('star');

//set context
const ctx = canvas.getContext('2d');
//init screen and star arry vars
var screen, starArr;

//param obj
var param = {
    speed:2, 
    count: 800, 
    life:5,
};

    class Bullet{
        constructor(x,y){
            this.x = x;
            this.y = y;
        }
        bMove=function(){
            this.y+=2;
            if (this.y >= canvas.height) {
                this.y = 0;
            }
        };

    }


    class Player{
        
        constructor(){
            this.x = canvas.width/2;
            this.y = 10;
            this.bullet = new Bullet;

        }

        pShoot = function(){
            this.bullet.move();
        };


    }


    //star class
    class Star {

    constructor() {
        //sets the x,y,z var to a random location on screen
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * canvas.width;

    }

    move = function() {
        //moves the star forward 
        this.z -= param.speed;
        
        //keeps stars spawing far
        if (this.z <= 0) {
            this.z = canvas.width;
        }
    };

    show = function () {

        let x, y, rad, opac;

        //makes the stars get larger as they move closer
        rad = canvas.width / this.z;

        x = (this.x - screen.c[0]) * rad;
        x += screen.c[0];

        y = (this.y - screen.c[1]) * rad;
        y +=screen.c[1];

        //make the stars disapear
        if(rad > param.life){
        opac = (2-rad/param.life) * 1.5
        }
        else{
        opac=1;
        }

        ctx.beginPath();
        ctx.fillStyle = "rgb(255,255,255," + opac + ")";
        ctx.arc(x, y, rad, 0, Math.PI*2);
        ctx.fill();
    };


}

function setup(){
    screen ={
        w: window.innerWidth,
        h: window.innerHeight,
        c: [window.innerWidth*0.5, window.innerHeight*0.5],
    };

    //add animation that makes the div bigger;
    window.cancelAnimationFrame(update);
    canvas.width = screen.w;
    canvas.height = screen.h;

    starArr = [];
    for(var i =0; i<param.count; i++){
        starArr[i] = new Star();
    }

}

function update(){
    ctx.fillStyle = "black";    
    ctx.fillRect(0,0,canvas.width, canvas.height);
    
    starArr.forEach(function(s){
        s.show();
        s.move();
    });
window.requestAnimationFrame(update);
}








