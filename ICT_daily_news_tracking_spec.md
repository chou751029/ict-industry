# ICT 企業新聞每日追蹤規格

## 目的

每天蒐集指定 ICT 企業的中文、英文與相關國家母語新聞，並納入具代表性的 ICT 產業鏈業者新聞，聚焦企業需求、國內外投資布局、海外設廠、供應鏈移動、產業政策與跨國設廠誘因，整理成可供 TEEMA 產業園區計畫案研判的摘要。

## 資料來源方向

- 中文：中央社、經濟日報、工商時報、鉅亨網、科技新報、DIGITIMES、公開資訊觀測站、企業中文官網、地方政府新聞稿
- 英文：Reuters、Bloomberg、Nikkei Asia、Financial Times、WSJ、CNBC、The Register、EE Times、企業英文官網、SEC filing、地方政府或招商機構公告
- 各國母語：依 `ICT_country_policy_keywords.md` 使用法文、德文、義大利文、捷克文、波蘭文、荷蘭文、斯洛伐克文、匈牙利文、塞爾維亞文、挪威文、烏克蘭文、日文、韓文、印地文與東協主要語言關鍵字搜尋。
- 其他：公司新聞稿、投資人簡報、法說會資料、年報、地方建廠許可或補助公告

## 每日處理流程

1. 讀取 `ICT_company_watchlist.md` 的企業名單。
2. 讀取 `ICT_country_policy_keywords.md` 的國別母語關鍵字。
3. 針對每家公司搜尋最近 48 小時內（含執行當下往前 48 小時）的中文、英文與相關國家母語資訊；兩天內符合條件的新聞都應納入，不要求至少滿 24 小時。
4. 針對同產業鏈執行「全球開放式 ICT 製造新聞雷達」：不以 17 家企業或既有大型業者為限，搜尋最近 48 小時內（含執行當下往前 48 小時）的國內外新創、首次被報導的企業、新設法人、政府招商案、在地供應商與跨國製造案例；兩天內符合條件的新聞都應納入，不要求至少滿 24 小時。範圍包含 AI 資料中心、伺服器、電源、電網、變壓器、EV 充電、工業自動化、機器人、工具機、車用電子、線束、EMS、電子零組件、半導體封裝、AI 工廠、智慧製造、SMT/FATP 與北美/歐洲在地化製造。
5. 若非 17 家名單內企業，但新聞涉及 ICT 業者海外設廠、AI 工廠、產線自動化、SMT/FATP、客戶在地化、韌性供應鏈或跨國製造架構，應列入「產業鏈案例」，並可寫入 Google 試算表。
6. 每週至少補強一次各國 ICT 產業政策、設廠補助、稅務優惠、用地、電力、人才與招商措施；若當日有重大政策新聞，應納入每日摘要。
7. 優先判斷是否涉及海外設廠、擴廠、產能移轉、供應鏈布局、政府補助或園區需求。
8. 對每則新聞標註可信度與資訊類型：官方公告、主流媒體、產業媒體、地方政府、分析評論。
9. 對每則新聞新增雙層分類，供網頁平台與 Google 試算表同步使用：
   - 來源類型：企業官網 / 產業新聞 / 報告法令。
   - 新聞地域：國內新聞 / 國外新聞。
   - 議題標籤：海外設廠、擴廠、合作、併購、訂單、政策補助、園區、電力、人才、物流、供應鏈韌性等。
10. 產出每日摘要檔，檔名格式：`reports/YYYY-MM-DD_ICT_company_news.md`。

### 企業時間軸同步規則

每日蒐集回來的 17 家名單企業資訊，只要符合下列任一條件，且已通過「來源連結驗證規則」，就必須同步寫入平台該企業的「企業新聞時間軸」；不得只放在每日報告、試算表或「近期 ICT 產業新聞」區。

