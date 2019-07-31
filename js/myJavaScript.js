
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
      } else {
        x[0].style.display = "block";
        x[1].style.display = "none"; // makes other menu diapaer 
      }
    }
    // Makes dropdown men 1 work on click for touch screen. Note this function has a different name. 
    function menuFunction1() {
      var x = document.getElementsByClassName("dropdown-content");
      if (x[1].style.display === "block") {
        x[1].style.display = "none";
        x[0].style.display = "none"; // makes other menu diapaer 
      } else {
        x[1].style.display = "block";
        x[0].style.display = "none"; // makes other menu diapaer       
      }
    }
    // Caller is in the div class="row" This will close the menu. 
    function closeMenu(){
        var x = document.getElementsByClassName("dropdown-content");
        if (x[1].style.display === "block" || x[0].style.display === "block") {
            x[1].style.display = "none";
            x[0].style.display = "none";  
          }
    }
      // this function opens and closes the menu when in @media mode for small 
    function menuFunction2(){
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
} 
