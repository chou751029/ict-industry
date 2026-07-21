const OVERSEAS_COLOR = "#b2591f";
const NEWS_COLOR = "#1f6f5c";

const SOURCE_LABELS = {
  official: "企業官網",
  industry: "產業新聞",
  report: "報告法令"
};

const MARKET_LABELS = {
  domestic: "國內",
  foreign: "國外"
};

function buildTrackedCompany(config) {
  return {
    id: config.id,
    name: config.name,
    english: config.english,
    role: config.role,
    shortName: config.shortName || config.name.replace("股份有限公司", "").replace("控股", "").replace("集團", ""),
    updated: "2026-07-21",
    built: true,
    timeline: config.timeline || [],
    monthlyAnalysis: config.monthlyAnalysis,
    profile: config.profile,
    technology: config.technology,
    partners: config.partners,
    sites: { items: config.sites },
    newSites: { items: config.newSites }
  };
}

const companyBacklog = [
  {
    id: "acbel",
    name: "康舒科技股份有限公司",
    english: "AcBel Polytech",
    role: "電源供應器、電源轉換、智慧能源；歐洲控股與 OmniOn Power 相關業務",
    monthlyAnalysis: "第一版以歐洲電源供應鏈與智慧能源布局為主軸。康舒需持續追蹤歐洲子公司、OmniOn Power 相關業務整合、商標與專利授權，以及高階電源營運是否轉化為在地研發、服務或製造需求。",
    profile: { title: "電源與智慧能源供應商", body: "康舒以電源供應器、電源轉換與智慧能源應用為核心，適合作為資料中心、通訊電源、工業電源與新能源基礎設施需求的觀察標的。", tags: ["電源供應器", "智慧能源", "通訊電源"] },
    technology: { title: "高階電源與能源轉換", body: "重點技術節點包含電源轉換、通訊電源、伺服器/資料中心電源、能源管理與相關智慧財產權布局。", tags: ["電源轉換", "資料中心電源", "能源管理"] },
    partners: { title: "OmniOn Power 與歐洲營運節點", body: "需追蹤 OmniOn Power Technology GmbH、歐洲子公司與地方招商/能源基礎設施合作關係。", tags: ["OmniOn Power", "歐洲控股", "IP 授權"] },
    sites: [{ location: "台灣", role: "總部 / 研發與管理" }, { location: "德國", role: "歐洲控股與電源業務節點" }],
    newSites: [{ location: "德國 / 歐洲", rationale: "高階電源與智慧財產權營運可能帶動在地服務、測試或組裝需求。", status: "觀察中" }]
  },
  {
    id: "inventec",
    name: "英業達股份有限公司",
    english: "Inventec",
    role: "伺服器、雲端設備、電子代工；捷克 Brno 新廠",
    monthlyAnalysis: "第一版聚焦捷克 Brno 伺服器與雲端設備在地化。後續每日新聞需抓取 AI 伺服器、資料中心客戶、歐洲供應鏈韌性與捷克廠擴產訊號。",
    profile: { title: "雲端與伺服器代工重點業者", body: "英業達是伺服器、雲端設備與電子代工供應鏈重要廠商，歐洲布局與資料中心需求密切相關。", tags: ["伺服器", "雲端設備", "ODM"] },
    technology: { title: "伺服器與雲端設備製造", body: "重點觀察 AI 伺服器、一般伺服器、雲端設備、系統組裝與歐洲在地供應鏈配置。", tags: ["AI Server", "Cloud", "系統組裝"] },
    partners: { title: "雲端與資料中心客戶", body: "合作節點以歐美雲端、伺服器與資料中心客戶為主，需由新聞與法說會逐步拆解。", tags: ["資料中心", "雲端客戶", "捷克供應鏈"] },
    sites: [{ location: "台灣", role: "總部 / 研發管理" }, { location: "捷克 Brno", role: "歐洲伺服器與電子代工製造" }],
    newSites: [{ location: "捷克 Brno（延伸）", rationale: "伺服器與雲端客戶在地化需求提升，需追蹤新廠投產後產能利用與擴產。", status: "觀察中" }]
  },
  {
    id: "liteon",
    name: "光寶科技股份有限公司",
    english: "Lite-On Technology",
    role: "電源、車用充電、雲端電源、醫療器材；歐洲分公司與銷售網絡",
    monthlyAnalysis: "第一版以歐洲電源、EV 充電、雲端電源與醫療器材產品認證為重點。後續需追蹤歐盟 CE 認證、通路服務、車用充電與資料中心電源訂單。",
    timeline: [
      {
        date: "2026-07-13",
        tag: "海外設廠",
        overseas: true,
        source: "official",
        sourceCategory: "official",
        market: "foreign",
        title: "光寶科技投資 US$9.19 億美元於德州麥金尼設立營運與製造基地",
        link: "https://www.liteon.com/zh-tw/news/press-center/content/liteon-mckinney-investment",
        linkLabel: "LITEON 官方新聞中心"
      },
      {
        date: "2026-07-09",
        tag: "營收",
        overseas: false,
        source: "official",
        sourceCategory: "official",
        market: "domestic",
        title: "光寶科技六月份全球合併營收 NT$187 億元，AI 與雲端高階伺服器電源需求強勁",
        link: "https://www.liteon.com/zh-tw/news/press-center/content/liteon-monthly-sales-june-2026",
        linkLabel: "LITEON 官方新聞中心"
      }
    ],
    profile: { title: "電源與光電電子解決方案業者", body: "光寶產品涵蓋電源、雲端運算電源、車用充電與醫療器材，歐洲市場具產品認證與服務網絡需求。", tags: ["電源", "EV 充電", "醫療器材"] },
    technology: { title: "雲端電源與車用充電", body: "重點技術包含雲端電源、EV 充電樁、醫療器材電源、工業用電源與能源效率設計。", tags: ["Cloud Power", "EV Charger", "CE 認證"] },
    partners: { title: "歐洲客戶與通路服務網絡", body: "需追蹤歐洲客戶、車用充電營運商、醫療設備客戶與當地服務夥伴。", tags: ["歐洲通路", "車用充電", "醫療設備"] },
    sites: [{ location: "台灣", role: "總部 / 研發管理" }, { location: "歐洲", role: "分公司與銷售服務網絡" }],
    newSites: [{ location: "歐洲主要市場", rationale: "EV 充電與雲端電源需求可能推動在地測試、維修、倉儲與服務據點。", status: "評估中" }]
  },
  {
    id: "teco",
    name: "東元電機股份有限公司",
    english: "TECO Electric & Machinery",
    role: "馬達、電力設備、智慧電網、綠能設備；德國、義大利、烏克蘭布局",
    monthlyAnalysis: "第一版聚焦歐洲電網升級、烏克蘭戰後重建與高效能能源設備。後續新聞需標註是否涉及政府工程、電力基建、綠能與智慧電網。",
    timeline: [
      {
        date: "2026-07-15",
        tag: "日本布局",
        overseas: true,
        source: "official",
        sourceCategory: "official",
        market: "foreign",
        title: "東元攜智慧動力解決方案前進日本，TJM Series 機器人關節模組亮相",
        link: "https://www.teco.com.tw/zh-tw/press/news/dong-yuan-xie-zhi-hui-dong-li-jie-jue-fang-an-qian-jin-ri-ben-TJM-Series-quan-ji-lie-ji-qi-ren-guan-jie-mo-zu-shou-du-wan-zheng-liang-xiang",
        linkLabel: "TECO 官方新聞"
      },
      {
        date: "2026-07-14",
        tag: "AIDC基建",
        overseas: true,
        source: "official",
        sourceCategory: "official",
        market: "foreign",
        title: "東元 115 年股東常會：積極佈局 AIDC 基建商機，衝高北美及東南亞營收",
        link: "https://tecoie.teco.com.tw/page/462",
        linkLabel: "TECO 電力能源網"
      }
    ],
    profile: { title: "電機、馬達與電力工程業者", body: "東元以馬達、電力設備、智慧電網與綠能相關解決方案為核心，適合追蹤歐洲基礎建設與能源轉型商機。", tags: ["馬達", "電力設備", "智慧電網"] },
    technology: { title: "高效能馬達與電網設備", body: "重點技術包括高效馬達、電力設備、智慧電網、能源管理與綠能設備。", tags: ["高效馬達", "電網", "綠能"] },
    partners: { title: "歐洲能源與基建合作節點", body: "需追蹤德國、義大利、烏克蘭當地電力工程、能源公司、政府採購與園區基建夥伴。", tags: ["德國", "義大利", "烏克蘭"] },
    sites: [{ location: "台灣", role: "總部 / 電機製造" }, { location: "德國", role: "歐洲業務與技術據點" }, { location: "義大利", role: "歐洲業務節點" }, { location: "烏克蘭", role: "重建與電力基建觀察市場" }],
    newSites: [{ location: "烏克蘭 / 中東歐", rationale: "戰後重建、電網升級與能源設備需求可能形成在地合作或服務據點。", status: "觀察中" }]
  },
  {
    id: "merry",
    name: "美律實業股份有限公司",
    english: "Merry Electronics",
    role: "聲學元件、揚聲器、耳機、音訊產品；挪威 SEAS 相關布局",
    monthlyAnalysis: "第一版聚焦挪威 SEAS 聲學技術與歐洲高階揚聲器市場。後續應追蹤研發人才、品牌/技術整合與歐洲製造或服務是否擴張。",
    profile: { title: "聲學元件與音訊產品供應商", body: "美律以聲學元件、耳機、揚聲器與音訊模組為核心，歐洲布局偏向高階聲學技術與品牌製造能力。", tags: ["聲學", "揚聲器", "耳機"] },
    technology: { title: "聲學設計與揚聲器製造", body: "重點包含高階揚聲器、耳機模組、聲學設計、材料與音訊產品量產能力。", tags: ["Acoustics", "Speaker", "Audio"] },
    partners: { title: "SEAS Fabrikker 與歐洲聲學節點", body: "需追蹤 SEAS 相關技術、品牌、研發與挪威在地團隊延伸合作。", tags: ["SEAS", "挪威", "高階聲學"] },
    sites: [{ location: "台灣", role: "總部 / 管理與研發" }, { location: "挪威", role: "聲學技術與製造節點" }],
    newSites: [{ location: "挪威 / 歐洲", rationale: "高階聲學技術可作為歐洲研發與客戶服務節點。", status: "觀察中" }]
  },
  {
    id: "usi",
    name: "環鴻科技股份有限公司",
    english: "Universal Scientific Industrial / USI",
    role: "EMS、電子製造服務、車用與工業電子；法國、波蘭、德國、英國據點",
    monthlyAnalysis: "第一版以 Asteelflash 收購後歐洲 EMS 製造服務網絡為主。需每日追蹤法國、波蘭、德國、英國等地的在地製造、車用電子與工業電子訂單。",
    profile: { title: "全球 EMS 與 SiP 製造服務業者", body: "環鴻科技具電子製造服務能力，歐洲據點可支援車用、工業、通訊與消費電子客戶在地化。", tags: ["EMS", "車用電子", "工業電子"] },
    technology: { title: "電子製造服務與系統模組", body: "重點技術包含 EMS、SiP/模組製造、車用電子、工業電子與區域製造服務。", tags: ["EMS", "SiP", "模組製造"] },
    partners: { title: "Asteelflash 與歐洲客戶群", body: "Asteelflash 為歐洲在地製造與客戶服務的重要節點，需追蹤整合後客戶與產能配置。", tags: ["Asteelflash", "法國", "波蘭"] },
    sites: [{ location: "台灣", role: "管理與製造節點" }, { location: "法國", role: "歐洲 EMS 核心市場" }, { location: "波蘭", role: "歐洲製造據點" }, { location: "德國", role: "歐洲客戶服務" }, { location: "英國", role: "歐洲客戶服務" }],
    newSites: [{ location: "波蘭 / 法國", rationale: "歐洲車用與工業電子在地製造需求提升，適合追蹤擴產與客戶轉單。", status: "觀察中" }]
  },
  {
    id: "delta",
    name: "台達電子工業股份有限公司",
    english: "Delta Electronics",
    role: "電源、電力電子、通訊電源、EV 充電、工業自動化；荷蘭、斯洛伐克、德國布局",
    monthlyAnalysis: "第一版聚焦歐洲電力/通訊電源、EV 充電與工業自動化。後續需追蹤 Eltek 等電源品牌整合、資料中心電源與電動車充電基建。",
    profile: { title: "電源與工業自動化全球供應商", body: "台達在電源、電力電子、EV 充電與工業自動化領域具全球布局，歐洲為能源轉型與製造自動化重點市場。", tags: ["電源", "EV 充電", "工業自動化"] },
    technology: { title: "電力電子與自動化解決方案", body: "重點包含電源轉換、通訊電源、EV 充電、資料中心電源、工業自動化與能源管理。", tags: ["Power Electronics", "EVSE", "Automation"] },
    partners: { title: "Eltek 與歐洲能源客戶", body: "需追蹤 Eltek、歐洲電力/通訊電源客戶、車用充電營運商與自動化系統夥伴。", tags: ["Eltek", "荷蘭", "斯洛伐克"] },
    sites: [{ location: "台灣", role: "總部 / 研發與製造" }, { location: "荷蘭", role: "歐洲總部" }, { location: "斯洛伐克", role: "大型生產基地" }, { location: "德國", role: "自動化與研發節點" }],
    newSites: [{ location: "斯洛伐克 / 德國", rationale: "EV 充電、資料中心電源與工業自動化需求可能帶動產線擴充。", status: "觀察中" }]
  },
  {
    id: "compal",
    name: "仁寶電腦工業股份有限公司",
    english: "Compal Electronics",
    role: "電腦代工、車用電子、電子控制單元；波蘭車用電子廠",
    monthlyAnalysis: "第一版聚焦波蘭車用電子廠與 ECU、ADAS/ADS 感測器產線。每日新聞需追蹤波蘭增資、車用電子客戶、歐洲車廠在地化與自動化組裝線。",
    profile: { title: "電腦代工與車用電子供應商", body: "仁寶除 PC/NB 代工外，近年車用電子布局是海外設廠觀察重點，波蘭可作為歐洲車廠與供應鏈入口。", tags: ["ODM", "車用電子", "波蘭"] },
    technology: { title: "ECU、ADAS/ADS 與電子控制模組", body: "重點技術包括電子控制單元、車用電子模組、自動化組裝測試、ADAS/ADS 感測器相關產品。", tags: ["ECU", "ADAS", "ADS"] },
    partners: { title: "歐洲車用電子客戶與 CGS Technology Poland", body: "需追蹤 CGS Technology Poland、歐洲車廠與 Tier 1 客戶合作。", tags: ["CGS Technology Poland", "車廠", "Tier 1"] },
    sites: [{ location: "台灣", role: "總部 / 研發管理" }, { location: "波蘭", role: "車用電子製造與測試" }],
    newSites: [{ location: "波蘭", rationale: "車用電子產能與 ADAS/ADS 感測器需求，需追蹤增資與產線擴充。", status: "進行中" }]
  },
  {
    id: "advantech",
    name: "研華股份有限公司",
    english: "Advantech",
    role: "工業電腦、Edge AI、智慧製造、IoT；荷蘭、德國歐洲據點",
    monthlyAnalysis: "第一版聚焦歐洲 Edge AI 與智慧製造落地。荷蘭 Eindhoven 服務中心與德國 Munich 創新中心可作為產業應用、客戶 PoC 與在地部署觀察點。",
    profile: { title: "工業電腦與邊緣智慧平台業者", body: "研華聚焦工業電腦、IoT、Edge AI 與智慧製造，歐洲市場重視在地方案驗證與垂直應用部署。", tags: ["IPC", "Edge AI", "IoT"] },
    technology: { title: "Edge AI 與智慧製造平台", body: "重點技術包含工業電腦、邊緣運算、智慧製造、IoT 平台與垂直領域應用。", tags: ["Edge AI", "智慧製造", "Sector-Lead"] },
    partners: { title: "歐洲系統整合商與在地企業", body: "需追蹤德國、荷蘭與歐洲 10 國辦公據點的系統整合商、製造業客戶與應用夥伴。", tags: ["Eindhoven", "Munich", "系統整合"] },
    sites: [{ location: "台灣", role: "總部 / 研發管理" }, { location: "荷蘭 Eindhoven", role: "歐洲總部與服務中心" }, { location: "德國 Munich", role: "創新研發中心" }, { location: "歐洲多國", role: "辦公與銷售服務據點" }],
    newSites: [{ location: "德國 / 荷蘭", rationale: "Edge AI 與智慧製造方案需靠近製造客戶與系統整合商。", status: "觀察中" }]
  },
  {
    id: "kenmec",
    name: "廣運機械工程股份有限公司",
    english: "Kenmec Group",
    role: "智慧物流、自動倉儲、工業自動化、機器人整合",
    monthlyAnalysis: "第一版聚焦智慧物流、自動倉儲與歐洲自動化廠商合作。後續需追蹤 NEURA Robotics 等合作，以及方案是否輸出至歐洲製造、電商與航空業客戶。",
    profile: { title: "智慧物流與自動化系統整合業者", body: "廣運集團具智慧物流、自動倉儲與自動化生產設備能力，可支援製造業、電商與航空業自動化需求。", tags: ["智慧物流", "自動倉儲", "系統整合"] },
    technology: { title: "自動倉儲與機器人整合", body: "重點包含智慧物流系統、自動化倉儲、輸送設備、機器人與智慧工廠解決方案。", tags: ["AMR/AGV", "倉儲自動化", "機器人"] },
    partners: { title: "歐洲自動化與機器人廠商", body: "需追蹤與德國 NEURA Robotics 等自動化與機器人業者的技術合作。", tags: ["NEURA Robotics", "德國", "技術結盟"] },
    sites: [{ location: "台灣", role: "總部 / 系統整合與製造" }, { location: "歐洲", role: "方案輸出與合作市場" }],
    newSites: [{ location: "德國 / 歐洲", rationale: "歐洲自動化與機器人合作可帶動展示、售服或整合據點需求。", status: "評估中" }]
  },
  {
    id: "shayang",
    name: "祥儀企業股份有限公司",
    english: "Shayang Ye Industrial",
    role: "微型齒輪箱、馬達、傳動模組、AGV/服務型機器人",
    monthlyAnalysis: "第一版聚焦高階微小型齒輪箱、電動工具、汽車零組件與自動化設備客戶。歐洲推廣重點可落在傳動模組、AGV 與服務型機器人。",
    profile: { title: "精密傳動與微型齒輪箱業者", body: "祥儀具微型馬達、齒輪箱與傳動模組能力，產品可支援電動工具、車用零件、自動化設備與機器人。", tags: ["微型齒輪箱", "馬達", "傳動模組"] },
    technology: { title: "微型傳動與機器人應用", body: "重點包含微型馬達、減速齒輪箱、AGV、服務型機器人與傳動模組客製化。", tags: ["Gearbox", "AGV", "服務型機器人"] },
    partners: { title: "歐洲設備與車用零組件客戶", body: "需追蹤歐洲電動工具、汽車零組件、自動化設備廠與機器人客戶。", tags: ["電動工具", "汽車零組件", "自動化設備"] },
    sites: [{ location: "台灣", role: "總部 / 研發製造" }, { location: "歐洲", role: "外銷與推廣市場" }],
    newSites: [{ location: "歐洲主要工業國", rationale: "高階傳動模組若進入車用與機器人供應鏈，需觀察代理、倉儲與售服節點。", status: "評估中" }]
  },
  {
    id: "aurotek",
    name: "和椿科技股份有限公司",
    english: "Aurotek Corporation",
    role: "工業自動化、機器人、控制元件代理、CNC/MES 整合",
    monthlyAnalysis: "第一版聚焦德國等歐洲自動化品牌代理、CNC 與 MES 解決方案輸出。後續新聞需追蹤代理權、系統整合案與智慧工廠專案。",
    profile: { title: "工業自動化與智慧工廠整合業者", body: "和椿以工業自動化元件代理、機器人應用、CNC 與 MES 整合為核心，具製造業數位轉型服務能力。", tags: ["工業自動化", "CNC", "MES"] },
    technology: { title: "CNC、MES 與自動化控制", body: "重點技術包含自動控制元件、工業機器人、CNC 數控系統、MES 與無人工廠整合方案。", tags: ["CNC", "MES", "無人工廠"] },
    partners: { title: "歐洲工業機器人與控制品牌", body: "需追蹤德國等歐洲品牌代理、技術合作與智慧工廠專案夥伴。", tags: ["德國品牌", "機器人", "代理整合"] },
    sites: [{ location: "台灣", role: "總部 / 系統整合" }, { location: "歐洲", role: "技術代理與方案輸出市場" }],
    newSites: [{ location: "德國 / 歐洲", rationale: "歐洲自動化品牌合作與智慧工廠專案可能帶動服務據點。", status: "觀察中" }]
  },
  {
    id: "ffg",
    name: "友嘉集團",
    english: "Fair Friend Group / FFG",
    role: "工具機、航太加工、汽車加工設備；義大利、德國、瑞士、法國布局",
    monthlyAnalysis: "第一版聚焦歐洲工具機併購整合與汽車/航太高階加工產線。友嘉在德國、義大利、瑞士與法國的實體產能，是園區與供應鏈韌性分析的重要案例。",
    profile: { title: "全球工具機與自動化加工設備集團", body: "友嘉集團透過歐洲品牌與工廠布局，服務汽車、航太、模具與精密加工市場。", tags: ["工具機", "航太加工", "汽車產線"] },
    technology: { title: "工具機、加工中心與 Turnkey Solutions", body: "重點包含立式/臥式加工中心、滾齒機、大型車床、旋轉式傳遞工具機與整廠自動化輸送工程。", tags: ["MAG", "Pfiffner", "Turnkey"] },
    partners: { title: "MAG、Pfiffner 與歐洲工具機品牌", body: "需追蹤 MAG、Pfiffner、Jobs、Sigma、Sachman、Rambaudi 等歐洲品牌與工廠整合。", tags: ["MAG", "Pfiffner", "德國"] },
    sites: [{ location: "台灣", role: "集團管理" }, { location: "德國", role: "歐洲營運總部與工具機產能" }, { location: "義大利", role: "航太與大型模具加工設備" }, { location: "瑞士", role: "精密旋轉式傳遞工具機" }, { location: "法國 / 匈牙利", role: "歐洲生產基地" }],
    newSites: [{ location: "德國 / 義大利 / 瑞士", rationale: "歐洲實體產能與汽車、航太供應鏈在地化，需追蹤投資與產線更新。", status: "進行中" }]
  },
  {
    id: "bizlink",
    name: "貿聯控股",
    english: "BizLink Holding",
    role: "線束、連接線、工業應用、醫療與車用線束；塞爾維亞、斯洛伐克據點",
    monthlyAnalysis: "第一版聚焦 LEONI 相關事業收購整合、塞爾維亞與斯洛伐克歐洲製造基地。後續需追蹤 SMT、PVC 產線、工業自動化、醫療與車用線束訂單。",
    profile: { title: "連接線與線束解決方案供應商", body: "貿聯產品涵蓋連接線、線束、工業應用、醫療、機器人與車用線束，是歐洲製造在地化與高端客戶供應鏈觀察標的。", tags: ["線束", "連接線", "車用"] },
    technology: { title: "SMT、PVC 產線與高端線束", body: "重點包含表面黏著技術、PVC 膠料產線、工業應用線束、醫療與機器人連接解決方案。", tags: ["SMT", "PVC", "Industrial Cable"] },
    partners: { title: "LEONI 事業整合與歐洲客戶", body: "需追蹤 LEONI 電器線束與工業應用事業整合，以及 Bosch、Dyson 等高端客戶供應鏈。", tags: ["LEONI", "Bosch", "Dyson"] },
    sites: [{ location: "台灣", role: "管理與研發" }, { location: "塞爾維亞", role: "歐洲製造基地" }, { location: "斯洛伐克", role: "歐洲製造基地" }],
    newSites: [{ location: "塞爾維亞 / 斯洛伐克", rationale: "LEONI 整合後歐洲產線延伸至半導體設備、工業自動化、醫療與車用線束。", status: "進行中" }]
  },
  {
    id: "chicony",
    name: "群光電子股份有限公司",
    english: "Chicony Electronics",
    role: "PC 周邊、鍵盤、電源、鏡頭模組；捷克廠",
    monthlyAnalysis: "第一版聚焦捷克廠服務歐洲一線 PC 品牌客戶。後續需追蹤東歐組裝、出貨、物流與關稅成本，以及 HP、Dell、Lenovo 等客戶在地供應鏈需求。",
    profile: { title: "PC 周邊與電子組裝供應商", body: "群光以鍵盤、電源、鏡頭模組與 PC 周邊為核心，捷克廠可支援歐洲品牌客戶短鏈供應。", tags: ["PC 周邊", "鍵盤", "鏡頭模組"] },
    technology: { title: "PC 零組件與消費電子組裝", body: "重點包含鍵盤、電源、鏡頭模組、消費性電子組裝與歐洲短鏈供應能力。", tags: ["Keyboard", "Power", "Camera Module"] },
    partners: { title: "歐洲 PC 品牌與消費電子客戶", body: "需追蹤 HP、Dell、Lenovo 等品牌客戶，以及捷克在地製造對交期與關稅的影響。", tags: ["HP", "Dell", "Lenovo"] },
    sites: [{ location: "台灣", role: "總部 / 研發管理" }, { location: "捷克", role: "歐洲 PC 周邊與消費電子組裝" }],
    newSites: [{ location: "捷克", rationale: "縮短歐洲交期、降低物流與關稅成本，滿足歐洲在地製造與風險分散需求。", status: "觀察中" }]
  },
  {
    id: "fortune",
    name: "華城電機股份有限公司",
    english: "Fortune Electric",
    role: "變壓器、電力設備、電網工程；北美 AI 資料中心商機",
    monthlyAnalysis: "第一版聚焦北美 AI 資料中心、電網更新與大型變壓器訂單。後續需特別標記 AIDC、電網韌性、變壓器交期、北美與歐洲市場投資拓展。",
    profile: { title: "變壓器與電力設備供應商", body: "華城以變壓器、開關設備與電力工程為核心，受惠資料中心、電網更新與能源基礎設施投資。", tags: ["變壓器", "電網", "AIDC"] },
    technology: { title: "大型變壓器與電力系統", body: "重點包含大型變壓器、配電設備、電網工程、資料中心電力設備與高可靠度供電系統。", tags: ["Transformer", "Grid", "Data Center Power"] },
    partners: { title: "北美資料中心與電網客戶", body: "需追蹤北美 AI 資料中心、電力公司、EPC 工程團隊與大型變壓器需求。", tags: ["北美", "AI 資料中心", "EPC"] },
    sites: [{ location: "台灣", role: "總部 / 製造與工程" }, { location: "北美", role: "資料中心與電網需求市場" }, { location: "歐洲", role: "投資與拓展觀察市場" }],
    newSites: [{ location: "北美", rationale: "AI 資料中心與電網更新需求推升大型變壓器訂單，需追蹤在地服務或產能布局。", status: "評估中" }, { location: "歐洲", rationale: "能源轉型與電網升級可能形成市場拓展機會。", status: "觀察中" }]
  }
];

