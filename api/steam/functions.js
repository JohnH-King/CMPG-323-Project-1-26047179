//
const express = require('express');

document.addEventListener('DOMContentLoaded', bindGetNewsButton);
document.addEventListener('DOMContentLoaded', bindUserStatsButton);
document.addEventListener('DOMContentLoaded', bindGetAchPcntButton);
document.addEventListener('DOMContentLoaded', bindGetPlayerSummariesButton);
document.addEventListener('DOMContentLoaded', bindGetFriendListButton);
document.addEventListener('DOMContentLoaded', bindGetPlayerAchievementsButton);
document.addEventListener('DOMContentLoaded', bindGetRecentlyPlayedGamesButton);
document.addEventListener('DOMContentLoaded', bindGetOwnedGamesButton);
document.addEventListener('DOMContentLoaded', bindIsPlayingSharedGameButton);
document.addEventListener('DOMContentLoaded', bindGetSchemaForGameButton);
document.addEventListener('DOMContentLoaded', bindGetPlayerBansButton);
document.addEventListener('DOMContentLoaded', bindGetContentsNewsButton);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});


function bindGetNewsButton(){
	document.getElementById('getNewsForApp').addEventListener('click', function(event) {
	var homeURL = "http://localhost:6666/getnews/?"
	var userInput = document.getElementById('getNewsInput').value;
	var newURL = homeURL+userInput;
	var req = new XMLHttpRequest();
	req.open("GET", newURL, true);
	req.addEventListener('load', function(){
		if(req.status>= 200 && req.status<400){
		var response = JSON.parse(req.responseText);
		console.log(response);
		}
			else {
				console.log("Error in network request: " + request.statusText);
			}
	});
	req.send(null);
	event.preventDefault();
});
}

function bindGetAchPcntButton(){
	document.getElementById('getGlobalAchievementPercentagesForApp').addEventListener('click', function(event) {
	var homeURL = "http://localhost:6666/getachievementsperc/?"
	var userInput = document.getElementById('getAchPcntInput').value;
	var newURL = homeURL+userInput;
	var req = new XMLHttpRequest();
	req.open("GET", newURL, true);
	req.addEventListener('load', function(){
		if(req.status>= 200 && req.status<400){
		var response = JSON.parse(req.responseText);
		response.appnews.newsitems[0].contents;
		console.log(response);
		}
			else {
				console.log("Error in network request: " + request.statusText);
			}
	});
	req.send(null);
	event.preventDefault();
});
}

function bindGetPlayerSummariesButton(){
	document.getElementById('getPlayerSummaries').addEventListener('click', function(event) {
	var homeURL = "http://localhost:6666/getplayersummary/?"
	var userInput = document.getElementById('getPlSummaryInput').value;
	var newURL = homeURL+userInput;
	var req = new XMLHttpRequest();
	req.open("GET", newURL, true);
	req.addEventListener('load', function(){
		if(req.status>= 200 && req.status<400){
		var response = JSON.parse(req.responseText);
		console.log(response);
		}
			else {
				console.log("Error in network request: " + request.statusText);
			}
	});
	req.send(null);
	event.preventDefault();
});
}

function bindGetFriendListButton(){
	document.getElementById('getFriendList').addEventListener('click', function(event) {
	var homeURL = "http://localhost:6666/getfriendlist/?"
	var userInput = document.getElementById('getFriendListInput').value;
	var newURL = homeURL+userInput;
	var req = new XMLHttpRequest();
	req.open("GET", newURL, true);
	try{

		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
		console.log(data.response.games[0].name);

		//DOM
		document.getElementById("_id").innerHTML = '
		<h1 class="text-center"> Games recently played</h1>
		${data.response.games.map(gamelogoTemplate.join('')}'
		}
			else {
				console.log("Error in network request: " + request.statusText);
			}
	});
	req.send(null);
	event.preventDefault();
});
}

function bindGetPlayerAchievementsButton(){
	document.getElementById('GetPlayerAchievements').addEventListener('click', function(event) {
	var homeURL = "http://localhost:6666/getplayerachievements/?"
	var userInput = document.getElementById('getPlayerAchievementsInput').value;
	var newURL = homeURL+userInput;
	var req = new XMLHttpRequest();
	req.open("GET", newURL, true);
	req.addEventListener('load', function(){
		if(req.status>= 200 && req.status<400){
		var response = JSON.parse(req.responseText);
		console.log(response);
		}
			else {
				console.log("Error in network request: " + request.statusText);
			}
	});
	req.send(null);
	event.preventDefault();
});
}


function bindUserStatsButton(){
	document.getElementById('getUserStatsForGame').addEventListener('click', function(event) {
	var homeURL = "http://localhost:3300/getuserstats/?"
	var userAppID = document.getElementById('getUserStatsAppID').value;
	var userPlayerID = document.getElementById('getUserStatsPlayerID').value;
	var newURL = homeURL+userAppID+'='+userPlayerID;
	var req = new XMLHttpRequest();
	req.open("GET", newURL, true);
	req.addEventListener('load', function(){
		if(req.status>= 200 && req.status<400){
		var response = JSON.parse(req.responseText);
		console.log(response);
		}
			else {
				console.log("Error in network request: " + request.statusText);
			}
	});
	req.send(null);
	event.preventDefault();
});
}

