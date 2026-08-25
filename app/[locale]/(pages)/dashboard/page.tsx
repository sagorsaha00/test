"use client";
import { useState } from "react";
import { LayoutDashboard, Megaphone, FileText } from "lucide-react"; // FileText যোগ করতে ভুলবেন না
import DashboardSection from "../../../components/dashboardAllComponents/dashboardSection";
import ArticlesSection from "../../../components/dashboardAllComponents/articleSection";
import UpdatesSection from "../../../components/dashboardAllComponents/updatesSection";
import { SidebarItem } from "../../../components/lib/icons";
import ManageContent from "../../../components/dashboardAllComponents/manageContent";

type MenuType = "Dashboard" | "Articles" | "Updates" | "Managecontent";

export default function MarkoodCenterDashboard() {
  const [activeMenu, setActiveMenu] = useState<MenuType>("Dashboard");

  return (
    <div className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <div className="flex min-h-screen">
        <aside className="sticky top-0 h-screen hidden w-[245px] shrink-0 border-r border-slate-200 bg-white lg:block">
          <div className="flex h-full flex-col">
            <nav className="flex-1 px-4 py-6 ">
              <p className="mb-3 px-3 text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                Workspace
              </p>
              <div className="space-y-1 ">
                <SidebarItem
                  icon={LayoutDashboard}
                  label="Dashboard"
                  active={activeMenu === "Dashboard"}
                  onClick={() => setActiveMenu("Dashboard")}
                />
                <SidebarItem
                  icon={FileText}
                  label="Articles"
                  active={activeMenu === "Articles"}
                  onClick={() => setActiveMenu("Articles")}
                />

                <SidebarItem
                  icon={Megaphone}
                  label="Updates"
                  active={activeMenu === "Updates"}
                  onClick={() => setActiveMenu("Updates")}
                />
                <SidebarItem
                  icon={Megaphone}
                  label="Manage content"
                  active={activeMenu === "Managecontent"}
                  onClick={() => setActiveMenu("Managecontent")}
                />
              </div>
            </nav>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          {activeMenu === "Dashboard" && <DashboardSection />}
          {activeMenu === "Articles" && <ArticlesSection />}
          {activeMenu === "Updates" && <UpdatesSection />}
          {activeMenu === "Managecontent" && <ManageContent />}
        </main>
      </div>
    </div>
  );
}
