//題目
const questions = [
  {
    id:1,
    title:"1. 你覺得最適合形容自己的詞是？",
    options:[
      {value:"c", text: "A. 冷靜、條理清晰。"},
      {value:"b", text: "B. 聰明、懂變通。"},
      {value:"d", text: "C. 感性、重情重義。"},
      {value:"a", text: "D. 熱情、直接。"},
    ]
  },
  {
    id:2,
    title:"2. 在一個聚會中，當大家都興奮地討論某個話題時，你會怎麼做？",
    options:[
      { value:"f", text: "A. 站出來分享自己的觀點並主導討論。"},
      { value:"c", text: "B. 靜靜聽著，觀察每個人說了什麼。"},
      { value:"d", text: "C. 加入討論，但不會表達過多自己的意見。"},
      { value:"b", text: "D. 假如對話題不感興趣，會選擇默默做自己的事或發呆。"},
      { value:"e", text: "E. 觀察情況，等合適的時機發表意見。"},
    ]
  },
  {
    id:3,
    title:"3. 假如你需要在兩個選擇中做出決定，而時間有限，你會怎麼做？",
    options:[
      { value:"e", text: "A. 列出兩邊優缺點，選出最合邏輯的方案。"},
      { value:"b", text: "B. 根據當下情況和環境，隨機應變出決定。"},
      { value:"a", text: "C. 憑直覺選擇，馬上行動。"},
      { value:"f", text: "D. 快速決定出符合自己目標和利益的選項。"},
      { value:"c", text: "E. 冷靜觀察，但會花一點時間考慮哪個方向能帶來穩定的結果。"},
    ]
  },
  {
    id:4,
    title:"4. 你發現有不公平的情況，而這件事關乎自己的權益，你會怎麼做？",
    options:[
      { value:"a", text: "A. 當場表明，用直接的方式讓對方或周圍的人知道這件事對你來說不公平。"},
      { value:"e", text: "B. 冷靜分析問題的原因和後果，根據最有效的方式行動。"},
      { value:"c", text: "C. 了解情況的真實性和具體細節，再決定是否採取行動。"},
      { value:"f", text: "D. 衡量是否值得投入時間或精力處理，若認為影響不大就選擇忽略。"},
      { value:"d", text: "E. 表面上不聲張，但私下採取行動，嘗試改變或挽回自己的損失。"},
    ]
  },
  {
    id:5,
    title:"5. 在工作中，面對繁重的任務時，你會如何安排自己的時間？",
    options:[
      { value:"a", text: "A. 立刻細分任務，設立具體的規劃，並迅速開始執行。"},
      { value:"d", text: "B. 將工作分配給他人，自己集中精力解決最重要的部分。"},
      { value:"c", text: "C. 保持冷靜逐步進行，按部就班地處理每項任務。"},
      { value:"e", text: "D. 給定明確的目標和最後期限，高效完成每個任務，並時時檢視進度。"},
      { value:"b", text: "E. 根據當下情況來決定處理的優先順序，見機行事，隨緣完成。"},
    ]
  },
  {
    id:6,
    title:"6. 如果你很好朋友有困難需要幫助，你會如何做？",
    options: [
      { value:"a", text: "A. 立刻伸出援手，無論情況多困難都會全力以赴。"},
      { value:"e", text: "B. 先詢問他需要什麼幫助，確認自己的能力是否足夠再決定要不要幫忙。"},
      { value:"c", text: "C. 提供一些建議，協助他找到解方案，但希望他能自己解決問題。"},
      { value:"b", text: "D. 看情況或心情再選擇要不要幫忙。"},
      { value:"f", text: "E. 衡量是否值得幫忙，若對自己影響不大才會行動。"},
    ]
  },
  {
    id:7,
    title:"7. 你認為自己做決策時最看重什麼？",
    options:[
      { value:"d", text: "A. 邏輯與理由，仔細分析每個選項的利弊。"},
      { value:"e", text: "B. 直覺和感覺，依賴內心的反應做決定。"},
      { value:"f", text: "C. 結果對自己是否有利，考慮決策的後果。"},
    ]
  },
  {
    id:8,
    title:"8. 當你感到無聊時，你會做什麼？",
    options:[
      { value:"b", text: "A. 換個環境，或嘗試不同的活動來讓自己感到刺激或新鮮。"},
      { value:"a", text: "B. 選擇一項有挑戰性的任務活學習新的技能。"},
      { value:"c", text: "C. 靜待有趣的事情自然發生。"},
      { value:"d", text: "D. 找輕鬆有趣的活動消磨時間，比如玩簡單的遊戲或看影片。"},
      { value:"f", text: "E. 思考與反思或沉靜於自己的內心世界，享受安靜的時光。"},
      { value:"e", text: "F. 利用這段時間計劃未來，或執行之前未完成的任務。"},
    ]
  },
  {
    id:9,
    title:"9. 當你到了一個新環境，你會如何適應？",
    options:[
      { value:"f", text: "A. 主動與人互動，希望快速融入團體。"},
      { value:"c", text: "B. 觀察環境與人群，慢慢找到自己的位置。"},
      { value:"b", text: "C. 順其自然，隨情勢發展靈活調整自己的行為。"},
      { value:"d", text: "D. 按自己的方式行事，不在乎別人怎麼看。"},
    ]
  },
  {
    id:10,
    title:"10. 面對別人的批評，你通常會？",
    options:[
      { value:"d", text: "A. 覺得被冒犯，很在意對方的說詞。"},
      { value:"c", text: "B. 冷靜聽取，有道理就接受。"},
      { value:"a", text: "C. 回擊對方，強調自己的觀點。"},
      { value:"f", text: "D. 對批評一笑置之，不會太在乎。"},
    ]
  },
  {
    id:11,
    title:"11. 如果你想學一項新技能，你通常會？",
    options:[
      { value:"c", text: "A. 先了解基礎理論，再一步步學習。"},
      { value:"d", text: "B. 邊做邊學。"},
      { value:"f", text: "C. 找老師或朋友幫忙，效率更高。"},
    ]
  },
  {
    id:12,
    title:"12. 當你心情低落時，通常會怎麼處理？",
    options:[
      { value:"e", text: "A. 想清楚低落的原因，嘗試解決問題。"},
      { value:"a", text: "B. 找事情做，讓自己分散注意力。"},
      { value:"d", text: "C. 找朋友聊聊，尋求安慰。"},
      { value:"c", text: "D. 讓自己平靜下來，獨自待著，直到情緒自然平復。"},
    ]
  },
  {
    id:13,
    title:"13. 如果和朋友約好，但他遲到了，你會怎麼做？",
    options:[
      { value:"d", text: "A. 不耐煩，因為對方不守時心裡超不爽的!!!"},
      { value:"c", text: "B. 理解對方可能有理由，保持耐心，默默等候。"},
      { value:"a", text: "C. 直接表達不高興，讓他知道我很生氣。"},
      { value:"b", text: "D. 根據對方的道歉態度決定我的情緒，可能會原諒，但也可能繼續不爽。"},
    ]
  },
];

