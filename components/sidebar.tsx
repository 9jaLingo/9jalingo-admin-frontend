"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  CreditCard,
  Database,
  Mic,
  Settings,
  Users,
  ArrowUpLeft,
} from "lucide-react";
import { navItems } from "@/app/price/types";

const navIcons = {
  "database": Database,
  "mic": Mic,
  users: Users,
  "credit-card": CreditCard,
  "bar-chart-3": BarChart3,
  settings: Settings,
} as const;

const routeByLabel: Record<string, string> = {
  "Model Pricing": "/price",
  Voices: "/voices",
  Users: "/user",
  "Credit Packages": "/credit-packages",
  Analytics: "/analytics",
  Settings: "/settings",
};

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen flex-col overflow-hidden bg-[#111a2a] px-4 py-5 text-slate-300 shadow-[inset_-1px_0_0_rgba(255,255,255,0.04)]">
      <div className="mb-10 flex items-center gap-3 px-2">
        <div className="relative h-10 w-10 overflow-hidden rounded-md bg-white/5 ring-1 ring-white/10">
          <Image src="/logo.png" alt="9ja Lingo logo" fill className="object-contain p-1" priority />
        </div>
        <div>
          <p className="text-lg font-semibold text-emerald-500">9ja Lingo</p>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={routeByLabel[item.label] ?? "#"}
            className={[
              "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition",
              pathname === routeByLabel[item.label]
                ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                : "text-slate-400 hover:bg-white/5 hover:text-white",
            ].join(" ")}
          >
            {(() => {
              const Icon = navIcons[item.icon as keyof typeof navIcons];
              return <Icon className="h-4 w-4 shrink-0" />;
            })()}
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto border-t border-white/8 pt-5">
        <a
          href="#"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
        >
          <ArrowUpLeft className="h-4 w-4 shrink-0" />
          Back to Site
        </a>
      </div>
    </aside>
  );
}
