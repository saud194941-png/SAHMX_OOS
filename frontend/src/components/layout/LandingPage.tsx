import Link from "next/link";
import { Brand } from "@/components/ui/Brand";
import { RevenueExpenseChart } from "@/components/charts/FinancialCharts";

const features = [
  ["لوحة مالية تنفيذية", "مؤشرات صحة مالية، تدفق نقدي، ربحية، مصروفات، وتنبيهات."],
  ["AI CFO", "مساعد مالي ذكي يفهم سياق الشركة ويقترح قرارات تنفيذية."],
  ["محرك المحاكاة", "اختبر أثر التوظيف والقروض والتوسع والاستثمار قبل التنفيذ."],
  ["التنبؤ المالي", "توقع الإيرادات والمصروفات والسيولة والمخاطر القادمة."],
  ["تحليل العقود", "استخراج البنود الخطرة والتجديدات والالتزامات والتوصيات."],
  ["التقارير", "تقارير تنفيذية وصحة مالية ومخاطر وتدفق نقدي قابلة للتصدير."]
];

export function LandingPage() {
  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <Brand />
          <div className="nav-links">
            <a href="#vision">الرؤية</a>
            <a href="#features">المميزات</a>
            <a href="#work">أعمالنا</a>
            <a href="#ceo">الرئيس التنفيذي</a>
            <a href="#contact">تواصل</a>
          </div>
          <div className="toolbar">
            <Link href="/auth" className="btn secondary sm">دخول</Link>
            <Link href="/dashboard/overview" className="btn sm">تشغيل demo</Link>
          </div>
        </div>
      </nav>
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="pill"><span className="dot" /> منصة مالية سعودية عالمية المستوى</span>
              <h1><span className="gradient-text">سهم إكس</span><br />نظام التشغيل المالي الذكي للشركات</h1>
              <p>منصة تجمع التحليل المالي، الذكاء الاصطناعي، التنبؤ، المحاكاة، تحليل العقود، التفاوض الذكي، وإصدار التقارير داخل مركز قيادة مالي واحد.</p>
              <div className="toolbar">
                <Link href="/dashboard/overview" className="btn">ادخل مركز القيادة</Link>
                <Link href="/onboarding" className="btn secondary">ابدأ إعداد الشركة</Link>
              </div>
            </div>
            <div className="hero-card glass">
              <span className="pill">SAHMX://executive-command-center</span>
              <div style={{ marginTop: 18 }} className="mini-list">
                <div className="mini-item"><span>Financial Health</span><b>83%</b></div>
                <div className="mini-item"><span>AI CFO Live</span><b>خفض الاشتراكات يوفر 92K</b></div>
                <div className="mini-item"><span>Runway</span><b>14 شهر</b></div>
              </div>
              <RevenueExpenseChart />
            </div>
          </div>
        </section>

        <section id="vision" className="section">
          <div className="container cards">
            <div className="card glass"><span className="pill">الرؤية</span><h2>من أرقام صامتة إلى قرارات ذكية</h2><p>SAHM X لا يكتفي بعرض الإيرادات والمصروفات، بل يفهمها ويتوقع أثرها ويحولها إلى توصيات قابلة للتطبيق.</p></div>
            <div className="card glass"><span className="pill">المشكلة</span><h2>المال موزع بين أدوات كثيرة</h2><p>الشركات الصغيرة والمتوسطة تحتاج مركزًا واحدًا يرى الحسابات والعقود والمخاطر والتوقعات دون ازدحام.</p></div>
            <div className="card glass"><span className="pill">الحل</span><h2>Bloomberg + OpenAI + Stripe بهوية سعودية</h2><p>نظام تشغيل مالي ذكي للشركات ورواد الأعمال، عربي أولًا وجاهز للربط العالمي.</p></div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="container">
            <span className="pill">أقسام المنصة المالية</span>
            <h2>كل ما تحتاجه الإدارة المالية في SAHMX OS</h2>
            <div className="cards">
              {features.map(([title, text]) => <div className="card glass" key={title}><h3>{title}</h3><p>{text}</p></div>)}
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="container cards">
            {["ZENO — البنك الصامت", "SAHM Store", "SAHMX NEXUS", "AI for Games", "Financial OS", "Risk Intelligence"].map((item) => (
              <div className="card glass" key={item}><h3>{item}</h3><p>مبادرة من منظومة سهم إكس لبناء منتجات ذكية ذات طابع سعودي وامتداد عالمي.</p></div>
            ))}
          </div>
        </section>

        <section id="ceo" className="section">
          <div className="container panel glass">
            <span className="pill">كلمة الرئيس التنفيذي</span>
            <p className="lead">بصفتي الرئيس التنفيذي لفريق سهم إكس، أؤمن أن مستقبل الإدارة المالية لن يعتمد فقط على تسجيل الأرقام، بل على فهمها وتحويلها إلى قرارات ذكية. سهم إكس ليس مجرد منصة مالية، بل نظام تشغيل مالي ذكي يهدف إلى تمكين الشركات من قراءة واقعها، توقع مستقبلها، وتقليل مخاطرها باستخدام الذكاء الاصطناعي والتحليل التنبؤي.</p>
            <h3>سعود سعد العتيبي</h3>
            <p className="muted">الرئيس التنفيذي لفريق سهم إكس</p>
          </div>
        </section>

        <section className="section">
          <div className="container metric-grid">
            {["83% صحة مالية", "14 شهر Runway", "92K توفير سنوي", "87% ثقة التوقع"].map((stat) => <div className="kpi glass" key={stat}><div className="value">{stat}</div><div className="trend">Demo Seed</div></div>)}
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container panel glass">
            <span className="pill">تواصل معنا</span>
            <h2>جاهز لبناء مستقبل مالي أذكى؟</h2>
            <p className="lead">فريق سهم إكس — جدة، المملكة العربية السعودية<br />البريد: sahmx.sa@gmail.com<br />الحساب: @SAHMX_SA</p>
          </div>
        </section>
      </main>
      <footer><div className="container">© 2026 SAHM X — AI Financial Operating System.</div></footer>
    </>
  );
}