// 計分邏輯
const scoreMapping= {
  a:0,
  b:0,
  c:0,
  d:0,
  e:0,
  f:0
};

let currentQuestionIndex= 0;  //當前問題的索引
let answeredQuestions= [];  //記錄已經回答的問題

//動態生成題目的函式
function generateQuestion(question){
  const container= document.createElement("div");
  container.classList.add("question-container");
  container.id= `question${question.id}`;

  let questionHTML= `<p>${question.title}</p>`;

  question.options.forEach((option)=> {
    questionHTML+= `  
      <input type="radio" name="q${question.id}" value="${option.value}" onclick="enableNextButton()"> ${option.text}<br>
    `;
  });

  //提交按鈕
  questionHTML+=`<button id="nextBtn" onclick="nextQuestion()" disabled>⭢</button>`;

  container.innerHTML= questionHTML;

  // 顯示當前問題
  document.getElementById("questions").innerHTML= '';
  document.getElementById("questions").appendChild(container);
}

//啟用下一題按鈕
function enableNextButton() {
  const nextBtn= document.getElementById("nextBtn");
  nextBtn.disabled = false;
}

//記錄答案並更新選項次數
function recordAnswer(selectedValue) {
  scoreMapping[selectedValue]+= 1;
}

//顯示下一題的函式
function nextQuestion() {
  const questionId= `q${questions[currentQuestionIndex].id}`;
  const selectedOption= document.querySelector(`input[name="${questionId}"]:checked`);

  //檢查有沒有選答案
  if(!selectedOption) {
    alert("請選擇一個答案再繼續！");
    return;
  }

  //記錄選擇的答案
  recordAnswer(selectedOption.value);

  //隱藏當前題目
  document.getElementById(`question${questions[currentQuestionIndex].id}`).style.display = "none";
  answeredQuestions.push(currentQuestionIndex);

  //移到下一題
  currentQuestionIndex++;

  //顯示下一題或顯示結果
  if(currentQuestionIndex < questions.length) {
    generateQuestion(questions[currentQuestionIndex]);
  } else{
    showResult();  //所有題目回答完後顯示結果
  }
}

