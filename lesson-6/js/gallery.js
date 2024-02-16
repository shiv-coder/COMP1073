// STEP 1: Initialize and declare variables
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
/* STEP 2: Loop 5 times to create the <img> elements */
for (let i = 1; i < 6; i ++) {
	/* STEP 3a: Create a new DOM node - an image element */
	const newImage = document.createElement('img');
	/* STEP 3b: Set the src attribute to be the path of one of the images inside the images folder, using setAttribute() */
	newImage.setAttribute('src', `images/pic${i}.jpg`);
	/* Append the new image element to the thumbBar div, named in STEP 1 */
	thumbBar.appendChild(newImage);
	/* STEP 3c: Build event handler for each <img> */
	// newImage.addEventListener('click', function(event) {
	// 	//console.log('Image clicked');
	// 	// Grab the src attribute from the image that was clicked
	// 	let imgSrc = event.target.getAttribute('src');
	// 	//console.log(imgSrc);
	// 	// Update the main image using the displayImage() function
	// 	displayImage(imgSrc);
	// });
};
/* STEP 4: Function to change the src of the main <img> */
function displayImage(value) {
	// Rewrite the src attribute of the .displayed-img element
	displayedImage.setAttribute('src', value);
}

/* STEP 5: Event Delegation
Instead of adding event handlers for each image, how about event delegation? Build a click handler on the parent element, and capture each target (and its attributes) from the event object */
thumbBar.addEventListener('click', function(event){
	// event.target is the element that was clicked
	if (event.target && event.target.nodeName === 'IMG'){
		// grab the src attribute of the element that was clicked
		let imgSrc = event.target.getAttribute('src');
		// change the main image
		displayImage(imgSrc);
	}

		// Lab 6 STEP G: Call the clearWayfinding() function that you built below - and enjoy the result!

		// Lab 6 STEP A: Inside the thumbBar.onclick event handler function, and also inside the if statement, change the event.target CSS outline property to "5px solid red"

		// Lab 6 STEP B: Next, change the event.target CSS position property to "relative"

		// Lab 6 STEP C: And then set the CSS z-index property to "10" so that the thumbnail clicked is on top of all the others

});
// Lab 6 STEP D: Initialize and declare a var called 'thumbImgs' using the querySelectorAll method to grab all the IMG elements inside the .thumb-bar


// Lab 6 STEP E: Build a function called 'clearWayfinding()' that loops through the thumbImgs array with a FOR loop

		// Lab 6 STEP F: For each thumbImgs IMG element, set the CSS outline-width property to "0", and the z-index property also to "0"

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Image_gallery and https://davidwalsh.name/event-delegate
