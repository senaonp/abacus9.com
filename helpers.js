// shorthand selector by class or id
var elemSelector = function(elemString) {
	return {
		".": document.getElementsByClassName(elemString.slice(1)),
		"#": document.getElementById(elemString.slice(1)),
	}[elemString[0]];
}

// pseudo-href for navbar elements
var navi = function(path) {
	location.href = path;
}
// hide an element (e.g. closing a banner)
var hideElem = function(elem) {
	elem.style.display = 'none';
};

// output alert window to verify action
var confirmEvent = function(event, message, params) {
    if (window.confirm(message)) { event(params) };
}

// close banner if open
var toggleBanner = function() {
	if (elemSelector('#banner').style.display == 'inline-block') {
		elemSelector('#banner').style.display='none';
	} else {
		elemSelector('#banner').style.display='inline-block'
	}
}