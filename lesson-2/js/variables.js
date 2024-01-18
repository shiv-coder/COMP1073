	/* STEP 1: Declare variables
		Use a-z, 0-9, A-Z and underscores, avoiding reserved names
		All program variables are generally declared at the beginning */
        let myName;
        let myAge;
        let string;
        let para =document.querySelector('body p');

		/* STEP 2: Initialize variables
		Don't confuse a variable with no value with one that doesn't exist at all */
        myName ='SHivali Dhaka';
				myAge = 30;

		/* STEP 3: Updating variables
		Once a variable has been declared, this can be done any time */
				myName = 'shivi D';
				myAge =31;
				string = myName + ', ' + myAge;
				para.textContent = string;

		// STEP 4: Variable types (use typeof in the console)
		// Numbers

		let numCourse = 6;
		para.textContent = numCourse;

		// Strings (use '' or "")
		let stringCourse='Client SIde JS';
		para.textContent = stringCourse;
		// Booleans
		let iAmAlive =true;
		let compare = 6 < 3;
		console.log('the result of comparison is: ' + compare);

		// Arrays
		let myArray= ['Sarah','Steve','Melissa'];
		console.log(myArray[1])	;

		let myNumbers=[10,30,50];
		console.log(myNumbers[2]);
		// Objects
		let dog={name:'Simba',breed:'Staffy mix',color:'Black'};
		console.log(dog.breed);

		// STEP 5: Typing (JavaScript is a loosely-typed language)

		var myNumber = '500';
		console.log(typeof(myNumber));
	var myNumber = false;
	console.log(typeof(myNumber));