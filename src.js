"use strict";
(function () {
    let roundNumber = 1;
    let arrNums = [];
    let currentIndex = 0;

    $(document).ready(function (){

        $(".start-button").click(function(){
            addNumber();
            simonSquares(arrNums);
            $(".start-button").off();
            $(".start-button").css("display", "none");
            $(".start-button").html("Next Round");
        });

        $("#current-round").text("Current Round: " + roundNumber);
    });

    function addNumber(amount=1){
        for (let i = 0; i < amount; i++){
            let newNum = generateNum();
            while(newNum==arrNums[arrNums.length-1]){
                newNum = generateNum();
            }
            arrNums.push(newNum);
        }
    }

    function generateNum(){
        return Math.floor(Math.random() * 9 + 1);
    }

    async function simonSquare(selectedSquare) {
        return new Promise(function(resolve, reject) {
            $(selectedSquare).addClass("simon-square");
            setTimeout(resolve, 1000);
        }).then(function() {
            $(selectedSquare).removeClass("simon-square");
        });
    }

    async function simonSquares(arrNums){
        for (let i = 0; i < arrNums.length; i++){
            await simonSquare($(`#${arrNums[i]}`))
        }
        $(".box").click(checkUserGuess);
    }

    function checkUserGuess(){
        let guessId = $(this).attr("id");
        let correctId = arrNums[currentIndex];
        if (guessId == correctId) {
            if (arrNums[currentIndex + 1] == null){
                roundOver();
            }
            else currentIndex++;
        }
        else gameOver();

    }

    function gameOver(){
        $(".body").html(
            `
						<div>
						<h1 class="text-center game-over-header">Game Over, you made it to round: ${roundNumber}<h1>
            <a href="#" id="replay-button" class="w-25">Play again</a>
						</div>
        `
        );
        $("#replay-button").click(function(){
            location.reload();
        })
    }

    function roundOver() {
        $(".start-button").css("display", "unset");
        $(".start-button").html("Next Round");
        $(".start-button").click(nextRound);
    }

    function nextRound() {
        addNumber();
        currentIndex = 0;
        simonSquares(arrNums);
        $(".box").off();
        $(".start-button").css("display", "none");
        $(".start-button").off();
        roundNumber++;
        $("#current-round").text("Current Round: " + roundNumber);
    }

})();