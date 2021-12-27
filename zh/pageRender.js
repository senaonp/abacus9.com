// render website elements

elemSelector("#navbar").innerHTML = `
    <img src="assets/img/logo.png" />
    <ul>
        <li onclick="navi('https://github.com/senaonp/abacus9.com')"><a href="https://github.com/senaonp/abacus9.com">Github存储库</a></li>
        <li onclick="toggleBanner()">关于</li>
    </ul>
    <div id="banner" style="display:none">
        <p id="abacus9Description"></p>
        <button onclick="hideElem(elemSelector('#banner'))">关闭</button>
    </div>`;

elemSelector("#languages").innerHTML = `
    <div id="langElem">
        <a class="lang" href="./../">en</a> | 
        <a class="lang" href="./">中文</a> | 
        <a class="lang" href="./../jp/">日本語</a>
    </div>`;

elemSelector("#abacus9Description").innerHTML = `
    我空闲时间里从事于这个网站<br>使用网站的视频示可以在<a target='_blank' href='https://fbacarisas.xyz/video/#abacus9'>这里</a>看
	<br><br>abacus9【算盘9】的特征是<hr>
	<br>
	<span class="feature">3种算盘, 每个算盘都有9列</span>
    <span class="feature">中式算盤 (算盘) - 2顶珠 / 5底珠</span>
	<span class="feature">日式算盤 (そろばん) - 1顶珠 / 4底珠</span>
	<span class="feature">二进制算盤 - 1顶珠</span>
	<span class="feature">练习 - 匹配算盤的值</span>
	<span class="feature">响应式设计</span>
	<br>
	我的其他编程项目在<a target="_blank" href="https://fbacarisas.xyz/video/#programming_playlist">这里</a>
	<br><br>`;

elemSelector("#suanpan").innerHTML = `
    <p class="suanpanText" id="suanpanTitle">中式算盤</p>
    <small class="sharable">分享的网页: <a target="_blank" href='https://abacus9.com/zh/#suanpan'>https://abacus9.com/zh/#suanpan</a></small><br />
    <p class="suanpanText">你能使用[上/下] (&#9661/&#9651) 按钮设置算盤的值</p>
    <p class="suanpanText" id="suanpanDescription">细节 - 每个行是一位数；顶珠有价值的5。底珠有价值的1。如果珠被放置向中间的横梁，它被计算
    <span class="eventText" onclick="hideElem(elemSelector('#suanpanDescription'))">(hide description)</span></p>
    <div id="suanpanAbacus"></div>
    <div id="suanpanAbacusValue"></div>
    <div id="suanpanMatch">
        <div id="suanpanMatchDescription"></div>
        <div id="suanpanMatchActive" style="display:none"></div>
    </div>`;

elemSelector("#soroban").innerHTML = `
    <p class="sorobanText" id="sorobanTitle">日式算盤</p>
    <small class="sharable">分享的网页: <a target="_blank" href='https://abacus9.com/zh/#soroban'>https://abacus9.com/zh/#soroban</a></small><br />
    <p class="sorobanText">你能使用[上/下] (&#9661/&#9651) 按钮设置算盤的值</p>
    <p class="sorobanText" id="sorobanDescription">细节 - 每个行是一位数；顶珠有价值的5。底珠有价值的1。如果珠被放置向中间的横梁，它被计算<span class="eventText" onclick="hideElem(elemSelector('#sorobanDescription'))">(hide description)</span></p>
    <div id="sorobanAbacus"></div>
    <div id="sorobanAbacusValue"></div>
    <div id="sorobanMatch">
        <div id="sorobanMatchDescription"></div>
        <div id="sorobanMatchActive" style="display:none"></div>
    </div>`;

elemSelector("#binary").innerHTML = `
    <p class="binaryText" id="binaryTitle">二进制算盤</p>
    <small class="sharable">分享的网页: <a target="_blank" href='https://abacus9.com/zh/#binary'>https://abacus9.com/zh/#binary</a></small><br />
    <p class="binaryText">你能使用[上/下] (&#9661/&#9651) 按钮设置算盤的值</p>
    <p class="binaryText" id="binaryDescription">细节 - 每个行是一二进制位数；珠设置向上有价值的1。珠设置向下有价值的0。<span class="eventText" onclick="hideElem(elemSelector('#binaryDescription'))">(hide description)</span></p>
    <div id="binaryAbacus"></div>
    <div id="binaryAbacusValue"></div>
    <div id="binaryMatch">
        <div id="binaryMatchDescription"></div>
        <div id="binaryMatchActive" style="display:none"></div>
    </div>`;

elemSelector("#footer").innerHTML = `
    <span>senaonp制作</span>
    <br><br>
    <span>abacus9【算盘9】源代码在<a target="_blank" href="https://github.com/senaonp/abacus9.com">GitHub</a> (･‿･✿)</span>
    <br><br>
    <span>电子邮件： <a href="mailto:dev@greentea.moe">(dev@greentea.moe)</a></span>`;

// render abacus type-specific elements

["soroban","suanpan","binary"].forEach(function(a) {
    var abacusName = {
        "soroban": "日式算盤",
        "suanpan": "中式算盤",
        "binary": "二进制算盤"
    } [a];
    elemSelector("#"+a+"MatchDescription").innerHTML = `
        <span>练习 - 匹配算盤的值</span>
        <button onclick="`+a+`Match()">开始练习</button>`;
    
    elemSelector("#"+a+"MatchActive").innerHTML = `
        <p id="`+a+`MatchNumber"></p>
        <span id="`+a+`MatchSuccess"></span><p id="`+a+`MatchResult"></p><button id='`+a+`MatchAgain' onclick='`+a+`Match()'>再练习</button>
        <button onclick="`+a+`MatchExit()">出`+abacusName+`练习</button>`;
})