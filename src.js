"use strict";
(function () {
    let counter = 2;

    $(document).ready(function (){
        $(".box").hover(function (){
            $(this).css("background-color", "lightskyblue");
        }, function(){
            $(this).css("background-color", "#6495ed");
        });

        $(".start-button").click(function(){
            for(let i = 1; i<=counter; i++){
                simonSquares();
            }
        });

    });

    function simonSquares(){
        let simonChoice = Math.floor(Math.random() * 9);
        console.log(simonChoice+1);
        let selectedSquare = document.getElementById(simonChoice+1);
        $(selectedSquare).toggleClass("simon-square");
        let delay = 1000;
        let timeoutId = setTimeout(function(){
            $(selectedSquare).toggleClass("un-simon-square");
        }, delay);
    }

    function getIdClicked(){
        $(".box").click(function(){
            let id = this.id;
        });
    }

    function match(simonChoice){
        let userInput = getIdClicked();
        return userInput===(simonChoice+1);
    }

})();