const foxconn = {
  id: "foxconn",
  name: "鴻海精密工業股份有限公司",
  shortName: "鴻海",
  english: "Hon Hai Precision Industry / Foxconn",
  role: "EMS、AI 伺服器、半導體封裝、衛星與通訊供應鏈",
  updated: "2026-07-21",
  built: true,
  monthlyAnalysis:
    "近一個月鴻海動能集中在歐洲先進封裝與 AI／機器人生態系：法國 Tessalia 廠與 Thales、Radiall 共同投資揭幕，標誌其半導體封裝產能正式落地歐洲；同期 Czech Tech Day 展示 AI、機器人與電動移動技術，顯示捷克據點角色正從單純製造擴大為技術展示與客戶連結中心。財務面 6 月合併營收如期公告，未見重大波動；策略面則與 Sharp 簽署合作備忘錄，延續其消費電子與顯示技術結盟布局。整體而言，鴻海海外設廠訊號集中在歐洲（法國、捷克），美國仍以 AI 伺服器與資料中心需求為觀察重點，建議持續追蹤 Tessalia 後續產能規劃與捷克廠是否有進一步資本支出宣布。",
  timeline: [
    {
      date: "2026 進行中",
      pinned: true,
      tag: "海外設廠",
      overseas: true,
      source: "official",
      title: "法國 Tessalia 先進封裝廠揭幕，攜手 Thales、Radiall 共同投資",
      link: "https://www.foxconn.com/en-us/press-center/events/csr-events/2049",
      linkLabel: "Foxconn 官方活動頁"
    },
    {
      date: "2026-07-20",
      tag: "海外訂單",
      overseas: true,
      source: "other",
      title: "鴻海奪 SpaceX AI 伺服器大單，下一步瞄準太空資料中心",
      link: "https://money.udn.com/money/story/11162/9637859",
      linkLabel: "經濟日報"
    },
    {
      date: "2026-07-05",
      tag: "財務",
      overseas: false,
      source: "official",
      title: "公告 2026 年 6 月未審核合併營收",
      link: "https://www.foxconn.com/en-us",
      linkLabel: "Foxconn 官方首頁"
    },
    {
      date: "2026-06-26",
      tag: "歐洲布局",
      overseas: true,
      source: "official",
      title: "Czech Tech Day：展示 AI、機器人與電動移動技術",
      link: "https://www.foxconn.com/en-us",
      linkLabel: "Foxconn 官方首頁"
    },
    {
      date: "2026-06-24",
      tag: "策略合作",
      overseas: false,
      source: "official",
      title: "與 Sharp 簽署策略合作備忘錄（MOU）",
      link: "https://www.foxconn.com/en-us",
      linkLabel: "Foxconn 官方首頁"
    },
    {
      date: "2026-06-05",
      tag: "海外結盟",
      overseas: true,
      source: "other",
      title: "鴻海強攻 AI 結盟美韓大咖：攜手英特爾打造 AI 平台、與 SK 集團布局 AI 伺服器及資料中心",
      link: "https://money.udn.com/money/story/5612/9546874",
      linkLabel: "經濟日報"
    },
    {
      date: "2026-06-01",
      tag: "歐洲布局",
      overseas: true,
      source: "other",
      title: "鴻海攜手 Bull 宣布歐洲 AI 資料中心重大合作案",
      link: "https://money.udn.com/money/story/5612/9538440",
      linkLabel: "經濟日報"
    }
  ],
  profile: {
    title: "全球科技製造服務與 3+3+3 策略",
    body: "鴻海為全球科技服務與電子製造服務業者，官方網站揭示其投入電動車、數位健康、機器人三大新興產業，並發展 AI、半導體、次世代通訊三項技術。",
    tags: ["3+3+3", "EMS", "AI", "半導體", "次世代通訊"]
  },
  technology: {
    title: "產品技術與製造能量",
    body: "第一版聚焦電動車、數位健康、機器人、人工智慧、半導體與次世代通訊；後續可再拆解至 AI server、EV 平台、SiP/FOWLP、衛星通訊與智慧製造。",
    tags: ["電動車", "AI 伺服器", "機器人", "半導體封裝", "次世代通訊"]
  },
  partners: {
    title: "Thales、Radiall、Sharp 與 MIH 生態系",
    body: "已建檔合作節點包含法國 Tessalia 案中的 Thales、Radiall；近期新聞亦顯示與 Sharp 簽署策略合作備忘錄。MIH Consortium 作為 EV 開放生態系長期節點。",
    tags: ["Thales", "Radiall", "Sharp", "MIH Consortium"]
  },
  sites: {
    items: [
      { location: "台灣（總部）", role: "總部 / 核心製造" },
      { location: "美國", role: "美洲入口 / AI 伺服器客戶服務" },
      { location: "墨西哥", role: "美洲入口 / 組裝製造" },
      { location: "越南", role: "亞洲入口 / 分散產能" },
      { location: "捷克", role: "歐洲入口 / AI・機器人展示" },
      { location: "斯洛伐克", role: "歐洲入口 / 製造據點" }
    ]
  },
  newSites: {
    items: [
      { location: "法國（Tessalia）", rationale: "先進封裝合資，與 Thales、Radiall 共同投資", status: "進行中" },
      { location: "捷克（延伸）", rationale: "Czech Tech Day 展示 AI／機器人／電動移動，觀察後續產能承諾", status: "觀察中" },
      { location: "美國", rationale: "AI 伺服器、資料中心需求；追蹤 CHIPS/48D 與州別補貼", status: "評估中" }
    ]
  }
};

