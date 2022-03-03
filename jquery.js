$(document).ready(function(){
    $(".btn").click(function(){
        $("#panel").slideToggle("slow");
    });
});

$(document).ready(function(){
	$(".menu-icon").on("click", function(){
		$("ul").toggleClass("showing");
	});
});
