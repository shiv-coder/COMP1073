/* STEP 1: Number types (integer, float, and double)
        declare and initialize an integer and a float, then in the console, reveal the number type with typeof(varName) */
        var output = document.querySelector('p');
        
        let myInt =10;
        let myFloat=5.786534;
        let typeTest= typeof(myFloat);
        output.textContent=typeTest;
        // Note - there are also different number systems: binary, octal, and hexadecimal

        /* STEP 2: Arithmetic operators
        + (addition), - (subtraction), * (multiplication), / (division), % (remainder or modulo), ** (exponent) */

        let step2a = 5 % 3;
        output.textContent = step2a;
        // Try declaring and initializing a couple of variables as numbers
        let num1 = 90;
        let num2=30;
        let step2b =(num1+num2)*5 - 25;
        output.textContent=step2b;

        /* OR… num1 * num2 / 8 + 2 - 0.5; */



        /* Keep in mind operator precedence, just like you were taught in math class (/, *, +, -)
        num1 + num2 * 5 - 25 ... is not 575 ... it is 215 */
        
        /* If you want to avoid this precedence, use parenthesis
        (num1 + num2) * 5 - 25 */

        /* STEP 3: Increment and decrement operators
        ++ and -- are mostly found inside loops to move a counter variable to the next value when needed, either up or down. */
        let step3a = 5;
        let increment = ++step3a;
        output.textContent = increment;

        let step3b = 5;
        let decrement = --step3b;
        output.textContent = decrement;

        // Note 1 - you cannot increment/decrement a number directly
        // Note 2 - typing num++ or num-- in the console will output the number before incrementing or decrmenting - try ++num or --num, instead

        /* STEP 4: Assignment Operators
        = (assignment), += (addition assignment), -= (subtraction assignment), *= (multiplication assignment), /= (division assignment) */
        let step4 = 5;
        let divAssign = step4 /= 2; // step4= step4/2
        output.textContent = divAssign;

        /* STEP 5: Comparison Operators
        ===	(strict equality), !==	(strict-non-equality), == (equality), < (less than), > (greater than), <= (less than or equal to), >=	(greater than or equal to) */
        let step5a = 8;
        let step5b =5;
        let compTest = step5a>=step5b;
        output.textContent = compTest;