const companies = [foxconn, ...companyBacklog.map(buildTrackedCompany)];

const state = {
  view: "overview",
  companyId: null,
  newsFilters: [],
  timeRange: "all",
  newsVisibleCount: 5
};

const app = document.querySelector("#app");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatCompanyName(name) {
  const escaped = escapeHtml(name);
  if (escaped.includes("股份有限公司")) return escaped.replace("股份有限公司", "<span>股份有限公司</span>");
  if (escaped.includes("有限公司")) return escaped.replace("有限公司", "<span>有限公司</span>");
  if (escaped.includes("控股")) return escaped.replace("控股", "<span>控股</span>");
  if (escaped.includes("集團")) return escaped.replace("集團", "<span>集團</span>");
  return escaped;
}

function getCompany() {
  return companies.find((company) => company.id === state.companyId) || foxconn;
}

function countOverseas(company) {
  const newsSignals = company.timeline.filter((item) => item.overseas).length;
  const siteSignals = company.newSites.items.filter((item) => item.status !== "待建檔").length;
  return newsSignals + siteSignals;
}

function getSourceCategory(item) {
  if (item.sourceCategory) return item.sourceCategory;
  if (item.source === "official") return "official";
  return "industry";
}

function getMarket(item) {
  return item.market || (item.overseas ? "foreign" : "domestic");
}

