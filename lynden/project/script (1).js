window.onscroll = function () { scrollFunction() };
var newUser;
var newPwrd;

var loginNbr = 0;
var login;

let keys = {
	q: false,
	z: false,
};

const currentDate = new Date().toDateString();
var currentCookies = getCookieCount();


addEventListener("keydown", (event) => {
	if (event.key === 'q') {
		keys.q = true;
	}
	if (event.key === 'z') {
		keys.z = true;
	}

	if (keys.q && keys.z) {
		/*deleteCookie("cookieLogin");
		alert("Cookies Reset: " + currentCookies);*/
		//setCookie("cookieLogin", "isVerified");
		login = false
    }
})

/*var currentDate = new Date().toLocalDateString();
var currentTime = new Date().getTime();

localStorage.clear();*/





function scrollFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		document.getElementById("navbar").style.padding = "30px 10px";
		document.getElementById("logo").style.fontSize = "25px";
	} else {
		document.getElementById("navbar").style.padding = "80px 10px";
		document.getElementById("logo").style.fontSize = "35px";
	}
}

function openTest() {
	/*var login1 = localStorage.getItem("loginkey", login);*/
	/*var cookieLogin = document.cookie;*/
	// var funcRun = listCookies();

	// console.log("This ran" + funcRun);

	/*alert(cookieLogin);*/

	/*if (funcRun !== 0) {
	window.open("index2.html");		
	} else {
		alert("This quiz is locked: please log in to continue");
		window.open("account.html");
	}*/
	if (loginNbr == 1){
			if (login == 1){
			window.open("index2.html")
		}else{
			alert("This quiz is locked: please log in to continue");
			window.open("account.html");
			loginNbr = 0;
		}
	}else{
		alert("This quiz is locked: please log in to continue");
		window.open("account.html");
	}

	
}

function openAbout() {
	window.open("./about.html");
}

function openCookie(){
	window.open("../Game 1 - Cookie Clicker/cookie.html");
}


function checkAnswer() {
	var correctAnsSel = document.getElementById("correctAnswer").checked;
	var textInput = document.getElementById("textBox").value;
	var correctText = "<a href="url" target="_blank">"

	if (textInput.equalsTo(correctText)){
		console.log("textInput = correctAnswer");
		if (correctAnsSel) {
			alert("Quiz Completed!\nCurrent Score: 2/2 (100%)");
		}else{
			alert("Quiz Completed!\nCurrent Score: 1/2 (50%)");
		}
	}else{
		console.log("textInput /= correctText: " + textInput + " " + correctText);
		if (correctAnsSel){
			alert("Quiz Completed!\nCurrent Score: 1/2 (50%)");
		}else{
			alert("Quiz Failed!\nCurrent Score: 0/2 (0%)");
		}
	}
}

function setCredentials() {
	var newUser = document.getElementById('newUser').value;
	var newPwrd = document.getElementById('newPwrd').value;

	if (newUser == '' || newPwrd == '') {
		alert("Please complete the rest of the fields.");
	} else {
		localStorage.setItem("newUserKey", newUser);
		localStorage.setItem("newPwrdKey", newPwrd);

		console.log("CREDENTIALS: " + newUser + " " + newPwrd);
		alert("Account Successdully Created");
		console.log("CREATED CREDENTIALS: " + newUser + " " + newPwrd);
		window.open("account.html");

	}
}


function checkCredentials() {
	var newUser1 = localStorage.getItem("newUserKey", newUser);
	var newPwrd1 = localStorage.getItem("newPwrdKey", newPwrd);

	var inputUser = document.getElementById('checkUser').value;
	var inputPwrd = document.getElementById('checkPwrd').value;

	console.log("CREDENTIALS: " + newUser1 + " " + newPwrd1);


	if (inputUser == newUser1) {
		if (inputPwrd == newPwrd1) {
			/*login = true;*/
			/*localStorage.setItem("loginkey", login);*/


			/*document.cookie = "login=true; expires=currentDate currentTime + 00:00:30;";*/
			

			window.open("index.html");

			login = true;
			loginNbr = 1;

			setCookie("cookieLogin", "isVerified");
			/*getCookies();*/

			/*var date = new Date();
			date.setTime(date.getTime() + (30 * 1000));
			$.cookie(login, isVerified, { expires: date });*/
		}
	}else{
		alert("Username or Password incorrect");
	}
}


