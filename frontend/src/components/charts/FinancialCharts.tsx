import { forecastSeries, monthlySeries } from "@/data/seed";

export function RevenueExpenseChart() {
  const max = Math.max(...monthlySeries.flatMap((item) => [item.revenue, item.expenses]));
  return (
    <div className="chart-wrap simple-chart">
      {monthlySeries.map((item) => (
        <div className="chart-column" key={item.month}>
          <div className="bar-pair">
            <span className="bar revenue" style={{ height: `${(item.revenue / max) * 100}%` }} />
            <span className="bar expenses" style={{ height: `${(item.expenses / max) * 100}%` }} />
          </div>
          <small>{item.month.slice(0, 3)}</small>
        </div>
      ))}
    </div>
  );
}

export function ForecastChart() {
  const max = Math.max(...forecastSeries.flatMap((item) => [item.revenue, item.expenses]));
  return (
    <div className="chart-wrap simple-chart">
      {forecastSeries.map((item) => (
        <div className="chart-column" key={item.month}>
          <div className="bar-pair">
            <span className="bar revenue" style={{ height: `${(item.revenue / max) * 100}%` }} />
            <span className="bar expenses" style={{ height: `${(item.expenses / max) * 100}%` }} />
          </div>
          <small>{item.month.slice(0, 3)}</small>
        </div>
      ))}
    </div>
  );
}