function renderOverview() {
  const totalNews = companies.reduce((sum, company) => sum + company.timeline.length, 0);
  const totalOverseas = companies.reduce((sum, company) => sum + countOverseas(company), 0);

  app.innerHTML = `
    <section class="overview">
      <div class="overview-head">
        <div>
          <h1>17 家企業總覽儀表板</h1>
          <p>每日彙整企業新聞、既有據點與新據點評估動態，優先掌握海外設廠相關訊號。</p>
        </div>
        <div class="metric-row">
          ${metricCard(companies.length, "追蹤企業", "heading")}
          ${metricCard(totalNews, "已建檔新聞則數", "green")}
          ${metricCard(totalOverseas, "海外設廠訊號", "orange")}
        </div>
      </div>
      <div class="company-cards">
        ${companies.map(renderCompanyCard).join("")}
      </div>
    </section>
  `;
}

function metricCard(value, label, tone) {
  return `
    <div class="metric-card ${tone}">
      <strong>${value}</strong>
      <span>${label}</span>
    </div>
  `;
}

function renderCompanyCard(company) {
  const status = company.built ? "已建檔" : "建置中";
  return `
    <article class="company-card" data-company="${escapeHtml(company.id)}" role="button" tabindex="0">
      <div class="company-card-head">
        <div>
          <h3>${escapeHtml(company.shortName)}</h3>
          <p>${escapeHtml(company.english)}</p>
        </div>
        <span class="status ${company.built ? "built" : ""}">${status}</span>
      </div>
      <p class="company-role">${escapeHtml(company.role)}</p>
      <div class="company-foot">
        <span>新聞 ${company.timeline.length}</span>
        <span class="overseas">海外設廠 ${countOverseas(company)}</span>
      </div>
    </article>
  `;
}