function setCookie(name, value) {
	var now = new Date();

	// Set the expiration time to 60 seconds from now
	now.setTime(now.getTime() + 60 * 1000);

	// Format the expiration time in UTC/GMT format
	var expires = "expires=" + now.toUTCString();

	// Set the cookie with the specified name, value, and expiration time
	document.cookie = name + "=" + value + ";" + expires + ";path=/";
}


/*function setCookie(name, value, maxAgeSeconds) {
	var maxAgeSegment = "; max-age=" + maxAgeSeconds;
	document.cookie = encodeURI(name) + "=" + encodeURI(value) + maxAgeSegment;
}*/

/*function getCookies() {
/*let cookie = "username=geeks;expires=Mon, 18 Dec 2023;path=/";*/
/*
	let cookie = document.cookie();
	console.log("this ran 3" + cookie);
	let cookies = cookie.split(';');
	let ret = '';

	for (let i = 1; i <= cookies.length; i++) {
		ret += i + ' - ' + cookies[i - 1] + "\n";
	}

	return ret;
}*/

/*function listCookies() {
	var theCookies = document.cookie.split(';');
	var aString = '';
	for (var i = 1; i <= theCookies.length; i++) {
		aString += i + ' ' + theCookies[i - 1] + "\n";
	}
	return aString;
}*/

function getCookieCount() {
	// Get the cookie string
	var cookies = document.cookie;

	// Split the cookie string into an array of individual cookies
	var cookieArray = cookies.split(';');

	// Return the count of cookies
	return cookieArray.length;
}

function deleteCookie(name) {
	// Set the expiration time to a date in the past
	var expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC";

	// Set the cookie with the specified name and expiration time in the past
	document.cookie = name + "=;" + expires + ";path=/";
}

console.log(listCookies());

/*console.log(getCookies());*/

/*ABOUT

About
Welcome to QuizQuest – Where Knowledge Meets Fun!
At QuizQuest, we believe that learning can be an enjoyable adventure, and what better way to embark on that journey than through quizzes! Whether you're a trivia enthusiast, a lifelong learner, or just looking to have some fun, QuizQuest is your go-to destination for an exciting and interactive quiz experience.
Our Mission:
At QuizQuest, our mission is to make learning entertaining and accessible to everyone. We strive to create a platform where curiosity is rewarded, and knowledge is celebrated. Through a diverse range of quizzes spanning various topics and difficulty levels, we aim to engage and inspire learners of all ages.
Why Choose QuizQuest?
* 		Diverse Content: From history and science to pop culture and sports, QuizQuest offers a wide array of quiz categories to cater to all interests. Explore and expand your knowledge in a fun and engaging way.
* 		Interactive Experience: Our quizzes are designed to be interactive and user-friendly. Whether you're playing solo or challenging your friends, the QuizQuest experience is sure to keep you on your toes.
* 		Educational Fun: Learning doesn't have to be boring. At QuizQuest, we believe in the power of play. Our quizzes are crafted to provide an enjoyable learning experience that encourages curiosity and critical thinking.
* 		Challenge Yourself: Whether you're a trivia novice or a seasoned quizmaster, QuizQuest has quizzes for every skill level. Challenge yourself and track your progress as you climb the ranks of knowledge.
* 		Community Engagement: Connect with like-minded individuals who share your passion for learning. Join the QuizQuest community to discuss quizzes, share interesting facts, and compete in friendly competitions.
How It Works:
* 		Browse Categories: Explore our extensive collection of quiz categories. From science and literature to movies and geography, there's something for everyone.
* 		Select Your Quiz: Choose a quiz that piques your interest. Our quizzes range from quick and casual to in-depth and challenging.
* 		Play and Learn: Answer questions, earn points, and discover fascinating facts along the way. Whether you're aiming for a high score or simply enjoying the experience, QuizQuest is designed to be a rewarding journey.
* 		Track Your Progress: Monitor your quiz history, track your achievements, and see how your knowledge evolves over time. The more you play, the more you'll learn!
Join us at QuizQuest and embark on a learning adventure like never before. Let the quest for knowledge begin!
*/