//顯示結果的函式
function showResult() {
  const resultContainer= document.getElementById("result");
  const resultTitle= document.getElementById("resultTitle");
  const resultText= document.getElementById("resultText");
  const img1= document.getElementById("result-img-1");
  const img2= document.getElementById("result-img-2");

  // 隱藏問題區域
  document.getElementById("questions").style.display= "none";

  let maxScore= 0;
  let personality= "";

  //計算最高分數的選項
  for (let option in scoreMapping) {
    if (scoreMapping[option]> maxScore) {
      maxScore= scoreMapping[option];
      personality= option;
    }
  }

  //顯示結果
  resultTitle.textContent=`您的性格是：${personality}`;
  resultText.textContent=`根據您的選擇，您為：${JSON.stringify(scoreMapping)}`;
  resultContainer.style.display= "block";

  //根據得分顯示結果
  switch(personality) {
    case"a":
      resultTitle.innerHTML= "<h2>你屬於強化系!<h2>";
      resultText.innerHTML= "<h3>主要能力者:小傑、窩金<h3><br><h4>身為強化系的你，單純且直接，擁有純真的心靈與堅定的意志，你的行動力極強，<br>常以實際行動展現自己的原則，這種特質往往會吸引更多敬佩你的人。<br>然而，如果不多加思考便冒然行動，可能會讓你陷入困境。<br>學會根據情境多方考慮，將有助於你提升自己，邁向更高的境界。<h4>";
      img1.src= "../images/psytest/a1.jpg";//小傑
      img2.src= "../images/psytest/a2.jpg";//窩金
      break;
    case"b":
      resultTitle.innerHTML= "<h2>你屬於變化系!<h2>";
      resultText.innerHTML= "<h3>主要能力者:奇犽、西索<h3><br><h4>身為變化系的你，善變!愛說謊!喜歡不按常理出牌，個性很獨特。<br>在團體中，你經常是情緒的推動者，能引領氣氛。<br>然而，你的善變也會帶來一些困擾，可能讓周圍的朋友感到不安或困惑。<br>你不太能忍受被別人指揮的狀況，更喜歡與朋友保持平等的關係，<br>只要這位朋友不會因為你的善變而背叛你，這樣的關係便能長久。<h4>";
      img1.src= "../images/psytest/b1.jpg";//奇犽
      img2.src= "../images/psytest/b2.jpg";//西索
      break;
    case"c":
      resultTitle.innerHTML= "<h2>你屬於具現化系!<h2>";
      resultText.innerHTML= "<h3>主要能力者:酷拉皮卡、庫嗶<h3><br><h4>作為具現化系的你，對任何微小的細節和事情都不會放過，<br>堅持不懈地朝著目標前進。完美主義者你看似冷靜甚至有些過於冷淡，<br>常常給人帶來不太好的第一印象。雖然在團體中你不會特別引人注目，<br>但在面對困境時，你的理論性思考能力能讓你脫穎而出。<br>如果能充分發揮這一特長，你將變得更加活躍。<h4>";
      img1.src= "../images/psytest/c1.jpg";//酷拉皮卡
      img2.src= "../images/psytest/c2.jpg";//庫嗶
      break;
    case"d":
      resultTitle.innerHTML= "<h2>你屬於放出系!<h2>";
      resultText.innerHTML= "<h3>主要能力者:雷歐力、旋律<h3><br><h4>放出系的你，能迅速洞察現場情況，並給出最合適的行動或建議，<br>因此周圍的人都很信任你。你是一個像爸媽般照顧他人的人，<br>能夠在團體中扮演穩定的角色。然而，當你獨處或朋友們已經習慣你時，<br>你的衝動與粗枝大葉的特質可能會顯現出來。<br>因此適度保持警覺與細心，將有助於避免不必要的麻煩。<h4>";
      img1.src= "../images/psytest/d1.jpg";//雷歐力
      img2.src= "../images/psytest/d2.jpg";//旋律
      break;
    case"e":
      resultTitle.innerHTML= "<h2>你屬於操作系!<h2>";
      resultText.innerHTML= "<h3>主要能力者:俠客、梟亞普夫<h3><br><h4>作為操作系的你，愛講道理，在團體中總是很有存在感。<br>你對事物會進行深刻了解後才開始行動，因此常常能成為他人依賴的對象。<br>然而，有點我行我素的你，很多事情會在最後一刻才開始著手，<br>因此經常因時間壓力而出錯。若能提前規劃並完成工作，將能減少失誤。<h4>";
      img1.src= "../images/psytest/e1.jpg";//俠客
      img2.src= "../images/psytest/e2.jpg";//梟亞普夫
      break;
    case"f":
      resultTitle.innerHTML= "<h2>你屬於特質系!<h2>";
      resultText.innerHTML= "<h3>主要能力者:庫洛洛、火紅眼的酷拉皮卡<h3><br><h4>特質系的你，擁有強烈的領袖氣質，天生是支配者型人物。<br>憑藉出色的思考能力與行動力，經常能吸引一群追隨者，<br>尤其是晚輩會對你非常崇敬。相反的你不太擅長接受他人的指導，<br>當處於部下角色時，若能夠更多聽取他人意見，將有助於提升自己與他人的關係。<h4>";
      img1.src= "../images/psytest/f1.jpg";//庫洛洛
      img2.src= "../images/psytest/f2.jpg";//火紅眼的酷拉皮卡
  }

  //顯示雷達圖
  const ctx= document.getElementById("radarChart").getContext("2d");
  new Chart(ctx, {
    type:"radar",
    data: {
      labels: ["強化系","變化系","具現化系","放出系","操作系","特質系"],
      datasets:[{
        label:"分數",
        data:[scoreMapping.a, scoreMapping.b, scoreMapping.c, scoreMapping.d, scoreMapping.e, scoreMapping.f],
        fill:true,
        backgroundColor:"rgba(179, 181, 198, 0.2)",
        borderColor:"rgba(179, 181, 198, 1)",
        pointBorderColor:"#fff",
        pointBackgroundColor:"rgba(179, 181, 198, 1)",
      }],
    },
    options:{
      scale:{
        ticks:{
          beginAtZero:true,
          max:13,
          stepSize:1
        }
      }
    }
  });
}

