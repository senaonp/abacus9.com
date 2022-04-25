// render website elements

elemSelector("#navbar").innerHTML = `
    <img src="../assets/img/logo.png" />
    <ul>
        <li onclick="navi('https://github.com/senaonp/abacus9.com')"><a href="https://github.com/senaonp/abacus9.com">Githubレポジトリ</a></li>
        <li onclick="toggleBanner()">「abacus9」について</li>
    </ul>
    <div id="banner" style="display:none">
        <p id="abacus9Description"></p>
        <button onclick="hideElem(elemSelector('#banner'))">閉じる</button>
    </div>`;

elemSelector("#languages").innerHTML = `
    <div id="langElem">
        <a class="lang" href="./../">en</a> | 
        <a class="lang" href="./../zh/">中文</a> | 
        <a class="lang" href="./">日本語</a>
    </div>`;

elemSelector("#abacus9Description").innerHTML = `
    私は暇中で「abacus9」をプログラムします。<a target="_blank" href="https://github.com/senaonp/abacus9.com">GitHub</a>では「abacus9」のソースコードがあります。<br>ウェブサイトを使用するのビデオが<a target='_blank' href='https://fbacarisas.xyz/video/#abacus9'>こちら</a>です。
	<br><br>「abacus9」の特徴は<hr>
	<br>
	<span class="feature">3種類の算盤、各算盤が９桁をもっています。</span>
	<span class="feature">「そろばん」　１上ビーズ・４下ビーズ</span>
	<span class="feature">「中国の算盤」　２上ビーズ・５下ビーズ</span>
	<span class="feature">「2進数そろばん」　１ビーズ</span>
	<span class="feature">練習：値を一致します</span>
	<span class="feature">レスポンシブスタイリング</span>
	<br>
	私の他のプロジェクトが<a target="_blank" href="https://fbacarisas.xyz/video/#programming_playlist">こちら</a>で見られます
	<br><br>`;

elemSelector("#soroban").innerHTML = `
    <p class="sorobanText" id="sorobanTitle">そろばん</p>
    <small class="sharable">共有可能なリンク： <a target="_blank" href='https://abacus9.com/jp/#soroban'>https://abacus9.com/jp/#soroban</a></small><br />
    <p class="sorobanText">上下（&#9661/&#9651）ボタンで算盤の値を設定します</p>
    <p class="sorobanText" id="sorobanDescription">説明 - 各行が数字です。上ビーズの値が５、下ビーズの値が１です。中線にビーズのが数えます。<span class="eventText" onclick="hideElem(elemSelector('#sorobanDescription'))">（説明を隠れます）</span></p>
    <div id="sorobanAbacus"></div>
    <div id="sorobanAbacusValue"></div>
    <div id="sorobanMatch">
        <div id="sorobanMatchDescription"></div>
        <div id="sorobanMatchActive" style="display:none"></div>
    </div>`;

elemSelector("#suanpan").innerHTML = `
    <p class="suanpanText" id="suanpanTitle">中国の算盤</p>
    <small class="sharable">共有可能なリンク： <a target="_blank" href='https://abacus9.com/jp/#suanpan'>https://abacus9.com/jp/#suanpan</a></small><br />
    <p class="suanpanText">上下（&#9661/&#9651）ボタンで算盤の値を設定します</p>
    <p class="suanpanText" id="suanpanDescription">説明 - 各行が数字です。上ビーズの値が５、下ビーズの値が１です。中線にビーズのが数えます。<span class="eventText" onclick="hideElem(elemSelector('#suanpanDescription'))">（説明を隠れます）</span></p>
    <div id="suanpanAbacus"></div>
    <div id="suanpanAbacusValue"></div>
    <div id="suanpanMatch">
        <div id="suanpanMatchDescription"></div>
        <div id="suanpanMatchActive" style="display:none"></div>
    </div>`;

elemSelector("#binary").innerHTML = `
    <p class="binaryText" id="binaryTitle">2進数そろばん「バイナリ」</p>
    <small class="sharable">共有可能なリンク： <a target="_blank" href='https://abacus9.com/jp/#binary'>https://abacus9.com/jp/#binary</a></small><br />
    <p class="binaryText">上下（&#9661/&#9651）ボタンで算盤の値を設定します</p>
    <p class="binaryText" id="binaryDescription">説明 - 各行が数字です。上にビーズの値が１、下にビーズの値が０です。<span class="eventText" onclick="hideElem(elemSelector('#binaryDescription'))">（説明を隠れます）</span></p>
    <div id="binaryAbacus"></div>
    <div id="binaryAbacusValue"></div>
    <div id="binaryMatch">
        <div id="binaryMatchDescription"></div>
        <div id="binaryMatchActive" style="display:none"></div>
    </div>`;

elemSelector("#footer").innerHTML = `
    <span>senaonpが作りました</span>
    <br><br>
    <span><a target="_blank" href="https://github.com/senaonp/abacus9.com">GitHub</a>に「abacus9」のソースコードがあります (･‿･✿)</span>
    <br><br>
    <span>電子メール： <a href="mailto:dev@greentea.moe">(dev@greentea.moe)</a></span>`;

// render abacus type-specific elements

["soroban","suanpan","binary"].forEach(function(a) {
    var abacusName = {
        "soroban": "そろばん",
        "suanpan": "中国算盤",
        "binary": "2進数そろばん"
    } [a];
    elemSelector("#"+a+"MatchDescription").innerHTML = `
        <span>練習：値を一致します</span>
        <button onclick="`+a+`Match()">練習開始</button>`;
    
    elemSelector("#"+a+"MatchActive").innerHTML = `
        <p id="`+a+`MatchNumber"></p>
        <span id="`+a+`MatchSuccess"></span><p id="`+a+`MatchResult"></p><button id='`+a+`MatchAgain' onclick='`+a+`Match()'>もう一度練習します</button>
        <button onclick="`+a+`MatchExit()">`+abacusName+`の練習を終了します</button>`;
})