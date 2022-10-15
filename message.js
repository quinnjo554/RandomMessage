
//this function provides 
function func(){
    const phrases = ["You can do it", "Dont give up!", "What would Tom Cruise Do?"];
    var randNum1 = Math.floor(Math.random() * phrases.length);
    var randNum2 = Math.floor(Math.random() * phrases.length);

    var completePhrase = phrases[randNum1] + " " + phrases[randNum2];

    document.getElementById('message').innerHTML = completePhrase;
}



//footer of the page
const startPoint = document.getElementById("startBox");
const body = document.querySelector('body');
const header = document.querySelector('header');
const ship = document.getElementById("ship"); //top - 90%
const shipBullet = document.getElementById("bullet");
const badGuyLeft = document.getElementById("badGuy1");
const badGuyRight = document.getElementById("badGuy2");
const sprite2 = document.getElementById("sprite2");
const explosion=document.getElementById("explosion");
const explosion2=document.getElementById("explosion2");
const gitLogo = document.getElementById('gitLogo');
const gitHubimg = document.getElementsByClassName("gitHub");
const linkdinLogo = document.getElementById("linkdin");
let ani = ship.getAnimations();

 function whenani1Finsished(){
    ship.style.left = "48%";
    shootLeft();
    ship.style.left = "36%";
}

function updateSprite(){
    if(badGuyLeft.style.visibility != "hidden" || badGuyRight.style.visibility != "hidden")
    setInterval(function() {badGuyLeft.src = "./img/My project (2).png";}, 1000);
    setInterval(function() {badGuyLeft.src = "./img/192-1926067_crab-invader-space-invaders-icon-white.png";}, 2000);
    setInterval(function() {badGuyRight.src = "./img/My project (2).png";}, 1000);
    setInterval(function() {badGuyRight.src = "./img/192-1926067_crab-invader-space-invaders-icon-white.png";}, 2000);
}

function spawnShip(){
    ship.style.visibility = "visible";
    ship.classList.add("spawnShip");
    ani[0] = ship.getAnimations()[0];
    ani[0].addEventListener("finish",whenani1Finsished);


}

function spawnEnimies(){
    badGuyLeft.style.visibility = "visible";
    badGuyRight.style.visibility = "visible";
    badGuyLeft.classList.add("spawnBadGuy1");
    badGuyRight.classList.add("spawnBadGuy2");
}
function endShooting(){
    shipBullet.style.visibility = "hidden";
}

function breakEnimie1(){
    //break enemy1
    setTimeout(function(){
        badGuyLeft.style.visibility = "hidden";
        //add explosion
        explosion.style.visibility = "visible";
        setInterval(function() {explosion.src = "./img/Explosion2.png";}, 1000);
        //add a github button
        setInterval(function() {explosion.style.visibility = "hidden";gitLogo.style.visibility = "visible";}, 2000);
    },7200);

    //break ememy2
    setTimeout(function(){
        ship.classList.add("moveRight");
        ship.style.left = "61%";
    },7400);
       
}

function breakEnemy2(){
    setTimeout(function(){
    explosion.style.left = "58%"; 
    explosion.src =  "./img/Explosion.png"  
    badGuyRight.style.visibility = "hidden";
    //add explosion
    explosion.style.visibility = "visible";
    setInterval(function() {explosion.src = "./img/Explosion2.png";}, 1000);
    //add a github button
    setInterval(function() {explosion.style.visibility = "hidden";linkdinLogo.style.visibility = "visible";}, 1700);
    },9400);
}

function fireRight(){
    setTimeout(() =>{
        shipBullet.style.left = "61%";
        shipBullet.classList.add("fireRight");
        shipBullet.style.visibility = "visible";
        shipBullet.style.left = "-19%";
    },9000);
}

function shootLeft(){
    ship.classList.add("shootLeft");
    ani[1]=ship.getAnimations()[1];
}

function fireLeft(){
    setTimeout(() =>{
    shipBullet.classList.add("fireLeft");
    shipBullet.style.visibility = "visible";
    shipBullet.style.left = "-19%"
    },7000);
}
function final(){
setTimeout(function(){
    //move both elements 
    gitLogo.classList.add("fancyMovegitHub");
    gitLogo.style.top ="45%"; 
    gitLogo.style.left= "38%";
    linkdinLogo.classList.add("fancyMoveLinkdin");
    linkdinLogo.style.top ="45%"; 
    linkdinLogo.style.left= "57%";
    //set ship away to the left off screen
    ship.classList.add("shipOffScreen");
    ship.style.left= "110%";
    //add a contacts banner
},11200);

}

//makes the canvas and footer larger when clicked
function size(){
    canvas.style.zIndex = '12';
    body.style.zIndex = '-1';
    startPoint.style.position = "fixed";
    //header.style.visibility = "hidden";
    document.body.style.backgroundColor = "black";
    startPoint.style.zIndex = '1'; 
    startPoint.style.left = "0"; 
    startPoint.classList.add("animate");
    ship.style.zIndex = '1';
    badGuyRight.style.zIndex = '3';
    badGuyLeft.style.zIndex = '3';
    startPoint.style.top = "0px";
    spawnShip();
    spawnEnimies();
    fireLeft();
    breakEnimie1();
    fireRight();
    breakEnemy2();
    final();
}

//calls all methods for on click
function onClick(){
    setup();
    updateSprite();
    update();
    size();
    startPoint.removeEventListener('click',onClick);
}
//makes the tail clickable
startPoint.addEventListener('click', onClick);

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
    speed:9, 
    count: 800, 
    life:5,
};

   



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








