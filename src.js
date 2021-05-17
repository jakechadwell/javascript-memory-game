"use strict";
(function () {
    $(document).ready(function (){
        $(".box").hover(function (){
            $(this).css("background-color", "lightskyblue");
        }, function(){
            $(this).css("background-color", "#6495ed");
        })

        let counter = 1;

        function simonSquares(){
            for(let i = 1; i<=counter; i++){
                let bigDelay = 2000;
                let bigTimeoutId = setTimeout(function(){

                }, bigDelay)
                    let simonChoice = Math.floor(Math.random() * 9);
                    console.log(simonChoice+1);
                    let selectedSquare = document.getElementById(simonChoice+1);
                    $(selectedSquare).toggleClass("simon-square");
                    let delay = 2000;
                    let timeoutId = setTimeout(function(){
                        $(selectedSquare).toggleClass("simon-square");
                    }, delay);
            }
            counter++;
        }

        console.log(simonSquares());
        console.log(simonSquares());
    })

    function getIdClicked(){
        $(".box").click(function(){
            let id = this.id;

        })
    }

})();