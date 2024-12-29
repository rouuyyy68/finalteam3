let keyword = document.querySelector('.keyword');
let searchblew = document.querySelector('.searchblew');

//所有商品用陣列存取
let searchArr = ['天使的自動筆記','攜帶他人的命運','鎖鏈','念系縫合','瘋狂小丑','暗黑鬼婦神','分身','伸縮自在的愛',
    '四次元公寓','輕薄的假象','神的不在場證明&神的共犯','神的左手惡魔的右手','寂寞深海魚','魔法美容師',
    '旋律','猜猜拳','凸眼魚','紫煙機兵隊','讀取記憶&記憶念彈','迴天','麟粉乃愛泉','超破壞拳',
    '神速','天上不知唯我獨損','盜賊的極意','玩具修理者','轉校生','雙手機關槍','180分的戀愛奴隷','爆破',
    '半冷半燃','零重力','雷射','鋼鐵化','心電感應','超高速移動','催眠筆記本'];

let anchorLinks = {
    '天使的自動筆記': '#hunter',
    '攜帶他人的命運': '#section-fate',
    '鎖鏈': '#section-chain',
    '念系縫合': '#section-stitch',
        // ... 為每個商品設置對應的錨點
};

keyword.oninput = function() {
    searchblew.innerHTML = '';
    if (keyword.value.trim() === '') {
        searchblew.style.display = 'none';
        return;
    }

    let found = false;
    for (let i = 0; i < searchArr.length; i++) {
        if (searchArr[i].indexOf(keyword.value) !== -1) {
            searchblew.innerHTML += `<p>${searchArr[i]}</p>`;
            found = true;
        }
    }
    searchblew.style.display = found ? 'block' : 'none';
};

// 滑鼠失焦
keyword.onblur = function() {
    searchblew.style.display = 'none';
};

searchblew.addEventListener('click', function(e) {
    if (e.target.tagName === 'P') {
        keyword.value = e.target.textContent;
        searchblew.style.display = 'none';
    }
});

searchblew.addEventListener('click', function (e) {
    if (e.target.tagName === 'P') {
        const selectedText = e.target.textContent;

        // 跳轉到對應的錨點
        if (anchorLinks[selectedText]) {
            window.location.href = anchorLinks[selectedText];
        } else {
            alert('沒有對應的錨點');
        }

        keyword.value = selectedText;
        searchblew.style.display = 'none';
    }
});
