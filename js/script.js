function initImageUpload(box) 
{
	let uploadField = box.querySelector('.image-upload');

	uploadField.addEventListener('change', getFile);

	function getFile(e)
	{
		let file = e.currentTarget.files[0];
		checkType(file);
	}

	function previewImage(file)
	{
		let thumb = box.querySelector('.js--image-preview'),
		reader = new FileReader();

		reader.onload = function() 
		{
			thumb.style.backgroundImage = 'url(' + reader.result + ')';
		}
		reader.readAsDataURL(file);
		thumb.className += ' js--no-default';
	}

	function checkType(file)
	{
		let imageType = /image.*/;
		if (!file.type.match(imageType)) 
		{
			throw 'Please upload an image file';
		} 
		else if (!file)
		{
			throw 'No picture selected';
		} 
		else 
		{
			previewImage(file);
		}
	}

}

var boxes = document.querySelectorAll('.box');

for (let i = 0; i < boxes.length; i++) 
{
	let box = boxes[i];
	initDropEffect(box);
	initImageUpload(box);
}



function initDropEffect(box)
{
	let area, drop, areaWidth, areaHeight, maxDistance, dropWidth, dropHeight, x, y;

	area = box.querySelector('.js--image-preview');
	area.addEventListener('click', fireRipple);

	function fireRipple(e)
	{
		area = e.currentTarget
		if(!drop){
			drop = document.createElement('span');
			drop.className = 'drop';
			this.appendChild(drop);
		}
		drop.className = 'drop';

		areaWidth = getComputedStyle(this, null).getPropertyValue("width");
		areaHeight = getComputedStyle(this, null).getPropertyValue("height");
		maxDistance = Math.max(parseInt(areaWidth, 10), parseInt(areaHeight, 10));

		drop.style.width = maxDistance + 'px';
		drop.style.height = maxDistance + 'px';

		dropWidth = getComputedStyle(this, null).getPropertyValue("width");
		dropHeight = getComputedStyle(this, null).getPropertyValue("height");


		x = e.pageX - this.offsetLeft - (parseInt(dropWidth, 10)/2);
		y = e.pageY - this.offsetTop - (parseInt(dropHeight, 10)/2) - 30;

		drop.style.top = y + 'px';
		drop.style.left = x + 'px';
		drop.className += ' animate';
		e.stopPropagation();
	}
}

function themeSwitch() 
{
	$('body').toggleClass("bg-dark text-light");
}