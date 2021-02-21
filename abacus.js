// first develop soroban, then suanpan, and finally binary abacus
const digits = 9;

let sorobanVals = [0,0,0,0,0,0,0,0,0];
let sorobanValStates = [{'t':0,'b':0,'v':0},{'t':0,'b':0},{'t':0,'b':0},
{'t':0,'b':0},{'t':0,'b':0},{'t':0,'b':0},
{'t':0,'b':0},{'t':0,'b':0},{'t':0,'b':0}];
let digit = 0;
let sorobanVal = 0;
let sorobanValState = 0;
let sorobanValDisplay = "";
let soroban = "";
for (let digit=0; digit<digits; digit+=1) {
    let sorobanRow = `
    <div class="sorobanRow" id="sb_`+digit.toString()+`">
        <button onclick="subt('sbt_`+digit.toString()+`', 5, 't')">&#9651</button>
        <img draggable="false" class="sorobanTop" id="sbt_`+digit.toString()+`" />
        <button onclick="add('sbt_`+digit.toString()+`', 5, 't')">&#9661</button>
        
        <div class="vPadding"></div>
        
        <button onclick="add('sbb_`+digit.toString()+`', 1, 'b')">&#9651</button>
        <img draggable="false" class="sorobanBottom" id="sbb_`+digit.toString()+`" />
        <button onclick="subt('sbb_`+digit.toString()+`', 1, 'b')">&#9661</button>
		<p class="sorobanDigitVal" id="sorobanDigitVal_`+digit.toString()+`">`+sorobanVals[digit.toString()]+`</p>
    </div>`
    soroban += sorobanRow;
    elemSelector("#sorobanAbacus").innerHTML += sorobanRow;
	elemSelector("#sbt_"+digit.toString()).src = "assets/img/soroban/sbv_00.jpg";
	elemSelector("#sbb_"+digit.toString()).src = "assets/img/soroban/sbv_0.jpg";
	elemSelector("#sorobanAbacusValue").innerHTML = "soroban abacus value: 0";
}

let add = function(id, val, p) {
	digit = id.split('_')[1];
	sorobanVal = sorobanVals[digit] + val;
	sorobanValState = sorobanValStates[digit][p] + val;
	if ((p=='b'&&sorobanValState>4) || (p=='t'&&sorobanValState>9) || (sorobanVal > 9)) { return; }
	sorobanValStates[digit][p] += val;
	sorobanVals[digit] += val;
	elemSelector("#"+id).src = "assets/img/soroban/sbv_"+sorobanValState+".jpg";
	displaySorobanValue();
	elemSelector("#sorobanDigitVal_"+digit).innerText = sorobanVals[digit];
	console.log(sorobanVals);
}

let subt = function(id, val, p) {
	digit = id.split('_')[1];
	sorobanVal = sorobanVals[digit]-val;
	sorobanValState = sorobanValStates[digit][p]-val;
	if ((p=='b'&&sorobanValState<0) || (p=='t'&&sorobanValState<0) || (sorobanVal < 0)) { return; }
	sorobanValStates[digit][p] -= val;
	sorobanVals[digit] -= val;
	if (sorobanValStates[digit][p] == 0 && p=="t") { elemSelector("#"+id).src = "assets/img/soroban/sbv_00.jpg" } 
	else { elemSelector("#"+id).src = "assets/img/soroban/sbv_"+sorobanValState+".jpg"; }
	elemSelector("#sorobanDigitVal_"+digit).innerText = sorobanVals[digit];
	displaySorobanValue();
	console.log(sorobanVals);
}

let displaySorobanValue = function() {
	sorobanValDisplay = "soroban abacus value: ";
	let sorobanValDisplayNum = "";
	let f = 0;
	sorobanVals.forEach(function(v) { 
		if (f == 0 && v == 0) { return; } 
		f = 1;
		sorobanValDisplayNum += v;
	});
	elemSelector("#sorobanAbacusValue").innerHTML = sorobanValDisplay + sorobanValDisplayNum;
}