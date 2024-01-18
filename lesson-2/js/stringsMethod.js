var output = document.querySelector('p');
        
        /* STEP 1: String Length */
        let step1='This is a string';
        let stringLength = step1.length;
        output.textContent =stringLength;

        /* STEP 2: Retrieving a Specific String Character */
        let step2 = 'Donald J. Trump';
        let firstChar = step2[0];
        output.textContent = firstChar;
        let lastchar = step2[step2.length-1]
        output.textContent += lastchar;
        /* STEP 3: Extracting Part of a String */
        let step3a = step2.indexOf('Trump');
        output.textContent =step3a;

        // Note - if the substring is not found within the string, indexOf() returns -1

        // Note - if you don't specify where to end the slice, the method returns the rest of the string
    let step3b = step2.slice(10,13)
    output.textContent =step3b;
        /* STEP 4: Changing Case */
        let step4 = 'Bank of canada';
        let changeCase = step4.toUpperCase();
        output.textContent =changeCase;



        /* STEP 5: Updating Parts of a String */

        let step5a = 'Barrie, ON';
        let step5b = step5a.replace('ON','Ontario');
        output.textContent =step5b;