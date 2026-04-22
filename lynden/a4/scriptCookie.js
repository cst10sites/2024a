// global variables
window.onscroll = function () { scrollFunction() };
var nClicks = 0;
var startTime = new Date().getTime();
var crumbs = 0;
var speedBuy = 1;
var rebirth = 0;

var priceSpeedMultiple = 1;
var priceGambleMultiple = 1;
var priceRebirthMultiple = 1;

document.getElementById("crumbCounter").innerHTML = crumbs + " Crumbs";

document.getElementById("speedPrice").innerHTML = "Price: " + 50 * priceSpeedMultiple;
document.getElementById("gamblePrice").innerHTML = "Price: " + 75 * priceSpeedMultiple;
document.getElementById("rebirthPrice").innerHTML = "Price: " + 100000 * priceSpeedMultiple;

function updateCPS() {
	if (nClicks == 0) {
		startTime = new Date().getTime();
		nClicks += 1;
		crumbs += 1;

	}
	else {
		var currentTime = new Date().getTime();
		var timeElapsed = currentTime - startTime;
		var cps = (nClicks / timeElapsed) * 1000;

		document.getElementById("cpsDisplay").innerHTML = "Clicks/Sec: " + Math.round(cps);
		document.getElementById("nClicks").innerHTML = "Total Clicks: " + nClicks;
		document.getElementById("crumbCounter").innerHTML = crumbs + " Crumbs";
		
		

	
		nClicks += 1;
		crumbs += 1 * speedBuy;

		
	}
}

function purchase(speed, gamble, rebirth) {
	if (speed) {
		if (crumbs >= 50 * priceSpeedMultiple) {
			crumbs -= 50 * priceSpeedMultiple;
			speedBuy += 1;
			priceSpeedMultiple += 1;

			document.getElementById("speedPrice").innerHTML = "Price: " + 50 * priceSpeedMultiple;
			document.getElementById("crumbCounter").innerHTML = crumbs + " Crumbs";
			document.getElementById("speedCounter").innerHTML = "Owned: " + (priceSpeedMultiple - 1);
		} else {
			alert("You Do Not Have Enough Crumbs For This Upgrade!\nCrumbs Needed: " + (50 * priceSpeedMultiple - crumbs + 1) + " (" + (crumbs - 1) + ")");
        }
			
			
	}
	if (gamble) {
		if (crumbs >= 75 * priceGambleMultiple) {
			crumbs -= 75 * priceGambleMultiple;
			crumbs = nClicks / 2;
			priceGambleMultiple += 1;

			document.getElementById("gamblePrice").innerHTML = "Price: " + 75 * priceSpeedMultiple;
			document.getElementById("crumbCounter").innerHTML = crumbs + " Crumbs";
			document.getElementById("gambleCounter").innerHTML = "Owned: " + (priceGambleMultiple - 1);

		} else {
			alert("You Do Not Have Enough Crumbs For This Upgrade!\nCrumbs Needed: " + (75 * priceGambleMultiple - crumbs + 1) + " (" + (crumbs - 1) + ")");
        }
		
	}
	if (rebirth) {
		if (crumbs >= 100000 * priceRebirthMultiple) {
			crumbs = 0;
			nClicks = 0;
			rebirth = 1;
			priceRebirthMultiple += 1;

			document.getElementById("rebirthPrice").innerHTML = "Price: " + 100000 * priceSpeedMultiple;
			document.getElementById("crumbCounter").innerHTML = crumbs + " Crumbs";
			document.getElementById("rebirthDisplay").innerHTML = "You've Rebirthed " + rebirth + " Times!";
			document.getElementById("rebirthCounter").innerHTML = "Owned: " + (priceRebirthMultiple - 1);

		} else {
			alert("You Do Not Have Enough Crumbs For This Upgrade!\nCrumbs Needed: " + (100000 * priceRebirthMultiple - crumbs + 1) + " (" + (crumbs - 1) + ")");
        }
		
		
	}

	function scrollFunction() {
		if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
			document.getElementById("navbar").style.padding = "30px 10px";
			document.getElementById("logo").style.fontSize = "25px";
		} else {
			document.getElementById("navbar").style.padding = "80px 10px";
			document.getElementById("logo").style.fontSize = "35px";
		}
	}
}