- 國內或國外設廠、擴廠、廠房啟用、產線建置、量產、試產、產能移轉或供應鏈在地化。
- 土地取得、廠辦購置、租賃、建照、施工、接電、用水、園區進駐、地方政府招商或補助。
- 重大投資、併購、合資、策略聯盟、區域總部、研發/測試/驗證中心、物流/維修/服務中心等布局訊號。
- 與資料中心、AI 伺服器、電力設備、變壓器、電源、線束、EMS、車用電子、工業自動化、機器人、工具機等園區需求高度相關的產線、客戶交付或區域供應鏈配置。

寫入平台時需標註來源類型、新聞地域與議題標籤。若事件是國內土地、國內廠辦、台灣產線或台灣投資布局，仍應標為 `國內新聞` 並寫入企業時間軸；不得因「非海外設廠」而排除。若來源為媒體或法人預期、但仍具設廠/產能布局參考價值，需在標籤或標題標明「待複核」，並於後續追蹤公司公告、地方政府文件、建照或投資人資料。

### 即時性硬性稽核關卡（不得省略）

在任何公司被標記為「未見重大新動態」前，必須完成下列逐家公司稽核；彙總式 OR 查詢、單一產業關鍵字搜尋或僅查看搜尋結果頁，均不得取代此關卡。

1. **17 家逐一檢索**：每家公司至少各做一組中文公司名／股票或常用簡稱、英文正式名／品牌、以及一組與其核心產品或海外據點相連的事件詞；查詢時間固定限於前 48 小時。
2. **來源面雙軌**：逐家掃描公司官方新聞室／投資人資訊與至少一個台灣主流媒體來源（CNA、經濟日報、工商時報、自由財經、鉅亨、DIGITIMES、TechNews 等）；海外據點再加一個英文或母語來源。
3. **命中分層**：每一家公司在報告記錄「已驗證」、「待複核」與「排除」命中數及代表查詢。市場傳聞、社群貼文、聚合轉載不得作為已驗證來源，但若涉及設廠／產能移轉須保留為待複核。
4. **未見重大動態的前提**：僅在上述三種來源面均完成、且沒有符合條件的直接原文時才能使用；必須附上實際檢索詞、檢索時間與排除原因。
5. **發布前抽查**：隨機抽取至少 3 家標記「未見重大新動態」的企業，重新以另一家主流媒體或官方新聞室核對；若任一抽查找回合格新文，全輪不得發布「無新增」結論，須重跑 17 家逐一稽核。

### 全球開放式 ICT 製造新聞雷達

此雷達與 17 家企業名單追蹤分開執行；不得因企業不在名單、規模較小、為新設公司或首次出現而排除。

1. **製程／產品詞**：electronics manufacturing、electronic assembly、EMS、ODM、OEM、PCB、PCBA、SMT、FATP、box build、system integration、burn-in、testing、advanced packaging、OSAT、power electronics、power supply、BBU、UPS、switchgear、transformer、cable harness、connectors、industrial PC、edge AI、robotics、machine tools、automotive electronics、EV charging、data center infrastructure、liquid cooling。
2. **投資／設廠詞**：new company、startup、new facility、greenfield、factory、plant、manufacturing campus、site selection、land acquisition、groundbreaking、construction permit、production line、capacity expansion、production ramp、commercial operation、local manufacturing、reshoring、nearshoring、friendshoring、localization、supplier park。
3. **政策／園區詞**：investment incentive、manufacturing grant、tax credit、industrial park、special economic zone、free trade zone、economic development、state aid、workforce training、grid connection、power capacity、water allocation。
4. **地區配置**：每日至少涵蓋台灣、北美、歐盟／中東歐、印度、東協與日韓；每週輪替補強拉丁美洲、中東、非洲及其他新興製造地。各區至少一組英文或當地母語「產業詞＋事件詞＋國名／城市」查詢。
5. **來源配置**：除一般新聞搜尋外，優先掃描政府招商機構、州／市經濟發展單位、工業園區、公司新聞室、證交所／投資人關係、半導體與電子製造產業媒體。新創或新法人可先列為候選，但寫入試算表與網站前仍須有可直接驗證的原始頁面。
6. **輸出與去重**：所有命中先分為「候選」與「已驗證」。只有已驗證且不與網站或試算表原文連結重複者，才寫入 `ICT產業新聞` 與「近期 ICT 產業新聞」。每日報告須記錄各區代表查詢、候選數、排除原因與新發現公司名稱。