function renderDetail() {
  const company = getCompany();
  const timeline = getFilteredTimeline(company);
  const visibleTimeline = timeline.slice(0, state.newsVisibleCount);
  const mapContent = company.id === "foxconn"
    ? `<iframe src="./foxconn-map.html" title="鴻海全球據點地圖"></iframe>`
    : `<div class="empty-state map-empty">此企業已完成據點清單底稿。下一階段補入經緯度後，即可轉為互動式全球據點地圖。</div>`;

  app.innerHTML = `
    <section class="detail-view">
      <nav class="breadcrumb">
        <button type="button" data-action="overview">企業總覽</button>
        <span>›</span>
        <strong>${escapeHtml(company.shortName)}</strong>
      </nav>

      <section class="detail-hero">
        <div>
          <p class="eyebrow">${escapeHtml(company.english)}</p>
          <h1>${formatCompanyName(company.name)}</h1>
          <p>${escapeHtml(company.role)}</p>
        </div>
        <div class="metric-row compact">
          ${metricCard(company.timeline.length, "新聞則數", "heading")}
          ${metricCard(countOverseas(company), "海外設廠訊號", "orange")}
          <div class="metric-card heading"><strong>${escapeHtml(company.updated)}</strong><span>最後更新</span></div>
        </div>
      </section>

      <section class="analysis-card">
        <p class="eyebrow">近一個月動態分析</p>
        <p>${escapeHtml(company.monthlyAnalysis)}</p>
      </section>

      <section class="detail-grid">
        <article class="timeline-card">
          <div class="card-title-row">
            <div>
              <h2>企業新聞時間軸</h2>
              <p>可依來源類型、國內外新聞、時間與海外設廠訊號篩選</p>
            </div>
          </div>
          ${renderFilters()}
          ${
            company.timeline.length
              ? `<div class="timeline">${visibleTimeline.map(renderTimelineItem).join("")}</div>`
              : `<div class="empty-state">企業底稿已建檔，尚未寫入已驗證新聞。後續每日搜尋時，只有能直接開啟並對到原文頁面的新聞、公告、報告或法令連結才會進入時間軸。</div>`
          }
          ${timeline.length > state.newsVisibleCount ? `<button class="more-button" type="button" data-action="more">看更多新聞</button>` : ""}
        </article>

        <aside class="info-stack">
          ${infoCard("企業簡介", company.profile)}
          ${infoCard("既有產品與技術", company.technology)}
          ${infoCard("近期合作業者", company.partners)}
        </aside>
      </section>

      <section class="map-grid">
        <article class="map-card">
          <p class="eyebrow dark">全球據點地圖</p>
          ${mapContent}
        </article>
        <aside class="info-stack">
          ${siteList("既有據點", company.sites.items)}
          ${newSiteList(company.newSites.items)}
        </aside>
      </section>
    </section>
  `;
}

