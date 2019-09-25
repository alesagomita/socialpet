window.addEventListener('load', function(){

	//GLOBALS
	var images = [];
	var index = 0;
	images[0] = "url('img/slider/slider1.jpg')";
	images[1] = "url('img/slider/slider2.jpg')";
	images[2] = "url('img/slider/slider3.jpg')";
	images[3] = "url('img/slider/slider4.jpg')";
	var time = 2000;

	var slider = document.getElementById('slider');

	function changeImageSlider()
	{
		if( index < images.length )
		{
			index++;
		}
		else
		{
			index = 0;
		}

		slider.style.backgroundImage = images[index];
	}

	setInterval(changeImageSlider, time);

});