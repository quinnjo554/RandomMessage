const quinn = document.getElementById("name");

text = quinn.textContent;

splitText = text.split("");
quinn.textContent = "";

for(let i=0;i<text.length;i++){
    quinn.innerHTML +="<span>" + splitText[i] + "</span>";
}


quinn.addEventListener('click',(e)=>{
    const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  newDiv.style.color = 'black';
  newDiv.className = "ghost";

});

//add transition from one page load to the next;
//do the colapse to the middle then revels from the middle
//like turning off an old tv    
