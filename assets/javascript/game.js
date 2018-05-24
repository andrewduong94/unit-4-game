//PICKS RANDOM NUMBER 
$( document ).ready(function(){
  var Randomnum=Math.floor(Math.random()*200)

  $('#randomNumber').text(Randomnum);



//SETTING VARIABLES
var bluecount= Math.floor(Math.random()*20+1)
var greencount= Math.floor(Math.random()*20+1)
var redcount= Math.floor(Math.random()*20+1)
var yellowcount= Math.floor(Math.random()*20+1)
var total= 0; 
var wins= 0;
var losses = 0;


$('#numberWins').text(wins);
$('#numberLosses').text(losses);
//resets the game
function reset(){
      Randomnum=Math.floor(Math.random()*200);
      $('#randomNumber').text(Randomnum);
      bluecount= Math.floor(Math.random()*20+1);
      greencount= Math.floor(Math.random()*20+1);
      redcount= Math.floor(Math.random()*20+1);
      yellowcount= Math.floor(Math.random()*20+1);
      total= 0;
      $('#FTotal').text(total);
      } 
//win function
function won(){
alert("You won!");
  wins++; 
  $('#TotalWins').text(wins);
  reset();
}
//loss function
function loss(){
alert ("You lose!");
  losses++;
  $('#TotalLosses').text(losses);
  reset()
}
//function for jewels
  $('#count1').on ('click', function(){
    total = total + bluecount;
    $('#FTotal').text(total); 
        
        if (total == Randomnum){
          won();
        }
        else if ( total > Randomnum){
          loss();
        }   
  })  
  $('#count2').on ('click', function(){
    total = total + greencount;
    $('#FTotal').text(total); 
        if (total == Randomnum){
          won();
        }
        else if ( total > Randomnum){
          loss();
        } 
  })  
  $('#count3').on ('click', function(){
    total = total + redcount;
    $('#FTotal').text(total);

          if (total == Randomnum){
          won();
        }
        else if ( total > Randomnum){
          loss();
        } 
  })  
  $('#count4').on ('click', function(){
    total = total + yellowcount;
    $('#FTotal').text(total); 
      
          if (total == Randomnum){
          won();
        }
        else if ( total > Randomnum){
          loss();
        }
  });   
}); 