function renderFilters() {
  const filters = [
    ["all", "全部"],
    ["source:official", "企業官網"],
    ["source:industry", "產業新聞"],
    ["source:report", "報告法令"],
    ["market:domestic", "國內新聞"],
    ["market:foreign", "國外新聞"],
    ["overseas", "海外設廠議題"]
  ];
  const ranges = [
    ["all", "全部時間"],
    ["7d", "近 7 天"],
    ["30d", "近 30 天"],
    ["90d", "近 90 天"]
  ];

  return `
    <div class="filters">
      <p>來源、地域與議題</p>
      <div class="chip-row">
        ${filters.map(([id, label]) => filterButton(id, label)).join("")}
      </div>
      <p>時間區間</p>
      <div class="chip-row">
        ${ranges.map(([id, label]) => rangeButton(id, label)).join("")}
      </div>
    </div>
  `;
}

function filterButton(id, label) {
  const active = id === "all" ? state.newsFilters.length === 0 : state.newsFilters.includes(id);
  return `<button class="filter-chip ${active ? "active" : ""} ${(id === "overseas" || id === "market:foreign") && active ? "orange" : ""}" type="button" data-filter="${id}">${label}</button>`;
}

function rangeButton(id, label) {
  return `<button class="filter-chip ${state.timeRange === id ? "active" : ""}" type="button" data-range="${id}">${label}</button>`;
}

