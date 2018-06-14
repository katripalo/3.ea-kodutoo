/*setTimeout("callback()",50000);*/


var options = {
	type: "basic",
	title: "Ahoi",
	message: "Saad siin lehel olla 1 min",
	iconUrl: "icon.png"
};

chrome.notifications.create(options, callback);

function callback(){
}

