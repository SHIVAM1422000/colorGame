$("h1").css("color", "red");

$("ul").css("color","blue");

var uls= document.querySelector("ul");
uls.style.color="orange";

$("li.hello").css("color","black");
$("li.hi").css("background","blue");

$("li.hi").css("border","10px solid black");

$("img").css("width","300px");
$("img").css("margin-left","30%");
$("body").toggleClass("body");


$("input").keypress(function(){
 if(event.which===13){
     alert("ENTER WAS PRESSED");
 }
    
});




$("h1").on("mouseenter",function(){
    $(this).css("color","black");
});
$("h1").on("mouseleave",function(){
    $(this).css("color","red");
});


$("img").on("mouseenter",function(){
     $(this).css("color","white");
   $(this).animate({
        width: "70%",
        margin: "0.6in",
       borderHeight: "10px"
},1000);


});


$("img").on("mouseleave",function(){
    $(this).css("color","black");
  $(this).animate({
       width: "40%",
       
},1000);


});