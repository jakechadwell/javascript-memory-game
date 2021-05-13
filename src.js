"use strict";
(function () {
    $(document).ready(function (){
        $(".box").mouseenter(function (){
            $(this).css("background-color", "lightskyblue");
        })
        $(".box").mouseleave(function (){
            $(this).css("background-color", "cornflowerblue");
        })
    })
})();