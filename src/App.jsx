export default function NutritionBioMonitorPlatform() {
  const mealPlans = [
    {
      name: '控醣燃脂餐',
      kcal: '420 kcal',
      tags: ['高蛋白', '低糖', '減脂'],
      price: 'NT$ 220 / 份',
      desc: '適合忙碌上班族與體脂控制需求族群。',
    },
    {
      name: '增肌平衡餐',
      kcal: '560 kcal',
      tags: ['蛋白質 38g', '均衡碳水', '訓練日'],
      price: 'NT$ 260 / 份',
      desc: '適合有重量訓練與運動恢復需求的使用者。',
    },
    {
      name: '低鈉修復餐',
      kcal: '390 kcal',
      tags: ['低鈉', '高纖', '日常修復'],
      price: 'NT$ 240 / 份',
      desc: '適合重視健康管理與日常數據追蹤者。',
    },
  ];

  const featureCards = [
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

  const bioStats = [
    { label: '睡眠', value: '7h 18m', trend: '+42m' },
    { label: '步數', value: '8,942', trend: '+13%' },
    { label: '心率', value: '72 bpm', trend: '穩定' },
    { label: '體重', value: '95.8 kg', trend: '-0.7 kg' },
  ];

  const nutritionItems = [
    { label: '熱量', value: '1,685 kcal', sub: '今日攝取' },
    { label: '蛋白質', value: '112 g', sub: '達成率 87%' },
    { label: '脂肪', value: '48 g', sub: '控制良好' },
    { label: '碳水', value: '165 g', sub: '晚餐偏高' },
    { label: '膳食纖維', value: '26 g', sub: '接近目標' },
    { label: '糖', value: '31 g', sub: '低於上限' },
    { label: '鈉', value: '1,620 mg', sub: '建議再降低' },
    { label: '水分', value: '2,050 ml', sub: '已完成 82%' },
  ];

  const flowSteps = [
    {
      step: '01',
      title: '選擇目標與會員方案',
      desc: '先選減脂、增肌、日常修復或企業健康管理方案。',
    },
    {
      step: '02',
      title: '訂購營養餐與建立健康檔案',
      desc: '平台完成購買、建立會員資料與基本健康目標。',
    },
    {
      step: '03',
      title: '每日拍照記錄飲食',
      desc: '用手機上傳餐點照片，自動辨識內容與 8 大營養。',
    },
    {
      step: '04',
      title: '串接穿戴裝置',
      desc: '同步步數、睡眠、心率、體重與運動消耗等數據。',
    },
    {
      step: '05',
      title: '預約營養師 / 教練',
      desc: '依據真實數據安排線上或實體專業服務。',
    },
    {
      step: '06',
      title: '持續追蹤與參加挑戰',
      desc: '透過排名、任務與獎勵提升黏著度與續約率。',
    },
  ];

  const pricingPlans = [
    {
      name: '基礎會員',
      price: 'NT$ 2,980 / 月',
      desc: '適合先開始建立健康管理習慣的會員。',
      items: ['每月 12 份營養餐', '基本飲食紀錄', '個人健康儀表板', '每月 1 次線上營養建議'],
      highlight: false,
    },
    {
      name: '進階管理',
      price: 'NT$ 8,000 / 月',
      desc: '適合需要持續飲食與訓練規劃的核心會員。',
      items: ['每月 30 份營養餐', 'AI 拍照辨識與 8 大營養分析', '每月 2 次營養師諮詢', '每月 2 次教練課程'],
      highlight: true,
    },
    {
      name: '高階健康方案',
      price: 'NT$ 15,000 / 月',
      desc: '適合高需求客戶與高黏著度會員。',
      items: ['每月 30 份營養餐', '完整穿戴數據整合', '每月 2 次營養師 1 對 1', '每月 2 次教練 1 對 1'],
      highlight: false,
    },
  ];

  const partnerTypes = [
    {
      title: '營養師加入平台',
      desc: '提供線上諮詢、飲食建議與會員追蹤服務。',
    },
    {
      title: '健身教練加入平台',
      desc: '提供線上課、實體課與健康成效追蹤。',
    },
    {
      title: '健身房 / 場館合作',
      desc: '串接實體上課、方案銷售與會員導流。',
    },
    {
      title: '企業健康管理方案',
      desc: '提供員工健康計畫、數據追蹤與福利整合。',
    },
  ];

  const challengeCards = [
    {
      name: '每週跑步距離挑戰',
      desc: '7 天累積跑步距離最高者，可獲得免費營養餐 7 份。',
      badge: '本週進行中',
    },
    {
      name: '連續飲食紀錄挑戰',
      desc: '連續 14 天拍照上傳餐點並完成紀錄，可獲得教練折扣券。',
      badge: '熱門活動',
    },
    {
      name: '步數排行賽',
      desc: '穿戴裝置同步步數，前 10 名可獲得品牌贈品。',
      badge: '可串接裝置',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="text-lg font-bold tracking-wide">NutriSync Health</div>
          <nav className="hidden gap-6 text-sm text-slate-200 md:flex">
            <a href="#features" className="hover:text-white">功能介紹</a>
            <a href="#plans" className="hover:text-white">方案價格</a>
            <a href="#flow" className="hover:text-white">使用流程</a>
            <a href="#partners" className="hover:text-white">合作入口</a>
            <a href="#contact" className="hover:text-white">聯絡我們</a>
          </nav>
          <a href="#contact" className="rounded-2xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400">
            預約 Demo
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-800 to-lime-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-16 top-12 h-52 w-52 rounded-full bg-white blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-lime-300 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur">
                Nutrition × Bio Data × Coaching Platform
              </div>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                把營養餐、健康數據、營養師與教練服務，整合成一個正式可營運的平台
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-emerald-50 md:text-lg">
                這不是只有賣餐的網站，而是一個以會員訂閱、健康數據、專業服務與遊戲化互動為核心的健康管理平台，可同時服務消費者、營養師、健身教練、健身房與企業客戶。
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#plans" className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-emerald-900 shadow-lg transition hover:-translate-y-0.5">
                  查看方案價格
                </a>
                <a href="#partners" className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                  查看合作模式
                </a>
              </div>
              <div className="mt-8 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  ['會員訂閱', 'Recurring Revenue'],
                  ['專家預約', 'Consulting'],
                  ['穿戴串接', 'Wearables'],
                  ['挑戰機制', 'Retention'],
                ].map(([title, sub]) => (
                  <div key={title} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                    <div className="text-sm font-semibold">{title}</div>
                    <div className="mt-1 text-xs text-emerald-100">{sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-emerald-100">今日健康總覽</div>
                    <div className="mt-1 text-2xl font-bold">個人生物數據儀表板</div>
                  </div>
                  <div className="rounded-2xl bg-lime-300 px-3 py-1 text-sm font-semibold text-emerald-950">
                    已同步穿戴裝置
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-4">
                  {bioStats.map((item) => (
                    <div key={item.label} className="rounded-2xl bg-slate-950/20 p-4">
                      <div className="text-sm text-emerald-100">{item.label}</div>
                      <div className="mt-2 text-2xl font-bold">{item.value}</div>
                      <div className="mt-1 text-xs text-lime-200">{item.trend}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/15 bg-slate-950/20 p-5 backdrop-blur">
                <div className="text-sm text-emerald-100">AI 餐點判讀</div>
                <div className="mt-1 text-xl font-semibold">手機拍照上傳後，自動分析 8 大營養</div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm md:grid-cols-4">
                  {['熱量', '蛋白質', '脂肪', '碳水', '纖維', '糖', '鈉', '水分'].map((item) => (
                    <div key={item} className="rounded-xl bg-white/10 px-3 py-2 text-center">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">核心功能</div>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">一個平台，完成商品銷售、健康管理與專業服務</h2>
          <p className="mt-4 text-slate-600 leading-7">
            第 2 版網站重點，是讓訪客一看就知道這不是單一功能網站，而是可以實際商業化營運的健康管理平台。
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featureCards.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-xl font-bold">{feature.title}</div>
              <p className="mt-3 text-sm leading-7 text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="plans" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">方案價格</div>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">把一次消費，變成可持續的會員訂閱模式</h2>
            <p className="mt-4 text-slate-600 leading-7">
              可依目標族群規劃不同價格帶，從入門會員到高階健康管理方案，形成穩定月 recurring revenue。
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl border p-6 shadow-sm ${plan.highlight ? 'border-emerald-500 bg-emerald-50 shadow-lg' : 'border-slate-200 bg-slate-50'}`}
              >
                {plan.highlight && (
                  <div className="mb-4 inline-flex rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                    主推方案
                  </div>
                )}
                <div className="text-2xl font-bold">{plan.name}</div>
                <div className="mt-3 text-3xl font-extrabold text-emerald-800">{plan.price}</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{plan.desc}</p>
                <div className="mt-6 space-y-3">
                  {plan.items.map((item) => (
                    <div key={item} className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                  預約顧問說明
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">商城與服務</div>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">從餐點切入，建立高頻互動與高續約機制</h2>
            <p className="mt-4 max-w-2xl text-slate-600 leading-7">
              透過營養餐作為高頻入口，再延伸到飲食紀錄、數據追蹤、營養師諮詢、教練課程與企業合作方案，形成完整健康管理閉環。
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {mealPlans.map((plan) => (
                <div key={plan.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="text-xl font-bold">{plan.name}</div>
                  <div className="mt-2 text-sm text-slate-500">{plan.kcal}</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {plan.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{plan.desc}</p>
                  <div className="mt-5 text-lg font-bold text-emerald-800">{plan.price}</div>
                  <button className="mt-4 w-full rounded-2xl bg-emerald-800 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
                    加入購物車
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">專業後台</div>
            <h3 className="mt-3 text-2xl font-bold">營養師與教練可檢視完整健康資料</h3>
            <p className="mt-4 text-slate-600 leading-7">
              專業人員可在諮詢前看到飲食紀錄、運動紀錄、穿戴裝置數據與歷史建議，讓服務更加精準，提升專業價值與客戶續約率。
            </p>
            <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
              <div className="text-lg font-semibold">可檢視的資料內容</div>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                {[
                  '檢視會員飲食紀錄與營養趨勢',
                  '查看步數、睡眠、心率、體重等資料',
                  '在預約諮詢中提供精準建議',
                  '建立追蹤紀錄與下次行動計畫',
                ].map((item) => (
                  <li key={item} className="rounded-xl bg-slate-50 p-3">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="flow" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">使用流程</div>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">讓客戶與合作夥伴都能一眼看懂怎麼運作</h2>
            <p className="mt-4 text-slate-300 leading-7">
              第 2 版加入流程區塊，讓這個網站更適合拿去談投資、招商、合作與對外說明。
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {flowSteps.map((item) => (
              <div key={item.step} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold text-emerald-300">STEP {item.step}</div>
                <div className="mt-2 text-xl font-bold">{item.title}</div>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">AI 與數據</div>
            <h2 className="mt-3 text-3xl font-bold">拍照紀錄飲食，自動生成營養資料</h2>
            <p className="mt-4 max-w-2xl text-slate-300 leading-7">
              使用者上傳照片後，系統可分析餐點內容與估算營養成分，並將每一餐記錄在個人健康檔案中，成為營養師與教練的決策基礎。
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {nutritionItems.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm text-slate-300">{item.label}</div>
                  <div className="mt-2 text-xl font-bold">{item.value}</div>
                  <div className="mt-1 text-xs text-emerald-300">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">穿戴裝置串接</div>
            <h2 className="mt-3 text-3xl font-bold">把身體數據變成更精準的建議</h2>
            <p className="mt-4 text-slate-600 leading-7">
              串接 Apple Watch、Garmin、Fitbit、智慧體重計等裝置，整合睡眠、步數、心率、體重、體脂與運動表現，讓推薦更貼近真實狀態。
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {bioStats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-emerald-100 bg-slate-50 p-5 shadow-sm">
                  <div className="text-sm text-slate-500">{item.label}</div>
                  <div className="mt-2 text-2xl font-bold text-slate-900">{item.value}</div>
                  <div className="mt-1 text-xs text-emerald-700">{item.trend}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-lime-50 to-emerald-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">遊戲化營運</div>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">挑戰、排行、獎勵，讓使用者更願意持續使用</h2>
              <p className="mt-4 text-slate-600 leading-7">
                對會員來說，這是提高動機的互動功能；對平台來說，這是提高留存率、日活與續約率的重要工具。
              </p>
            </div>
            <div className="grid gap-4">
              {challengeCards.map((challenge) => (
                <div key={challenge.name} className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="text-xl font-bold">{challenge.name}</div>
                    <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                      {challenge.badge}
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{challenge.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="partners" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">合作入口</div>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">不只服務消費者，也能擴展成多方合作平台</h2>
          <p className="mt-4 text-slate-600 leading-7">
            這個平台可同時成為營養師、教練、健身房、企業健康管理與品牌合作的入口，擴大收入來源與市場規模。
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {partnerTypes.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xl font-bold">{item.title}</div>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
              <button className="mt-5 rounded-2xl border border-emerald-700 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50">
                了解合作方式
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="rounded-[2rem] bg-slate-900 px-6 py-10 text-white md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">聯絡與行動</div>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">想合作、想投資、想導入，都可以從這裡開始</h2>
              <p className="mt-4 max-w-3xl text-slate-300 leading-7">
                第 2 版官網已具備正式對外溝通的基本結構。接下來可再串接表單、CRM、預約系統與會員後台，直接進入實際商業營運。
              </p>
            </div>
            <div className="grid gap-3 rounded-3xl bg-white/5 p-5">
              {[
                '預約產品 Demo',
                '洽談營養師 / 教練合作',
                '企業健康方案導入',
                '健身房 / 場館串接合作',
                '投資與策略合作洽談',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  {item}
                </div>
              ))}
              <div className="mt-2 flex flex-wrap gap-3">
                <button className="rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400">
                  立即聯絡
                </button>
                <button className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  索取提案資料
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <div className="font-semibold text-slate-800">NutriSync Health</div>
            <div className="mt-1">營養餐 × 生物數據 × 營養師 × 教練 × 會員訂閱平台</div>
          </div>
          <div className="flex flex-wrap gap-4">
            <span>服務條款</span>
            <span>隱私權政策</span>
            <span>聯絡我們</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