function getFilteredTimeline(company) {
  const active = state.newsFilters;
  const sourceFilters = active.filter((filter) => filter.startsWith("source:")).map((filter) => filter.replace("source:", ""));
  const marketFilters = active.filter((filter) => filter.startsWith("market:")).map((filter) => filter.replace("market:", ""));
  const overseasOnly = active.includes("overseas");
  const now = new Date("2026-07-21");
  const daysByRange = { "7d": 7, "30d": 30, "90d": 90 };

  return company.timeline.filter((item) => {
    const matchesFilter =
      (sourceFilters.length === 0 || sourceFilters.includes(getSourceCategory(item))) &&
      (marketFilters.length === 0 || marketFilters.includes(getMarket(item))) &&
      (!overseasOnly || item.overseas);

    if (!matchesFilter) return false;
    if (item.pinned || state.timeRange === "all") return true;
    const date = new Date(item.date);
    if (Number.isNaN(date.getTime())) return true;
    return (now - date) / 86400000 <= daysByRange[state.timeRange];
  });
}

function renderTimelineItem(item) {
  const sourceCategory = getSourceCategory(item);
  const market = getMarket(item);
  return `
    <div class="timeline-item" style="--timeline-color: ${item.overseas ? OVERSEAS_COLOR : NEWS_COLOR}">
      <div class="timeline-meta">
        <span>${escapeHtml(item.date)}</span>
        <span>${escapeHtml(item.tag)}</span>
        <span class="source-badge">${escapeHtml(SOURCE_LABELS[sourceCategory] || sourceCategory)}</span>
        <span class="market-badge ${market}">${escapeHtml(MARKET_LABELS[market] || market)}</span>
        ${item.overseas ? `<b>海外設廠</b>` : ""}
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <a href="${escapeHtml(item.link)}" target="_blank" rel="noreferrer">${escapeHtml(item.linkLabel)} ↗</a>
    </div>
  `;
}

