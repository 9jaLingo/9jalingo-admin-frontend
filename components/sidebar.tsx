"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  CreditCard,
  Mic,
  LayoutDashboard,
  Package2,
  Settings,
  Users,
  LogOut,
  PanelLeftClose,
} from "lucide-react";
import { navItems } from "@/app/price/types";

const navIcons = {
  "layout-dashboard": LayoutDashboard,
  "package-2": Package2,
  "mic": Mic,
  users: Users,
  "credit-card": CreditCard,
  "bar-chart-3": BarChart3,
  settings: Settings,
} as const;

const routeByLabel: Record<string, string> = {
  Dashboard: "/",
  "Model Pricing": "/price",
  Voices: "/voices",
  Users: "/user",
  "Credit Packages": "/credit-packages",
  Analytics: "/analytics",
  Settings: "/settings",
};

type SidebarProps = {
  activeHref?: string;
};

export function Sidebar({ activeHref }: SidebarProps) {
  const pathname = usePathname();
  const currentPath = activeHref ?? pathname;

  return (
    <aside className="sticky top-0 flex h-screen flex-col overflow-hidden border-r border-[#e9e9e9] bg-white px-4 py-4 text-[#8a8a8a]">
      <div className="mb-4 flex items-start justify-between gap-3 border-b border-[#efefef] pb-4">
        <div className="flex items-center gap-2.5">
          <div className="relative h-9 w-9 overflow-hidden">
            <Image src="/logo.png" alt="9ja Lingo logo" fill className="object-contain" priority />
          </div>
          <p className="text-[20px] font-semibold leading-none text-[#2faa3f]">9jaLingo</p>
        </div>

        <button
          aria-label="Collapse sidebar"
          className="mt-1 grid h-5 w-5 place-items-center rounded-sm border border-[#bdbdbd] text-[#7d7d7d]"
        >
          <PanelLeftClose className="h-3 w-3" />
        </button>
      </div>

      <nav className="space-y-1.5 pt-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={routeByLabel[item.label] ?? "#"}
            className={[
              "flex items-center gap-3 rounded-[4px] px-3 py-2.5 text-[12px] font-medium transition-colors",
              currentPath === routeByLabel[item.label]
                ? "bg-[#35a94a] text-white shadow-sm"
                : "text-[#8f8f8f] hover:bg-[#f7f7f7] hover:text-[#666]",
            ].join(" ")}
          >
            {(() => {
              const Icon = navIcons[item.icon as keyof typeof navIcons];
              return (
                <span
                  className={[
                    "grid h-4 w-4 shrink-0 place-items-center rounded-sm",
                    currentPath === routeByLabel[item.label]
                      ? "text-white"
                      : "text-[#8f8f8f]",
                  ].join(" ")}
                >
                  <Icon className="h-4 w-4" />
                </span>
              );
            })()}
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto border-t border-[#ececec] pt-5">
        <a
          href="#"
          className="flex items-center gap-3 rounded-[4px] px-3 py-2.5 text-[12px] font-medium text-[#8f8f8f] hover:bg-[#f7f7f7] hover:text-[#666]"
        >
          <LogOut className="h-4 w-4 shrink-0 text-[#ff5959]" />
          Back to site
        </a>
      </div>
    </aside>
  );
}
