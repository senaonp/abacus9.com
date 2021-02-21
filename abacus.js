// first develop soroban, then suanpan, and finally binary abacus
const digits = 9;

let soroban = "";
for (let digit=0; digit<digits; digit+=1) {
    let sorobanRow = `
    <div class="sorobanRow" id="sb_`+digit.toString()+`">
        <button onclick="subt5('sbt_`+digit.toString()+`')">-5</button>
        <img class="sorobanTop" id="sbt_`+digit.toString()+`" />
        <button onclick="add5('sbt_`+digit.toString()+`')">+5</button>
        
        <div class="vPadding"></div>
        
        <button onclick="add1('sbb_`+digit.toString()+`')">+1</button>
        <img class="sorobanBottom" id="sbb_`+digit.toString()+`" />
        <button onclick="subt1('sbb_`+digit.toString()+`')">-1</button>
    </div>`
    soroban += sorobanRow;
    elemSelector("#sorobanAbacus").innerHTML += sorobanRow;
	elemSelector("#sbt_"+digit.toString()).src = "assets/img/soroban/sbv_00.jpg";
	elemSelector("#sbb_"+digit.toString()).src = "assets/img/soroban/sbv_0.jpg";
}