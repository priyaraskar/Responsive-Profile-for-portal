// to set screen scroll

var middleHeight;
var isMainHeaderHidden = false;
function setScroll(){

	
	
	if(isMainHeaderHidden == true)
	{
		var AssignHeader = 0 ;
	}
	else{
	
		AssignHeader = $(".headerBackground").height();//58 ;
	}
	
	var headerHeight = AssignHeader  +  $(".headerBackground").height() + $(".assignedHeader2").height() + $(".iQA-footer").height();

	middleHeight = $(window).height() - headerHeight;
	
	$(".backgroundimg").css("height", middleHeight  + "px" );
	
}


$(window).resize(function(){
	setScroll();
});
$(window).load(function(){
	setScroll();
});


$(document).ready(function(){

	//function() { 

    //$("html").niceScroll();

  	//}
    
	// Append tip to container
		$(".Daily-task-mainContent>div").append("<div class='tip'></div>");
	
		$('[data-toggle="tooltip"]').tooltip();
	
		setScroll();
	
		$(".inner").hover(function(event)
		{
				event.stopPropagation();
				$(this).children(".contentsection").slideToggle(200,"easeOutExpo")	
		});
	
		$("#pageSuggestions").click(function(event)
		{
				$("#myModal").modal('show');	
		});
	
		$("#logOut").click(function(event){
				$("#myModalLogout").modal('show');
		});
	
	/*$(".carousel-control").click(function(event){
			getButtons();
	});*/
	
	//fancy checkbox
		if($(".fancycheckbox").length > 0){
			$("[name='my-checkbox']").bootstrapSwitch();
		}
	
	
		var totalItems = $('.item').length;
    	var currentIndex = $('div.active').index() + 1;
    	getButtons();
    
	    $(function(){
	      $('#myCarousel').on('slid.bs.carousel', function () {
	         currentIndex =$('div.active').index() + 1;
	         getButtons();
	      });
	   });
   
		   function getButtons()
		   {
		   		if(currentIndex  == totalItems)
						{
							$("#process-buttons").hide();
							$(".textArea-Bottom").hide();
							$("#process-buttons-finish").show();
						}
					else{
					
						$("#process-buttons-finish").hide();
						$("#process-buttons").show();
						$(".textArea-Bottom").show();
				}
		   }
	   
		$(".TemplateDetailsLink").click(function () {
		
		    // Set the effect type
		    var effect = 'slide';
		
		    // Set the options for the effect type chosen
		    var options = { direction: "Up" };
		
		    // Set the duration (default: 400 milliseconds)
		    var duration = 900;
		
		    $('#template-palet').toggle(effect, options, duration);
		});
			
	    
    
    ///$(function(){
   //setScroll();
    //$('.').slimScroll({
    	
        //height: middleHeight + 'px' /*'250px'*/
   // });
   
   $(".toggle-bar").click(function()
	{
	
			if(isMainHeaderHidden == true)
				isMainHeaderHidden = false;
			else
				isMainHeaderHidden = true;
				
			$(".mainHeader").slideToggle(900,"easeOutExpo");
			
			setScroll();
			
	});
	
	$('.menuTrigger').on("click",function(){
    	$(this).toggleClass('menuToggle')
	});
	
	
	
	
});





// Show Hide Header



		
// Added on 29 April