function bindGetOwnedGamesButton(){
	document.getElementById('GetOwnedGames').addEventListener('click', function(event) {
	var homeURL = "http://localhost:3300/getownedgames/?"
	var userInput = document.getElementById('getOwnedGamesInput').value;
	var newURL = homeURL+userInput;
	var req = new XMLHttpRequest();
	req.open("GET", newURL, true);
	req.addEventListener('load', function(){
		if(req.status>= 200 && req.status<400){
		var response = JSON.parse(req.responseText);
		console.log(response);
		}
			else {
				console.log("Error in network request: " + request.statusText);
			}
	});
	req.send(null);
	event.preventDefault();
});
}

function bindGetRecentlyPlayedGamesButton(){
	document.getElementById('GetRecentlyPlayedGames').addEventListener('click', function(event) {
	var homeURL = "http://localhost:3300/getrecentlyplayed/?"
	var userInput = document.getElementById('getRecentlyPlayedGamesInput').value;
	var newURL = homeURL+userInput;
	var req = new XMLHttpRequest();
	req.open("GET", newURL, true);
	req.addEventListener('load', function(){
		if(req.status>= 200 && req.status<400){
		var response = JSON.parse(req.responseText);
		console.log(response);
		}
			else {
				console.log("Error in network request: " + request.statusText);
			}
	});
	req.send(null);
	event.preventDefault();
});
}

function bindIsPlayingSharedGameButton(){
	document.getElementById('IsPlayingSharedGame').addEventListener('click', function(event) {
	var homeURL = "http://localhost:3300/isplayingshared/?"
	var userAppID = document.getElementById('IsPlayingSharedGameAppID').value;
	var userPlayerID = document.getElementById('IsPlayingSharedGamePlayerID').value;
	var newURL = homeURL+userAppID+'='+userPlayerID;
	var req = new XMLHttpRequest();
	req.open("GET", newURL, true);
	req.addEventListener('load', function(){
		if(req.status>= 200 && req.status<400){
		var response = JSON.parse(req.responseText);
		console.log(response);
		}
			else {
				console.log("Error in network request: " + request.statusText);
			}
	});
	req.send(null);
	event.preventDefault();
});
}

function bindGetSchemaForGameButton(){
	document.getElementById('GetSchemaForGame').addEventListener('click', function(event) {
	var homeURL = "http://localhost:3300/getschema/?"
	var userInput = document.getElementById('GetSchemaForGameInput').value;
	var newURL = homeURL+userInput;
	var req = new XMLHttpRequest();
	req.open("GET", newURL, true);
	req.addEventListener('load', function(){
		if(req.status>= 200 && req.status<400){
		var response = JSON.parse(req.responseText);
		console.log(response);
		}
			else {
				console.log("Error in network request: " + request.statusText);
			}
	});
	req.send(null);
	event.preventDefault();
});
}

function bindGetPlayerBansButton(){
	document.getElementById('GetPlayerBans').addEventListener('click', function(event) {
	var homeURL = "http://localhost:3300/getbans/?"
	var userInput = document.getElementById('GetPlayerBansInput').value;
	var newURL = homeURL+userInput;
	var req = new XMLHttpRequest();
	req.open("GET", newURL, true);
	req.addEventListener('load', function(){
		if(req.status>= 200 && req.status<400){
		var response = JSON.parse(req.responseText);
		console.log(response);
		}
			else {
				console.log("Error in network request: " + request.statusText);
			}
	});
	req.send(null);
	event.preventDefault();
});
}

function bindGetContentsNewsButton(){
	document.getElementById('getContentsNewsForApp').addEventListener('click', function(event) {
	var homeURL = "http://localhost:3300/getnews/?"
	var userInput = document.getElementById('GetContentsNewsForAppInput').value;
	var newURL = homeURL+userInput;
	var req = new XMLHttpRequest();
	req.open("GET", newURL, true);
	req.addEventListener('load', function(){
		if(req.status>= 200 && req.status<400){
		var response = JSON.parse(req.responseText);
		console.log(response);
		console.log(response.appnews.appid);
		console.log(response.appnews.newsitems[0].contents);
		showContents(response);
		}
			else {
				console.log("Error in network request: " + request.statusText);
			}
	});
	req.send(null);
	event.preventDefault();
});
}
/*
function showContents(response){
	var newsList = document.createElement('ul');
	for (var i in response.response.games){
		var gameName = response.response.games[p].name;

		console.log(gameName);
		var play2wks = response.response.games[p].playtime_2weeks;
		var playForver = response.response.games[p].playtime_forever;

		var newName = document.createElement('p');
		var newPlayTime = document.createElement('p');
		newName.textContent = gameName;
		newPlayTime.textContent = play2wks;

		document.getElementById('RecentlyOwned').appendChild(newName);
		document.getElementById('RecentlyOwned').appendChild(newPlayTime);
}
const listNode2 = document.getElementById('demo2')
function listWithForEach (employees) {
  employees.forEach(function(employee) {
    listNode2.innerHTML += '<li>'+employee.firstName+'</li>'
  })
}

//using += will append content to your list, so if you call your function twice, you'll get a repeating items.
listWithForEach(arr)
listWithForEach(arr)
*/

function showContents(response){
	var newsList = document.createElement('ul');
	for (var i = 0; i<3; i++){
		var newItem = document.createElement('li');
		newItem.textContent = response.appnews.newsitems[i].contents;
		newsList.appendChild(newItem);
	}
	document.getElementById("newsItems").appendChild(newsList);
}

function showOwnedGames(){
	var newList = document.createElement('ul');

}
