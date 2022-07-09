/*const date = new Date();
console.log(date.toLocaleTimeString());
console.log(date.toLocaleTimeString('en-US', { timeZone: 'America/New_York'}));
console.log(date.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles'}));
console.log(date.toLocaleTimeString('en-US', { timeZone: 'Europe/Berlin'}));
console.log(date.toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai'}));*/

var a = 0;
var img = [];
var time = 5000;
var runningtime = function(){
    // timezone for dubai
    img[0] = new Date().toLocaleTimeString("en-US", {timeZone:'Asia/Dubai' });
   //timezone for toronto
    img[1] = new Date().toLocaleTimeString("en-US", {timeZone:'Canada/Eastern' });
    //timezone for san francisco
    img[2] = new Date().toLocaleTimeString("en-US", {timeZone:'America/Los_Angeles' }); 
    //timezone for fruckurt
    img[3] = new Date().toLocaleTimeString("en-US", {timeZone:'Europe/Berlin'}); 
    //timezone for beijing
    img[4] = new Date().toLocaleTimeString("en-US", {timeZone:'Asia/Shanghai'}); 
}
runningtime();
setInterval(runningtime,1000);
function changeImg(){
    if(a == 0){
    console.log("Dubai time is:" + img[a]);
    }
    else if(a == 1){
        console.log("Toronto time  is:" + img[a]);
        }
    
        else if(a == 2){
            console.log("San francisco time  is:" + img[a]);
            }
        
    else if(a == 3){
        console.log("Frankfurt time  is:" + img[a]);
        }
        
    else if(a == 4){
        console.log("Beijing time  is:" + img[a]);
        }
        
                
      if (a < 4 ){
          a++;
      
  }
          else {
              a=0;
             
          }
      setTimeout("changeImg()", time);
  }
  
  window.onload = changeImg;