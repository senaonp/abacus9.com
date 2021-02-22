let binaryVals = [0,0,0,0,0,0,0,0,0];
let binaryDigits = 9;
let binaryDigit = 0;
let binaryVal = 0;
let binaryValState = 0;
let binaryValDisplayNum = 0;
let binaryValDisplay = "";
let binary = "";

let checkBinaryMatch = 0;
let binaryMatches = 0;

let binaryAdd = function(id, val) {
	binaryDigit = id.split('_')[1];
	binaryVal = binaryVals[binaryDigit] + val;
	if (binaryVal > 1) { return; }
	binaryVals[binaryDigit] += val;
	elemSelector("#"+id).src = "assets/img/binary/bb_"+binaryVal+".jpg";
	elemSelector("#binaryDigitVal_"+binaryDigit).innerText = binaryVals[binaryDigit];
	displaybinaryValue();
}

let binarySubt = function(id, val) {
	binaryDigit = id.split('_')[1];
	binaryVal = binaryVals[binaryDigit]-val;
	if (binaryVal < 0) { return; }
	binaryVals[binaryDigit] -= val;
	elemSelector("#"+id).src = "assets/img/binary/bb_"+binaryVal+".jpg";
	elemSelector("#binaryDigitVal_"+binaryDigit).innerText = binaryVals[binaryDigit];
	displaybinaryValue();
}

let displaybinaryValue = function() {
	binaryValDisplay = "binary abacus value: ";
	binaryValDisplayNum = 0;
    for (let a=0; a<9; a+=1) {
		binaryValDisplayNum += binaryVals[a]*(2**(8-a));
	};
	elemSelector("#binaryAbacusValue").innerHTML = binaryValDisplay + binaryValDisplayNum;
}

for (let binaryDigit=0; binaryDigit<binaryDigits; binaryDigit+=1) {
    let binaryRow = `
    <div class="binaryRow" id="br_`+binaryDigit.toString()+`">
        <button onclick="binaryAdd('bb_`+binaryDigit.toString()+`', 1)">&#9651</button>
        <img draggable="false" class="binaryRowDisp" id="bb_`+binaryDigit.toString()+`" />
        <button onclick="binarySubt('bb_`+binaryDigit.toString()+`', 1)">&#9661</button>
		<p class="binaryDigitVal" id="binaryDigitVal_`+binaryDigit.toString()+`">`+binaryVals[binaryDigit.toString()]+`</p>
    </div>`;
    binary += binaryRow;
    elemSelector("#binaryAbacus").innerHTML += binaryRow;
	elemSelector("#bb_"+binaryDigit.toString()).src = "assets/img/binary/bb_0.jpg";
	elemSelector("#binaryAbacusValue").innerHTML = "binary abacus value: 0";
}

// match numbers practice

let initializeBinary = function() {
	binaryVals = [0,0,0,0,0,0,0,0,0];
	digit = 0;
	binaryVal = 0;
	binaryValState = 0;
	binaryValDisplay = "";
	binaryValDisplayNum = "";
	binary = "";
	for (let digit=0; digit<digits; digit+=1) {
		elemSelector("#bb_"+digit.toString()).src = "assets/img/binary/bb_0.jpg";
		elemSelector("#binaryAbacusValue").innerHTML = "binary abacus value: 0";
		elemSelector("#binaryDigitVal_"+digit.toString()).innerHTML = "0";
	}
}

let binaryMatch = function() {
	initializeBinary();
	elemSelector("#binaryMatchDescription").style.display = "none";
	elemSelector("#binaryMatchAgain").style.display = "none";
	elemSelector("#binaryMatchActive").style.display = "block";
	elemSelector("#binaryMatchNumber").style.display = "block";
	elemSelector("#binaryMatchSuccess").innerHTML = "";
	let rnBinary = getRandomNum(1,2**getRandomNum(1,10));
	checkBinaryMatch = setInterval(function() {
		if (binaryValDisplayNum == rnBinary.toString()) {
			elemSelector("#binaryMatchNumber").style.display = "none";
			elemSelector("#binaryMatchAgain").style.display = "block";
			binaryMatches += 1;
			elemSelector("#binaryMatchSuccess").innerHTML = "nice!";
			elemSelector("#binaryMatchResult").innerHTML = "number of matches: " + binaryMatches;
			clearInterval(checkBinaryMatch);
		}
	}, 100)
	elemSelector("#binaryMatchNumber").innerHTML = "abacus practice - set the abacus to " + rnBinary.toString();
};

let binaryMatchExit = function() {
	clearInterval(checkBinaryMatch);
	initializeBinary();
	elemSelector("#binaryMatchDescription").style.display = "block";
	elemSelector("#binaryMatchActive").style.display = "none";
}
