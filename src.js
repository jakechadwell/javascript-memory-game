"use strict";
(function () {
    let roundNumber = 1;
    let arrNums = [];
    let currentIndex = 0;
    let gameOver = false;

    $(document).ready(function (){
        $(".box").hover(function (){
            $(this).css("background-color", "lightskyblue");
        }, function(){
            $(this).css("background-color", "#6495ed");
        });

        $(".start-button").click(function(){      
            addNumber();
            console.log("hello");
						simonSquares(arrNums);
        });

				if(gameOver==true){
					alert("Game over! If you would like to play again, refresh the page!");
				}
    });

    function addNumber(amount=1){
      for (let i = 0; i < amount; i++){
        arrNums.push(generateNum());
      }
    }

    function generateNum(){
      return Math.floor(Math.random() * 9);
    }

    function simonSquares(arrNums){
        console.log("hello");
        for (let i = 0; i < arrNums.length; i++){
          let selectedSquare = $("" + arrNums[i]);
          $(selectedSquare).toggleClass("simon-square");
          let timeoutId = setTimeout(function(){
              $(selectedSquare).toggleClass("un-simon-square");
          }, 1000);
        }
        $(".box").click(checkUserGuess($(this).attr("id"), arrNums[currentIndex]));
    }

    function checkUserGuess(guessId, correctId){
      if (guessId == correctId) {
        if (arrNums[currentIndex + 1] == null){
          nextRound();
        }
        else currentIndex++;
      }
      else gameOver == true;

    }

    function nextRound() {
      addNumber();
			currentIndex=0;
			simonSquares(arrNums);
    }

})();