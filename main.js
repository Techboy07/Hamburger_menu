// variable declaration
//var windowWidth = "";
//var windowHeight = window.innerHeight;
//var navWidth = nav.offsetWidth;
//let output = document.getElementById("output");


// gets the width of the screen immediately its loaded
/*window.onload = function(){
    windowWidth = window.innerWidth;
}*/
// updates the value of the width of the window onreload
/*window.onresize = function(){    
    windowWidth = window.innerWidth;
  chechWidth()
}*/
// adds stuffs when the width is below 792
/*function chechWidth(){
      output.innerText = "window is " + windowWidth + " wide";
    if (windowWidth < 792){
        output.classList.add("small");
        nav.classList.add("small-nav");
        hamburger.classList.add("")
    }else{
        output.classList.remove("small"); 
        nav.classList.remove("small-nav");
    }
}*/




const nav = document.querySelector(".nav-menu")

const hamburger = document.getElementById("hamburger");

const hamIcon = document.getElementById("ham-icon");;

// changes the icon of the hamburger onclick

function cancel() {
  hamIcon.classList.add("fa-xmark");
  hamburger.setAttribute('onclick', "lines()");
}

// change the icon of the hamburger back to the default
function lines() {
  hamIcon.classList.replace("fa-xmark", "fa-bars");
  hamburger.setAttribute("onclick", "cancel()");
}

//this code is for menu toggling

hamburger.addEventListener("click", (event) => {
  event.preventDefault()
  
  /*without animation*/
  
/*  if (nav.style.display != "flex") {
    nav.style.display = 'flex'
  }else {
    nav.style.display = "none"
  }*/
  
  //with animation
  
  if(nav.getAttribute("data-visible") == "true"){
    nav.setAttribute("data-visible", "false")
  }else{
    nav.setAttribute("data-visible", "true")
  }
})
