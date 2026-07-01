import Link from "next/link";
import { ForecastChart, RevenueExpenseChart } from "@/components/charts/FinancialCharts";
import { KpiCard } from "@/components/ui/KpiCard";
import { alerts, company } from "@/data/seed";

const metrics = [
  { label: "Financial Health Score", value: `${company.health}%`, trend: "قوي", tone: "good" as const },
  { label: "Revenue", value: "428K", trend: "+18% شهريًا", tone: "good" as const },
  { label: "Expenses", value: "286K", trend: "قابل للتحسين", tone: "warn" as const },
  { label: "Net Profit", value: "142K", trend: "هامش 33%", tone: "good" as const },
  { label: "Burn Rate", value: "98K", trend: "مراقبة", tone: "warn" as const },
  { label: "Cash Runway", value: "14 شهر", trend: "آمن", tone: "good" as const }
];

export function Overview() {
  return (
    <div className="dash-grid">
      <section className="panel glass span-12">
        <div className="toolbar">
          <div>
            <span className="pill"><span className="dot" /> SAHM X Command Center</span>
            <h1 className="display-font">لوحة قيادة مالية تنفيذية تجمع القرار، المخاطر، والسيولة في شاشة واحدة.</h1>
            <p>الوضع المالي مستقر، النمو إيجابي، وأقوى إجراء فوري هو ضبط المصروفات المتكررة قبل التوسع.</p>
          </div>
          <div className="toolbar">
            <Link className="btn sm" href="/dashboard/ai-cfo">اسأل AI CFO</Link>
            <Link className="btn secondary sm" href="/dashboard/simulations">اختبر قرارًا</Link>
            <Link className="btn secondary sm" href="/dashboard/reports">توليد تقرير</Link>
          </div>
        </div>
      </section>

      {metrics.map((metric) => <KpiCard key={metric.label} metric={metric} />)}

      <section className="panel glass span-8">
        <h3>Executive Summary</h3>
        <RevenueExpenseChart />
      </section>
      <section className="panel glass span-4">
        <h3>AI CFO Decision of the Day</h3>
        <p>ابدأ بخفض الاشتراكات المتداخلة والتفاوض مع PayGate قبل أي توسع. الأثر المتوقع: توفير 92,000 ر.س سنويًا.</p>
        <div className="mini-list">
          <div className="mini-item"><span>Safety Score</span><b>86%</b></div>
          <div className="mini-item"><span>Risk Level</span><span className="status warn">متوسط</span></div>
          <div className="mini-item"><span>Cash Impact</span><b>+29K</b></div>
        </div>
      </section>

      <section className="panel glass span-4">
        <h3>AI Insights</h3>
        <div className="mini-list">
          <div className="mini-item"><span>التوسع ممكن لكن مشروط</span><span className="status warn">حذر</span></div>
          <div className="mini-item"><span>أكبر هدر: CloudX + API</span><span className="status danger">مهم</span></div>
          <div className="mini-item"><span>هامش الربح قابل للتحسين</span><span className="status">جيد</span></div>
        </div>
      </section>
      <section className="panel glass span-4">
        <h3>Risk Watchlist</h3>
        <div className="mini-list">
          {alerts.slice(0, 3).map((alert) => <div className="mini-item" key={alert}><span>{alert}</span></div>)}
        </div>
      </section>
      <section className="panel glass span-4">
        <h3>KPI Snapshot</h3>
        <div className="mini-list">
          <div className="mini-item"><span>ARR</span><b>5.1M</b></div>
          <div className="mini-item"><span>MRR</span><b>428K</b></div>
          <div className="mini-item"><span>LTV/CAC</span><b>4.8x</b></div>
        </div>
      </section>

      <section className="panel glass span-8">
        <h3>Mini Forecast</h3>
        <ForecastChart />
      </section>
      <section className="panel glass span-4">
        <h3>Quick Actions</h3>
        <div className="mini-list">
          {["إضافة معاملة", "تحليل عقد", "تشغيل محاكاة", "توليد تقرير", "مراجعة تنبيه"].map((action) => (
            <div className="mini-item" key={action}><span>{action}</span><button className="btn secondary sm">فتح</button></div>
          ))}
        </div>
      </section>
    </div>
  );
}