//根據類型推薦的商品清單
const products= {
  a:[
    {name:"猜猜拳", image:"../images/goods-img/hunter/mora/mora2.png", price:"12,000", details:"猜拳不僅是遊戲，更是決勝的武器！" },
    {name:"暗黑鬼婦神", image:"../images/goods-img/hunter/darkGhostGoddess/darkGhostGoddess.jpg", price:"8,000", details:"每一根毛髮都成為您最強的武器"},
    {name:"瘋狂小丑", image:"../images/goods-img/hunter/crazyClown/crazyClown1.png", price:"38,000", details:"在命運的輪盤中，每一輪都充滿未知與驚奇！" },
    {name:"超破壞拳", image:"../images/goods-img/hunter/superDestoryingFist/superDestoryingFist1.png", price:"35,000", details:"釋放出如同小型飛彈般威力的強力直拳" },
    {name:"迴天", image:"../images/goods-img/hunter/returnToHeaven/returnToHeaven1.png", price:"32,000", details:"毀滅性的重拳攻擊"},
  ],
  b:[
    {name:"伸縮自在的愛", image:"../images/goods-img/hunter/flexiblaeLove/flexiblaeLove1.jpg", price:"30,000", details:"在戰鬥中施展創意戰術" },
    {name:"念系縫合", image:"../images/goods-img/hunter/conceptSuture/conceptSuture1.png", price:"60,000", details:"一門藝術級的治癒術"},
    {name:"魔法美容師", image:"../images/goods-img/hunter/flexiblaeLove/flexiblaeLove1.jpg", price:"15,000", details:"追求美麗與健康人士的理想選擇！"},
    {name:"輕薄的假象", image:"../images/goods-img/hunter/frivolousIllusion/frivolousIllusion1.jpg", price:"25,000", details:"讓想像力化作現實，輕盈如紙卻能重現一切質感的幻象！"},
    {name:"神速", image:"../images/goods-img/hunter/superFast/superFast1.jpg", price:"18,000", details:"超越常人的移動與攻擊速度擊"},
  ],
  c:[
    {name:"分身", image:"../images/goods-img/hunter/doppelganger/doppelganger1.jpg", price:"6,000", details:"分裂即強大！", link:"../../product/html/doppelganger.html" },
    {name:"四次元公寓", image:"../images/goods-img/hunter/fourDimensionsApartment/fourDimensionsApartment1.jpg", price:"180,000", details:"隨時開啟隱秘、安全、便捷的藏身之所！", link:"../../product/html/fourDimensionsApartment.html" },
    {name:"神的左手惡魔的右手", image:"../images/goods-img/hunter/god'sLeftHand", price:"25,000", details:"簡單觸碰，複製奇蹟！", link:"../../product/html/god'sLeftHand.html" },
    {name:"凸眼魚", image:"../images/goods-img/hunter/popeyeFish/popeyeFish1.png", price:"70,000", details:"能夠吸入任何無生命的物品", link:"../../product/html/popeyeFish.html" },
    {name:"鎖鏈", image:"../images/goods-img/hunter/chain/chain1.jpg", price:"30,000", details:"束縛、治療、奪取和審判", link:"../../product/html/chain.html" },
  ],
  d:[
    {name:"四次元公寓", image:"../images/goods-img/hunter/fourDimensionsApartment/fourDimensionsApartment1.jpg", price:"180,000", details:"隨時開啟隱秘、安全、便捷的藏身之所！", link:"../../product/html/fourDimensionsApartment.html" },
    {name:"七色弓箭", image:"../images/goods-img/hunter/sevenColor/sevenColor1.png", price:"5,000", details:"將自身的氣轉化為弓箭", link:"../../product/html/sevenColorBow&Arrow.html" },
    {name:"旋律", image:"../images/goods-img/hunter/melody/melody1.png", price:"6,000", details:"旋律的心靈樂章能夠撫慰人心", link:"../../product/html/melody.html" },
    {name:"雙手機關槍", image:"../images/goods-img/hunter/twoHanded/twoHanded1.png", price:"50,000", details:"雙手十指如機關槍般連續發射念彈", link:"../../product/html/twoHanded.html" },
    {name:"天上不知唯我獨損", image:"../images/goods-img/hunter/theSkyDoesNotKnow/theSkyDoesNotKnow1.jpg", price:"60,000", details:"一種高風險高回報的念能力", link:"../../product/html/theSkyDoesNotKnow.html" },
  ],
  e:[
    {name:"紫煙機兵隊", image:"../images/goods-img/hunter/purpleSmoke/purpleSmoke1.jpg", price:"35,000", details:"指揮無敵機兵！", link:"../../product/html/purpleSmoke.html" },
    {name:"麟粉乃愛泉", image:"../images/goods-img/hunter/scalePowder/scalePowder1.jpg", price:"80,000", dtails:"使用者釋放出特殊的麟粉，影響目標的精神狀態", link:"../../product/html/scalePowder.html" },
    {name:"攜帶他人的命運", image:"../images/goods-img/hunter/carryingTheFate/carryingTheFate1.png", price:"40,000", details:"想要掌控他人的行動嗎？", link:"../../product/html/carryingTheFate.html" },
    {name:"分身", image:"../images/goods-img/hunter/doppelganger/doppelganger1.jpg", price:"6,000", details:"分裂即強大！", link:"../../product/html/doppelganger.html" },
    {name:"180分的戀愛奴隷", image:"../images/goods-img/hunter/180loveSlave/180loveSlave1.png", price:"60,000", details:"被您親吻過的人將無條件地成為您的忠實追隨者", link:"../../product/html/180loveSlave.html" },
  ],
  f:[
    {name:"天使的自動筆記", image:"../images/goods-img/hunter/angel'sAutomaticNotes/angel'sAutomaticNotes1.jpg", price:"60,000", details:"掌握未來，贏在起點！", link:"../../product/html/angel'sAutomaticNotes.html" },
    {name:"玩具修理者", image:"../images/goods-img/hunter/toyRepairer/toyRepairer1.jpg", price:"250,000", details:"化不可能為可能的治癒奇蹟！", link:"../../product/img/hunter/toyRepairer" },
    {name:"神的不在場證明&神的共犯", image:"../images/goods-img/hunter/god'sAlibi/god'sAlibi1.jpg", price:"34,000", details:"化身為影子，掌控一切卻無人察覺！", link:"../../product/html/god'sAlibi.html" },
    {name:"讀取記憶&記憶念彈", image:"../images/goods-img/hunter/readMemory/readMemory1.jpg", price:"50,000", details:"觸摸便知真相，用子彈釋放記憶！", link:"../../product/html/readMemory.html" },
    {name:"寂寞深海魚", image:"../images/goods-img/hunter/lonelyDeepSeaFish/lonelyDeepSeaFish1.png", price:"40,000", details:"追蹤、監視與情報搜集的無敵工具！", link:"../../product/html/lonelyDeepSeaFish.html" },
  ],
};

