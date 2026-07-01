import { DashboardShell } from "@/components/layout/DashboardShell";
import { SectionPage } from "@/components/dashboard/SectionPage";

export default function Page() {
  return <DashboardShell title="المحاكاة"><SectionPage slug="simulations" /></DashboardShell>;
}
