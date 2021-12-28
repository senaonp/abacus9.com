const suanpanDigits = 9;

let suanpanVals = [0,0,0,0,0,0,0,0,0];
let suanpanValsDisplay = [0,0,0,0,0,0,0,0,0,0];
let suanpanValStates = [{'t':0,'b':0,'v':0},{'t':0,'b':0},{'t':0,'b':0},
{'t':0,'b':0},{'t':0,'b':0},{'t':0,'b':0},
{'t':0,'b':0},{'t':0,'b':0},{'t':0,'b':0}];
let suanpanDigit = 0;
let suanpanVal = 0;
let suanpanValState = 0;
let suanpanValDisplayNum = "";
let suanpanValDisplay = "";
let suanpan = "";

let checksuanpanMatch = 0;
let suanpanMatches = 0;

let suanpanAdd = function(id, val, p) {
	suanpanDigit = id.split('_')[1];
	suanpanVal = suanpanVals[suanpanDigit] + val;
	suanpanValState = suanpanValStates[suanpanDigit][p] + val;
	if ((p=='b'&&suanpanValState>5) || (p=='t'&&suanpanValState>10) || (suanpanVal > 15)) { return; }
	suanpanValStates[suanpanDigit][p] += val;
	suanpanVals[suanpanDigit] += val;
	if (p=='b') { elemSelector("#"+id).src = "assets/img/suanpan/spb_"+suanpanValState+".jpg" }
    else { elemSelector("#"+id).src = "assets/img/suanpan/spt_"+suanpanValState+".jpg" }
	elemSelector("#suanpanDigitVal_"+suanpanDigit).innerText = suanpanVals[suanpanDigit];
	displaysuanpanValue();
}

let suanpanSubt = function(id, val, p) {
	suanpanDigit = id.split('_')[1];
	suanpanVal = suanpanVals[suanpanDigit]-val;
	suanpanValState = suanpanValStates[suanpanDigit][p]-val;
	if ((p=='b'&&suanpanValState<0) || (p=='t'&&suanpanValState<0) || (suanpanVal < 0)) { return; }
	suanpanValStates[suanpanDigit][p] -= val;
	suanpanVals[suanpanDigit] -= val;
	if (p=="b") { elemSelector("#"+id).src = "assets/img/suanpan/spb_"+suanpanValState+".jpg" }
	else { elemSelector("#"+id).src = "assets/img/suanpan/spt_"+suanpanValState+".jpg"; }
	elemSelector("#suanpanDigitVal_"+suanpanDigit).innerText = suanpanVals[suanpanDigit];
	displaysuanpanValue();
}

let displaysuanpanValue = function() {
	suanpanValDisplay = "中国算盤の値： ";
	suanpanValDisplayNum = "";
    let carryOver = false;
    for (let v=9; v>-1; v-=1) {
        if (v == 0 && carryOver) { suanpanValsDisplay[v] = 1; break; }
        else if (v == 0) { suanpanValsDisplay[v] = 0; break; }
        suanpanValsDisplay[v] = suanpanVals[v-1];
        if (carryOver) { suanpanValsDisplay[v] += 1; }
        if (suanpanValsDisplay[v] > 9) {
            suanpanValsDisplay[v] = parseInt(suanpanValsDisplay[v].toString().slice(1));
            carryOver = true;
        } else {
            carryOver = false;
        }
    };
    let x = 0;
    suanpanValsDisplay.forEach(function(v) {
        if (x == 0 && v == 0) { return } 
        x = 1;
        suanpanValDisplayNum += v.toString();
    });
    if (suanpanValsDisplay.join("") == "") { suanpanValDisplayNum = "0"; }
	elemSelector("#suanpanAbacusValue").innerHTML = suanpanValDisplay + suanpanValDisplayNum;
}

