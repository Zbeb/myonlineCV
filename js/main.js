$(function(){

	$('[href^="#collapse"').click(function(){
		$('[id^="collapse"]').each(function(){
			$(this).collapse('hide');
		});

		$(this).collapse('show');

		/* Smooth scroll to bot */
		$('html').delay(200).animate({
	      scrollTop: document.body.scrollHeight
	   	}, 500);
	});
});

/* On click on skillsblock ID */
$('#skillsBlock').one('click', function(){

	var inCircleText;
	var color = [];
	var circleData = {};

	/* We check if the "skills" box is collapsed */
	if( $('#collapseSkills').hasClass("collapse") ){
		/* We get all the div with the "Circle" word in the id */
		$('[id$="Circle"]').each(function(){

			switch($(this)[0].id){
				case 'htmlCircle' : 
					inCircleText = 'HTML';
					color = ['#A8C9FF', '#30A8FF'];
					drawCircle($(this)[0].id, createData(inCircleText, color), 0.90);
					break;
				
				case 'cssCircle' : 
					inCircleText = 'CSS';
					color = ['#FFC899', '#FF8A26'];
					drawCircle($(this)[0].id, createData(inCircleText, color), 0.90);
					break;
				
				case 'jsCircle' : 
					inCircleText = 'JS';
					color = ['#9EEDB8', '#2CB759'];
					drawCircle($(this)[0].id, createData(inCircleText, color), 0.70);
					break;

				case 'bsCircle' : 
					inCircleText = 'BootStrap';
					color = ['#C5B3E0', '#8D53E0'];
					drawCircle($(this)[0].id, createData(inCircleText, color), 0.85);
					break;

				case 'jqueryCircle' : 
					inCircleText = 'jQuery';
					color = ['#E09A9B', '#9A1B1E'];
					drawCircle($(this)[0].id, createData(inCircleText, color), 0.55);
					break;

				case 'phpCircle' : 
					inCircleText = 'PHP';
					color = ['#5A68A7', '#2F3B70'];
					drawCircle($(this)[0].id, createData(inCircleText, color), 0.45);
					break;

				case 'sfCircle' : 
					inCircleText = 'Symfony';
					color = ['#FFFFFF', '#AAAAAA'];
					drawCircle($(this)[0].id, createData(inCircleText, color), 0.30);
					break;		

				default : 
					break;
			}
		});
	}
});

function createData(text, color){
	circleData = {
		strokeWidth: 6,
        duration: 1700,
        easing: 'easeInOut',
        trailColor: '#AAAAAA',
        trailWidth: 3,
  		// Set default step function for all animate calls
  		step: function(state, circle) {
    		circle.path.setAttribute('stroke', state.color);
    		circle.path.setAttribute('stroke-width', state.width);
    		circle.setText(text);
    		circle.text.style.color = state.color;
    		circle.text.style.fontSize = '30px';
		}
	}; 

	circleData['from'] = { color: color[0], width:  3};
	circleData['to'] = { color: color[1], width:  6};

	return circleData;
}

function drawCircle(id, data, value){

	var circle = new ProgressBar.Circle( '#' + id, data); 
    circle.animate(value);
}
