// const dt=new Date();
// document.getElementById("date-time").innerHTML=dt+"/";

var today = new Date();
var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

document.getElementById("date-time").innerHTML=dateTime;