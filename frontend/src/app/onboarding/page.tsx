const steps = [
  ["Business Identity", "SAHM X Labs، تقنية مالية، جدة، المملكة العربية السعودية، SAR."],
  ["Financial Structure", "إيرادات 428K، مصروفات 286K، التزامات 72K، اشتراكات 29.5K."],
  ["Business Goals", "زيادة الإيرادات 25% وخفض التكاليف 15% مع مخاطر متوسطة."],
  ["Integrations", "Open Banking Mock، CSV/Excel Import، ERP لاحقًا."],
  ["AI Financial Profile", "Financial DNA، Health Score، Risk Profile، توصيات أولية."]
];

export default function OnboardingPage() {
  return (
    <main className="container" style={{ padding: "50px 0" }}>
      <section className="panel glass">
        <span className="pill">Company Onboarding</span>
        <h1>إعداد الشركة في 5 خطوات</h1>
        <p>تجربة onboarding عربية افتراضيًا وجاهزة لربط API لاحقًا.</p>
      </section>
      <div className="dash-grid" style={{ marginTop: 16 }}>
        {steps.map(([title, text], index) => (
          <section className="panel glass span-6" key={title}>
            <span className="nav-index">{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="field"><label>مدخلات المرحلة</label><input defaultValue={text} /></div>
          </section>
        ))}
        <section className="panel glass span-12">
          <h3>Financial DNA Generated</h3>
          <div className="metric-grid">
            <div className="kpi glass"><div className="label">Health Score</div><div className="value">83%</div><div className="trend">قوي</div></div>
            <div className="kpi glass"><div className="label">Risk Profile</div><div className="value">متوسط منخفض</div><div className="trend warn">تعاقدي</div></div>
            <div className="kpi glass"><div className="label">Initial Recommendation</div><div className="value">خفض الاشتراكات</div><div className="trend">أولوية</div></div>
            <div className="kpi glass"><div className="label">AI Readiness</div><div className="value">Mock</div><div className="trend">OpenAI-ready</div></div>
          </div>
        </section>
      </div>
    </main>
  );
}
