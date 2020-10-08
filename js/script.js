const steam_api = 'http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=8285034BEE279FA1E4A1F9962EC770F7&steamid=76561198072408509&format=json&count=3';
const proxyurl = 'https://cors-anywhere.herokuapp.com/'; //server for proxy, no need to NodeJS? !!!!

//Get the button
var mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

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
  var url = "https://api.chucknorris.io/jokes/random";
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //get json
      var json = JSON.parse(this.responseText);
      parseResponse(json);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send(); //call api endpoint for facts
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
  var url = "https://api.nasa.gov/planetary/apod?api_key=yvLShTsXffXprPbFBaxiBFmPbt3ff6JmEm0Y3Guj";
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //get json
      var json = JSON.parse(this.responseText);
      parseResponser(json);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send(); //call api endpoint for facts
}

function parseResponser(json) {
  //simple object with a value prop
  document.getElementById("img").innerHTML = "<img src=" + json["url"] + " />";
  if (document.getElementById("copyright")) {

    document.getElementById("copyright").innerHTML = "By " + json["copyright"];
  }
  document.getElementById("title").innerHTML = json["title"];
  document.getElementById("explanation").innerHTML = json["explanation"];
}

window.onload = nasa();
//window.getElementById("logo").addEventListener("click", function() {
//  nasa();
//}) window.onload makes this unneeded

//Steam api
async function getGames() {
  const response = await fetch(proxyurl + steam_api);
  const data = await response.json();
  var url = "http://media.steampowered.com/steamcommunity/public/images/apps/";

  //first game
  var logoUrl1 = url + data.response.games[0].appid + "/" + data.response.games[0].img_logo_url + ".jpg";
  var name1 = data.response.games[0].name;
  var hoursPlayed1 = Math.round(data.response.games[0].playtime_forever / 60);

  document.getElementById("lastPlayedUrl1").src = logoUrl1;
  document.getElementById("lastPlayedTitle1").innerHTML = name1;
  document.getElementById("lastPlayedHours1").innerHTML = hoursPlayed1;

  //second game
  var logoUrl2 = url + data.response.games[1].appid + "/" + data.response.games[1].img_logo_url + ".jpg";
  var name2 = data.response.games[1].name;
  var hoursPlayed2 = Math.round(data.response.games[1].playtime_forever / 60);

  document.getElementById("lastPlayedUrl2").src = logoUrl2;
  document.getElementById("lastPlayedTitle2").innerHTML = name2;
  document.getElementById("lastPlayedHours2").innerHTML = hoursPlayed2;

  //Third game
  var logoUrl3 = url + data.response.games[2].appid + "/" + data.response.games[2].img_logo_url + ".jpg";
  var name3 = data.response.games[2].name;
  var hoursPlayed3 = Math.round(data.response.games[2].playtime_forever / 60);

  document.getElementById("lastPlayedUrl3").src = logoUrl3;
  document.getElementById("lastPlayedTitle3").innerHTML = name3;
  document.getElementById("lastPlayedHours3").innerHTML = hoursPlayed3;
  //fourth is not possible with current proxy, in future I'd like to fix my steam node server
}
getGames(); //runs it automatically


//cors anywhere seems handy enough not to need NodeJS again ~_~ proxy code untouched (recommended)
(function() {
  var cors_api_host = 'cors-anywhere.herokuapp.com';
  var cors_api_url = 'https://' + cors_api_host + '/';
  var slice = [].slice;
  var origin = window.location.protocol + '//' + window.location.host;
  var open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function() {
    var args = slice.call(arguments);
    var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
    if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
      targetOrigin[1] !== cors_api_host) {
      args[1] = cors_api_url + args[1];
    }
    return open.apply(this, args);
  };
})();
