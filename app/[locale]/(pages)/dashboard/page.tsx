"use client";

import { useState } from "react";
import { LayoutDashboard, Megaphone, FileText, Menu, X } from "lucide-react";

import DashboardSection from "../../../components/dashboardAllComponents/dashboardSection";
import ArticleSection from "../../../components/dashboardAllComponents/articleSectionDashboard";
import ManageContent from "../../../components/dashboardAllComponents/manageContent";
import { MenuType } from "@/lib/type";

export default function MarkoodCenterDashboard() {
  const [activeMenu, setActiveMenu] = useState<MenuType>("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems: {
    key: MenuType;
    label: string;
    icon: React.ElementType;
  }[] = [
    {
      key: "Dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      key: "Articles",
      label: "Articles",
      icon: FileText,
    },
    {
      key: "Managecontent",
      label: "Manage content",
      icon: Megaphone,
    },
  ];

  const handleMenuClick = (menu: MenuType) => {
    setActiveMenu(menu);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f6f8fb] text-blue-650">
      <div className="flex min-h-screen">
        <aside className="sticky top-0 hidden h-screen w-[235px] shrink-0 border-r border-slate-200 bg-white lg:block">
          <div className="flex h-full flex-col">
            <nav className="flex-1 px-3 py-6">
              <div className="space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeMenu === item.key;

                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => handleMenuClick(item.key)}
                      className={`group relative flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs font-semibold transition-all ${
                        isActive
                          ? "bg-[#0066FF] text-white shadow-[0_8px_20px_rgba(5,8,22,0.12)]"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <Icon
                        size={16}
                        strokeWidth={1.8}
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

        {sidebarOpen && (
          <div
            className="fixed inset-x-0 bottom-0 top-16 z-40 bg-slate-950/40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <aside
          className={`fixed left-0 top-16 z-50 h-[calc(100vh-4rem)] w-[280px] border-r border-slate-200 bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col">
            <div className="flex h-[64px] shrink-0 items-center justify-between border-b border-slate-200 px-5">
              <button
                type="button"
                onClick={() => setSidebarOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-900"
                aria-label="Close sidebar"
              >
                <X size={19} strokeWidth={1.8} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-6">
              <div className="space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeMenu === item.key;

                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => handleMenuClick(item.key)}
                      className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-[#0066FF] text-white shadow-[0_8px_20px_rgba(5,8,22,0.12)]"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.8}
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

        <main className="min-w-0 flex-1">
          <div className="flex h-16 items-center border-b border-slate-200 bg-white px-4 lg:hidden">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
              aria-label="Open sidebar"
            >
              <Menu size={21} strokeWidth={1.8} />
            </button>

            <div className="ml-3">
              <p className="text-sm font-bold text-slate-950">
                {activeMenu === "Managecontent" ? "Manage content" : activeMenu}
              </p>
            </div>
          </div>

          {activeMenu === "Dashboard" && <DashboardSection />}

          {activeMenu === "Articles" && <ArticleSection />}

          {activeMenu === "Managecontent" && <ManageContent />}
        </main>
      </div>
    </div>
  );
}
