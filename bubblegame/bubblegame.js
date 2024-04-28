 function bubble(){var clutter="";

for (i=1; i<=138 ; i++ ){
    var num = Math.floor(Math.random()*10);
   clutter +=`<div class="bubble">${num}</div>`;
}
document.querySelector("#pbottom").innerHTML = clutter
 }
 bubble();
 var score = 0;
 function increasescore(){
    score += 10 ;
    document.querySelector("#scoreval").textContent = score ;
 }
 increasescore();
//generating a random number in hit 
var random = "" ;
 function newnumhit(){
    random = Math.floor(Math.random()*10);
     document.querySelector("#hitvalue").textContent = random ;
 }
//score changing 

document.querySelector("#pbottom").addEventListener("click" , function(dets){
 var newno = Number(dets.target.textContent);
 if(newno === random){
    increasescore();
    bubble();
    newnumhit();
 }
})

 newnumhit();
 //timer function
 var timer = 60 ;
 function runtimer(){
    var timeint = setInterval(function(){
        if(timer > 0){
         timer--;
         document.querySelector("#timer").textContent = timer ;
        }
        else{
            clearInterval(timeint);
            document.querySelector("#pbottom").innerHTML = `<h1>game over</h1>` 
        }
    } , 1000);
 }
 runtimer();