/* STEP 1: Creating Strings */
const output = document.querySelector('p');

let step1 =' This is "a" string';
output.textContent = 'Created String:' + step1;
let step1b ="This is a string";
output.textContent = "Created String:" + step1b;
    
    // Note - whether you use 'single' or "double" quotes is a personal preference - try to be consistent

    /* STEP 2: Escaping Characters */
   let step2= 'It\'s six o\'clock';
   output.textContent =step2;

    /* STEP 3: Concatenation */
    let step3a = 'JavaScript';
    let step3b = 'rocks';
    output.textContent = step3a + ' '+ step3b;

    /* STEP 4: Numbers and Strings */
    let step4a = 'Fahrenheit ' + 543;
    output.textContent =step4a + typeof(step4a);
    // numbers can be converted to strings
    let step4b = '20' +'18';
    let step4c = Number(step4b);
    output.textContent =step4c + typeof(step4c);
    // strings can be converted to numbers, too
    let step4d =step4c.toString();
    output.textContent =step4d + typeof(step4d);
    // and back again, if we want
