// STEP 1a: Create reference for button element 'btn'
const btn = document.querySelector('button');
// STEP 1b: Create reference for primary heading 'h1'
const heading1 = document.querySelector('h1');


// STEP 3: Build an onclick event handler for 'btn' that invokes the displayMessage() function
btn.onclick = function(){
    let msgColor = displayMessage("This is an warning","warning");
    heading1.style.color = msgColor;
}

// STEP 8d: Set the h1 element to the above color returned by the displayMessage function

// STEP 2: Create a function called displayMessage()
function displayMessage(msgText,msgType){
    // STEP 3a: Create a P element referenced by var msgPanel
    const msgPanel = document.createElement('p');
    // STEP 3b: Add a class attribute, "msgPanel" (refer to the CSS above)
    msgPanel.setAttribute('class','msgPanel');
    //<p> class='msgPanel'</p>
    // STEP 3c: Insert the message text into the new paragraph element
        msgPanel.textContent = msgText;
        console.log(msgPanel);
    // STEP 3d: Append the element to the document body
    document.body.appendChild(msgPanel);

    // STEP 4a: Create a close button referenced by var closeBtn
    const closeBtn = document.createElement('button');
    // STEP 4b: Add the letter 'x' to the button
    closeBtn.textContent ='x';
    //<button>x</button>
    // STEP 4c: Add this new button element as a child of the msgPanel paragraph element created earlier
    msgPanel.appendChild(closeBtn);

    // STEP 5: Build an onclick event handler for the close button that removes the msgPanel from the DOM entirely using the removeChild() method
    closeBtn.onclick = function(){
        msgPanel.remove();
    }

        if(msgType === "error"){
            msgPanel.classList.add("error");
        }else if(msgType === "warning"){
            msgPanel.classList.add("warning");
        } else {
            msgPanel.classList.add("default");
        };



let msgPanelColor = window.getComputedStyle(msgPanel).getPropertyValue('background-color');
console.log(msgPanelColor);

return msgPanelColor;

    };

    // STEP 6a: Revise the function at STEP 2 to accept a parameter, 'msgText'
    // STEP 6b: At STEP 3 above, adapt the call to displayMessage() to include a string that should appear in the msgPanel
    // STEP 6c: Adjust STEP 3c above to use the passed-in parameter 'msgText'

    // STEP 7a: Revise the function at STEP 2 again to accept a second parameter, 'msgType'
    // STEP 7b: Build an if/elseif/else statement (or a switch) below that adds a class of either 'error', 'warning', or 'default' to the msgPanel element using the built-in method classList.add() - refer to the above CSS to see the styles associated with each of these classes
    

    // STEP 8: Returning data from a function
    // STEP 8a: Capture the background-color property of the message panel
    
    // STEP 8b: Return the background-color to the script that invoked this function
    
    // STEP 8c: Modify the line that calls this function above (in STEP 3) such that we set a variable to be equal to the name of this function.


    // Next, open up the provided code for Lab 5 and review the instructions for the challenge.


// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Build_your_own_function
