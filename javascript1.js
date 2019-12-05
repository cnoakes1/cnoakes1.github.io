
/*JavaScript for home page written by Grayson Mortimer*/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}



/*JavaScript for Events page written by Mara Van Meer*/
/************************JavaScript for first event button*****************************************/
    
function FirstEventLoc() { /*Call location function*/
  document.getElementById("location").innerHTML = "LOCATION: The Royal Canadian Legion" /*Location text*/
  }

function FirstEventAdd() { /*Call address function*/
  document.getElementById("address").innerHTML = "ADDRESS: 12 York St N, Lindsay"  /*Address text*/
  }

function FirstEventTime() { /*Call time function*/
  document.getElementById("time").innerHTML = "RUN TIME: 10AM- 1PM"  /*Time text*/
  }

var btn= document.getElementById("mybutton")  /*Calling button by ID*/

btn.addEventListener("click", FirstEventLoc)  /*Attaches function to button*/
btn.addEventListener("click", FirstEventAdd) /*Attaches function to button*/
btn.addEventListener("click", FirstEventTime) /*Attaches function to button*/

  /************************JavaScript for second event button*****************************************/
function LocationSecondEvent() { /*Call location function*/
  document.getElementById("location2").innerHTML = "LOCATION: Kawartha Lakes Public Library" /*Location text*/
  }

function AddressSecondEvent() { /*Call address function*/
  document.getElementById("address2").innerHTML = "ADDRESS: 190 Kent St W, Lindsay"  /*Address text*/
  }

function TimeSecondEvent() { /*Call time function*/
  document.getElementById("time2").innerHTML = "RUN TIME: 4PM- 7PM"  /*Time text*/
  }

var btn2= document.getElementById("secondbutton")  /*Calling button by ID*/

btn2.addEventListener("click", LocationSecondEvent)  /*Attaches function to button*/
btn2.addEventListener("click", AddressSecondEvent) /*Attaches function to button*/
btn2.addEventListener("click", TimeSecondEvent) /*Attaches function to button*/

/************************JavaScript for third event button*****************************************/
function EventThreeLocation() { /*Call location function*/
  document.getElementById("location3").innerHTML = "LOCATION: Lindsay Recreation Complex" /*Location text*/
  }

function EventThreeAdd() { /*Call address function*/
  document.getElementById("address3").innerHTML = "ADDRESS:  133 Adelaide St S, Lindsay"  /*Address text*/
  }

function EventThreeTime() { /*Call time function*/
  document.getElementById("time3").innerHTML = "RUN TIME: 10AM- 5PM"  /*Time text*/
  }

var btn3= document.getElementById("lastbutton")  /*Calling button by ID*/

btn3.addEventListener("click", EventThreeLocation)  /*Attaches function to button*/
btn3.addEventListener("click", EventThreeAdd) /*Attaches function to button*/
btn3.addEventListener("click", EventThreeTime) /*Attaches function to button*/
/*Code to call multiple javascript functions referenced from TutorialRepublic. (2019). How to Call Multiple JavaScript Functions in onClick Event. Retrieved from TutorialRepublic: https://www.tutorialrepublic.com/faq/how-to-call-multiple-javascript-functions-in-a-single-onclick-event.php*/         