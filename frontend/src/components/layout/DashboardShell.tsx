import Link from "next/link";
import { Brand } from "@/components/ui/Brand";

const navItems = [
  ["overview", "نظرة تنفيذية"],
  ["ai-cfo", "AI CFO"],
  ["analytics", "التحليلات"],
  ["financials", "الحسابات"],
  ["transactions", "المعاملات"],
  ["cash-flow", "التدفق النقدي"],
  ["simulations", "المحاكاة"],
  ["contracts", "العقود"],
  ["negotiations", "التفاوض"],
  ["predictions", "التنبؤ"],
  ["investments", "الاستثمارات"],
  ["suppliers", "الموردون"],
  ["subscriptions", "الاشتراكات"],
  ["reports", "التقارير"],
  ["notifications", "التنبيهات"],
  ["settings", "الإعدادات"],
  ["admin", "الإدارة"]
];

export function DashboardShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Brand subtitle="Executive Console" />
        <div className="side-section">النظام المالي</div>
        <nav className="side-nav">
          {navItems.map(([slug, label], index) => (
            <Link key={slug} href={`/dashboard/${slug}`}>
              <span className="nav-index">{String(index + 1).padStart(2, "0")}</span>
              <span>{label}</span>
            </Link>
          ))}
        </nav>
        <div className="side-section">إجراءات</div>
        <nav className="side-nav">
          <Link href="/">الموقع الرسمي</Link>
          <Link href="/onboarding">إعداد الشركة</Link>
          <Link href="/auth">تسجيل الدخول</Link>
        </nav>
      </aside>
      <main className="main">
        <header className="topbar">
          <div>
            <h2>{title}</h2>
            <span className="muted ui-font">SAHM X Labs — SAR — جدة</span>
          </div>
          <div className="toolbar">
            <input placeholder="ابحث عن تقرير، عقد، معاملة..." />
            <Link className="btn secondary sm" href="/onboarding">إعداد الشركة</Link>
            <Link className="btn sm" href="/dashboard/ai-cfo">AI CFO</Link>
          </div>
        </header>
        <div className="content">{children}</div>
      </main>
    </div>
  );
}
