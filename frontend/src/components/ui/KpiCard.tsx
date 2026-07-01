import { Metric } from "@/types";

export function KpiCard({ metric }: { metric: Metric }) {
  const tone = metric.tone === "danger" ? "danger" : metric.tone === "warn" ? "warn" : "";
  return (
    <div className="kpi glass">
      <div className="label">{metric.label}</div>
      <div className="value">{metric.value}</div>
      <div className={`trend ${tone}`}>{metric.trend}</div>
    </div>
  );
}
