let binaryVals = [0,0,0,0,0,0,0,0,0];
let binaryDigits = 9;
let binaryDigit = 0;
let binaryVal = 0;
let binaryValState = 0;
let binaryValDisplay = "";
let binary = "";

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
	let binaryValTotal = 0;
    for (let a=0; a<9; a+=1) {
		binaryValTotal += binaryVals[a]*(2**(8-a));
	};
	elemSelector("#binaryAbacusValue").innerHTML = binaryValDisplay + binaryValTotal;
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