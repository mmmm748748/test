setInterval(function() {
        if(localStorage["name"]=="L"){
			 	Input._onKeyDown({keyCode:100});
			 
		}else{
				

			Input._onKeyUp({keyCode:100});

		}
			
			if(localStorage["name"]=="R"){
			 	Input._onKeyDown({keyCode:102});

			 
		}else{
				
Input._onKeyUp({keyCode:102});
			 
		}

			SceneManager.update();
	
    }, 500);