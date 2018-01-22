$("ul").on("click","li",function(){
	$(this).toggleClass("clicked");
})

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(700,function(){
		$(this).remove();
	});  
	event.stopPropagation();   //stop any event 
})

$("input").keypress(function(event){
	if(event.which === 13){
		//inserst to(not after) each matched element
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> "+ $(this).val() + "</li>");
		$(this).val("")
	}	
})


$(".fa-pencil-square-o").on("click",function(){
	$("input").fadeToggle(300);
})


