export default function NutritionBioMonitorPlatform() {
  const features = [
    {
      title: '營養餐購買與訂閱',
      desc: '支援單次購買、週配餐、月訂閱與目標導向套餐。',
    },
    {
      title: '營養師一對一預約',
      desc: '線上諮詢、飲食追蹤、個人化菜單與回診建議。',
    },
    {
      title: '健身教練線上 / 實體課程',
      desc: '排課、進度追蹤、訓練規劃與實體場館串接。',
    },
    {
      title: '手機拍照辨識餐點與 8 大營養',
      desc: '辨識餐點、估算營養、建立每日飲食紀錄。',
    },
    {
      title: '穿戴裝置生物數據整合',
      desc: '整合睡眠、步數、心率、體重、體脂與活動量。',
    },
    {
      title: '每週挑戰賽 / 排行榜 / 獎勵機制',
      desc: '透過遊戲化設計提升留存、互動與持續使用率。',
    },
  ];

  const plans = [
    {
      name: '基礎會員',
      price: 'NT$ 2,980 / 月',
      desc: '適合先開始建立健康管理習慣的會員。',
      items: ['每月 12 份營養餐', '基本飲食紀錄', '個人健康儀表板', '每月 1 次線上營養建議'],
    },
    {
      name: '進階管理',
      price: 'NT$ 8,000 / 月',
      desc: '適合需要持續飲食與訓練規劃的核心會員。',
      items: ['每月 30 份營養餐', 'AI 拍照辨識', '每月 2 次營養師諮詢', '每月 2 次教練課程'],
      highlight: true,
    },
    {
      name: '高階健康方案',
      price: 'NT$ 15,000 / 月',
      desc: '適合高需求客戶與高黏著度會員。',
      items: ['每月 30 份營養餐', '完整穿戴數據整合', '每月 2 次營養師 1 對 1', '每月 2 次教練 1 對 1'],
    },
  ];

  const steps = [
    '選擇目標與會員方案',
    '訂購營養餐與建立健康檔案',
    '每日拍照記錄飲食',
    '串接穿戴裝置',
    '預約營養師 / 教練',
    '持續追蹤與參加挑戰',
  ];

  const partners = [
    '營養師加入平台',
    '健身教練加入平台',
    '健身房 / 場館合作',
    '企業健康管理方案',
  ];

  return (
    <div className="page">
      <header className="topbar">
        <div className="container nav">
          <div className="logo">NutriSync Health</div>
          <div className="nav-links">
            <a href="#features">功能介紹</a>
            <a href="#plans">方案價格</a>
            <a href="#flow">使用流程</a>
            <a href="#partners">合作入口</a>
            <a href="#contact">聯絡我們</a>
          </div>
          <a href="#contact" className="btn btn-primary">預約 Demo</a>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="badge">Nutrition × Bio Data × Coaching Platform</div>
            <h1>把營養餐、健康數據、營養師與教練服務，整合成一個正式可營運的平台</h1>
            <p>
              這不是只有賣餐的網站，而是一個以會員訂閱、健康數據、專業服務與遊戲化互動為核心的健康管理平台，
              可同時服務消費者、營養師、健身教練、健身房與企業客戶。
            </p>
            <div className="hero-actions">
              <a href="#plans" className="btn btn-light">查看方案價格</a>
              <a href="#partners" className="btn btn-outline-light">查看合作模式</a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel">
              <div className="panel-title">今日健康總覽</div>
              <h3>個人生物數據儀表板</h3>
              <div className="stats-grid">
                <div className="stat-card"><span>睡眠</span><strong>7h 18m</strong></div>
                <div className="stat-card"><span>步數</span><strong>8,942</strong></div>
                <div className="stat-card"><span>心率</span><strong>72 bpm</strong></div>
                <div className="stat-card"><span>體重</span><strong>95.8 kg</strong></div>
              </div>
            </div>

            <div className="panel dark">
              <div className="panel-title">AI 餐點判讀</div>
              <h3>手機拍照上傳後，自動分析 8 大營養</h3>
              <div className="mini-tags">
                <span>熱量</span>
                <span>蛋白質</span>
                <span>脂肪</span>
                <span>碳水</span>
                <span>纖維</span>
                <span>糖</span>
                <span>鈉</span>
                <span>水分</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">核心功能</div>
            <h2>一個平台，完成商品銷售、健康管理與專業服務</h2>
            <p>第 2 版網站重點，是讓訪客一看就知道這不是單一功能網站，而是可以實際商業化營運的健康管理平台。</p>
          </div>
          <div className="card-grid three">
            {features.map((item) => (
              <div className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className="section white">
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">方案價格</div>
            <h2>把一次消費，變成可持續的會員訂閱模式</h2>
            <p>從入門會員到高階健康管理方案，形成穩定月費收入。</p>
          </div>
          <div className="card-grid three">
            {plans.map((plan) => (
              <div className={`card plan-card ${plan.highlight ? 'plan-highlight' : ''}`} key={plan.name}>
                {plan.highlight && <div className="plan-badge">主推方案</div>}
                <h3>{plan.name}</h3>
                <div className="price">{plan.price}</div>
                <p>{plan.desc}</p>
                <ul className="plan-list">
                  {plan.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <a href="#contact" className="btn btn-dark full">預約顧問說明</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="flow" className="section dark-section">
        <div className="container">
          <div className="section-head light">
            <div className="section-kicker">使用流程</div>
            <h2>讓客戶與合作夥伴都能一眼看懂怎麼運作</h2>
            <p>第 2 版加入流程區塊，更適合拿去談投資、招商、合作與對外說明。</p>
          </div>
          <div className="card-grid three">
            {steps.map((step, index) => (
              <div className="card dark-card" key={step}>
                <div className="step-no">STEP {String(index + 1).padStart(2, '0')}</div>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">合作入口</div>
            <h2>不只服務消費者，也能擴展成多方合作平台</h2>
            <p>可同時成為營養師、教練、健身房、企業健康管理與品牌合作的入口。</p>
          </div>
          <div className="card-grid four">
            {partners.map((item) => (
              <div className="card" key={item}>
                <h3>{item}</h3>
                <p>了解合作方式、服務模式與平台導入流程。</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section cta-section">
        <div className="container cta-box">
          <div>
            <div className="section-kicker light-kicker">聯絡與行動</div>
            <h2>想合作、想投資、想導入，都可以從這裡開始</h2>
            <p>接下來可再串接表單、CRM、預約系統與會員後台，直接進入實際商業營運。</p>
          </div>
          <div className="cta-actions">
            <a href="#" className="btn btn-primary">立即聯絡</a>
            <a href="#" className="btn btn-outline-light">索取提案資料</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <strong>NutriSync Health</strong>
            <div>營養餐 × 生物數據 × 營養師 × 教練 × 會員訂閱平台</div>
          </div>
          <div className="footer-links">
            <span>服務條款</span>
            <span>隱私權政策</span>
            <span>聯絡我們</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
