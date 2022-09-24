
function func(){
    const phrases = ["You can do it", "Dont give up!", "What would Tom Cruise Do?"];
    var randNum1 = Math.floor(Math.random() * phrases.length);
    var randNum2 = Math.floor(Math.random() * phrases.length);

    var completePhrase = phrases[randNum1] + " " + phrases[randNum2];

    document.getElementById('message').innerHTML = completePhrase;
}