## 摘要格式

每家公司至少包含：

- 今日重點：一句話說明是否有值得追蹤的新動態。
- 新聞項目：標題、日期、來源、語言、連結。
- 新聞分類：來源類型、國內/國外新聞、議題標籤。
- 海外設廠 / 國際布局訊號：明確、間接、無。
- 潛在需求研判：土地、廠房、水電、物流、人才、供應商、政策補助、客戶靠近等。
- 對 TEEMA / 產業園區可能意涵。
- 需要後續追蹤的問題。

每日報告另需包含：

- 產業鏈動態：列出與 17 家企業高度相關的供應鏈新聞。
- 產業鏈案例：列出非 17 家名單內、但足以作為 ICT 跨國設廠或智慧製造參考的業者新聞。
- 各國政策與設廠誘因：列出近期政府補助、招商、稅務、用地、電力、人才、產業園區與建廠許可相關訊號。
- 國別母語搜尋摘要：標註使用的原文關鍵字、語言與主要來源。
- 法人行動建議：指出應追問企業、政府、園區、工程、金融或法務/稅務團隊的具體問題。
- 人工複核清單：列出 3 至 5 個需要確認真偽、數字或政策適用條件的議題。

## 美國首發 SOP 對應

若新聞或政策涉及美國，需對應 `USA_ICT_investment_SOP.md` 判讀：

- Step 1：CHIPS Act / Section 48D、IRA / FEOC、USMCA / RVC 是否影響企業設廠可行性。
- Step 2：Texas、Arizona、Ohio、New York 或其他州別的選址、人才、電力、水、補貼與聚落條件是否改變。
- Step 3：是否影響 Taiwan + 1 雙軌製造、10 年 TCO、政府/州別/園區媒合、EPC 或金融團隊配置。
- 產出時需標註：此訊號屬於「立即追蹤」、「納入訪談題綱」、「納入場址評估」或「背景觀察」。

## 判讀原則

- 官方公告優先於二手報導。
- 同一事件若有多個來源，合併整理並列出主要來源。
- 對未證實的傳聞需明確標註，不可當作既定事實。
- 外文資料需用繁體中文摘要，保留原文標題、語言與來源。
- 政策或補助資訊需盡量追溯到政府、招商機構、官方公報或企業公告。

## 關鍵字搜尋完整性要求

每家公司每日搜尋不得只用中文公司名。需至少覆蓋以下 6 類交叉關鍵字，並在每日報告的「國別母語搜尋摘要」記錄實際使用的代表性查詢：

1. 中文公司名與簡稱，例如：鴻海、光寶、東元。
2. 英文公司名與品牌/集團名，例如：Foxconn、LITEON、TECO、USI、BizLink。
3. 子公司、收購標的、品牌或合作方，例如：Asteelflash、LEONI、SEAS、MAG、Pfiffner、Dynaciate、NEURA Robotics。
4. 核心產品與技術，例如：AI server、data center power、BBU、EV charging、SiC packaging、Edge AI、AGV、robotics、transformer。
5. 海外據點與地名，例如：McKinney Texas、Pardubice Czech、Czeladź Poland、Soest Germany、Eindhoven Netherlands、Serbia、Slovakia、Norway。
6. 事件型關鍵字，例如：press release、investment、factory、plant、capacity、acquisition、MOU、joint venture、R&D center、mass production、展會、設廠、擴廠、併購、合資。

### 母語搜尋最低要求

- 歐洲相關：至少補德文、法文、捷克文、波蘭文、荷蘭文、挪威文或當地語言中的一種，依企業據點選擇。
- 日本相關：補日文公司/產品/展會關鍵字。
- 美國相關：補州別、城市、economic development、site selection、tax incentive、workforce 等英文關鍵字。
- 東南亞相關：補英文與當地地名，必要時加越南文、馬來文、泰文或印尼文。

