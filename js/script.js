//Get the button
var mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'none';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}

//Chuck Norris api
function randomFact() {
  var xmlhttp = new XMLHttpRequest();
  var url= "https://api.chucknorris.io/jokes/random";
  xmlhttp.onreadystatechange= function() {
    if (this.readyState == 4 && this.status == 200) {
      //get json
      var json = JSON.parse(this.responseText);
      parseResponse(json);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();//call api endpoint for facts
}

function parseResponse(json) {
  //simple object with a value prop
  document.getElementById("data").innerHTML = "<b>" + json["value"] + "</b>";
}

document.getElementById("logo").addEventListener("click", function() {
  randomFact();
});

function nasa() {
  var xmlhttp = new XMLHttpRequest();
  var url= "https://api.nasa.gov/planetary/apod?api_key=yvLShTsXffXprPbFBaxiBFmPbt3ff6JmEm0Y3Guj";
  xmlhttp.onreadystatechange= function() {
    if (this.readyState == 4 && this.status == 200) {
      //get json
      var json = JSON.parse(this.responseText);
      parseResponser(json);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();//call api endpoint for facts
}

function parseResponser(json) {
  //simple object with a value prop
  document.getElementById("img").innerHTML = "<img src=" + json["url"] + " />";
  if (document.getElementById("copyright")) {

  document.getElementById("copyright").innerHTML="By " + json["copyright"];}
  document.getElementById("title").innerHTML= json["title"];
  document.getElementById("explanation").innerHTML= json["explanation"];
}

window.getElementById("logo").addEventListener("click", function() {
  nasa();
})
