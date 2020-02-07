/*eslint-env browser*/
/* exported myFunction, myQuiz1, myQuiz2, myQuiz3, myQuizWebAnswerQ1, myQuizWebAnswerQ2, myQuizWebAnswerQ3, myQuizWebAnswerQ4, myQuizWebAnswerQ5, myQuizWebAnswerQ6, myWebQuiz, calculateResults */

// Auther: Tony McDonald 

// Learning note: variables outside of any functions are global variables and can be used by numerous functions anywhere in the program providing they are decllaired before a function attempts to use them.

// *****************************
// Global Variables 
// *****************************

// Variable attempts is used in: 
// • Total questions answered 'attemptsCount()' 
// • Calculating the result 'calculateResults()'
// Variable counter is used in: 
// • Total counter 'correctAnswerCount()' and the for loop within the same function. 
// • Results calculator 'calculateResults()'
var attempts = document.getElementById("numberOfQuestionsAttempted"), counter = document.getElementById("quizCounter");

// ********* End of global variables ********

// Test button 
function myFunction() {
    "use strict";
    document.getElementById("button1").innerHTML = "This button would do something cool!";
    document.getElementById("button1").style.color = "blue";
    document.getElementById("button1").style.border = "none";
}

// Quiz 1 button and anwser.

function myQuiz1() {
    "use strict";
    document.getElementById("button2").innerHTML = "N Korea in 2007";
    document.getElementById("button2").style.color = "blue";
    document.getElementById("button2").style.border = "none";
}

// ***************************
// Quiz 2 buttons and answers.
// ***************************

// @ evt indicates and event has occured.
// @ Contains an id from selected button.
// Output: TRUE, a green tick is displayed. (buttonC === TRUE)
// Output: FALSE, a red cross is displayed. 
function myQuiz2(evt, btn) {
    "use strict";
    if (btn === "buttonC") {
        document.getElementById(btn).innerHTML = "&#10003";
        document.getElementById(btn).style.color = "limegreen";
    } else {
        document.getElementById(btn).innerHTML = "&#10008";
        document.getElementById(btn).style.color = "red";
    }
}
   
// *********  End of Quiz two. *********

// ***************************
// Quiz 3 buttons and answers.
// ***************************

// @ evt indicates and event has occured.
// @ Contains an id from selected button.
// Output: TRUE, a green tick is displayed. (buttonB === TRUE)
// Output: FALSE, a red cross is displayed.  
function myQuiz3(evt, btn) {
    "use strict";
    if (btn === "buttonB") {
        document.getElementById(btn).innerHTML = "&#10003";
        document.getElementById(btn).style.color = "limegreen";
    } else {
        document.getElementById(btn).innerHTML = "&#10008";
        document.getElementById(btn).style.color = "red";
    }
}

// *********** End of Quiz three. *************

// ++++++++++++++++++++++++++++++++
// Web Quizes 
// ================================


// Total questions answered.

function attemptsCount() {
    "use strict";
    var iTotal;
    // NOTE: attempts is a global var. 
    attempts += 1;
    
    // Iterates over the arry and posts to span tags.
    for (iTotal = 0; iTotal < document.getElementsByClassName("displayCount").length; iTotal += 1) {
        document.getElementsByClassName("displayCount2")[iTotal].innerHTML = attempts;
    }
    
    // Checks if all questions have been answered
    if (attempts > 5) {
        document.getElementById("getResults").disabled = false;
    }
}

// Total counter ++++++++++++++++++++++++++++++++++++

function correctAnswerCount() {
    "use strict";
    // Local variable
    var i;
    counter += 1;
    // document.getElementById("quizCounter").value = counter;

    // The 'for loop' iterates over the length of the list and inserts the
    // value into all tags in the array. ****
    // This is because '.getElementsByClassName' 
    // returns an array unlike '.getElementById', which reurns a value.

    for (i = 0; i < document.getElementsByClassName("displayCount").length; i += 1) {
        document.getElementsByClassName("displayCount")[i].innerHTML = counter;
    }
    attemptsCount();
}


// The user answer for the radio buttons is pass to and
// then stored in var with the id result.
function myWebQuiz(inputChoice) {
    "use strict";
    document.getElementById("result").value = inputChoice;
}

// *************************************
// Web Quiz 1
// *************************************

function myQuizWebAnswerQ1() {
    "use strict";
    var number = 0, inputChoice = document.getElementById("result").value, newBrTag = document.createElement("BR");
    if (inputChoice === "choice2") {
        document.getElementById('radioB').innerHTML = "&#10003";
        document.getElementById('radioB').style.color = "limegreen";
        
        document.getElementById("radioB_WrittenAnswer").innerHTML = 'Correct! This is the standard tag used to emphasise text.';
        document.getElementById("radioB_WrittenAnswer").style.backgroundColor = "palegreen";
        document.getElementById("radioB_WrittenAnswer").appendChild(newBrTag);
        number = 1;
        correctAnswerCount();
        
    }

    if (inputChoice === "choice1") {
        document.getElementById('radioA').innerHTML = "&#10008";
        document.getElementById('radioA').style.color = "red";
        
        document.getElementById("radioA_WrittenAnswer").innerHTML = ' Although this tag can be used to emphasise text, it is also used for another which will cause problems in your code. For this reason, it is not the standard tag for emphasising text anymore. ';
        document.getElementById("radioA_WrittenAnswer").style.backgroundColor = "#ffbfc5";
        document.createElement("BR");
        document.getElementById("radioA_WrittenAnswer").appendChild(newBrTag);
        number = 1;
        attemptsCount();
    }
    
    if (inputChoice === "choice3") {
        document.getElementById('radioC').innerHTML = "&#10008";
        document.getElementById('radioC').style.color = "red";
        document.getElementById("radioC_WrittenAnswer").innerHTML = ' This is not a tag in HTML. ';
        document.getElementById("radioC_WrittenAnswer").style.backgroundColor = "#ffbfc5";
        document.createElement("BR");
        document.getElementById("radioC_WrittenAnswer").appendChild(newBrTag);
        number = 1;
        attemptsCount();
    }
    if (number >= 1) {
        document.getElementById("mySubmit1").disabled = true;
    }
}

// *************************************
// Web Quiz 2
// *************************************

function myQuizWebAnswerQ2() {
    "use strict";
    // Local variables
    var number = 0, inputChoice = document.getElementById("result").value, newBrTag = document.createElement("BR");
    // Global var used: newBrTag
    
    if (inputChoice === "choice1q2") {
        document.getElementById('radioAQ2').innerHTML = "&#10003";
        document.getElementById('radioAQ2').style.color = "limegreen";
        document.getElementById("radioA_WrittenAnswerQ2").innerHTML = '&nbsp;&nbsp; This the correct doctype declaration for HTML5 and should by at the top of the source code before the &lt; html &gt; opening tag. &nbsp;&nbsp;';
        document.getElementById("radioA_WrittenAnswerQ2").style.backgroundColor = "palegreen";
        document.getElementById("radioA_WrittenAnswerQ2").appendChild(newBrTag);
        number = 1;
        correctAnswerCount();
    }

    if (inputChoice === "choice2q2") {
        document.getElementById('radioBQ2').innerHTML = "&#10008";
        document.getElementById('radioBQ2').style.color = "red";
        document.getElementById("radioB_WrittenAnswerQ2").innerHTML = '&nbsp;&nbsp; This is the doctype declaration for HTML4 not 5. &nbsp;&nbsp;';
        document.getElementById("radioB_WrittenAnswerQ2").style.backgroundColor = "#ffbfc5";
        document.createElement("BR");
        document.getElementById("radioB_WrittenAnswerQ2").appendChild(newBrTag);
        number = 1;
        attemptsCount();
    }
    
    if (inputChoice === "choice3q2") {
        document.getElementById('radioCQ2').innerHTML = "&#10008";
        document.getElementById('radioCQ2').style.color = "red";
        document.getElementById("radioC_WrittenAnswerQ2").innerHTML = '&nbsp;&nbsp; This is not the correct way to start an HTML5 documnet. &nbsp;&nbsp;';
        document.getElementById("radioC_WrittenAnswerQ2").style.backgroundColor = "#ffbfc5";
        document.createElement("BR");
        document.getElementById("radioC_WrittenAnswerQ2").appendChild(newBrTag);
        number = 1;
        attemptsCount();
    }
    if (number >= 1) {
        document.getElementById("mySubmit2").disabled = true;
    }

}

// *************************************
// Web Quiz 3
// *************************************

function myQuizWebAnswerQ3() {
    "use strict";
    // Local var
    var number = 0, inputChoice = document.getElementById("result").value, newBrTag = document.createElement("BR");
    // global var used: newBrTag
    if (inputChoice === "choice1q3") {
        document.getElementById('radioAQ3').innerHTML = "&#10003";
        document.getElementById('radioAQ3').style.color = "limegreen";
        document.getElementById("radioA_WrittenAnswerQ3").innerHTML = "&nbsp;&nbsp; 'function' is the correct way to declaire a method in javaScript since methods are called function. &nbsp;&nbsp;";
        document.getElementById("radioA_WrittenAnswerQ3").style.backgroundColor = "palegreen";
        document.getElementById("radioA_WrittenAnswerQ3").appendChild(newBrTag);
        number = 1;
        correctAnswerCount();
    }

    if (inputChoice === "choice2q3") {
        document.getElementById('radioBQ3').innerHTML = "&#10008";
        document.getElementById('radioBQ3').style.color = "red";
        document.getElementById("radioB_WrittenAnswerQ3").innerHTML = "&nbsp;&nbsp; 'def' is the the keyword to declaire a method in python not in javaScript &nbsp;&nbsp;";
        document.getElementById("radioB_WrittenAnswerQ3").style.backgroundColor = "#ffbfc5";
        document.getElementById("radioB_WrittenAnswerQ3").appendChild(newBrTag);
        number = 1;
        attemptsCount();
    }
    
    if (inputChoice === "choice3q3") {
        document.getElementById('radioCQ3').innerHTML = "&#10008";
        document.getElementById('radioCQ3').style.color = "red";
        
        document.getElementById("radioC_WrittenAnswerQ3").innerHTML = '&nbsp;&nbsp; Although function is a keyword in javaScript, this keyword has no angeled brackets. &nbsp;&nbsp;';
        document.getElementById("radioC_WrittenAnswerQ3").style.backgroundColor = "#ffbfc5";
        document.getElementById("radioC_WrittenAnswerQ3").appendChild(newBrTag);
        number = 1;
        attemptsCount();
    }
    if (number >= 1) {
        document.getElementById("mySubmit3").disabled = true;
    }

}

// *************************************
// Web Quiz 4
// *************************************

function myQuizWebAnswerQ4() {
    "use strict";
    var number = 0, inputChoice = document.getElementById("result").value, newBrTag = document.createElement("BR");
    if (inputChoice === "choice2q4") {
        document.getElementById('radioBQ4').innerHTML = "&#10003";
        document.getElementById('radioBQ4').style.color = "limegreen";
        
        document.getElementById("radioB_WrittenAnswerQ4").innerHTML = '&nbsp;&nbsp; Yes, this will find the element with attribute myColour and chage it to red. &nbsp;&nbsp;';
        document.getElementById("radioB_WrittenAnswerQ4").style.backgroundColor = "palegreen";
        document.getElementById("radioB_WrittenAnswerQ4").appendChild(newBrTag);
        number = 1;
        correctAnswerCount();
    }

    if (inputChoice === "choice1q4") {
        document.getElementById('radioAQ4').innerHTML = "&#10008";
        document.getElementById('radioAQ4').style.color = "red";
        document.getElementById("radioA_WrittenAnswerQ4").innerHTML = '&nbsp;&nbsp; This will look for an id of red, but will then do nothing. &nbsp;&nbsp;';
        document.getElementById("radioA_WrittenAnswerQ4").style.backgroundColor = "#ffbfc5";
        document.getElementById("radioA_WrittenAnswerQ4").appendChild(newBrTag);
        number = 1;
        attemptsCount();
    }
    
    if (inputChoice === "choice3q4") {
        document.getElementById('radioCQ4').innerHTML = "&#10008";
        document.getElementById('radioCQ4').style.color = "red";
        document.getElementById("radioC_WrittenAnswerQ4").innerHTML = '&nbsp;&nbsp; This will look for an element with class name instead of id. &nbsp;&nbsp;';
        document.getElementById("radioC_WrittenAnswerQ4").style.backgroundColor = "#ffbfc5";
        document.getElementById("radioC_WrittenAnswerQ4").appendChild(newBrTag);
        number = 1;
        attemptsCount();
    }
    if (number >= 1) {
        document.getElementById("mySubmit4").disabled = true;
    }
}

// *************************************
// Web Quiz 5
// *************************************

function myQuizWebAnswerQ5() {
    "use strict";
    var number = 0, inputChoice = document.getElementById("result").value, newBrTag = document.createElement("BR");
    if (inputChoice === "choice2q5") {
        document.getElementById('radioBQ5').innerHTML = "&#10003";
        document.getElementById('radioBQ5').style.color = "limegreen";
        document.getElementById("radioB_WrittenAnswerQ5").innerHTML = "&nbsp;&nbsp; That's correct! The selector h2 referes to the 2nd level headers while the declaration block stles the colour to blue and converts all letters to upercase.&nbsp;&nbsp;";
        document.getElementById("radioB_WrittenAnswerQ5").style.backgroundColor = "palegreen";
        document.getElementById("radioB_WrittenAnswerQ5").appendChild(newBrTag);
        number = 1;
        correctAnswerCount();
    }

    if (inputChoice === "choice1q5") {
        document.getElementById('radioAQ5').innerHTML = "&#10008";
        document.getElementById('radioAQ5').style.color = "red";
        document.getElementById("radioA_WrittenAnswerQ5").innerHTML = ' &nbsp;&nbsp; Background-color is used to style the background and capitalised will just uppercase the first letter of each word. &nbsp;&nbsp; ';
        document.getElementById("radioA_WrittenAnswerQ5").style.backgroundColor = "#ffbfc5";
        document.getElementById("radioA_WrittenAnswerQ5").appendChild(newBrTag);
        number = 1;
        attemptsCount();
    }
    
    if (inputChoice === "choice3q5") {
        document.getElementById('radioCQ5').innerHTML = "&#10008";
        document.getElementById('radioCQ5').style.color = "red";
        document.getElementById("radioC_WrittenAnswerQ5").innerHTML = ' &nbsp;&nbsp;While the 2nd level header will be blue, capitalised will just uppercase the first letter of each word &nbsp;&nbsp; ';
        document.getElementById("radioC_WrittenAnswerQ5").style.backgroundColor = "#ffbfc5";
        document.getElementById("radioC_WrittenAnswerQ5").appendChild(newBrTag);
        number = 1;
        attemptsCount();
    }
    if (number >= 1) {
        document.getElementById("mySubmit5").disabled = true;
    }
}

// *************************************
// Web Quiz 6
// *************************************

function myQuizWebAnswerQ6() {
    "use strict";
    var number = 0, inputChoice = document.getElementById("result").value, newBrTag = document.createElement("BR");
    if (inputChoice === "choice3q6") {
        document.getElementById('radioCQ6').innerHTML = "&#10003";
        document.getElementById('radioCQ6').style.color = "limegreen";
        document.getElementById("radioC_WrittenAnswerQ6").innerHTML = '&nbsp;&nbsp; Correct! &nbsp;&nbsp;';
        document.getElementById("radioC_WrittenAnswerQ6").style.backgroundColor = "palegreen";
        document.getElementById("radioC_WrittenAnswerQ6").appendChild(newBrTag);
        number = 1;
        correctAnswerCount();
    }

    if (inputChoice === "choice1q6") {
        document.getElementById('radioAQ6').innerHTML = "&#10008";
        document.getElementById('radioAQ6').style.color = "red";
        document.getElementById("radioA_WrittenAnswerQ6").innerHTML = ' &nbsp;&nbsp; Wrong! &nbsp;&nbsp; ';
        document.getElementById("radioA_WrittenAnswerQ6").style.backgroundColor = "#ffbfc5";
        document.getElementById("radioA_WrittenAnswerQ6").appendChild(newBrTag);
        number = 1;
        attemptsCount();
    }
    
    if (inputChoice === "choice2q6") {
        document.getElementById('radioBQ6').innerHTML = "&#10008";
        document.getElementById('radioBQ6').style.color = "red";
        document.getElementById("radioB_WrittenAnswerQ6").innerHTML = ' &nbsp;&nbsp; Wrong! &nbsp;&nbsp;. ';
        document.getElementById("radioB_WrittenAnswerQ6").style.backgroundColor = "#ffbfc5";
        document.getElementById("radioB_WrittenAnswerQ6").appendChild(newBrTag);
        number = 1;
        attemptsCount();
    }
    if (number >= 1) {
        document.getElementById("mySubmit6").disabled = true;
    }
}

// Results
function calculateResults() {
    "use strict";
// denominator = attempts
// numerator = counter
    var answer = (counter / attempts) * 100;
    // .toFixed() converts to a string!
    document.getElementById("percetDisplay").innerHTML = answer.toFixed();
}