function infoCard(label, item) {
  return `
    <article class="info-card">
      <p class="eyebrow">${label}</p>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.body)}</p>
      <div class="tag-row">${item.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
    </article>
  `;
}

function siteList(label, items) {
  return `
    <article class="info-card">
      <p class="eyebrow">${label}</p>
      <div class="site-list">
        ${items.map((item) => `<div><strong>${escapeHtml(item.location)}</strong><span>${escapeHtml(item.role)}</span></div>`).join("")}
      </div>
    </article>
  `;
}

function newSiteList(items) {
  return `
    <article class="info-card new-sites">
      <p class="eyebrow">新據點評估地點</p>
      <div class="new-site-list">
        ${items
          .map(
            (item) => `
              <div>
                <div><strong>${escapeHtml(item.location)}</strong><span>${escapeHtml(item.status)}</span></div>
                <p>${escapeHtml(item.rationale)}</p>
              </div>
            `
          )
          .join("")}
      </div>
    </article>
  `;
}

function setOverview() {
  state.view = "overview";
  state.companyId = null;
  render();
}

function setDetail(companyId) {
  state.view = "detail";
  state.companyId = companyId;
  state.newsFilters = [];
  state.timeRange = "all";
  state.newsVisibleCount = 5;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleFilter(id) {
  if (id === "all") {
    state.newsFilters = [];
  } else if (state.newsFilters.includes(id)) {
    state.newsFilters = state.newsFilters.filter((item) => item !== id);
  } else {
    state.newsFilters = [...state.newsFilters, id];
  }
  state.newsVisibleCount = 5;
  renderDetail();
}

function setRange(id) {
  state.timeRange = id;
  state.newsVisibleCount = 5;
  renderDetail();
}

function render() {
  if (state.view === "detail") renderDetail();
  else renderOverview();
}

document.addEventListener("click", (event) => {
  const overview = event.target.closest("[data-action='overview']");
  if (overview) {
    setOverview();
    return;
  }

  const card = event.target.closest("[data-company]");
  if (card) {
    setDetail(card.dataset.company);
    return;
  }

  const filter = event.target.closest("[data-filter]");
  if (filter) {
    toggleFilter(filter.dataset.filter);
    return;
  }

  const range = event.target.closest("[data-range]");
  if (range) {
    setRange(range.dataset.range);
    return;
  }

  const more = event.target.closest("[data-action='more']");
  if (more) {
    state.newsVisibleCount += 5;
    renderDetail();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[data-company]");
  if (!card) return;
  event.preventDefault();
  setDetail(card.dataset.company);
});

render();
