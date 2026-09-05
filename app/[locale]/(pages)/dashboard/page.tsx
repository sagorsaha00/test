"use client";

import { useState } from "react";
import { LayoutDashboard, Megaphone, FileText } from "lucide-react";

import DashboardSection from "../../../components/dashboardAllComponents/dashboardSection";
import ArticleSection from "../../../components/dashboardAllComponents/ArticleSection";
import ManageContent from "../../../components/dashboardAllComponents/manageContent";

type MenuType = "Dashboard" | "Articles" | "Managecontent";

export default function MarkoodCenterDashboard() {
  const [activeMenu, setActiveMenu] = useState<MenuType>("Dashboard");

  const menuItems: { key: MenuType; label: string; icon: React.ElementType }[] =
    [
      { key: "Dashboard", label: "Dashboard", icon: LayoutDashboard },
      { key: "Articles", label: "Articles", icon: FileText },
      { key: "Managecontent", label: "Manage content", icon: Megaphone },
    ];

  return (
    <div className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <div className="flex min-h-screen">
        {/* ================= SIDEBAR ================= */}
        <aside className="sticky top-0 hidden h-screen w-[245px] shrink-0 border-r border-slate-200 bg-white lg:block">
          <div className="flex h-full flex-col">
            <nav className="flex-1 px-4 py-6">
              <p className="mb-3 px-3 text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                Workspace
              </p>

              <div className="space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeMenu === item.key;

                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => {
                        console.log(`${item.label} clicked`);
                        setActiveMenu(item.key);
                      }}
                      className={`group relative z-10 flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs font-semibold transition-all ${
                        isActive
                          ? "bg-[#0066FF] text-white shadow-[0_8px_20px_rgba(0,102,255,0.18)]"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <Icon
                        size={16}
                        className={
                          isActive
                            ? "text-white"
                            : "text-slate-400 group-hover:text-[#0066FF]"
                        }
                      />

                      <span>{item.label}</span>

                      {isActive && (
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-white" />
                      )}
                    </button>
                  );
                })}
              </div>
            </nav>
          </div>
        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <main className="min-w-0 flex-1">
          {activeMenu === "Dashboard" && <DashboardSection />}
          {activeMenu === "Articles" && <ArticleSection />}
          {activeMenu === "Managecontent" && <ManageContent />}
        </main>
      </div>
    </div>
  );
}
