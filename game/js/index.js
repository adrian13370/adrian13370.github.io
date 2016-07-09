$(document).ready(function() {
  
  $('#enemy1').hide();
  $('#enemy2').hide();
  $('#enemy3').hide();
  $('#enemy4').hide();
  $('#enemy5').hide();
  $('#enemy6').hide();
  $('#enemy7').hide();
  $('#enemy8').hide();
  
  $('#fire1').hide();
  $('#fire2').hide();
  $('#fire3').hide();
  $('#fire5').hide();
  $('#fire6').hide();
  $('#fire7').hide();
  $('#scorebox').hide();
  
  
  
  $('button').click(function() {
alert("Welcome to Clash Adventure"); alert("Clik to Start.!.");
  $('h1').hide();
  $('button').hide();
  $('a').hide();
  $('#scorebox').show();
  $('#enemy1').show();
  $('#enemy2').show();
  $('#enemy3').show();
  $('#enemy4').show();
  $('#enemy5').show();
  $('#enemy6').show();
  $('#enemy7').show();
  $('#enemy8').show();
  $('body').css({'background-image':'url(http://www.maisonsdenflandre.com/images/terrains-defaut.jpg)', 'background-size':'cover'});
  });
  
  //Score
  var score=0;
  
 //Move Hog rider  
  function moveHogRight() {
 $("#enemy7").animate({left: "+=360"}, 700, moveHogLeft);}
  
 function moveHogLeft() { 
 $("#enemy7").animate({left: "-=360"}, 700, moveHogRight);  
 }
  moveHogRight();
  
  //Move Prince
  function movePrinceRight() {
 $("#enemy1").animate({left: "+=180"}, 500, movePrinceLeft);}
  
 function movePrinceLeft() { 
 $("#enemy1").animate({left: "-=180"}, 500, movePrinceRight);  
 }
  movePrinceRight();
  
  //Move Miner
  function moveMinerRight() {
 $("#enemy6").animate({left: "+=265"}, 700, moveMinerLeft);}
  
 function moveMinerLeft() { 
 $("#enemy6").animate({left: "-=265"}, 700, moveMinerRight);  
 }
  moveMinerRight();
  
  
  //Move Lava
    function moveLavaRight() {
 $("#enemy2").animate({left: "+=70"}, 500, moveLavaLeft);}
  
 function moveLavaLeft() { 
 $("#enemy2").animate({left: "-=70"}, 500, moveLavaRight);  
 }
  moveLavaRight();
  
  
  //Move Bowler
   function moveBowlerRight() {
 $("#enemy5").animate({left: "+=300"}, 700, moveBowlerLeft);}
  
 function moveBowlerLeft() { 
 $("#enemy5").animate({left: "-=300"}, 700, moveBowlerRight);  
 }
  moveBowlerRight();
  
  //Move archer
   function moveArcherRight() {
 $("#enemy3").animate({left: "+=100"}, 1200, moveArcherLeft);}
  
 function moveArcherLeft() { 
 $("#enemy3").animate({left: "-=100"}, 1200, moveArcherRight);  
 }
  moveArcherRight();
  
//Explosions
  
   $('#enemy1').click(function() {
     $('#enemy1').hide();
     score = score + 1;
     document.getElementById("points").innerHTML = score;
     $('#fire1').show().hide(2000);
     $('#enemy1').show(1000);
   });  
     
    $('#enemy2').click(function() {
     $('#enemy2').hide();
      score = score + 1;
     document.getElementById("points").innerHTML = score;
     $('#fire2').show().hide(2000);
     $('#enemy2').show(1000);
   }); 
  
  $('#enemy3').click(function() {
     $('#enemy3').hide();
    score = score + 1;
     document.getElementById("points").innerHTML = score;
     $('#fire3').show().hide(2000);
     $('#enemy3').show(1000);
   }); 
  
  $('#enemy5').click(function() {
     $('#enemy5').hide();
    score = score + 1;
     document.getElementById("points").innerHTML = score;
     $('#fire5').show().hide(2000);
     $('#enemy5').show(1000);
   }); 
  
  $('#enemy6').click(function() {
     $('#enemy6').hide();
    score = score + 1;
     document.getElementById("points").innerHTML = score;
     $('#fire6').show().hide(2000);
     $('#enemy6').show(1000);
   }); 
  $('#enemy7').click(function() {
     $('#enemy7').hide();
    score = score + 1;
     document.getElementById("points").innerHTML = score;
     $('#fire7').show().hide(2000);
     $('#enemy7').show(1000);
   }); 
  
  $('#enemy8').click(function() {
     $('#enemy8').hide();
    score = score + 1;
     document.getElementById("points").innerHTML = score;
     $('#fire8').show().hide(2000);
     $('#enemy8').show(1000);
   }); 
  
  
  
  
  
  
  
  
  
  
});