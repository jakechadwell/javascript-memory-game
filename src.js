"use strict";
(function () {
    $(document).ready(function (){
        $(".box").hover(function (){
            $(this).css("background-color", "lightskyblue");
        }, function(){
            $(this).css("background-color", "#6495ed");
        })
    })

    function getIdClicked(){
        $(".box").click(function(){
            let id = this.id;

        })
    }

})();