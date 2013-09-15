function init(){
    var tabber1 = new Yetii({
        id: 'demo'
    });
    $("#button").click(function(){
    	$.ajax({
    		url: 'http://www.baidu.com',
    		type: 'GET',
    		dataType: 'html',
    		timeout: 1000,
    		error: function(){
    		    alert('Error loading XML document');
    		},
    		success: function(data){
    		    $("#cont").text(data);
    		}
        });
    });
}
$(function(){
	init();
});