
function func(){
    const phrases = ["You can do it", "Dont give up!", "What would Tom Cruise Do?"];
    var randNum1 = Math.floor(Math.random() * phrases.length);
    var randNum2 = Math.floor(Math.random() * phrases.length);

    var completePhrase = phrases[randNum1] + " " + phrases[randNum2];

    document.getElementById('message').innerHTML = completePhrase;
}
const tail = document.getElementById('tail');
function size(){
    tail.style.zIndex = '1';
    tail.style.height = "790px";
}
function onClick(){
    setup();
    update();
    size();
    tail.removeEventListener('click',onClick);
}
tail.addEventListener('click', onClick);

window.onresize = function(){
    setup();
}

const canvas = document.getElementById('star');
const ctx = canvas.getContext('2d');

var screen, starArr;

var param = {
    speed:10, 
    count: 400, 
    life:5};




    class Star {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * canvas.width;

    }

    move = function () {
        this.z -= param.speed;
        if (this.z <= 0) {
            this.z = canvas.width;
        }
    };

    show = function () {

        let x, y, rad, opac;

        rad = canvas.width / this.z;

        x = (this.x - screen.c[0]) * rad;
        x = x + screen.c[0];

        y = (this.y - screen.c[1]) * rad;
        y = y + screen.c[1];

        //opac = rad > param.life ? (2 - rad / param.life) * 1.5 : 1;
        if(rad > param.life){
            opac = (2 - rad / param.life) * 1.5
        }
        else{
            opac=1;
        }


        ctx.beginPath();
        ctx.fillStyle = "rgba(255,255,255," + opac + ")";
        ctx.arc(x, y, rad, 0, Math.PI * 2);
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
    })
window.requestAnimationFrame(update);
}
