var t = document.getElementsByTagName('time')[0];
var start = document.getElementById('start');
var time,title, miliseconds = 0 , seconds = 0 , minutes = 0;

function addTime(){
    miliseconds++;
    if(miliseconds >=999){
        miliseconds = 0;
        seconds ++;
        if(seconds >=60){
            seconds = 0;
            minutes ++;
        }
    }    
    t.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds) + 
    ":" + (miliseconds ? (miliseconds > 9 ? miliseconds : "0" + miliseconds) : "00");
    setTimer();
}

function setTimer(){
    time = setTimeout(function(){
        addTime()},1);
}

function stopTime(){
    clearTimeout(time);
    console.log(t.textContent);
}

function resetTime(){
    t.textContent = "00:00:000";
    seconds = 0 ;
    minutes = 0 ;
}

// ******** Lapcount

function titleName(){
    var inputValue = document.getElementById('input').value;
    title = document.createTextNode(inputValue);
    // console.log(typeof(title));
    // console.log(typeof(JSON.stringify(title)));
}

var a = document.getElementById("lapCount");
function totalCount(){
var x = t.textContent;
var div = document.createElement('div');
var paragraph = document.createElement('p');
var divText = document.createTextNode("Total count is : " + x + " for " + title.textContent);
div.appendChild(paragraph);
paragraph.appendChild(divText);
a.appendChild(div);
// div.style.background= "yellow";
// div.style.position= "absolute";
// div.style.bottom = "400px";
// div.style.right = "710px";

// document.getElementById('lapCount').innerHTML = "Total count is : " + x + " for " + title.textContent;
// document.getElementById("input").value = "";
}

