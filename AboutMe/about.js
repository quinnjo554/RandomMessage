
const skills = document.getElementById("head");

function loadskill(){
    const button = document.getElementById("skills-button");
    const skills = document.getElementById('skill');
    const skillContent = document.getElementById("skill-content");
    const endbutton = document.getElementById('endButton');

    //makes the skills card visible and adds 
    skills.style.visibility = "visible";
    skills.classList.add("LoadSkill");

    //adds opacity affect to make card flipping better
    skillContent.classList.add("loadContent");
    button.remove();

    //makes button appear after animation is done
    const animated = document.querySelector('.LoadSkill');
    animated.addEventListener('animationend',()=>{
      endbutton.style.visibility = 'visible';
    });

}

function loadThankyou(){
  
  const skills = document.getElementById('skill');
  const thankyou = document.getElementById("TH-Card");
  const endbutton = document.getElementById('endButton');
  var position =0;


  skills.classList.add("loadEnd");


  thankyou.style.visibility = "visible";
  const animated = document.querySelector('.loadEnd');

  animated.addEventListener('animationend',()=>{
    skills.style.left = '-7%';
    endbutton.remove();
  });
  

}
