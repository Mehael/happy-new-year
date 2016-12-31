function swap(item_id, new_text) {
	item_id.animate({
        "opacity": 0
    }, {
        duration: 1800,
        complete: function(){	 
			item_id.text(new_text);
        	item_id.animate({
                "opacity": 1
        	}, 1800); 
		}	
    });
}

slides = 0;

$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
		draggable: false,
		accessibility: false,
		dots: true,
		easing: 'swing',
		speed: 500,
		lazyLoaded: true
    });
	
	$("#wand").clickSpark();
	$("#wand").on('click touchstart', function(){
		$('body').addClass('no_magic');
		$('#wand').remove();
		
		$('.slider').slick('slickAdd', 
		`
		    <div id="tree-slide">
				<p><span id = "tree-message"></span> 2017 год</p>
				<div class="imgContainer">
					<img id="tree" class="hvr-buzz fullheight overlap magic" src="app/tree.png" />
					<img id="tree-overlay" class="fullheight z-first overlap zero-top secret" src="app/tree-overlay.png" />
					<img id="wand-miracle" class="miracle-rotor zero-top" src="app/miracle.png" />
				</div>
				<p class="no-margin" id="add-message">Добавь немного волшебства!</p>
			</div>
		`
		);
		$("#wand").unbind( "click" );
		
		swap($('#gift-message'), 'Сияет как новая!');
		
		slides = slides+1;		
		setTimeout(function(){		    
    		$('.slider').slick('slickGoTo', slides);
  		}, 3600+800);
  	
		$("#tree").clickSpark();
		$("#tree").on('click touchstart', function(){
			$('#wand-miracle').remove();
			$('#tree-overlay').removeClass('secret');
			$('.slider').slick('slickAdd', 
			`
		    	<div id="сalendar-slide">
					<p><span id = "calendar-message"></span>Новые Дни</p>
					<div class="imgContainer">
						<img id="сalendar" class="hvr-buzz fullheight overlap magic" src="app/calendar.png" />
						<img id="сalendar-overlay" class="fullheight z-first overlap zero-top secret" src="app/calendar-overlay.png" />
						<img id="wand-miracle" class="miracle-rotor zero-top" src="app/miracle.png" />
					</div>
					<p class="no-margin"><span id = "days-message">Столько Сюрпризов :D</span></p>
				</div>
			`
			);
			
			$("#tree").unbind( "click" );
			swap($('#add-message'), 'Так держать!');
			swap($('#tree-message'), 'Счастливый Новый');
			
			slides = slides+1;		
			setTimeout(function(){		    
    			$('.slider').slick('slickGoTo', slides);
  			}, 3600+800);
  		
		
			$("#сalendar").clickSpark();
			$("#сalendar").on('click touchstart', function(){
			
				$('#wand-miracle').remove();
				$('#сalendar-overlay').removeClass('secret');
				$('.slider').slick('slickAdd', 
				`
		    		<div id="photo-slide">
						<p><span id = "photo-message">Уставший </span>Ты.</p>
						<div class="photoContainer imgContainer">
				    		<img id="sad" class="fullheight overlap" src="app/sad.png"/>
							<img id="happy" class="fullheight overlap secret" src="app/happy.png" />
							<img id="photo" class="hvr-buzz fullheight overlap zero-top magic" style="z-index: 5;" src="app/photo-border.png" />
							<img id="wand-miracle" class="miracle-rotor zero-top" src="app/miracle.png"/>
						</div>
						<p id="happy-message" class="no-margin"></p>
					</div>
				`
				);
		
				$("#сalendar").unbind( "click" );
				
				swap($('#calendar-message'), 'Счастливые ');
				swap($('#days-message'), 'Целых 365!'); 
				
				slides = slides+1;	
				setTimeout(function(){		    
    				$('.slider').slick('slickGoTo', slides);
  				}, 3600+800);
  		
		
				$("#photo").clickSpark();
				$("#photo").on('click touchstart', function(){
				    $('#photo').removeClass('hvr-buzz');
					$('#happy').removeClass('secret');
					$('#wand-miracle').addClass('z-two');
					$('#sad').remove();
					$("#photo").unbind( "click" );
					
					swap($('#photo-message'), 'Счастливый Новый ');
					swap($('#happy-message'), 'С Новым Годом!');  	
				});
			});		
		});	
	});
});