### 據點、融資與社區風險擴充規則

- 「設廠」不得只搜尋 `factory`、`plant`、`expansion`。各公司英文檢索必須輪替納入 `site`、`facility`、`manufacturing site`、`production base`、`operating base`、`regional hub`、`service/logistics/distribution center`、`technical/engineering/R&D center`、`campus`、`headquarters`、`branch office`。
- 對海外據點，使用「公司或子公司名稱＋上述據點詞＋城市／國名＋事件詞」；事件詞另納入 `acquire`、`lease`、`relocate`、`open`、`launch`、`recruit/hiring`、`permit`、`zoning`、`grid interconnection`、`water allocation`。
- 全球 AI 資料中心雷達除建廠外，必須每天至少檢索一組 `data center financing/project finance/construction loan/infrastructure debt/community opposition/public hearing/zoning/permitting/grid interconnection/water allocation`，並加入 `telecom policy/FCC/China policy/telecom equipment security/supply-chain security` 政策組。
- 全球母語雷達最低納入日文、韓文、德文、法文各一組「產業詞＋據點詞或融資／許可詞＋國名／城市」；實際執行的精確查詢須逐條記入報告，不得以未執行語言概述替代。

### 未命中也要記錄

若某家公司當日或當週未找到 verified direct URL，仍需在報告中列出：

- 已搜尋的代表性關鍵字。
- 搜尋語言。
- 排除原因：舊聞、列表頁、首頁、社群貼文、付費牆、日期不明、來源不可驗證。
- 下一步建議：改查子公司、合作方、地方政府、展會頁、MOPS、法說會或年報。

## 來源連結驗證規則

- 每一筆寫入報告或 Google 試算表的資料，都必須附上可直接開啟的來源連結。
- 連結需直接對到該新聞、公告、法令、報告或公司新聞稿頁面，不可只連到首頁、搜尋結果頁、分類頁、新聞列表頁或無法定位原文的轉載集合頁。
- 寫入前需打開來源頁確認標題、發布日期、發布機構/媒體名稱與內文主旨相符。
- 若來源頁需要付費牆、登入、動態載入或無法確認內文，需改找官方公告、可公開讀取的媒體頁、政府頁或企業新聞稿作為替代來源。
- 若只能找到二手轉載，需標註原始來源不可得，並優先不要寫入 Google 試算表；除非該事件非常重要，才列入報告的「待複核」區。
- Google 試算表只寫入已驗證可直接對應到原文頁面的連結；無法驗證的背景觀察不得寫入。
- 同一事件若有官方來源與媒體來源，優先寫官方來源；媒體來源可放在備註或摘要中補充。

## 新聞分類規則

- 企業官網：公司新聞稿、投資人關係、法說會、年報、永續報告、公開資訊觀測站重大訊息、官方活動頁。
- 產業新聞：中央社、經濟日報、工商時報、鉅亨網、DIGITIMES、TechNews、Reuters、Nikkei Asia、Bloomberg、EE Times 等媒體或產業媒體。若新聞內容像 `https://money.udn.com/money/story/5612/9546874` 這類報導企業合作、海外布局、訂單或產業鏈動態，歸為「產業新聞」。
- 報告法令：政府公告、法令、補貼辦法、園區招商文件、研究機構報告、產業政策白皮書、稅務/關務/投資規範。
- 國內新聞：新聞主要事件發生於台灣，或主要影響台灣總部、台灣產線、台灣政策與台灣供應鏈。
- 國外新聞：新聞主要事件發生於海外，或涉及海外設廠、海外投資、海外客戶/供應商合作、海外政策補助、海外園區、海外訂單與在地化製造。
- 若同一則新聞同時包含台灣總部與海外投資，地域以主要事件地點判斷；若標題或內文重心是海外投資、客戶、設廠或政策，標為「國外新聞」，並在摘要中補充台灣端影響。
