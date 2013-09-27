$(function(){
    console.info($("title").html());
    var imageURL = chrome.extension.getURL("image/gotop.gif");
    $("body").prepend("<a id='cont_a123456789' href='#head_a123456789'><img id='contIcon' src='" + imageURL +"' /></a>");
    $("body").prepend("<div id='head_a123456789'/>");
    $(window).scroll(function(){
    	if($(document.body).scrollTop() > ($(window).height()*0.1)) {
            console.debug("body.scrollTop:" + $(document.body).scrollTop() + "px window.height*0.1:" + ($(window).height()*0.1));
    		$("#cont_a123456789").fadeIn(1000);
    	}else if($(document.body).scrollTop() <= ($(window).height()*0.1)) {
            console.debug("body.scrollTop:" + $(document.body).scrollTop() + "px window.height*0.1:" + ($(window).height()*0.1))
    		$("#cont_a123456789").fadeOut(1000);
    	}
    });
});
