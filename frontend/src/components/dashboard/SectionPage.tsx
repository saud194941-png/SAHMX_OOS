import { ForecastChart, RevenueExpenseChart } from "@/components/charts/FinancialCharts";
import { DataTable } from "@/components/ui/DataTable";
import { KpiCard } from "@/components/ui/KpiCard";
import { dashboardSections } from "@/data/seed";

export function SectionPage({ slug }: { slug: string }) {
  const section = dashboardSections.find((item) => item.slug === slug) ?? dashboardSections[0];
  const showForecast = ["predictions", "cash-flow", "reports"].includes(slug);
  const showRevenue = ["analytics", "financials", "transactions"].includes(slug);

  return (
    <div className="dash-grid">
      <section className="panel glass span-12">
        <span className="pill">{section.eyebrow}</span>
        <h1 className="display-font">{section.title}</h1>
        <p>{section.summary}</p>
      </section>

      {section.metrics.map((metric) => <KpiCard key={metric.label} metric={metric} />)}

      {(showRevenue || showForecast) && (
        <section className="panel glass span-8">
          <h3>{showForecast ? "Forecast Chart" : "Revenue & Expenses"}</h3>
          {showForecast ? <ForecastChart /> : <RevenueExpenseChart />}
        </section>
      )}

      {section.table && (
        <section className={`panel glass ${showRevenue || showForecast ? "span-4" : "span-8"}`}>
          <h3>{section.tableTitle}</h3>
          <DataTable rows={section.table} />
        </section>
      )}

      {section.insights && (
        <section className={`panel glass ${section.table ? "span-4" : "span-6"}`}>
          <h3>AI Insights</h3>
          <div className="mini-list">
            {section.insights.map((insight, index) => (
              <div className="mini-item" key={insight}>
                <span>{insight}</span>
                {index < 2 && <span className={`status ${index === 0 ? "warn" : ""}`}>متابعة</span>}
              </div>
            ))}
          </div>
        </section>
      )}

      {section.actions && (
        <section className="panel glass span-6">
          <h3>Quick Actions</h3>
          <div className="mini-list">
            {section.actions.map((action) => (
              <div className="mini-item" key={action}>
                <span>{action}</span>
                <button className="btn secondary sm">تنفيذ</button>
              </div>
            ))}
          </div>
        </section>
      )}

      {slug === "contracts" && (
        <section className="panel glass span-12">
          <h3>تحليل عقد AI Mock</h3>
          <div className="form-grid">
            <div className="field"><label>رفع ملف mock</label><input type="file" /></div>
            <div className="field"><label>Risk Score</label><input readOnly value="42/100 - متوسط" /></div>
          </div>
          <p>تم اكتشاف بند تجديد تلقائي وشرط إلغاء قبل 60 يومًا. التوصية: تعديل شرط الإلغاء إلى 30 يومًا وإضافة سقف زيادة سعرية.</p>
        </section>
      )}

      {slug === "simulations" && (
        <section className="panel glass span-12">
          <h3>Simulation Input</h3>
          <div className="form-grid">
            <div className="field"><label>السيناريو</label><select><option>Hire employee</option><option>Open branch</option><option>Increase marketing</option><option>Take loan</option><option>Reduce subscriptions</option><option>Revenue drop</option><option>New investment</option></select></div>
            <div className="field"><label>التكلفة</label><input defaultValue="90000" /></div>
            <div className="field"><label>الأثر المتوقع</label><input defaultValue="+42% ROI" /></div>
            <div className="field"><label>Safety Score</label><input defaultValue="78%" /></div>
          </div>
          <p>AI Recommendation: نفّذ القرار على مراحل، واربطه بسقف تكلفة وربحية واضحة قبل الالتزام الكامل.</p>
        </section>
      )}
    </div>
  );
}
