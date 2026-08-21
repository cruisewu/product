(function () {
  const nav = {
    citizen: [["citizen","今日總覽"],["citizen-running","路跑"],["citizen-fitness","體適能"],["citizen-cycling","自行車"],["citizen-badminton","羽球"],["citizen-events","賽事中心"]],
    athlete: [["athlete","選手總覽"],["athlete-performance","競技表現"],["athlete-recovery","恢復風險"],["athlete-ai","AI 教練"]],
    venue: [["venues","搜尋場館"],["venue-detail","場館詳情"],["venue-partner","業者後台"]]
  };

  const pages = {
    "citizen-running": ["citizen","路跑日誌","配速、距離與賽事成績，用最容易懂的方式呈現","本月已跑 42.8 公里","86",[["本週距離","18.6 km","多 2.4 km"],["平均配速","5'42\"","穩定進步"],["最長距離","12.4 km","本月最佳"],["跑步次數","4 次","達成目標"]],[45,62,38,78,55,88,70],"週末可安排 8–10 公里輕鬆跑；速度以能說完整句子為準。",[["臺北城市路跑 10K","56:18","個人最佳"],["河濱晨跑","8.2 km","輕鬆完成"],["陽明山挑戰","12.4 km","爬升 420 m"]]],
    "citizen-fitness": ["citizen","體適能日誌","不用懂專有名詞，也能看懂身體現在的狀態","體能年齡比實際年齡年輕 4 歲","82",[["心肺耐力","很好","同齡前 25%"],["肌力狀態","普通","每週練 2 次"],["柔軟度","良好","維持伸展"],["身體組成","標準","近月穩定"]],[58,64,61,70,74,78,82],"本週做兩次 20 分鐘肌力：深蹲、推牆伏地挺身與棒式，各做 2 組即可。",[["三分鐘登階","良好","進步 8%"],["一分鐘仰臥起坐","32 次","普通"],["坐姿體前彎","29 cm","良好"]]],
    "citizen-cycling": ["citizen","自行車日誌","把里程、爬升與騎乘路線變成看得懂的成就","今年累積 326 公里","78",[["本月里程","86 km","目標 100 km"],["騎乘時間","4.8 小時","共 5 趟"],["累積爬升","1,280 m","像爬 4 座 101"],["平均速度","22.6 km/h","舒適節奏"]],[32,48,70,41,82,65,74],"下一趟建議選平緩路線騎 60 分鐘；每 20 分鐘喝幾口水。",[["北海岸挑戰","68 km","順利完賽"],["淡水河濱","35 km","最佳均速"],["八里左岸","26 km","輕鬆騎"]]],
    "citizen-badminton": ["citizen","羽球日誌","用場次、時間與對戰結果掌握你的球場進步","本月已打 7 場","80",[["上場時間","8.6 小時","本月累積"],["對戰成績","11 勝 7 負","勝率 61%"],["最長回合","34 拍","本月最佳"],["活動熱量","2,840 kcal","約 9 碗飯"]],[55,72,68,84,63,78,88],"下次打球前先做 5 分鐘側向移動；每局之間補水，第三局比較不會掉速。",[["社區交流賽","8 強","3 勝 1 負"],["週三雙打","2:1","穩定發揮"],["週末單打","1:2","後段疲勞"]]],
    "citizen-events": ["citizen","我的賽事中心","所有報名、完賽、成績與徽章集中在一頁","今年完成 8 場活動","8",[["完賽率","100%","全部完成"],["個人最佳","3 次","持續突破"],["累積里程","284 km","跨四項運動"],["下一場","12 天","城市路跑"]],[20,40,35,60,58,76,92],"下一場 10K 倒數 12 天；本週維持節奏，下週減少總里程並把睡眠放第一。",[["臺北城市路跑","2026/07/12","56:18"],["北海岸自行車挑戰","2026/05/24","3:12:40"],["國民體適能檢測","2026/04/18","銀質"],["社區羽球交流賽","2026/03/08","8 強"]]],
    "athlete-performance": ["athlete","競技表現分析","訓練負荷、速度、力量與技術效率的進階監測","競技狀態指數 84","84",[["ACWR","1.18","安全區間"],["CMJ","42.6 cm","基準 −5.8%"],["VO₂max","58.2","優秀"],["技術效率","87%","近月 +3%"]],[58,66,72,69,83,78,88],"AI：局部神經肌肉疲勞可能影響第一步啟動與連續起跳；高衝擊量建議減少 20%。",[["CMJ 跳躍高度","−5.8%","影響爆發"],["急慢性負荷比","1.18","刺激合理"],["技術成功率","+3.0%","持續提升"]]],
    "athlete-recovery": ["athlete","恢復與風險監測","整合自律神經、睡眠、主觀疲勞與動作不對稱","恢復分數 76","76",[["HRV","68 ms","基準 +4.6%"],["睡眠效率","91%","恢復良好"],["主觀疲勞","3.2 / 10","低度疲勞"],["右側衝擊","+11%","需要留意"]],[70,76,72,82,79,74,76],"AI：HRV 與睡眠支持正常訓練；右側衝擊偏高可能增加變向時膝踝壓力。",[["自律神經","良好","主課表可維持"],["神經肌肉","偏低","爆發量減一組"],["動作對稱","留意","檢查右側落地"]]],
    "athlete-ai": ["athlete","AI 教練決策中心","把進階指標翻成證據、判讀、影響與可執行行動","整體維持、局部降量","AI",[["資料來源","18 項","完成同步"],["高優先訊號","2 項","CMJ、右側衝擊"],["可信程度","中高","依個人基準"],["建議回顧","明早","重新評估"]],[82,78,86,72,84,77,80],"證據：CMJ −5.8%、右側衝擊 +11%、HRV +4.6%。影響：啟動、連續起跳與右側變向。行動：高強度多球減一組。",[["數據證據","CMJ −5.8%","局部爆發下降"],["表現影響","右側衝擊 +11%","膝踝壓力上升"],["教練行動","高衝擊量 −20%","保留技術有氧"]]],
    "venues": ["venue","運動場館預約","像訂房一樣，依地點、運動與時段找到適合場地","附近 128 個可預約場地","128",[["台北市","54 間","最多選擇"],["今日可訂","86 間","即時空檔"],["平均評分","4.7","12,840 則"],["最低價格","NT$ 280","每小時"]],[80,58,72,94,88,76,91],"推薦：港灣運動中心今晚 19:00 尚有羽球場，評分 4.8，距離 2.1 公里。",[["港灣運動中心","羽球・籃球","NT$ 420 起"],["市民游泳館","泳池・三溫暖","NT$ 180 起"],["河濱單車基地","單車・淋浴","NT$ 280 起"],["城市田徑場","跑道・健身","NT$ 120 起"]]],
    "venue-detail": ["venue","港灣運動中心","台北市南港區・評分 4.8・即時確認","今晚 19:00 可預約","4.8",[["羽球場","8 面","木地板"],["可訂時段","12 個","今日"],["交通","捷運 6 分","步行"],["取消政策","24 小時","前免費"]],[28,42,68,96,92,80,55],"預約摘要：2026/08/22 19:00–20:00，羽球第 3 場，場租 NT$ 420。",[["18:00–19:00","剩 2 面","NT$ 420"],["19:00–20:00","剩 1 面","NT$ 420"],["20:00–21:00","已額滿","—"],["21:00–22:00","剩 4 面","NT$ 360"]]],
    "venue-partner": ["venue","場館業者營運後台","上架場館、管理時段、彈性定價與追蹤收益","本月營收 NT$ 486,200","82%",[["訂單數","1,284","本月 +9.2%"],["平均入住率","82%","尖峰 96%"],["取消率","4.1%","低於同業"],["顧客評分","4.8","優良"]],[45,58,62,76,84,91,88],"營運 AI：週二 13–16 時使用率僅 38%，建議離峰 85 折；週五晚間可提高 8% 價格。",[["羽球第 1–4 場","已上架","入住率 88%"],["羽球第 5–8 場","已上架","入住率 81%"],["多功能教室","草稿","待補照片"],["籃球全場","暫停","設備保養"]]]
  };

  function navHtml(group, current) {
    return nav[group].map(function (item) {
      return '<a class="' + (item[0] === current ? "on" : "") + '" data-go="' + item[0] + '">' + item[1] + '</a>';
    }).join("");
  }

  function addPage(id, p) {
    const section = document.createElement("section");
    section.className = "view app-view generated-view";
    section.dataset.view = id;
    const metrics = p[5].map(function (m, i) {
      return '<article class="' + (i === 1 ? "orange" : i === 2 ? "green" : i === 3 ? "sky" : "") + '"><small>' + m[0] + '</small><b>' + m[1] + '</b><span>' + m[2] + '</span></article>';
    }).join("");
    const bars = p[6].map(function (v, i) {
      return '<i class="' + (i === 6 ? "latest" : "") + '" style="height:' + v + '%"><span>' + v + '</span></i>';
    }).join("");
    const rows = p[8].map(function (r) {
      return '<div><b>' + r[0] + '</b><span>' + r[1] + '</span><strong>' + r[2] + '</strong></div>';
    }).join("");
    const aiFormat = p[0] === "athlete" ? '<section class="generated-ai"><small>AI 分析格式</small><div><article><b>01 數據證據</b><p>偏離個人基準的指標。</p></article><article><b>02 綜合判讀</b><p>全身或局部疲勞。</p></article><article><b>03 表現影響</b><p>速度、力量與風險。</p></article><article><b>04 教練行動</b><p>課量與再次檢測。</p></article></div><p>AI 僅供決策支援，不取代教練專業或醫療診斷。</p></section>' : "";
    const switcher = p[0] === "citizen" ? '<button class="switch" data-go="athlete">切換專業版</button>' : p[0] === "athlete" ? '<button class="switch" data-go="citizen">切換全民版</button>' : '<button class="switch" data-go="venue-partner">我是場館業者</button>';
    section.innerHTML = '<aside class="side ' + (p[0] === "athlete" ? "pro-side" : p[0] === "venue" ? "venue-side" : "") + '"><button class="brand" data-go="landing"><span class="brand-bars"><i></i><i></i><i></i></span><span><b>運動數據平台</b><small>' + (p[0] === "citizen" ? "全民版" : p[0] === "athlete" ? "競技版" : "場館服務") + '</small></span></button><nav>' + navHtml(p[0], id) + '</nav>' + switcher + '</aside><main class="app-main"><header class="app-top"><div><h1>' + p[1] + '</h1><p>' + p[2] + '</p></div><button class="profile">吳</button></header><div class="content"><section class="generated-hero ' + p[0] + '"><div><small>DASHBOARD OVERVIEW</small><h2>' + p[3] + '</h2><p>' + p[2] + '</p></div><div class="generated-score"><b>' + p[4] + '</b><span>目前狀態</span></div></section><section class="kpis">' + metrics + '</section><section class="grid two-one"><article class="panel"><header><div><small>DATA TREND</small><h2>近期趨勢 Dashboard</h2></div><button>近 7 期⌄</button></header><div class="generated-bars">' + bars + '</div><div class="generated-days"><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>日</span></div></article><article class="panel generated-advice ' + p[0] + '"><header><div><small>SMART INSIGHT</small><h2>' + (p[0] === "athlete" ? "LLM AI 教練分析" : p[0] === "venue" ? "平台智慧建議" : "本週白話建議") + '</h2></div></header><p>' + p[7] + '</p><button>查看完整分析 →</button></article></section><section class="panel generated-table"><header><div><small>DETAIL RECORDS</small><h2>詳細紀錄與狀態</h2></div><button>匯出資料</button></header><div class="generated-row head"><span>項目</span><span>紀錄／狀態</span><span>結果／影響</span></div>' + rows + '</section>' + aiFormat + '</div></main>';
    document.body.insertBefore(section, document.querySelector("script"));
  }

  Object.keys(pages).forEach(function (id) { addPage(id, pages[id]); });
  const views = Array.from(document.querySelectorAll("[data-view]"));
  const valid = new Set(["landing","citizen","athlete"].concat(Object.keys(pages)));
  function show(name, updateHash) {
    const next = valid.has(name) ? name : "landing";
    views.forEach(function (view) { view.classList.toggle("active", view.dataset.view === next); });
    document.title = next === "landing" ? "臺灣運動數據平台" : pages[next] ? pages[next][1] : next === "citizen" ? "全民運動日誌" : "教練選手運動日誌";
    if (updateHash) history.pushState(null, "", next === "landing" ? "#home" : "#" + next);
    window.scrollTo({top: 0, behavior: "smooth"});
  }
  document.addEventListener("click", function (event) {
    const trigger = event.target.closest("[data-go]");
    if (!trigger) return;
    event.preventDefault();
    show(trigger.dataset.go, true);
  });
  window.addEventListener("hashchange", function () {
    const name = location.hash.replace("#", "");
    show(name === "home" ? "landing" : name, false);
  });
  const initial = location.hash.replace("#", "");
  show(initial === "home" || !initial ? "landing" : initial, false);
})();
