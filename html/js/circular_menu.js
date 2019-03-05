$(document).ready(function(){

var isOpen  = false;
		  var button_menu  = document.querySelector('#expand-navigation');
		  var wrapper_menu = document.querySelector('.wrapper_menu');
		  var overlay_menu = document.querySelector('.overlay_menu');

			function openNavigation() {
			    isOpen = true;
			    
			    button_menu.innerHTML  = '';
			    wrapper_menu.className = 'wrapper_menu opened';
			    overlay_menu.className = 'overlay_menu on-overlay';
			  }
			
			  function closeNavigation() {
			    isOpen = false;
			    
			    button_menu.innerHTML = '';
			    wrapper_menu.className = 'wrapper_menu closed';
			    overlay_menu.className = 'overlay_menu';
			  }  
			  
			  
		$("#expand-navigation").click(function(event)
		{
				if (event == null) {
			      event = window.event;
			    }
			    
			    event.stopPropagation();
			    
			    isOpen ? closeNavigation() : openNavigation() ;

				
		});

/*(function() {
		  'use strict';
		  
		  var isOpen  = false;
		  var button  = document.querySelector('#expand-navigation');
		  var wrapper = document.querySelector('.wrapper');
		  var overlay = document.querySelector('.overlay');
		  
		  button.addEventListener('click', navigationHandler);
		  document.addEventListener('click', closeNavigation);
		  
		  function navigationHandler(event) {
		    if (event == null) {
		      event = window.event;
		    }
		    
		    event.stopPropagation();
		    
		    !isOpen ? openNavigation() : closeNavigation();
		  }
		  
		  function openNavigation() {
		    isOpen = true;
		    
		    button.innerHTML  = '-';
		    wrapper.className = 'wrapper opened';
		    overlay.className = 'overlay on-overlay';
		  }
		
		  function closeNavigation() {
		    isOpen = false;
		    
		    button.innerHTML = '';
		    wrapper.className = 'wrapper';
		    overlay.className = 'overlay';
		  }  
	})();*/
	
	

});