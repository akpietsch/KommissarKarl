

function renderIndicators(){
	//store the references outside the event handler!
	var $window = $(window);

	function checkWidth() {

		var windowsize = $window.width();

		if (windowsize > 530) {
			smallWidth = false;
		}
		else {
			smallWidth = true;
		}
		console.log("resized!");
	}
	// Execute on load
	checkWidth();
	// Bind event listener
	$(window).resize(checkWidth);
}



//DEBUG


function setCookie(name, value) {

	window.localStorage.setItem(name, parseInt(value));

	console.log("set "+name+" to "+value);
}

function readCookie(cname) {

	return parseInt(window.localStorage.getItem(cname));

}


