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
function Ball(x,y,velX,velY,color,size){
this.x = x;
this.y =y;
this.velX =velX;
this.velY = velY;
this.color = color;
this.size = size;
}

// STEP 2: Add the draw() method to the Ball prototype
Ball.prototype.draw = function(){
	ctx.beginPath();
	ctx.fillStyle=this.color;
	ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
	ctx.fill();

}
// STEP 3: Include an update() method to the Ball prototype
Ball.prototype.update = function(){
	// Check for collision with right or left edge of screen
	if((this.x + this.size)>= width || (this.x-this.size) <=0){
		this.velX = -(this.velX);
	}
	// Check for collision with top or bottom edge of screen
	if((this.y + this.size)>= height || (this.y-this.size) <=0){
		this.velY= -(this.velY);
	}
	// Move the ball each time this method is called
		this.x += this.velX;
		this.y + this.velY;
}

// STEP 4: Create an array to contain all the balls
let balls = [];

// STEP 5: Build the animation loop
function loop(){

	ctx.fillStyle='rgba(0,0,0,0.5)';
	ctx.fillRect(0,0,width,height);

	while(balls.length < 25){
		var ball = new Ball(
			random(0,width),
			random(0,height),
			random(-7,7),
			random(-7,7),
			'rgb(' +random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')',
			random(10,20)
		);
		balls.push(ball);
	}

	for(var i=0;i<balls.length;i++){
		balls[i].draw();
		balls[i].update();
	}
	requestAnimationFrame(loop);
}
	// Create up to 25 randomly colored balls, and push each one to the balls array...
loop();
	// For each ball object instance, draw it and update it
	
	// Use the requestAnimationFrame to loop
// STEP 7: Collision detection

		// If this is any ball other than balls[j]...
		
			// Get horizontal distance between 2 balls
			
			// Get vertical distance between 2 balls
			
			// Remember Pythagorean theorem for right-angled triangles? a² + b² = c² where c is the hypoteneuse of the triangle (or c = √a² + b²)
			
			// If balls[j] is so close to another ball that they are touching...
			







// STEP 6: Call the animation loop() function to get things rolling


/* Read the full tutorial at MDN available at https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_building_practice */
