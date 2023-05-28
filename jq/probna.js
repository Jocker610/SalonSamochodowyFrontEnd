
$("#testAnim6").on({
    
    "mouseover" : function() {
        $(this).stop().animate({width:500}, 500);
    },
    "mouseout" : function() {
        $(this).stop().animate({width:400}, 500);
    }
});
        