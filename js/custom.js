	$(function() {


$('body').on('click', '#enterName', function(event) {
	

	NameValue = $('#name').val();
	if($.trim(NameValue)!=='') {

		$('#enteredName').text($.trim(NameValue));
		$('.nameOverlay').fadeOut('300', function() {
			
		});
	}

});

$('body').on('focus', '#name', function(event) {
	
	$('.nameSection').delay(200).addClass('nmSectionActive');
});

$('body').on('click', '.menuOverlay', function(event) {
	
		$('.menuSection').removeClass('menuActive');
		$('.menuOverlay').fadeOut(300);
});

$('body').on('blur', '#name', function(event) {
	
	$('.nameSection').removeClass('nmSectionActive');
});

$('body').on('click', '.refresh', function(event) {
	
	$('#dartContainer').html('');
	$('.stuckDart').remove();
});

$('body').on('click', '.themesIn', function(event) {
	

	var themeClass= 'themeColor'+$(this).attr('data-color');

	$.each($('.themesIn'), function(index, val) {
		
	$('body').removeClass('themeColor'+$(val).attr('data-color'));
	$('.circle').removeClass('themeColor'+$(val).attr('data-color'));
		
	});

	$('body').addClass('themeColor'+$(this).attr('data-color'));
	

});

$('body').on('click', '.menu', function(event) {
	
	$('.menuSection').toggleClass('menuActive');
	$('.menuOverlay').fadeToggle(300);


});


 $("#btnSave").click(function() { 

alert('Phase II')
 getImage();
        // html2canvas($("#target"), {
        //     onrendered: function(canvas) {
        //         theCanvas = canvas;
        //         document.body.appendChild(canvas);

        //         // Convert and download as image 
        //         Canvas2Image.saveAsPNG(canvas); 
        //         $("#img-out").append(canvas);
        //         // Clean up 
        //         //document.body.removeChild(canvas);
        //     }
        // });
// html2canvas(document.body, {
//   onrendered: function(canvas) {
//     document.body.appendChild(canvas);
//   }
// });
    });


	  function getImage() {
    //                 navigator.camera.getPicture(onSuccess, onFailure, {
    // destinationType: navigator.camera.DestinationType.FILE_URI,
    // sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    //        });


		    window.imagePicker.getPictures(
		    function(results) {
		        for (var i = 0; i < results.length; i++) {
		            console.log('Image URI: ' + results[i]);
		        }
		    }, function (error) {
		        console.log('Error: ' + error);
		    }
		);

       }               
       //function onSuccess(imageURI) {
       //                  alert("Image location is:"+ imageURI);
       //    };


       //    function onFailure(message) {
       //                  alert("Get image failed: " + message);
       //   }

     
 

					//totheLeft();

					// function totheLeft() {

					// $('#testMove').animate({'left' : '95%'} , 1000 , function() {

					// 	$('#testMove').animate({'left' :'7.5%' }, 1000 , function() {

					// 		totheLeft();
					// 	});
					// });

					// }


				$('#testsave').droppable();
				 $("#testMove").draggable({
				 	 create: function(){
        $(this).data("startLeft",parseInt($(this).css("left")));


 
    },
				 	axis:'x',
				 	containment: 'parent',

				 	
				 });		
					//Enable swiping...
					$("#testsave").swipe({
						swipeStatus:function(event, phase, direction, distance, duration, fingers)
						{
							var str = "<h4>Swipe Phase : " + phase + "<br/>";
							
							
							//Here we can check the:
							//phase : 'start', 'move', 'end', 'cancel'
							//direction : 'left', 'right', 'up', 'down'
							//distance : Distance finger is from initial touch point in px
							//duration : Length of swipe in MS 
							//fingerCount : the number of fingers used

							if (phase=="end" && direction=="up" ) {
								
								str += "speed of swipe: " + distance/duration + "<br/>";
								str += "speed of swipe: " + direction + "<br/>";
								var speed = distance/duration;
								
								if(speed<1) {

								var topPos= Math.random()*100;
								var topoftarget = $('#target').position().top;
								var topDeviation=$('#target').width()*(speed*3.5)/10;
								$('#testMove').animate({'top': (topoftarget)+'px' , bottom:'auto' , width:'10px'} , 500 , function() {
									var dartClone = $(this).clone();
									var leftpos= parseInt($(dartClone).css('left'))/($('#testsave').width());
								
									var toppos= parseInt($(dartClone).css('top')) - 20;
									dartClone.attr({

										'id': '' ,
										'class': 'stuckDart'
									});

									$('#target').append(dartClone);
									$(this).fadeOut(100).css({'top': 'calc(100% - 100px)' , left:'50%' , width:'20px'});
									$(this).fadeIn(0 , function(){

										var containerHeight = $('#testsave').height(); 
										
									})

								});
									
									

								}	
								else if(speed>1 && speed<2.5) {

								//$('#testMove').animate({'left': '100%'} , 5000 );

								var topPos= Math.random()*100;
								var topoftarget = $('#target').position().top;
								if(speed>1 && speed<1.6) {

								var topDeviation=$('#target').width() - $('#target').width()*(speed)/10;

								}
								else if(speed>1.6 && speed < 2) {

								var topDeviation=$('#target').width() - $('#target').width()*(speed*3.5)/10;

								}

								else {

									var topDeviation=$('#target').width() - $('#target').width()*(speed*4)/10;
								}
								
								
								$('#testMove').addClass('moveRotate').animate({'top': (topoftarget + topDeviation)+'px' , bottom:'auto' , width:'10px'} , 500 , function(){
									var dartClone = $(this).clone();
									var leftpos= parseInt($(dartClone).css('left'));
									
									var toppos= parseInt($(dartClone).css('top')) - 20;
									dartClone.attr({

										'id': '' ,
										'class': 'stuckDart'
									});


									$('#dartContainer').append(dartClone);
									$('.boardBack ,#enteredName').addClass('shake');
									$(this).fadeOut(100).removeClass('moveRotate').css({'top': 'calc(100% + 100px)' , left:'50%' , width:'20px'});
									$(this).fadeIn(0 , function(){

										var containerHeight = $('#testsave').height(); 
										$('.boardBack ,#enteredName').removeClass('shake');
									})

									$(this).animate({'margin-top':'-200px'}, 300 , function(){

										$('#testMove').css({'top': 'calc(100% - 100px)' , 'margin-top':'0px'});

									});

								});
									
								}	

								else if( speed>2.5) {

								var topPos= Math.random()*100;
								var topoftarget = $('#target').position().top;
								var topDeviation=$('#target').width()*(speed*3.5)/10;
								$('#testMove').animate({'top': (topoftarget-topDeviation)+'px' , bottom:'auto' , width:'10px'} , 500 , function(){
									var dartClone = $(this).clone();
									var leftpos= parseInt($(dartClone).css('left'));
									//alert(leftpos);
									var toppos= parseInt($(dartClone).css('top')) - 20;
									dartClone.attr({

										'id': '' ,
										'class': 'stuckDart'
									})

									$('#target').append(dartClone);
									$(this).fadeOut(100).css({'top': 'calc(100% + 100px)' , left:'50%' , width:'20px'});
									$(this).fadeIn(0 , function(){

										var containerHeight = $('#testsave').height(); 
										
									});

									$(this).animate({'margin-top':'-200px'}, 300 , function(){

										$('#testMove').css({'top': 'calc(100% - 100px)' , 'margin-top':'0px'});

									});


								})
									
								}			
								
							}

							// else if(direction=="right" && phase=="end"  ) {

							// 		$('.menuSection').addClass('menuActive');
							// 		$('.menuOverlay').fadeIn(300);
							// }

							else if(direction=="left" && phase=="end" ) {

									$('.menuSection').removeClass('menuActive');
									$('.menuOverlay').fadeOut(300);
							}
							
						},
						threshold:160,
						maxTimeThreshold:5000,
						fingers:'all',
					
					});

     
				});