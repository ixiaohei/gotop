$(function(){
    //init();
    //alert($("title").html());
    var imageURL = chrome.extension.getURL("image/gotop.gif");
    $("body").prepend("<a id='cont_a' href='#head_a'><img id='contIcon' src='" + imageURL +"' /></a>");
    $("body").prepend("<div id='head_a'/>");
});
