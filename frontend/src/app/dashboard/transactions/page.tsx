import { DashboardShell } from "@/components/layout/DashboardShell";
import { SectionPage } from "@/components/dashboard/SectionPage";

export default function Page() {
  return <DashboardShell title="المعاملات"><SectionPage slug="transactions" /></DashboardShell>;
}