//獲取類型並動態生成推薦商品
const userType= "a";//假設測驗的結果
const selectedProducts= products[userType];

//輪播參數
const carouselItems= document.getElementById("carouselItems");
let currentIndex= 0;
let isPaused= false;

//複製首尾實現無縫滾動
selectedProducts.forEach(product=> createCard(product));
selectedProducts.forEach(product=> createCard(product));//再次添加一份用於無縫滾動

//自動輪播功能
function updateCarousel() {
  if(!isPaused) {
    currentIndex++;
    updateTransform();
  }
}

setInterval(updateCarousel, 3000);

//更新輪播位置
function updateTransform() {
  const totalItems= selectedProducts.length* 2;
  const translateX= -(currentIndex % totalItems)* 33.33;
  carouselItems.style.transition= currentIndex=== 0?"none": "transform 0.5s ease-in-out";
  carouselItems.style.transform= `translateX(${translateX}%)`;
}

;

//新增箭頭按鈕事
document.getElementById("prevBtn").addEventListener("click", ()=> {
  isPaused= true;
  currentIndex= (currentIndex-1 + selectedProducts.length)% selectedProducts.length;
  updateTransform();
});
document.getElementById("nextBtn").addEventListener("click", ()=> {
  isPaused= true;
  currentIndex= (currentIndex+ 1)% selectedProducts.length;
  updateTransform();
});

//浮起來的那個
const tooltip= document.getElementById("tooltip");
function showTooltip(event, product) {
  tooltip.style.display= "block";
  tooltip.style.left= event.pageX+ 10+ "px";
  tooltip.style.top= event.pageY+ 10+ "px";
  tooltip.innerHTML= `
    <img src="${product.image}" alt="${product.name}" style="width: 80px; height: auto;">
    <div><strong>${product.name}</strong></div>
    <div>${product.price}</div>
    <div>${product.details}</div>
  `;
}
function hideTooltip() {
  tooltip.style.display= "none";
}

//建立商品卡
function createCard(product) {
  const card= document.createElement("div");
  card.className= "card";
  card.innerHTML= `
    <a href="${product.link}" target="_blank">
      <img src="${product.image}" alt="${product.name}">
      <div class="card-title">${product.name}</div>
    </a>
  `;
  card.addEventListener("mouseover",(event)=> showTooltip(event, product));
  card.addEventListener("mouseout", hideTooltip);
  carouselItems.appendChild(card);
  return card;
}
generateQuestion(questions[currentQuestionIndex]);
