// 開啟彈窗
function openInfro() {
    document.getElementById('Infro').style.display = 'flex';
    showTab('description');
}

// 關閉彈窗
function closeInfro() {
    document.getElementById('Infro').style.display = 'none';
}

// 切換標籤
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}


const goodsData = [
    {
        title: "天使的自動筆記",
        price: "$60,000",
        bigImg: "images/goods-img/hunter/angel'sAutomaticNotes/angel'sAutomaticNotes1.jpg",
        smallImgs: [
            "images/goods-img/hunter/angel'sAutomaticNotes/angel'sAutomaticNotes1.jpg",
            "images/goods-img/hunter/angel'sAutomaticNotes/angel'sAutomaticNotes2.jpg"
        ],
        description: `<p>掌握未來，贏在起點！天使的自動筆記是一項頂級占卜能力，只需提供目標的基本信息，能力即可自動生成未來的精準預測詩，清晰揭開接下來的關鍵事件與發展方向，讓您無論在商業、冒險還是生活中都能先人一步！</p>
                        <ul>
                          <li><strong>精準未來預測</strong>：詩句具體且準確，涵蓋重要事件與結果。</li>
                          <li><strong>自動書寫</strong>：能力全自動運作，無需耗費您的任何精力。</li>
                          <li><strong>多用途</strong>：適用於商業決策、個人發展、敵人偵查等多種情境。</li>
                          <li><strong>高保密性</strong>：占卜結果僅目標本人可解讀，安全且隱私。</li>
                        </ul>
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li>本能力僅能預測特定個體的未來，無法用於群體占卜。</li>
                          <li>預測結果可能因外力干擾而略有偏差，建議作為參考指導。</li>
                          <li>請勿頻繁使用於同一目標，避免因信息過量影響未來走向。</li>
                        </ul>`,
        reviews: `<p><p><strong>陳志明</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：超級喜歡這個商品！質量非常好，和描述一致，賣家態度非常友善，物流也很快，超過預期，非常滿意。</p>
                        <p><strong>李建華</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：商品品質很好，超出預期！賣家的服務很周到，發貨速度非常快，收貨的時候包裝完好無損，非常滿意！</p>
                        <p><strong>王小莉</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：非常棒的商品！不僅質量非常好，賣家也非常耐心，服務一流，物流迅速，無論從哪方面來看都很滿意，值得推薦！</p></p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "攜帶他人的命運",
        price: "$40,000",
        bigImg: "images/goods-img/hunter/carryingTheFate/carryingTheFate1.png",
        smallImgs: [
            "images/goods-img/hunter/carryingTheFate/carryingTheFate1.png",
            "images/goods-img/hunter/carryingTheFate/carryingTheFate2.png",
            "images/goods-img/hunter/carryingTheFate/carryingTheFate3.jpg"
        ],
        description: `<p>想要掌控他人的行動嗎？攜帶他人的命運讓您輕鬆操控他人，無論是敵人還是盟友甚至是自己，都在您的掌控之中。只需將天線插入對方體內，您即可操縱他們的行動，直至天線被拔除或對方死亡。若將天線插入自己體內，您將進入自動操作模式，無需手持手機即可操控。</p>

                        <p><strong>特點</strong></p>
                        <ul>
                          <li><strong>操控他人：</strong>將天線插入對方體內，即可操縱其行動。</li>
                          <li><strong>自動操作模式：</strong>將天線插入自己體內，無需手持手機即可操控。</li>
                          <li><strong>多重操控：</strong>一次最多可操控兩人，包括自己。</li>
                          <li><strong>解除方法：</strong>拔掉天線即可解除操控。</li>
                        </ul>
                        
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li><strong>意識存在：</strong>操控期間，對方的意識仍然存在，僅行動受控。</li>
                          <li><strong>疲勞風險：</strong>操控時間過長可能導致對方身體疲勞。</li>
                        </ul>`,
        reviews: `<p><strong>李美華</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：商品質量超棒！比想像中還好，非常推薦。</p>
                        <lp><strong>王小明</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★☆ | 物流服務：★★★★★<br>
                            評價：商品很棒，質感不錯。物流非常快，很滿意。</p>`,
        shipping: `<p>☑大法師配送<br>☐夢境配送</p>`
    },
    {
        title: "鎖鏈",
        price: "$30,000",
        bigImg: "images/goods-img/hunter/chain/chain1.jpg",
        smallImgs: [
            "images/goods-img/hunter/chain/chain2.jpg",
            "images/goods-img/hunter/chain/chain3.jpg"
        ],
        description: `<p>鎖鏈是一種多功能的念能力武器，專為束縛、治療、奪取和審判等多種用途而設計。</p>

                        <p><strong>特點：</strong></p>
                        <ul>
                          <li><strong>束縛中指鏈：</strong>末端為勾爪狀，可用於束縛敵人，強迫其進入「絕」的狀態，無法使用念能力。</li>
                          <li><strong>審判小指鏈：</strong>末端呈刃狀，能刺入對手心臟，強迫對方遵守制約，否則會致命。</li>
                          <li><strong>掠奪食指鏈：</strong>末端為針筒，可刺入對方體內，暫時奪取並保管對方的念能力。</li>
                          <li><strong>治癒拇指鏈：</strong>末端為針狀，可用於治療自身或他人的傷口，促進快速癒合。</li>
                          <li><strong>探查無名指鏈：</strong>末端為眼睛形狀，可用於遠距離觀察目標，獲取情報。</li>
                        </ul>
                        
                        <p><strong>注意事項：</strong></p>
                        <ul>
                          <li>使用時需注意自身念能力的控制，以免誤傷自己或他人。</li>
                          <li>部分鏈條功能需在特定情況下才能發揮最大效果。</li>
                        </ul>`,
        reviews: `<p><strong>陳文應</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：物流很快，會回購。</p>`,
        shipping: `<p>☑大法師配送<br>☐夢境配送`
    },
    {
        title: "念系縫合",
        price: "$60,000",
        bigImg: "images/goods-img/hunter/conceptSuture/conceptSuture1.png",
        smallImgs: [
            "images/goods-img/hunter/conceptSuture/conceptSuture2.png",
            "images/goods-img/hunter/conceptSuture/conceptSuture3.png"
        ],
        description: `<p>將念化作絲線，縫合一切傷口，結合精密的控制與高超的念技，能快速修復各類創傷，甚至在極端情況下將斷肢重新接合，恢復如初。這不僅是一項戰鬥中的救命技能，也是一門藝術級的治癒術！</p>
                        <p><strong>特點</strong></p>
                        <ul>
                          <li><strong>快速修復</strong>：高效率治療傷口，減少恢復時間，甚至能在戰鬥中即刻救援。</li>
                          <li><strong>斷肢重接</strong>：縫合後的組織如原生般牢固，恢復正常功能。</li>
                          <li><strong>精密操控</strong>：念絲可達微米級精細，適用於各類複雜傷口。</li>
                          <li><strong>靈活應用</strong>：不僅限於治療，也能作為戰鬥中的控制工具（例如束縛敵人）。</li>
                        </ul>
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li>能力效果取決於念的輸出強度，過度使用可能導致體力與精神消耗過大。</li>
                          <li>治療斷肢需在傷口新鮮狀態下操作，時間過長可能影響效果。</li>
                          <li>勿用於對健康組織進行隨意改造。</li>
                        </ul>`,
        reviews: `<p>尚無評價......</p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "瘋狂小丑",
        price: "$38,000",
        bigImg: "images/goods-img/hunter/crazyClown/crazyClown1.png",
        smallImgs: [
            "images/goods-img/hunter/crazyClown/crazyClown2.png",
            "images/goods-img/hunter/crazyClown/crazyClown3.png"
        ],
        description: `<p>在命運的輪盤中，每一輪都充滿未知與驚奇！內含九個隨機召喚的武器，每一次的戰鬥都充滿驚喜與挑戰。最特別的是，這個輪盤中有一個讓命運無法預測的秘密武器——「絕對不能這麼死掉」，它將在關鍵時刻救您一命，只有當您心中堅定信念時，才能激活它，實現逆轉生死的奇蹟！</p>

                        <p><strong>特點</strong></p>
                        <ul>
                          <li><strong>九種武器：</strong>每次轉動輪盤，您將隨機獲得一個武器，每一件武器都有不同的特性與使用場景，必須依據當時的情勢巧妙運用。</li>
                          <li><strong>心中堅定信念的奇蹟：</strong>這是「瘋狂小丑」最強大且最神秘的一招，只有在您真心相信「我不能這麼死掉！」的情況下才能啟動。</li>
                        </ul>
                        
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li><strong>武器轉換機制：</strong>必須妥善運用，才能再次轉動輪盤或避免武器消失。</li>
                          <li><strong>隨機：</strong>每一次轉動的結果都充滿未知，可能與您想使用的不符，但出現的往往是最適合當下的武器。</li>
                        </ul>   `,
        reviews: `<p><strong>張瑞峰</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：物有所值，物流速度超快，會推薦給朋友！</p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "暗黑鬼婦神",
        price: "$8,000",
        bigImg: "images/goods-img/hunter/darkGhostGoddess/darkGhostGoddess.jpg",
        smallImgs: [
            "images/goods-img/hunter/darkGhostGoddess/darkGhostGoddess.jpg"
        ],
        description: `<p>源自於極致自我強化的能力，將全身的毛髮轉化為超強防禦盔甲。無論是對抗物理攻擊還是精神衝擊，毛髮盔甲都能提供最堅固的保護。這項能力讓每一根毛髮都成為您最強的武器與防線，為您打造一個無懈可擊的護盾。</p>

                        <p><strong>特點</strong></p>
                        <ul>
                          <li><strong>盔甲形成：</strong>當能力啟動時，您的全身毛髮瞬間強化，並凝聚成盔甲，覆蓋全身，將您變成一個無懈可擊的防禦體。</li>
                          <li><strong>變化與適應：</strong>毛髮盔甲的形狀與厚度可根據需求進行變化，從輕盈靈活的鎧甲到厚重防禦型的裝甲，隨心所欲。</li>
                          <li><strong>隱形防護：</strong>強化的毛髮盔甲不僅能保護身體，還能有效吸收或抵禦攻擊，甚至在一定程度上消除衝擊波。</li>
                          <li><strong>毛髮爆發：</strong>當受到強烈攻擊或壓力時，毛髮可以瞬間膨脹，形成一層鋼鐵般的防護層，抵擋巨大的傷害。</li>
                          <li><strong>免疫腐蝕：</strong>毛髮的盔甲擁有特殊的抗腐蝕性，即使在極端環境下，仍能保持其強度與靈活性。</li>
                        </ul>
                        
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li><strong>能量消耗：</strong>啟動毛髮盔甲需要消耗大量念力與體力，長時間使用可能導致疲勞。</li>
                          <li><strong>體型限制：</strong>雖然毛髮盔甲能隨形態變化，但過度增強盔甲的厚度可能會降低靈活性。</li>
                          <li><strong>髮質健康：</strong>若在發動能力時受到巨大損傷，恢復成正常毛髮時可能會有一定受損。</li>
                        </ul>`,
        reviews: `<p>尚無評價......</p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "分身",
        price: "$6,000",
        bigImg: "images/goods-img/hunter/doppelganger/doppelganger1.jpg",
        smallImgs: [
            "images/goods-img/hunter/doppelganger/doppelganger1.jpg",
            "images/goods-img/hunter/doppelganger/doppelganger2.png"
        ],
        description: `<p>分裂即強大！能製造一個擁有獨立思考的分身，幫助您同時處理多項任務，還能實現最強戰術佈局。分身與本體互相連結，完美配合，工作與戰鬥效率瞬間飆升！</p>
                        <p><strong>特點</strong></p>
                        <ul>
                          <li><strong>智能</strong>：分身能自主行動，並與本體共享記憶。</li>
                          <li><strong>無痛合體</strong>：分身隨時可回歸本體，統一回收記憶與經驗。</li>
                          <li><strong>真偽難辨</strong>：分身與本體完全相同，敵人難以分辨真身。</li>
                          <li><strong>高適應性</strong>：適用於戰鬥、偵查、勞動甚至娛樂場合！</li>
                        </ul>
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li>分身時間過久可能導致精神疲勞，建議評估自身能力。</li>
                          <li>分身僅限持有者控制，無法轉移使用權。</li>
                          <li>合體時需集中注意力，避免遺失重要記憶。</li>
                        </ul>`,
        reviews: `<p><strong>王小明</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★☆ | 物流服務：★★★★★<br>
                            評價：商品很棒，質感很不錯。賣家的服務有點小瑕疵，但物流非常快，很滿意。</p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "伸縮自在的愛",
        price: "$30,000",
        bigImg: "images/goods-img/hunter/flexiblaeLove/flexiblaeLove1.jpg",
        smallImgs: [
            "images/goods-img/hunter/flexiblaeLove/flexiblaeLove1.jpg",
            "images/goods-img/hunter/flexiblaeLove/flexiblaeLove2.png"
        ],
        description: `<p>伸縮自在的愛是一項獨特的念能力，能隨意伸展、黏附並操縱物體或敵人，既能在戰鬥中施展創意戰術，也可用於日常生活中的各種場景，真正做到隨心所欲、無所不能！</p>
                        <p><strong>特點</strong></p>
                        <ul>
                          <li><strong>超強彈性</strong>：念能力如橡膠般，可自由拉伸至極限，回縮力強大。</li>
                          <li><strong>高黏附性</strong>：能黏附在任何物體表面，固定或牽引物品。</li>
                          <li><strong>隱秘應用</strong>：透明且隱形，讓敵人毫無防備。</li>
                          <li><strong>戰鬥多功能性</strong>：適用於牽制、攻擊、防禦、反擊等多種戰術。</li>
                          <li><strong>創意無限</strong>：不僅能在戰鬥中發揮威力，也能在日常生活中解決難題！</li>
                          <li><strong>物品操控</strong>：搬運重物、固定設備或設置陷阱。</li>
                          <li><strong>應急救援</strong>：拯救墜落物品或拉回掉落的同伴。</li>
                        </ul>
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li>過度使用可能導致精神力消耗，建議適量操控。</li>
                          <li>黏附能力需經過熟練掌握，以免誤傷自己或同伴。</li>
                        </ul>`,
        reviews: `<p><strong>李美華</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：為了西索買，但真的讚。</p>
                        <p><strong>林書豪</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：超值的商品！各方面都令人滿意，五星推推！</p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "四次元公寓",
        price: "$180,000",
        bigImg: "images/goods-img/hunter/fourDimensionsApartment/fourDimensionsApartment1.jpg",
        smallImgs: [
            "images/goods-img/hunter/fourDimensionsApartment/fourDimensionsApartment2.jpg",
            "images/goods-img/hunter/fourDimensionsApartment/fourDimensionsApartment3.jpg",
            "images/goods-img/hunter/fourDimensionsApartment/fourDimensionsApartment4.jpg"
        ],
        description: `<p>擁有自己的次元空間，隨時開啟隱秘、安全、便捷的藏身之所！四次元公寓為您提供一個完全隔絕外界的獨立次元空間，可自由進出、隱匿物品或人員，讓您輕鬆實現完美戰術部署、資源管理與隱藏行蹤的需求！</p>
                        <p><strong>特點</strong></p>
                        <ul>
                          <li><strong>獨立空間</strong>：擁有多個房間，可用於存放物品或臨時居住。</li>
                          <li><strong>隱秘入口</strong>：在任意地點開啟空間門，且外人難以察覺。</li>
                          <li><strong>高安全性</strong>：空間內完全隔絕外界干擾，防止任何追蹤或攻擊。</li>
                          <li><strong>靈活操控</strong>：空間大小可根據需求調整，可容納多人同時使用。</li>
                        </ul>
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li>初次使用需設定入口門的外觀與位置，建議選擇隱秘地點。</li>
                          <li>空間內禁止使用破壞性工具，以免影響穩定性。</li>
                          <li>請勿過度依賴，長期滯留可能導致精神壓力增加。</li>
                        </ul>`,
        reviews: `<p><strong>高志強</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：非常滿意的一次購物體驗，商品符合我的需求，賣家的服務態度很好，物流也很快，大法師非常禮貌，五星好評！</p>
                        <p>
                            <strong>陳曉明</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：商品質量超好，價格也合理，賣家的服務真的很貼心，物流比預期的還要快，非常值得信賴的一家店，推薦給大家！</p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "輕薄的假象",
        price: "$25,000",
        bigImg: "images/goods-img/hunter/frivolousIllusion/frivolousIllusion1.jpg",
        smallImgs: [
            "images/goods-img/hunter/frivolousIllusion/frivolousIllusion1.jpg",
            "images/goods-img/hunter/frivolousIllusion/frivolousIllusion2.jpg"
        ],
        description: `<p>讓想像力化作現實，輕盈如紙卻能重現一切質感的幻象！將您的想像與念力融合，創造出極其精緻的虛擬物品。只要掌控得當，您就能利用這項能力隱匿、迷惑、甚至偷天換日！</p>

                        <p><strong>特點</strong></p>
                        <ul>
                          <li><strong>質感重現：</strong>將您的創意轉化為精細的幻象，這些幻象具有真實的質感，無論是柔軟、堅硬還是光滑，都能在您心中一念之間改變。</li>
                        </ul>
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li><strong>觸覺弱點：</strong>這些幻象僅在視覺上極為真實，觸覺上無法表現物體質感，所以觸摸即能識破。</li>
                          <li><strong>創建限制：</strong>只能創建極薄幻象，無法創造立體的物品。</li>
                        </ul>        `,
        reviews: `<p><strong>鄭小龍</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★
                            評價：推！</p>
                        <p><strong>陳安安</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：物流超快，商品質量非常好，值得推薦！</p>
                        <p><strong>劉慧敏</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：產品質量很好，物流服務一流，會再次回購！</p>
                        <p><strong>張瑞峰</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：物有所值，物流速度超快，會推薦給朋友！</p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "神的不在場證明&神的共犯",
        price: "$25,000",
        bigImg: "images/goods-img/hunter/god'sAlibi/god'sAlibi1.jpg",
        smallImgs: [
            "images/goods-img/hunter/god'sAlibi/god'sAlibi2.jpg",
            "images/goods-img/hunter/god'sAlibi/god'sAlibi3.jpg"
        ],
        description: `<p>化身為影子，掌控一切卻無人察覺！不僅能讓您徹底隱身，從任何人視線中消失，還能將視角與同伴共享，實現無縫配合與精準掌控。完美適用於偵查、伏擊與戰術協作的高端能力！</p>

                        <p><strong>神的不在場證明</strong></p>
                        <ul>
                          <li><strong>完全隱形</strong>：消失於視覺、聽覺甚至念的感知範圍內，宛如不存在。</li>
                          <li><strong>靈活操控</strong>：可在隱匿狀態下自由行動，影響外物但不會被察覺。</li>
                        </ul>
                        
                        <p><strong>神的共犯</strong></p>
                        <ul>
                          <li><strong>視角共享</strong>：您接觸的人將與您一起消失並將視角實時共享，精準協助行動。</li>
                          <li><strong>高安全性</strong>：視角共享不會暴露您的位置或行動。</li>
                        </ul>
                        
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li><strong>時間限制</strong>：能力取決於您的肺活量，憋氣時發動能力將能隱形。</li>
                          <li><strong>視角共享限制</strong>：每次只能與一名同伴共享視角。</li>
                        </ul>`,
        reviews: `<p><strong>王小莉</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：完美，非常推薦。</p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "神的左手惡魔的右手",
        price: "$25,000",
        bigImg: "images/goods-img/hunter/god'sLeftHand/god'sLeftHand1.png",
        smallImgs: [
            "images/goods-img/hunter/god'sLeftHand/god'sLeftHand2.png",
            "images/goods-img/hunter/god'sLeftHand/god'sLeftHand3.jpg"
        ],
        description: `<p>簡單觸碰，複製奇蹟！只需用右手接觸物品，左手便可創造出一模一樣的複製品。無論是武器、道具、甚至是生物的外型，都能完美再現，助您在戰鬥、謀略或日常生活中實現無限可能！</p>

                        <p><strong>特點</strong></p>
                        <ul>
                          <li><strong>完美再現</strong>：從觸摸到生成，無需任何準備，即可瞬間完成複製。</li>
                          <li><strong>無損精度</strong>：複製品與原物毫無差異，甚至連細節也完全一致。</li>
                          <li><strong>多樣適用</strong>：適用於武器、工具、裝備，甚至生物的外形。</li>
                        </ul>
                        
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li><strong>無法複製生命</strong>：生成的生物僅具備形體，無生命、意識與能力。</li>
                          <li><strong>靜態展示</strong>：可用於迷惑敵人或布置假象，但無法自主行動。</li>
                          <li><strong>右手必須接觸</strong>：複製前需右手直接接觸目標，無法隔空操作。</li>
                        </ul>`,
        reviews: `<p><strong>林志偉</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：物有所值，物流也非常迅速，非常推薦。</p>
                        <p><strong>陳美琪</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：非常棒的商品，賣家很用心，會回購。</p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "寂寞深海魚",
        price: "$40,000",
        bigImg: "images/goods-img/hunter/lonelyDeepSeaFish/lonelyDeepSeaFish1.png",
        smallImgs: [
            "images/goods-img/hunter/lonelyDeepSeaFish/lonelyDeepSeaFish1.png",
            "images/goods-img/hunter/lonelyDeepSeaFish/lonelyDeepSeaFish2.jpg"
        ],
        description: `<p>透過頭上的水晶球，記錄並觀察目標人物的行蹤。只需用左眼凝視目標，便能將其記錄至水晶球，並且在閉上左眼後，使用右眼即可隨時觀看目標人物當下的情況。這項能力是追蹤、監視與情報搜集的無敵工具！</p>

                        <p><strong>特點</strong></p>
                        <ul>
                        <li><strong>記錄影像</strong>：使用左眼凝視目標，便能像該目標人物的專屬監視器，觀察他的動態。</li>
                        <li><strong>精確追蹤</strong>：無論目標移動多遠或改變外觀，您都能精確追蹤並看到其行動。</li>
                        </ul>

                        <p><strong>注意事項</strong></p>
                        <ul>
                        <li><strong>三人上限</strong>：最多只能記錄三個目標人物，一旦達到上限，新的目標將會取代最早記錄的人物。</li>
                        <li><strong>需視覺接觸</strong>：左眼必須清晰看到目標才能進行記錄，視距和環境會影響能力的運作。</li>
                        </ul>`,
        reviews: `<p>尚無評價......</p>`,
        shipping: `<p>☑大法師配送<br>☐夢境配送</p>`
    },
    {
        title: "魔法美容師",
        price: "$15,000",
        bigImg: "images/goods-img/hunter/magicBeautician/magicBeautician1.png",
        smallImgs: [
            "images/goods-img/hunter/magicBeautician/magicBeautician2.png",
            "images/goods-img/hunter/magicBeautician/magicBeautician3.png"
        ],
        description: `<p>透過一位名為「曲奇小姐」的念獸，提供各種專業美容服務。此能力能使使用者的氣變化為乳霜，達到美容和恢復體力的效果，是追求美麗與健康人士的理想選擇。</p>

                        <p><strong>特點</strong></p>
                        <ul>
                          <li><strong>專業美容：</strong>曲奇小姐擅長多種美容技術，能夠燃燒多餘脂肪，分泌特製乳液，達到返老還童及美容的效果。</li>
                          <li><strong>身心放鬆：</strong>透過按摩等手法，讓使用者進入深度放鬆狀態，短時間內獲得相當於長時間睡眠的效果，迅速恢復體力。</li>
                        </ul>
                        
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li><strong>非戰鬥用途：</strong>此能力主要用於美容和恢復，對戰鬥沒有直接幫助。</li>
                          <li><strong>需耗費念力：</strong>使用此能力需要消耗一定的念力，過度使用可能導致疲勞。</li>
                        </ul> `,
        reviews: `<p><strong>陳美琪</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：非常棒的商品。</p>
                        <p><strong>張建中</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：賣家的服務非常棒，商品也讓人滿意。</p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "旋律",
        price: "$6,000",
        bigImg: "images/goods-img/hunter/melody/melody1.png",
        smallImgs: [
            "images/goods-img/hunter/melody/melody2.png",
            "images/goods-img/hunter/melody/melody3.png",
            "images/goods-img/hunter/melody/melody4.jpg"
        ],
        description: `<p>透過音樂的力量，旋律的心靈樂章能夠撫慰人心，治癒身心疲憊，演奏時，使用者的氣場與音符融合，產生強大的治癒效果。</p>

                        <p><strong>特點</strong></p>
                        <ul>
                          <li><strong>心靈治癒：</strong>演奏樂曲時，能夠舒緩聽者的情緒，減輕壓力與焦慮。</li>
                          <li><strong>身體恢復：</strong>音樂可促進身體的疲勞恢復，提升聽者的精力與活力。</li>
                          <li><strong>情緒感知：</strong>使用者能夠透過音樂感知他人的情緒變化，提供適當的支持與安慰。</li>
                        </ul>
                        
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li><strong>演奏技巧：</strong>需具備一定的音樂演奏能力，才能發揮心靈樂章的最大效果。</li>
                          <li><strong>範圍限制：</strong>治癒效果僅限於音樂可傳播的範圍內，超出範圍則無法產生影響。</li>
                          <li><strong>專注力：</strong>使用者需保持專注，確保氣場與音樂的完美融合，以達到最佳治癒效果。</li>
                        </ul>`,
        reviews: `<p><strong>Jason Wang</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：撫慰人心。</p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "猜猜拳",
        price: "$12,000",
        bigImg: "images/goods-img/hunter/mora/mora1.jpg",
        smallImgs: [
            "images/goods-img/hunter/mora/mora2.png",
            "images/goods-img/hunter/mora/mora3.png"
        ],
        description: `<p>猜拳不僅是遊戲，更是決勝的武器！結合了三種不同形態的攻擊方式。每次使用之前都需要蓄力，蓄力時間越長，傷害就越大。這三種攻擊型態分別是剪刀、石頭和布，每一種型態都擁有不同的效果與優勢，讓您能夠根據戰況選擇最佳策略。</p>

                        <p><strong>特點</strong></p>
                        <ul>
                          <li><strong>剪刀</strong>：近距離招式，可變為強化的鋒利剪刀，雖然是三種型態中威力最弱，但依然具備極高的破壞力。</li>
                          <li><strong>石頭</strong>：近距離攻擊，強化的硬拳是威力最大的招式，在近戰中幾乎無敵。</li>
                          <li><strong>布</strong>：此攻擊為遠距離型，可射出充滿念力的能量球，擊中後會爆炸，念能力越強，能量球飛得越遠，威力也越強。</li>
                        </ul>
                        
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li><strong>蓄力需求</strong>：每次使用前需要蓄力，蓄力時間影響威力，時間太長會導致別人發現您的目的。</li>
                          <li><strong>攻擊範圍限制</strong>：每種型態有不同的攻擊範圍與適用場景，需要靈活選擇。</li>
                          <li><strong>狀態切換</strong>：無法同時保持多種型態，必須選擇當前最適合的攻擊方式。</li>
                        </ul>`,
        reviews: `<p><strong>黃國峰</strong><br>
                            商品評價：★★★☆☆ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：商品使用上沒有特別驚喜，但賣家的服務態度很好，物流速度很快，值得給高分。</p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "凸眼魚",
        price: "$70,000",
        bigImg: "images/goods-img/hunter/popeyeFish/popeyeFish1.png",
        smallImgs: [
            "images/goods-img/hunter/popeyeFish/popeyeFish2.png",
            "images/goods-img/hunter/popeyeFish/popeyeFish3.png"
        ],
        description: `<p>凸眼魚能夠吸入任何無生命的物品，無論大小、數量皆可。外觀類似一條擁有眼睛、牙齒和舌頭的魚形吸塵器，操作簡便，適合用於清理、搬運等多種場合。</p>

                        <p><strong>特點：</strong></p>
                        <ul>
                          <li><strong>強大吸力：</strong>能夠吸入各種無生命物品，無論大小、數量皆可。</li>
                          <li><strong>高效清理：</strong>適合用於清理各種場所，保持環境整潔。</li>
                          <li><strong>多功能性：</strong>可用於搬運、清理等多種場合，提升工作效率。</li>
                        </ul>
                        
                        <p><strong>注意事項：</strong></p>
                        <ul>
                          <li><strong>適用範圍：</strong>僅能無生命的物品，對於有生命的物品無效。</li>
                          <li><strong>操作方式：</strong>使用前請確保「凸眼魚」已正確具現化，並指示其吸入目標物品。</li>
                          <li><strong>維護保養：</strong>使用後請清理「凸眼魚」，以保持其最佳性能。</li>
                        </ul>
                        
                        </p>`,
        reviews: ` <p>尚無評價......</p>`,
        shipping: `<p>☑大法師配送<br>☐夢境配送</p>`
    },
    {
        title: "紫煙機兵隊",
        price: "$35,000",
        bigImg: "images/goods-img/hunter/purpleSmoke/purpleSmoke1.jpg",
        smallImgs: [
            "images/goods-img/hunter/purpleSmoke/purpleSmoke1.jpg",
            "images/goods-img/hunter/purpleSmoke/purpleSmoke1.jpg"
        ],
        description: `<p>凸眼魚能夠吸入任何無生命的物品，無論大小、數量皆可。外觀類似一條擁有眼睛、牙齒和舌頭的魚形吸塵器，操作簡便，適合用於清理、搬運等多種場合。</p>

                        <p><strong>特點：</strong></p>
                        <ul>
                          <li><strong>強大吸力：</strong>能夠吸入各種無生命物品，無論大小、數量皆可。</li>
                          <li><strong>高效清理：</strong>適合用於清理各種場所，保持環境整潔。</li>
                          <li><strong>多功能性：</strong>可用於搬運、清理等多種場合，提升工作效率。</li>
                        </ul>
                        
                        <p><strong>注意事項：</strong></p>
                        <ul>
                          <li><strong>適用範圍：</strong>僅能無生命的物品，對於有生命的物品無效。</li>
                          <li><strong>操作方式：</strong>使用前請確保「凸眼魚」已正確具現化，並指示其吸入目標物品。</li>
                          <li><strong>維護保養：</strong>使用後請清理「凸眼魚」，以保持其最佳性能。</li>
                        </ul>
                        
                        </p>`,
        reviews: `<p>尚無評價......</p>`,
        shipping: `<p>☑大法師配送<br>☐夢境配送</p>`
    },
    {
        title: "讀取記憶&記憶念彈",
        price: "$50,000",
        bigImg: "images/goods-img/hunter/readMemory/readMemory1.jpg",
        smallImgs: [
            "images/goods-img/hunter/readMemory/readMemory2.jpg",
            "images/goods-img/hunter/readMemory/readMemory3.jpg",
            "images/goods-img/hunter/readMemory/readMemory4.jpg"
        ],
        description: `
                        <p>觸摸便知真相，用子彈釋放記憶！能通過直接接觸目標的身體，瞬間獲取其原始記憶，無論對方是否撒謊，您都能看到真實的情況。而更強大的功能是，您還能將自己所知的記憶以子彈形式發射，傳遞給他人，讓他們也能立刻獲得該記憶片段。這項能力是揭開真相、傳遞信息的無敵利器！</p>

                        <p><strong>特點</strong></p>
                        <ul>
                          <li><strong>記憶觸摸</strong>：只需觸摸目標的身體，即可瞬間提取最真實的原始記憶。</li>
                          <li><strong>不受謊言影響</strong>：即使目標說謊，您也能洞悉真相，無法被欺騙。</li>
                          <li><strong>記憶發射</strong>：將自己所知的記憶轉化為念彈，以高精度射擊形式傳遞給他人。</li>
                          <li><strong>靈活應用</strong>：可將複雜的記憶信息傳遞給特定人，讓他們立即理解所需信息。</li>
                        </ul>
                        
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li><strong>接觸要求</strong>：必須通過觸摸才能激發記憶提取，因此要注意接觸的方式與時機。</li>
                          <li><strong>記憶過載</strong>：過度提取記憶可能導致信息過載，影響操作或引發精神疲憊。</li>
                          <li><strong>傳遞限制</strong>：每發念彈只能向一個目標發射記憶。</li>
                        </ul>`,
        reviews: `<p>尚無評價......</p>`,
        shipping: `<p>☑大法師配送<br>☐夢境配送</p>`
    },
    {
        title: "迴天",
        price: "$32,000",
        bigImg: "images/goods-img/hunter/returnToHeaven/returnToHeaven1.png",
        smallImgs: [
            "images/goods-img/hunter/returnToHeaven/returnToHeaven2.png",
            "images/goods-img/hunter/returnToHeaven/returnToHeaven3.png",
            "images/goods-img/hunter/returnToHeaven/returnToHeaven4.png"
        ],
        description: `<p>指揮無敵機兵！您將擁有一支精英軍隊，這些機兵由紫煙凝聚而成，並能依照您的指令執行各種任務。無論是防禦、攻擊，還是策略性行動，紫煙機兵隊都能提供無懈可擊的支援，將戰場變為您指揮下的勝利之地。</p>

                        <p><strong>特點</strong></p>
                        <ul>
                          <li><strong>機械化軍隊：</strong>由紫煙凝聚的機械兵團，數量可根據需求調整，每個機兵都具備高效能作戰能力。</li>
                          <li><strong>忠誠指令：</strong>機兵隊完全聽從您的指揮，能執行攻擊、防守、偵察等多種任務。</li>
                          <li><strong>靈活部署：</strong>根據戰況調整部署，無論近戰或遠程，紫煙機兵隊都能完美適應戰鬥需求。</li>
                          <li><strong>分解與重組：</strong>機兵可在任務中拆解與重組，以應對不同戰術需求。</li>
                        </ul>
                        
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li><strong>依賴能量：</strong>生成紫煙機兵需要消耗能量，生成數量依個人體能有所限制。</li>
                          <li><strong>指揮範圍限制：</strong>指揮機兵的有效範圍有限，超出範圍可能導致反應延遲或指令錯誤。</li>
                        </ul>`,
        reviews: `<p><strong>陳曉明</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：商品質量超好，價格也合理，賣家的服務真的很貼心，物流比預期的還要快，非常值得信賴的一家店，推薦給大家！</p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "麟粉乃愛泉",
        price: "$80,000",
        bigImg: "images/goods-img/hunter/scalePowder/scalePowder1.jpg",
        smallImgs: [
            "images/goods-img/hunter/scalePowder/scalePowder2.jpg",
            "images/goods-img/hunter/scalePowder/scalePowder3.jpg"
        ],
        description: `<p>麟粉乃愛泉是一種強大的念能力，能讓使用者釋放出特殊的麟粉，影響目標的精神狀態。這些麟粉可進入目標體內，造成催眠效果，或顯示出目標周圍的氣流動態，讓使用者讀取對方的情緒狀態。</p>

                        <p><strong>特點</strong></p>
                        <ul>
                          <li><strong>催眠效果：</strong>麟粉可透過呼吸進入目標體內，誘導其進入催眠狀態，削弱其能力。</li>
                          <li><strong>情緒感知：</strong>透過觀察麟粉顯示的氣流動態，使用者能讀取目標的情緒狀態，進而分析對手的能力和意圖。</li>
                        </ul>
                        
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li><strong>範圍限制：</strong>麟粉的影響範圍有限，需在一定距離內施展才能有效。</li>
                          <li><strong>時間限制：</strong>催眠效果為暫時性，隨著時間推移，目標可能恢復意識。</li>
                          <li><strong>環境影響：</strong>在強風或通風良好的環境中，麟粉的效果可能減弱。</li>
                        </ul>`,
        reviews: `<p><strong>許文斌</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：物美價廉，物流也很快，會再回購。</p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "超破壞拳",
        price: "$35,000",
        bigImg: "images/goods-img/hunter/superDestoryingFist/superDestoryingFist1.png",
        smallImgs: [
            "images/goods-img/hunter/superDestoryingFist/superDestoryingFist1.png",
            "images/goods-img/hunter/superDestoryingFist/superDestoryingFist2.png"
        ],
        description: `<p>可將自身的氣轉化為弓箭，並根據情緒變化產生不同顏色的箭矢，透過情緒與氣的結合，實現多樣化的攻擊手段。每種顏色的箭矢具備不同的特性，適用於各種戰鬥情境。</p>

                        <p><strong>特點</strong></p>
                        <ul>
                          <li><strong>多樣化攻擊：</strong>根據使用者的情緒，箭矢可呈現七種顏色，每種顏色代表不同的攻擊效果。</li>
                          <li><strong>遠程打擊：</strong>利用氣形成的弓箭，實現遠距離精確攻擊。</li>
                          <li><strong>情緒驅動：</strong>箭矢的特性與使用者的情緒密切相關，情緒越強烈，箭矢威力越大。</li>
                        </ul>
                        
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li><strong>情緒控制：</strong>使用者需具備良好的情緒控制能力，以確保箭矢達到預期效果。</li>
                          <li><strong>能量消耗：</strong>頻繁使用可能導致氣的消耗過大，需適度使用並確保自身能量充足。</li>
                          <li><strong>訓練需求：</strong>需經過專業訓練才能熟練掌握各種顏色箭矢的特性，達到最佳戰鬥效果。</li>
                        </ul>`,
        reviews: `<p>尚無評價......</p>`,
        shipping: `<p>☑大法師配送<br>☐夢境配送</p>`
    },
    {
        title: "神速",
        price: "$18,000",
        bigImg: "images/goods-img/hunter/superFast/superFast1.jpg",
        smallImgs: [
            "images/goods-img/hunter/superFast/superFast1.jpg",
            "images/goods-img/hunter/superFast/superFast2.jpg"
        ],
        description: `<p>透過操控自身的電流，瞬間提升速度與反應能力，達到超越常人的移動與攻擊速度。</p>

                        <p><strong>特點</strong></p>
                        <ul>
                          <li><strong>電光火石：</strong>在此模式下，奇犽的身體由電流直接控制，反應速度極大提升，能迅速迴避或發動攻擊。</li>
                          <li><strong>疾風迅雷：</strong>透過電流強化肌肉，實現極高速的移動，讓敵人難以捕捉其行蹤。</li>
                        </ul>
                        
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li><strong>體力消耗：</strong>長時間使用「神速」會對身體造成負擔，需適度運用以避免過度疲勞。</li>
                          <li><strong>環境限制：</strong>在潮濕或導電性強的環境中使用，可能引發意外，需特別小心。</li>
                        </ul>`,
        reviews: `<p><strong>劉佳豪</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：商品精緻，服務熱情周到，五星推薦！</p>
                        <p><strong>林雅婷</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：商品質量很好，物流也很快，包裝很仔細。</p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "天上不知唯我獨損",
        price: "$60,000",
        bigImg: "images/goods-img/hunter/theSkyDoesNotKnow/theSkyDoesNotKnow1.jpg",
        smallImgs: [
            "images/goods-img/hunter/theSkyDoesNotKnow/theSkyDoesNotKnow1.jpg",
            "images/goods-img/hunter/theSkyDoesNotKnow/theSkyDoesNotKnow2.jpg"
        ],
        description: `
                        <p>這是一種高風險高回報的念能力，允許使用者將自身的念以高利貸形式借給對手。在借貸期間，雙方的攻防均不會受到傷害。當借貸額度超過對方念的最大值時，對方將進入「破產」狀態，強制進入絕的狀態30天。</p>

                        <p><strong>特點</strong></p>
                        <ul>
                          <li><strong>念的借貸：</strong>使用者可將自身的念借給對手，並以每十秒複利計算，由念獸「波特克林」負責計算。</li>
                          <li><strong>無傷狀態：</strong>在借貸期間，雙方的攻防均不會受到傷害。</li>
                          <li><strong>破產懲罰：</strong>當借貸額度超過對方念的最大值時，對方將進入「破產」狀態，強制進入絕的狀態30天。</li>
                        </ul>
                        
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li><strong>時間限制：</strong>借貸期間的無傷狀態僅在「波特克林」存在時有效。</li>
                          <li><strong>複利計算：</strong>利息以每十秒複利計算，需注意時間的累積。</li>
                          <li><strong>破產風險：</strong>若對手的念量超過使用者的預期，可能導致無法使其破產，需謹慎評估對手的實力。</li>
                        </ul>`,
        reviews: `<p><strong>鄭大龍</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★
                            評價：還沒用過，但那東東蠻可愛的。</p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "盜賊的極意",
        price: "$300,000",
        bigImg: "images/goods-img/hunter/thief's/thief's1.jpg",
        smallImgs: [
            "images/goods-img/hunter/thief's/thief's2.jpg",
            "images/goods-img/hunter/thief's/thief's3.jpg"
        ],
        description: `<p>盜賊的極意是一款獨特的念能力商品，允許使用者竊取他人的念能力並永久擁有。只需手持具現化的書籍「盜賊的秘訣」，即可將目標的念能力收入書中，並在未來的戰鬥中自由使用。</p>

                        <p><strong>特點：</strong></p>
                        <ul>
                          <li><strong>竊取他人念能力：</strong>透過「盜賊的秘訣」，使用者可將他人的念能力收入書中，並在未來的戰鬥中自由使用。</li>
                          <li><strong>永久擁有：</strong>一旦竊取成功，該念能力將永久屬於使用者，無需再次竊取。</li>
                          <li><strong>多樣化戰術：</strong>擁有多種念能力，使用者可根據戰況選擇最適合的能力，提升戰鬥靈活性。</li>
                        </ul>
                        
                        <p><strong>注意事項：</strong></p>
                        <ul>
                          <li><strong>使用條件：</strong>必須親眼見過目標使用念能力，並詢問對方有關其念能力的詳細資訊，且獲得對方的回答。</li>
                          <li><strong>竊取限制：</strong>被竊取念能力的人在能力歸還前無法再次使用該能力。</li>
                          <li><strong>能力歸還：</strong>當原持有者死亡或能力歸還後，竊取的能力將從書中刪除，無法再使用。</li>
                        </ul>
                        </p>`,
        reviews: `<p>尚無評價......</p>`,
        shipping: `<p>☑大法師配送<br>☐夢境配送</p>`
    },
    {
        title: "玩具修理者",
        price: "$250,000",
        bigImg: "images/goods-img/hunter/toyRepairer/toyRepairer1.jpg",
        smallImgs: [
            "images/goods-img/hunter/toyRepairer/toyRepairer2.jpg",
            "images/goods-img/hunter/toyRepairer/toyRepairer3.jpg",
            "images/goods-img/hunter/toyRepairer/toyRepairer4.jpg"
        ],
        description: `<p>化不可能為可能的治癒奇蹟！能將人類身體視為玩具般重新組裝修復。無論是致命重傷還是斷肢損毀，只要施展能力，都能瞬間修復如初，宛如從未受傷。這是一項超越常規醫療極限的神技！</p>

                        <p><strong>特點</strong></p>
                        <ul>
                          <li><strong>極速修復</strong>：短短數秒內完成治癒，無需等待恢復期。</li>
                          <li><strong>全範圍治癒</strong>：包括內外傷、器官損壞，甚至是斷肢重接。</li>
                          <li><strong>無痛治療</strong>：治療過程無需麻醉，受傷者感覺不到疼痛。</li>
                          <li><strong>完美修復</strong>：傷口痕跡完全消失，身體機能恢復如初，無後遺症。</li>
                          <li><strong>自動治療模式</strong>：啟動後完全專注於治療，效率極高。</li>
                        </ul>
                        
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li><strong>治療過程能力持有者需全神貫注</strong>：無法兼顧其他操作。</li>
                          <li><strong>重傷治療後可能造成能力持有者的念力消耗過大</strong>：需適當休息。</li>
                          <li><strong>只限於修復身體傷害</strong>：無法治療心理問題或超自然疾病。</li>
                        </ul>
                        `,
        reviews: `<p><strong>王小莉</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：每個細節都很完美，非常推薦給大家。</p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "轉校生",
        price: "$30,000",
        bigImg: "images/goods-img/hunter/transferStudents/transferStudents.png",
        smallImgs: [
            "images/goods-img/hunter/transferStudents/transferStudents.png",
        ],
        description: `<p>想變身成任何人不再是夢！轉校生讓您擁有改變外貌的能力，只需輕觸對方的身體，便能瞬間取得對方的外觀，或者以驚人的速度將自己的外貌與對方互換。只要您能掌握此能力，無論是變成對方，還是讓對方成為您，都不再是難事！</p>

                        <p><strong>特點</strong></p>
                        <ul>
                          <li><strong>左手觸摸：</strong>當您用左手觸摸對方時，會迅速變成對方的外觀。無論是髮型、臉型還是身材，都能以極高的真實度復製，宛如本身即是對方。</li>
                          <li><strong>右手觸摸：</strong>當您用右手觸摸對方，對方會立即變成您的樣子。</li>
                          <li><strong>雙手同時觸摸：</strong>當您同時用雙手觸摸對方時，您和對方的外貌瞬間交換。</li>
                        </ul>
                        
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li><strong>能量消耗：</strong>每次觸摸與變換都需要消耗一定的念力，特別是在雙手同時觸摸時，會對使用者的體力和精神產生較大負擔。</li>
                          <li><strong>無法永久保留：</strong>變換的效果是暫時的，無論是對方或自己，均會隨時間而恢復原狀。</li>
                        </ul>`,
        reviews: `<p>尚無評價......</p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "雙手機關槍",
        price: "$50,000",
        bigImg: "images/goods-img/hunter/twoHanded/twoHanded1.png",
        smallImgs: [
            "images/goods-img/hunter/twoHanded/twoHanded2.png",
            "images/goods-img/hunter/twoHanded/twoHanded3.png"
        ],
        description: `<p>手指機關槍是一種強大的放出系念能力，使用者可從雙手十指如機關槍般連續發射念彈，對敵人進行猛烈攻擊。</p>

                        <p><strong>特點</strong></p>
                        <ul>
                          <li><strong>高密度火力：</strong>十指同時發射念彈，形成密集的攻擊網。</li>
                          <li><strong>可調整射擊角度：</strong>手指靈活調整，實現全方位無死角攻擊。</li>
                        </ul>
                        
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li><strong>強度使用：</strong>高強度使用可能導致體力迅速消耗，需注意自身狀況。</li>
                          <li><strong>戰鬥範圍：</strong>適用於中近距離戰鬥，遠距離效果可能減弱。</li>
                        </ul>`,
        reviews: `<p>尚無評價......</p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "180分的戀愛奴隷",
        price: "$60,000",
        bigImg: "images/goods-img/hunter/180loveSlave/180loveSlave1.png",
        smallImgs: [
            "images/goods-img/hunter/180loveSlave/180loveSlave1.png",
            "images/goods-img/hunter/180loveSlave/180loveSlave2.png"
        ],
        description: `<p>想要擁有無可抗拒的魅力，讓他人心甘情願為您效勞嗎？180分戀愛奴隷讓您輕鬆征服他人的心，只需輕輕一吻...</p><p><strong>特點：</strong></p>
        <ul>
          <li><strong>瞬間征服：</strong>被您親吻過的人會立刻對您產生無比的依賴與忠誠，無論是工作、生活還是其他方面，都會全力支持您。</li>
          <li><strong>無條件服從：</strong>他們會無條件地聽從您的指示，為您排憂解難，甚至在危險時刻挺身而出。</li>
          <li><strong>情感連結：</strong>這種關係建立在深厚的情感基礎上，彼此之間的信任與依賴將使您們的關係更加牢固。</li>
        </ul>
        <p><strong>注意事項：</strong></p>
        <ul>
          <li><strong>使用限制：</strong>每次親吻後，被親吻者需要一段時間才能恢復正常情感狀態，請合理安排使用頻率。</li>
          <li><strong>情感維護：</strong>為了維持良好的關係，建議您在日常生活中關心他們的感受，避免過度依賴。</li>
        </ul>`,
        reviews: `<p><strong>user914</strong><br>
                    商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                    評價：哈哈哈</p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "爆破",
        price: "$40,000",
        bigImg: "images/goods-img/myHeroAcademic/blasting/blasting1.png",
        smallImgs: [
            "images/goods-img/myHeroAcademic/blasting/blasting2.png",
            "images/goods-img/myHeroAcademic/blasting/blasting3.png",
            "images/goods-img/myHeroAcademic/blasting/blasting4.png"
        ],
        description: `<p> 掌控爆炸的力量，瞬間釋放毀滅性的攻擊，使用者能夠在手掌處引爆類似硝化甘油的物質，產生強大的爆炸效果。</p>
                        
                        <p><strong>特點</strong></p>
                        <ul>
                          <li><strong>爆炸攻擊：</strong>在手掌觸及的位置引爆，造成範圍性傷害，對敵人形成毀滅性打擊。</li>
                          <li><strong>推進力：</strong>利用爆炸產生的反作用力，實現短距離的快速移動，提升機動性。</li>
                          <li><strong>威力調節：</strong>根據出汗程度調節爆炸威力，夏季爆發性強大，冬季則較為緩慢。</li>
                        </ul>
                        
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li><strong>能量消耗：</strong>過度使用可能導致手部肌肉疲勞，需適度運用，避免自身負荷過重。</li>
                          <li><strong>環境影響：</strong>高溫環境下使用時，需注意周圍易燃物品，避免意外發生，確保安全操作。</li>
                        </ul>
                    </p>`,
        reviews: `<p><p><strong>周小敏</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：非常棒的商品，超過我的期待，物流也很快！</p>
                        <p><strong>林志勇</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：商品精美，物流快速，整體購物體驗很好。</p></p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "半冷半燃",
        price: "$45,000",
        bigImg: "images/goods-img/myHeroAcademic/halfColdHalfBurning/halfColdHalfBurning1.png",
        smallImgs: [
            "images/goods-img/myHeroAcademic/halfColdHalfBurning/halfColdHalfBurning1.png",
            "images/goods-img/myHeroAcademic/halfColdHalfBurning/halfColdHalfBurning2.png"
        ],
        description: ` <p>同時掌握冰與火的力量，一邊擁有強大的冰凍能力，能夠迅速降低周圍溫度，製造冰塊或凍結物體；一邊則具備火焰能力，能夠釋放高溫火焰，進行攻擊或加熱。這種能力使您在戰鬥中具備極高的靈活性和多樣性。</p>

                        <p><strong>特點：</strong></p>
                        <ul>
                            <li><strong>冰凍能力：</strong>
                            <ul>
                                <li>快速降低周圍溫度，製造冰塊或凍結物體。</li>
                                <li>可用於防禦、控制敵人或創造冰牆。</li>
                            </ul>
                            </li>
                            <li><strong>火焰能力：</strong>
                            <ul>
                                <li>釋放高溫火焰，進行攻擊或加熱。</li>
                                <li>可用於遠距離攻擊、照明或熔化物體。</li>
                            </ul>
                            </li>
                        </ul>
                            
                        <p><strong>注意事項：</strong></p>
                        <ul>
                            <li><strong>能量消耗：</strong>使用冰與火的能力會消耗大量能量，需適度使用以避免過度疲勞。</li>
                            <li><strong>控制難度：</strong>初學者可能難以同時控制兩種能力，建議循序漸進地練習。</li>
                            <li><strong>環境影響：</strong>在極端高溫或低溫環境中，能力的效果可能會受到影響。</li>
                        </ul>  
                    </p>`,
        reviews: `<p><strong>陳美琪</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：非常棒的商品，賣家很用心，會回購。</p>
                        <p><strong>張建中</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：賣家的服務非常棒，商品質量也讓人滿意。</p>
                        <p><strong>黃志遠</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：物流快速，商品質量一流，非常滿意的一次購物！</p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "零重力",
        price: "$60,000",
        bigImg: "images/goods-img/myHeroAcademic/zeroG/zeroG1.png",
        smallImgs: [
            "images/goods-img/myHeroAcademic/zeroG/zeroG1.png",
            "images/goods-img/myHeroAcademic/zeroG/zeroG2.png"
        ],
        description: `<p>想讓物體脫離地心引力、自己輕盈飄浮？「零重力」賦予您解除物體重量的超能力！只需輕輕一觸，便能讓物體漂浮於空中。</p>
                        
                        <p><strong>特點：</strong></p>
                        <ul>
                          <li><strong>觸碰啟動：</strong>只要輕觸物體，即可使其進入零重力狀態，輕鬆漂浮在空中。</li>
                          <li><strong>重量限制：</strong>可操控物體的最大重量為3噸，讓日常操作與重物處理都更加簡單。</li>
                          <li><strong>精準控制：</strong>可藉由手勢或集中念力來調整漂浮高度與方向，實現精細操作。</li>
                        </ul>
                        
                        <p><strong>注意事項：</strong></p>
                        <ul>
                          <li><strong>時間限制：</strong>長時間保持零重力狀態可能導致體力消耗，需適時休息。</li>
                          <li><strong>重力恢復：</strong>解除能力後，物體將立刻恢復原有重力，請注意安全操作。</li>
                        </ul>     `,
        reviews: `<p><strong>張小紅</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：商品質量一流，賣家也很用心，五星好評。</p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "雷射",
        price: "$50,000",
        bigImg: "images/goods-img/xmen/laser/laser1.jpg",
        smallImgs: [
            "images/goods-img/xmen/laser/laser1.jpg",
            "images/goods-img/xmen/laser/laser2.png"
        ],
        description: `<p>獲得雷射眼的標誌性能力，從雙眼發射強力紅色光束，能量足以摧毀障礙物或擊退敵人。</p>
                        
                        <p><strong>特點</strong></p>
                        <ul>
                          <li><strong>強大破壞力：</strong>光束可輕易穿透堅硬物質。</li>
                          <li><strong>持續發射：</strong>只要睜眼，光束便會持續發射，提供穩定的攻擊手段。</li>
                        </ul>
                        
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li><strong>需佩戴特製眼鏡或頭盔以控制光束：</strong>避免無意中造成破壞。</li>
                          <li><strong>使用時請確保周圍環境安全：</strong>避免對無辜人員和財產造成損害。</li>
                        </ul>`,
        reviews: `<p>尚無評價......</p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "鋼鐵化",
        price: "$55,000",
        bigImg: "images/goods-img/xmen/steel/steel1.png",
        smallImgs: [
            "images/goods-img/xmen/steel/steel1.png",
            "images/goods-img/xmen/steel/steel2.jpg"
        ],
        description: `<p>可將自身皮膚瞬間轉化為堅硬的鋼鐵，提供強大的防護力，同時增強力量與耐久度。</p>
                        
                        <p><strong>特點</strong></p>
                        <ul>
                          <li><strong>瞬間轉化：</strong>可在短時間內將皮膚變為鋼鐵，應對突發危險。</li>
                          <li><strong>增強力量：</strong>鋼鐵化後，力量大幅提升，能輕鬆舉起重物或進行強力攻擊。</li>
                          <li><strong>高耐久度：</strong>抵禦物理攻擊，如刀劍、子彈等，提供全方位保護。</li>
                        </ul>
                        
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li><strong>靈活性降低：</strong>鋼鐵化可能影響關節靈活度，需適應以保持行動自如。</li>
                          <li><strong>能量消耗：</strong>長時間維持鋼鐵狀態會消耗大量體力，建議在必要時使用。</li>
                          <li><strong>電磁影響：</strong>鋼鐵形態可能受到強磁場影響，使用時應避免接近強磁環境。</li>
                        </ul>`,
        reviews: `<p>尚無評價......</p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "心電感應",
        price: "$80,000",
        bigImg: "images/goods-img/xmen/telepathy/telepathy1.jpg",
        smallImgs: [
            "images/goods-img/xmen/telepathy/telepathy2.png",
            "images/goods-img/xmen/telepathy/telepathy3.jpg"
        ],
        description: `<p>使用者可以直接讀取他人思想、感知情感，甚至進行心靈交流，最遠能夠與百英里之外的人進行交流。</p>
                        
                        <p><strong>特點</strong></p>
                        <ul>
                          <li><strong>思想讀取：</strong>能夠讀取他人內心想法，了解其真實意圖。</li>
                          <li><strong>情感感知：</strong>感知周圍人的情緒波動，洞察他人情感狀態。</li>
                          <li><strong>心靈交流：</strong>無需語言，即可與他人進行心靈對話，實現無聲溝通。</li>
                          <li><strong>心靈屏障：</strong>可建立心靈屏障，保護自身免受其他心靈感應者的侵擾。</li>
                        </ul>
                        
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li><strong>精神負荷：</strong>長時間使用心電感應可能對精神造成負擔，建議適度使用並定期休息。</li>
                        </ul>
                        
                    </p>`,
        reviews: `<p><strong>周大敏</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：非常棒的商品，超過我的期待，物流也很快！</p>
                        <p><strong>林志豪</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：商品精美，物流快速，整體購物體驗很好。</p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "超高速移動",
        price: "$20,000",
        bigImg: "images/goods-img/TeacherSha/ultraFast1.png",
        smallImgs: [
            "images/goods-img/TeacherSha/ultraFast1.png",
            "images/goods-img/TeacherSha/ultraFast2.png"
        ],
        description: `<p>解鎖超越人類極限的速度！來自超生物殺老師的專屬技能，讓您以每秒20馬赫的速度移動，瞬間抵達世界任一角落。無論是閃避敵人、追逐目標，還是單純趕不上班，這項能力都能滿足您的所有需求！</p>
                        <p><strong>特點</strong></p>
                        <ul>
                          <li>瞬間移動速度高達音速20倍。</li>
                          <li>動態視覺增強，移動中依然能掌控全局。</li>
                          <li>配備閃避模式，可輕鬆躲掉任何障礙物。</li>
                          <li>操作簡單，零基礎也能快速上手！</li>
                          <li>適用於通勤、旅行、逃命等。</li>
                        </ul>
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li>初次使用建議進行短距離測試，避免速度過快導致暈眩或迷路。</li>
                          <li>購買即贈「超速專屬導航系統」，保證不會迷失方向！</li>
                        </ul>`,
        reviews: `<p><strong>黃國峰</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：物流速度很快，但沒現在的我快，值得給高分</p>`,
        shipping: `<p>☑大法師配送<br>☑夢境配送</p>`
    },
    {
        title: "催眠筆記本",
        price: "$300,000",
        bigImg: "images/goods-img/deathNote/deathNote1.jpg",
        smallImgs: [
            "images/goods-img/deathNote/deathNote1.jpg",
            "images/goods-img/deathNote/deathNote2.jpg"
        ],
        description: `<p>這是一本擁有神秘力量的筆記本，僅需寫下目標的姓名並清晰記得對方的長相，便能讓對方瞬間陷入深度睡眠。無論是在鬧市喧囂中還是激烈爭執時，這本筆記本都能讓場面迅速安靜下來。</p>
                        
                        <p><strong>特點</strong></p>
                        <ul>
                          <li><strong>即時效果：</strong>寫下目標姓名後，對方會在40秒內安靜入睡，宛如進入甜美夢鄉。</li>
                          <li><strong>持續時間：</strong>每次催眠效果持續3小時。</li>
                          <li><strong>自定義夢境：</strong>在寫名字時，添加一行夢境描述，可讓目標在睡眠中體驗您指定的夢境場景。</li>
                        </ul>
                        
                        <p><strong>注意事項</strong></p>
                        <ul>
                          <li><strong>需清楚目標形象：</strong>使用筆記本前，需對目標的樣貌有清晰記憶，否則無法生效。</li>
                          <li><strong>多次使用間隔：</strong>對同一目標的多次催眠需間隔24小時。</li>
                        </ul>`,
        reviews: `<p><strong>王小明</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★☆ | 物流服務：★★★★★<br>
                            評價：商品很棒，質感不錯。物流非常快，很滿意。</p>
                        <p><strong>陳芳芳</strong><br>
                            商品評價：★★★★☆ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：雖然價格略高，但質量很優秀，值得入手！</p>
                        <p><strong>黃國峰</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：品質非常好，物流超快，賣家服務也很棒！</p>
                        <lp><strong>林書豪</strong><br>
                            商品評價：★★★★★ | 賣家服務：★★★★★ | 物流服務：★★★★★<br>
                            評價：超值的商品！各方面都令人滿意，五星推薦！</p>`,
        shipping: `<p>☑大法師配送<br>☐夢境配送</p>`
    },
];


function openInfro(index) {
    const data = goodsData[index];

    document.getElementById('bigimg').src = data.bigImg;
    const smallImgContainer = document.getElementById('smallimg');
    smallImgContainer.innerHTML = data.smallImgs.map(img => `<img src="${img}" alt="縮略圖">`).join('');

    document.getElementById('title').innerText = data.title;
    document.getElementById('price').innerText = data.price;
    document.getElementById('description').innerHTML = data.description;
    document.getElementById('reviews').innerHTML = data.reviews;
    document.getElementById('shipping').innerHTML = data.shipping;

    document.getElementById('Infro').style.display = 'flex';
}

function closeInfro() {
    document.getElementById('Infro').style.display = 'none';
}
