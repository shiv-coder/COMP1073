// Get CANVAS element ready to draw on
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// Function to generate random number
function random(min,max) {
	var num = Math.floor(Math.random()*(max-min)) + min;
	return num;
}

// STEP 1: Create a constructor function for a ball

// STEP 2: Add the draw() method to the Ball prototype

// STEP 3: Include an update() method to the Ball prototype

	// Check for collision with right or left edge of screen
	
	// Check for collision with top or bottom edge of screen
	
	// Move the ball each time this method is called


// STEP 7: Collision detection

		// If this is any ball other than balls[j]...
		
			// Get horizontal distance between 2 balls
			
			// Get vertical distance between 2 balls
			
			// Remember Pythagorean theorem for right-angled triangles? a² + b² = c² where c is the hypoteneuse of the triangle (or c = √a² + b²)
			
			// If balls[j] is so close to another ball that they are touching...
			

// STEP 4: Create an array to contain all the balls


// STEP 5: Build the animation loop

	// Create up to 25 randomly colored balls, and push each one to the balls array...

	// For each ball object instance, draw it and update it
	
	// Use the requestAnimationFrame to loop


// STEP 6: Call the animation loop() function to get things rolling


/* Read the full tutorial at MDN available at https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_building_practice */
