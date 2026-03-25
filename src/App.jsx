const mealCards = [
  { title: '控醣燃脂餐', note: '高蛋白 / 低糖 / 減脂', price: 'NT$220 / 份' },
  { title: '增肌平衡餐', note: '蛋白質 38g / 訓練日', price: 'NT$260 / 份' },
  { title: '低鈉修復餐', note: '低鈉 / 高纖 / 日常修復', price: 'NT$240 / 份' },
]

const metrics = [
  ['熱量', '1,685 kcal'],
  ['蛋白質', '112 g'],
  ['脂肪', '48 g'],
  ['碳水', '165 g'],
  ['步數', '8,942'],
  ['睡眠', '7h 18m'],
]

const features = [
  '營養餐購買與訂閱',
  '營養師一對一諮詢預約',
  '健身教練線上 / 實體課程預約',
  '手機拍照辨識餐點與 8 大營養',
  '穿戴裝置生物數據整合',
  '每週挑戰賽 / 排行榜 / 獎勵機制',
]

export default function App() {
  return (
    <div>
      <header className="hero">
        <div className="container">
          <div className="badge">Nutrition × Bio Data × Coaching</div>
          <h1>把營養餐、健康數據、營養師與教練服務，整合成一個平台</h1>
          <p className="lead">
            這是一個以會員訂閱為核心的健康管理平台。使用者可買餐、拍照紀錄飲食、串接穿戴裝置，
            並讓營養師與教練依據真實數據給出更精準的建議。
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#features">查看功能</a>
            <a className="btn btn-secondary" href="#plans">查看方案</a>
          </div>
        </div>
      </header>

      <main className="container">
        <section id="features" className="section">
          <div className="section-head">
            <span>核心功能</span>
            <h2>一個平台，完成商品銷售、健康管理與專業服務</h2>
          </div>
          <div className="grid three">
            {features.map((item) => (
              <div className="card" key={item}>
                <h3>{item}</h3>
                <p>可依平台角色延伸會員、專家後台與管理後台，適合作為 MVP 與正式版產品基礎。</p>
              </div>
            ))}
          </div>
        </section>

        <section id="plans" className="section split">
          <div>
            <div className="section-head left">
              <span>營養餐商城</span>
              <h2>從餐點切入，建立高頻互動</h2>
            </div>
            <div className="grid three">
              {mealCards.map((item) => (
                <div className="card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.note}</p>
                  <div className="price">{item.price}</div>
                  <button className="btn btn-primary small">加入購物車</button>
                </div>
              ))}
            </div>
          </div>

          <div className="panel">
            <span className="panel-tag">今日健康總覽</span>
            <h3>個人生物數據儀表板</h3>
            <div className="metrics">
              {metrics.map(([label, value]) => (
                <div className="metric" key={label}>
                  <div className="metric-label">{label}</div>
                  <div className="metric-value">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section split reverse">
          <div className="panel dark">
            <span className="panel-tag">AI 餐點判讀</span>
            <h3>上傳照片後自動分析 8 大營養</h3>
            <p>
              使用者可用手機拍照上傳餐點，系統辨識主要食材與份量，估算熱量、蛋白質、脂肪、碳水、
              纖維、糖、鈉與水分，並保留人工修正空間。
            </p>
          </div>
          <div>
            <div className="section-head left">
              <span>專家後台</span>
              <h2>營養師與教練可檢視完整健康資料</h2>
            </div>
            <div className="card notes">
              <ul>
                <li>檢視會員飲食紀錄與營養趨勢</li>
                <li>查看步數、睡眠、心率、體重等資料</li>
                <li>在預約諮詢中提供精準建議</li>
                <li>建立追蹤紀錄與下次行動計畫</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section cta">
          <div>
            <span>商業模式</span>
            <h2>不只是賣餐，而是做健康管理平台</h2>
            <p>
              收入來源可包括：營養餐銷售、月訂閱、營養師諮詢、教練課程、企業方案、品牌合作、挑戰賽贊助與聯盟商品。
            </p>
          </div>
          <a className="btn btn-primary" href="mailto:hello@example.com">聯絡合作</a>
        </section>
      </main>
    </div>
  )
}
