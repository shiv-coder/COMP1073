// STEP 1: Initialize game variables
			// STEP 1a: Pick random number
			let randomNumber= Math.floor(Math.random()*100) +1;
			// STEP 1b: Create variables to represent the three paragraphs above that will contain user feedback
			let guesses = document.querySelector('p#guesses');
			let lastResult=document.querySelector('p#lastResult');
			let lowOrHi = document.querySelector('p#lowOrHi');

			// STEP 1c: Create variables to represent the guessing form

			let guessField =document.querySelector('input#guessField');
			let guessSubmit = document.querySelector('button');
			// STEP 1d: Create variables to initialize counter for number of guesses
			


			// STEP 2: Put focus on the field that allows user to type in guesses
			

			// STEP 3: Build a function to check the user's guess
			
				// STEP 3b: Create a variable to contain what number the user entered
				
				// STEP 3c: If this is the first guess, add some text to the screen as a label for listing previous guesses for reference
				
				
				
				// STEP 3d: Add the user's current guess to that list, plus a space
				
				
				// STEP 3e: Conditional - the user guessed correctly
				
					// Output a success message, then end the game
					
					
					
					
				// STEP 3f: Conditional - the user is all out of guesses
				
					// Output an appropriate message, then end the game
					
					
				// STEP 3g: Conditional - the user's guess is incorrect
				
					// Output an appropriate message
					
					
					// If the guess is too low, let the user know
					
					
					// Else if the guess is too high, let the user know
					
					
				
				// STEP 3h: Increment the guess count, move focus to the guess field for the next guess, and clear out the old input
				
				
			// STEP 4: Build a function called gameOver() to end the game
			
				// STEP 4a: Disable the guessing field and submit button
				
				
				// STEP 4b: Change the textContent of the #lowOrHi paragraph to a short phrase indicating that the game is over, and that the user can start a new game by refreshing the browser page or tab
				
			
			// STEP 3a: Add an event listener for the guess form button that calls the checkGuess function, then test that the event listener is working and that it invokes the function
			
			// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash