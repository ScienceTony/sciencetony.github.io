
    function myFunction() {
    document.getElementById("button1").innerHTML = "This button would do something cool!";
    document.getElementById("button1").style.color="blue";
    document.getElementById("button1").style.border="none";
    }
    // Notice that .getElementsByClassName is different in 2 ways.
    // 1) There is an 's' at the end of Element in .getElementsByClassName
    // 2) ClassName not just Class in place of ID 
    // Makes dropdown men 0 work on click for touch screen
    // 3) It is necessary to use indexing and use a seperate function; hence, menuFunction() and menuFunction1()
    function menuFunction() {
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
    function menuFunction1() {
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

// Code
    function menuFunction3() {
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
    function closeMenu(){
        var x = document.getElementsByClassName("dropdown-content");
        if (x[1].style.display === "block" || x[0].style.display === "block" || x[2].style.display === "block") {
            x[1].style.display = "none";
            x[0].style.display = "none"; 
            x[2].style.display = "none";
          }
    }


      // this function opens and closes the menu when in @media mode for small 
    function menuFunction2() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += "responsive";
      } else {
        x.className = "topnav";
      }
} 

 

// This is for the slide show in index
var slideimages = new Array();
slideimages[0] = new Image();
slideimages[0].src = "images/CRS2.jpg";
slideimages[1] = new Image();
slideimages[1].src = "images/CRH.jpg";
slideimages[2] = new Image();
slideimages[2].src = "images/BHF.jpg";

var step = 0;
function slideshow1() {
document.getElementById('slide').src = slideimages[step].src;
if (step < 2) {
step++;
} else {
step = 0;
}
setTimeout(slideshow1,4000);
}

  

var slideimages2 = new Array();
slideimages2[0] = new Image();
slideimages2[0].src = "images/Garden/sf.JPG";
slideimages2[1] = new Image();
slideimages2[1].src = "images/Garden/rsf.jpg";
slideimages2[2] = new Image();
slideimages2[2].src = "images/Garden/cat.jpg";


var step2 = 0;
function slideshow2() {
document.getElementById('slide2').src = slideimages2[step2].src;
if (step2 < 2) {
step2++;
} else {
step2 = 0;
}
setTimeout(slideshow2,4000);
}

// ========== slideshow 3 ===========  

var slideimages3 = new Array();
slideimages3[0] = new Image();
slideimages3[0].src = "images/Church/ChristChurch.jpg";
slideimages3[1] = new Image();
slideimages3[1].src = "images/Church/BBQ.jpg";
slideimages3[2] = new Image();
slideimages3[2].src = "images/Church/ChristChurch.jpg";


var step3 = 0;
function slideshow3() {
document.getElementById('slide3').src = slideimages3[step3].src;
if (step3 < 2) {
step3++;
} else {
step3 = 0;
}
setTimeout(slideshow3, 4000);
}


/*  This is the function for my spare time  */

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
    
}



function start() {
    slideshow1();
    slideshow2();
    slideshow3();
}