// End of Web Quizes ======================
/* exported menuFunction */
function menuFunction() {
    "use strict";
    var x = document.getElementsByClassName("dropdown-content");

    if (x[0].style.display === "block") {
        x[0].style.display = "none";
        x[1].style.display = "none"; // makes other menu diapaer
        x[2].style.display = "none"; // makes other menu diapaer
    } else {
        x[0].style.display = "block";
        x[1].style.display = "none"; // makes other menu diapaer 
        x[2].style.display = "none"; // makes other menu diapaer
    }
}
// Makes dropdown men 1 work on click for touch screen. Note this function has a different name.

// Maps
/* exported menuFunction1 */
function menuFunction1() {
    "use strict";
    var x = document.getElementsByClassName("dropdown-content");
    if (x[1].style.display === "block") {
        x[1].style.display = "none";
        x[0].style.display = "none"; // makes other menu diapaer
        x[2].style.display = "none"; // makes other menu diapaer
    } else {
        x[1].style.display = "block";
        x[0].style.display = "none"; // makes other menu diapaer 
        x[2].style.display = "none"; // makes other menu diapaer
    }
}
    // Caller is in the div class="row" This will close the menu. 

/* exported menuFunction3 */
function menuFunction3() {
    "use strict";
    var x = document.getElementsByClassName("dropdown-content");

    if (x[2].style.display === "block") {
        x[1].style.display = "none";
        x[0].style.display = "none"; // makes other menu diapaer 
        x[2].style.display = "none"; // makes other menu diapaer

    } else {
        x[2].style.display = "block";
        x[1].style.display = "none"; // makes other menu diapaer 
        x[0].style.display = "none"; // makes other menu diapaer

    }
}
/* exported closeMenu */
function closeMenu() {
    "use strict";
    var x = document.getElementsByClassName("dropdown-content");
    if (x[1].style.display === "block" || x[0].style.display === "block" ||   x[2].style.display === "block") {
        x[1].style.display = "none";
        x[0].style.display = "none";
        x[2].style.display = "none";
    }
}


// this function opens and closes the menu when in @media mode for small 
/* exported menuFunction2 */
function menuFunction2() {
    "use strict";
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}

 

// This is for the slide show in index
var slideimages = [];
slideimages[0] = new Image();
slideimages[0].src = "images/CRS2.jpg";
slideimages[1] = new Image();
slideimages[1].src = "images/CRH.jpg";
slideimages[2] = new Image();
slideimages[2].src = "images/BHF.jpg";

var step = 0;
function slideshow1() {
    "use strict";
    document.getElementById('slide').src = slideimages[step].src;
    if (step < 2) {
        step += 1;
    } else {
        step = 0;
    }
    setTimeout(slideshow1, 4000);
}


var slideimages2 = [];
slideimages2[0] = new Image();
slideimages2[0].src = "images/Garden/sf.JPG";
slideimages2[1] = new Image();
slideimages2[1].src = "images/Garden/rsf.jpg";
slideimages2[2] = new Image();
slideimages2[2].src = "images/Garden/cat.jpg";


var step2 = 0;
function slideshow2() {
    "use strict";
    document.getElementById('slide2').src = slideimages2[step2].src;
    if (step2 < 2) {
        step2 += 1;
    } else {
        step2 = 0;
    }
    setTimeout(slideshow2, 4000);
}

// ========== slideshow 3 ===========  

var slideimages3 = [];
slideimages3[0] = new Image();
slideimages3[0].src = "images/Church/ChristChurch.jpg";
slideimages3[1] = new Image();
slideimages3[1].src = "images/Church/BBQ.jpg";
slideimages3[2] = new Image();
slideimages3[2].src = "images/Church/ChristChurch.jpg";


var step3 = 0;
function slideshow3() {
    "use strict";
    document.getElementById('slide3').src = slideimages3[step3].src;
    if (step3 < 2) {
        step3 += 1;
    } else {
        step3 = 0;
    }
    setTimeout(slideshow3, 4000);
}


/*  This is the function for my spare time  */
/* exported openCity */
function openCity(evt, cityName) {
    "use strict";
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i += 1) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i += 1) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

/* exported start */
function start() {
    "use strict";
    slideshow1();
    slideshow2();
    slideshow3();
}
