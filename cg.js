var easyButton= document.querySelector("#easyButton");

var hardButton= document.querySelector("#hardButton");


var square = document.querySelectorAll(".col-xsm-4");

var jumbotron = document.querySelector("#jumbotron");

var playAgain = document.querySelector("#playAgain");
var input=6;
var color =colorGenerator(input);

var message= document.querySelector(".message");

//Easy Button function setting
easyButton.addEventListener("click",function(){
    jumbotron.style.background = "dodgerblue";
    playAgain.textContent = "New colors";
    message.textContent="";
    input = 3;
    color = colorGenerator(input);
    aim = aimGenerator();
    aimDisplay.textContent=aim;
    
    for(var l=0;l<=2; l++) {
        square[l].style.background= color[l];
    }
    for(var m=3;m<=color.length+1; m++) {
        square[m].style.display= "none";
    }
});

//** */


//Hard Button function setting
hardButton.addEventListener("click",function(){
    jumbotron.style.background = "dodgerblue";
    playAgain.textContent = "New colors"
    message.textContent="";
    input = 6;
    color = colorGenerator(input);
    aim = aimGenerator();
    aimDisplay.textContent=aim;
    
    for(var l=0;l<=color.length; l++) {
        square[l].style.display= "block";

        square[l].style.background= color[l];
    }
    
});

//** */


var aim = aimGenerator();
var aimDisplay = document.querySelector("#aim");

aimDisplay.textContent=aim;


//play again button   
playAgain.addEventListener("click", function(){
    jumbotron.style.background = "dodgerblue";
    playAgain.textContent = "New colors"
    message.textContent="";
     color =colorGenerator(input);

    aim = aimGenerator();
    aimDisplay.textContent=aim;
    //square color changer
    for(var i=0;i<=color.length;i++){
            square[i].style.background=color[i];
    }
    
    
});
//**play again over */


    
//checker:-
for(var j=0; j<=square.length; j++) {
    
    square[j].style.background = color[j];
   
    square[j].addEventListener("click",function(){
    
        var clicked = this.style.background;
        
            if(clicked == aim) {
        //changing color of jumbotron
          jumbotron.style.background =aim;

          //changing text to Play Again
          playAgain.textContent= "Play again?";
            
       //changing color of messgae
       message.textContent= "Correct";
       //changing background of squares
       SquareColorChanger();
                                   }
else{
            message.style.color= clicked;   
            message.textContent= "Try Again..!!";
            this.style.background = "black";
        }
    });
          
    }    
    function SquareColorChanger() {
        for(var i=0; i<=square.length ;i++){
            square[i].style.background = aim;
        };
      }
       
function aimGenerator(){
    var random=Math.floor(Math.random() * (color.length));
return(color[random]);
}
 
//color generator
 
function colorGenerator(num){
    var arr = [];
    
    for(var k=0;k<=num;k++){
        arr.push(randomColors())
    }
    
    return(arr);

}

function randomColors(){
var r= Math.floor(Math.random()*256);

var g= Math.floor(Math.random()*256);

var b= Math.floor(Math.random()*256);

return("rgb"+"("+r+", "+g+", "+b+")");
}

//****over color generator */














































