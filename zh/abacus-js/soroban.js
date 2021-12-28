const digits = 9;

let sorobanVals = [0,0,0,0,0,0,0,0,0];
let sorobanValStates = [{'t':0,'b':0,'v':0},{'t':0,'b':0},{'t':0,'b':0},
{'t':0,'b':0},{'t':0,'b':0},{'t':0,'b':0},
{'t':0,'b':0},{'t':0,'b':0},{'t':0,'b':0}];
let digit = 0;
let sorobanVal = 0;
let sorobanValState = 0;
let sorobanValDisplayNum = "";
let sorobanValDisplay = "";
let soroban = "";

let checkSorobanMatch = 0;
let sorobanMatches = 0;

let sorobanAdd = function(id, val, p) {
	digit = id.split('_')[1];
	sorobanVal = sorobanVals[digit] + val;
	sorobanValState = sorobanValStates[digit][p] + val;
	if ((p=='b'&&sorobanValState>4) || (p=='t'&&sorobanValState>9) || (sorobanVal > 9)) { return; }
	sorobanValStates[digit][p] += val;
	sorobanVals[digit] += val;
	elemSelector("#"+id).src = "assets/img/soroban/sbv_"+sorobanValState+".jpg";
	elemSelector("#sorobanDigitVal_"+digit).innerText = sorobanVals[digit];
	displaySorobanValue();
}

let sorobanSubt = function(id, val, p) {
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
}

let displaySorobanValue = function() {
	sorobanValDisplay = "日式算盤的值： ";
	sorobanValDisplayNum = "";
	let x = 0;
	sorobanVals.forEach(function(v) { 
		if (x == 0 && v == 0) { return; } 
		x = 1;
		sorobanValDisplayNum += v;
	});
    if (sorobanValDisplayNum == "") { sorobanValDisplayNum = "0"; }
	elemSelector("#sorobanAbacusValue").innerHTML = sorobanValDisplay + sorobanValDisplayNum;
}

for (let digit=0; digit<digits; digit+=1) {
    let sorobanRow = `
    <div class="sorobanRow" id="sb_`+digit.toString()+`">
        <button onclick="sorobanSubt('sbt_`+digit.toString()+`', 5, 't')">&#9651</button>
        <img draggable="false" class="sorobanTop" id="sbt_`+digit.toString()+`" />
        <button onclick="sorobanAdd('sbt_`+digit.toString()+`', 5, 't')">&#9661</button>
        
        <div class="vPadding"></div>
        
        <button onclick="sorobanAdd('sbb_`+digit.toString()+`', 1, 'b')">&#9651</button>
        <img draggable="false" class="sorobanBottom" id="sbb_`+digit.toString()+`" />
        <button onclick="sorobanSubt('sbb_`+digit.toString()+`', 1, 'b')">&#9661</button>
		<p class="sorobanDigitVal" id="sorobanDigitVal_`+digit.toString()+`">`+sorobanVals[digit.toString()]+`</p>
    </div>`
    soroban += sorobanRow;
    elemSelector("#sorobanAbacus").innerHTML += sorobanRow;
	elemSelector("#sbt_"+digit.toString()).src = "assets/img/soroban/sbv_00.jpg";
	elemSelector("#sbb_"+digit.toString()).src = "assets/img/soroban/sbv_0.jpg";
	elemSelector("#sorobanAbacusValue").innerHTML = "日式算盤的值： 0";
}

// match numbers practice

let initializeSoroban = function() {
	sorobanVals = [0,0,0,0,0,0,0,0,0];
	sorobanValStates = [{'t':0,'b':0,'v':0},{'t':0,'b':0},{'t':0,'b':0}, {'t':0,'b':0},{'t':0,'b':0},{'t':0,'b':0}, {'t':0,'b':0},{'t':0,'b':0},{'t':0,'b':0}];
	digit = 0;
	sorobanVal = 0;
	sorobanValState = 0;
	sorobanValDisplay = "";
	sorobanValDisplayNum = "";
	soroban = "";
	for (let digit=0; digit<digits; digit+=1) {
		elemSelector("#sbt_"+digit.toString()).src = "assets/img/soroban/sbv_00.jpg";
		elemSelector("#sbb_"+digit.toString()).src = "assets/img/soroban/sbv_0.jpg";
		elemSelector("#sorobanAbacusValue").innerHTML = "日式算盤的值： 0";
		elemSelector("#sorobanDigitVal_"+digit.toString()).innerHTML = "0";
	}
}

let sorobanMatch = function() {
	initializeSoroban();
	elemSelector("#sorobanMatchDescription").style.display = "none";
	elemSelector("#sorobanMatchAgain").style.display = "none";
	elemSelector("#sorobanMatchActive").style.display = "block";
	elemSelector("#sorobanMatchNumber").style.display = "block";
	elemSelector("#sorobanMatchSuccess").innerHTML = "";
	let rn = getRandomNum(1,10**getRandomNum(0,10)); // distribution numbers among powers of 10, not just values between 1 and 1000000000 (this creates bias towards nine-digit numbers)
	checkSorobanMatch = setInterval(function() {
		if (sorobanValDisplayNum == rn.toString()) {
			elemSelector("#sorobanMatchNumber").style.display = "none";
			elemSelector("#sorobanMatchAgain").style.display = "block";
			sorobanMatches += 1;
			elemSelector("#sorobanMatchSuccess").innerHTML = "好了!";
			elemSelector("#sorobanMatchResult").innerHTML = "匹配数: " + sorobanMatches;
			clearInterval(checkSorobanMatch);
		}
	}, 100)
	elemSelector("#sorobanMatchNumber").innerHTML = "练习 - 匹配算盤的值 》【" + rn.toString() + "】";
};

let sorobanMatchExit = function() {
	clearInterval(checkSorobanMatch);
	initializeSoroban();
	elemSelector("#sorobanMatchDescription").style.display = "block";
	elemSelector("#sorobanMatchActive").style.display = "none";
}