for (let suanpanDigit=0; suanpanDigit<suanpanDigits; suanpanDigit+=1) {
    let suanpanRow = `
    <div class="suanpanRow" id="sp_`+suanpanDigit.toString()+`">
        <button onclick="suanpanSubt('spt_`+suanpanDigit.toString()+`', 5, 't')">&#9651</button>
        <img draggable="false" class="suanpanTop" id="spt_`+suanpanDigit.toString()+`" />
        <button onclick="suanpanAdd('spt_`+suanpanDigit.toString()+`', 5, 't')">&#9661</button>
        
        <div class="vPadding"></div>
        
        <button onclick="suanpanAdd('spb_`+suanpanDigit.toString()+`', 1, 'b')">&#9651</button>
        <img draggable="false" class="suanpanBottom" id="spb_`+suanpanDigit.toString()+`" />
        <button onclick="suanpanSubt('spb_`+suanpanDigit.toString()+`', 1, 'b')">&#9661</button>
		<p class="suanpanDigitVal" id="suanpanDigitVal_`+suanpanDigit.toString()+`">`+suanpanVals[suanpanDigit.toString()]+`</p>
    </div>`
    suanpan += suanpanRow;
    elemSelector("#suanpanAbacus").innerHTML += suanpanRow;
	elemSelector("#spt_"+suanpanDigit.toString()).src = "assets/img/suanpan/spt_0.jpg";
	elemSelector("#spb_"+suanpanDigit.toString()).src = "assets/img/suanpan/spb_0.jpg";
	elemSelector("#suanpanAbacusValue").innerHTML = "中国算盤の値： 0";
}

// match numbers practice

let initializesuanpan = function() {
	suanpanVals = [0,0,0,0,0,0,0,0,0];
	suanpanValStates = [{'t':0,'b':0,'v':0},{'t':0,'b':0},{'t':0,'b':0}, {'t':0,'b':0},{'t':0,'b':0},{'t':0,'b':0}, {'t':0,'b':0},{'t':0,'b':0},{'t':0,'b':0}];
	suanpanDigit = 0;
	suanpanVal = 0;
	suanpanValState = 0;
	suanpanValDisplay = "";
	suanpanValDisplayNum = "";
	suanpan = "";
	for (let suanpanDigit=0; suanpanDigit<suanpanDigits; suanpanDigit+=1) {
		elemSelector("#spt_"+suanpanDigit.toString()).src = "assets/img/suanpan/spt_0.jpg";
		elemSelector("#spb_"+suanpanDigit.toString()).src = "assets/img/suanpan/spb_0.jpg";
		elemSelector("#suanpanAbacusValue").innerHTML = "中国算盤の値： 0";
		elemSelector("#suanpanDigitVal_"+suanpanDigit.toString()).innerHTML = "0";
	}
}

let suanpanMatch = function() {
	initializesuanpan();
	elemSelector("#suanpanMatchDescription").style.display = "none";
	elemSelector("#suanpanMatchAgain").style.display = "none";
	elemSelector("#suanpanMatchActive").style.display = "block";
	elemSelector("#suanpanMatchNumber").style.display = "block";
	elemSelector("#suanpanMatchSuccess").innerHTML = "";
	let rn = getRandomNum(1,10**getRandomNum(0,10));
	checksuanpanMatch = setInterval(function() {
		if (suanpanValDisplayNum == rn.toString()) {
			elemSelector("#suanpanMatchNumber").style.display = "none";
			elemSelector("#suanpanMatchAgain").style.display = "block";
			suanpanMatches += 1;
			elemSelector("#suanpanMatchSuccess").innerHTML = "良い！";
			elemSelector("#suanpanMatchResult").innerHTML = "一致数： " + suanpanMatches;
			clearInterval(checksuanpanMatch);
		}
	}, 100)
	elemSelector("#suanpanMatchNumber").innerHTML = "練習：値を一致します ＞ 「" + rn.toString() + "」";
};

let suanpanMatchExit = function() {
	clearInterval(checksuanpanMatch);
	initializesuanpan();
	elemSelector("#suanpanMatchDescription").style.display = "block";
	elemSelector("#suanpanMatchActive").style.display = "none";
}
