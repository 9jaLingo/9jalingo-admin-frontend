import { Sidebar } from "@/components/sidebar";
import {
  CircleDollarSign,
  ClipboardList,
  CreditCard,
  Eye,
  LogOut,
  Mic,
  RefreshCcw,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";

const statCards = [
  { title: "Total Registered Users", value: "6", note: "Excluding soft-deleted accounts", icon: Users },
  { title: "Total API Keys", value: "14", note: "Active across all projects", icon: ClipboardList },
  {
    title: "TTS Characters Used",
    value: "27,234",
    note: "Playground: 18,618\nAPI Key: 8,616",
    icon: Sparkles,
  },
  { title: "STT Minutes Generated", value: "0", note: "Playground: 0\nAPI Key: 0", icon: Mic },
  {
    title: "Voice Clones Created",
    value: "28",
    note: "Aggregated voice cloning requests",
    icon: CopyIcon,
  },
  {
    title: "Total Credits Purchased",
    value: "1,120,000.00",
    note: "Sum of packages & custom purchases",
    icon: CreditCard,
  },
  {
    title: "Total Credits Consumed",
    value: "40.39",
    note: "Used by STT, TTS, & clone requests",
    icon: ArrowTrendIcon,
  },
  {
    title: "Active Subscriptions",
    value: "19",
    note: "Subscribers currently on active plans",
    icon: RefreshCcw,
  },
  { title: "Total Revenue", value: "₦525,050.00", note: "Paid invoices (USD / NGN)", icon: CircleDollarSign },
];

const planData = [
  { label: "PAYG Lite", value: 18, color: "bg-emerald-500" },
  { label: "Starter Gift", value: 82, color: "bg-blue-500" },
];

const monthlyBars = [
  { month: "Mar 2026", bought: 0, spent: 0 },
  { month: "Apr 2026", bought: 0, spent: 0 },
  { month: "May 2026", bought: 0, spent: 0 },
  { month: "Jun 2026", bought: 160000, spent: 0 },
  { month: "Jul 2026", bought: 920000, spent: 25000 },
  { month: "Aug 2026", bought: 15000, spent: 3000 },
];

const users = [
  {
    email: "albertokolie1515@gmail.com",
    plan: "STARTER GIFT",
    apiKeys: 0,
    voiceClones: 0,
    ttsCharacters: 0,
    sttMinutes: 0,
    joined: "Jul 24, 2026",
    lastActive: "2 wks ago",
  },
  {
    email: "omotade.my@gmail.com",
    plan: "PAYG LITE",
    apiKeys: 7,
    voiceClones: 28,
    ttsCharacters: 27234,
    sttMinutes: 0,
    joined: "May 26, 2026",
    lastActive: "2 days ago",
  },
  {
    email: "chijiokemeekelachi@gmail.com",
    plan: "STARTER GIFT",
    apiKeys: 7,
    voiceClones: 0,
    ttsCharacters: 0,
    sttMinutes: 0,
    joined: "May 15, 2026",
    lastActive: "3 wks ago",
  },
];

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="8" y="8" width="11" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.75" />
      <path d="M6 16.5A2.5 2.5 0 0 1 3.5 14V5.5A2.5 2.5 0 0 1 6 3h8.5A2.5 2.5 0 0 1 17 5.5" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function ArrowTrendIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 15.5 9 10.5l3.5 3.5L20 6.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.5 6.5H20v5.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-slate-500">
      {children}
    </span>
  );
}

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-[#eaf2ea] text-slate-700">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[216px_minmax(0,1fr)]">
        <Sidebar />

        <section className="px-4 py-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1140px]">
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-700">Analytics Dashboard</h1>
                <p className="mt-1 text-sm text-slate-500">
                  System-wide usage overview and platform statistics.
                </p>
              </div>

              <div className="flex items-center gap-3 self-start rounded-2xl border border-white bg-white/80 px-4 py-3 shadow-[0_1px_0_rgba(15,23,42,0.03),0_12px_28px_rgba(15,23,42,0.05)] backdrop-blur">
                <div className="text-right">
                  <p className="text-xs font-semibold text-slate-600">habdurrazak@gmail.com</p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Admin</p>
                </div>
                <button className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-slate-700">
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {statCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.title}
                    className="rounded-2xl border border-white bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.03),0_14px_30px_rgba(15,23,42,0.06)]"
                  >
                    <div className="mb-5 flex items-start justify-between gap-3">
                      <div>
                        <h2 className="text-sm font-medium text-slate-500">{card.title}</h2>
                      </div>
                      <div className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>
                    <p className="text-3xl font-semibold tracking-tight text-slate-700">{card.value}</p>
                    <p className="mt-1 whitespace-pre-line text-xs leading-5 text-slate-500">{card.note}</p>
                  </article>
                );
              })}
            </div>

            <div className="mt-6 grid gap-4 xl:grid-cols-2">
              <section className="rounded-[22px] border border-white bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.03),0_14px_30px_rgba(15,23,42,0.06)]">
                <h3 className="text-base font-semibold text-slate-700">Users by Subscription Plan</h3>
                <div className="mt-5 flex items-center justify-center">
                  <div className="relative h-64 w-64">
                    <div
                      className="absolute inset-8 rounded-full"
                      style={{
                        background:
                          "conic-gradient(#3b82f6 0deg 295deg, #39b54a 295deg 360deg)",
                      }}
                    />
                    <div className="absolute inset-[52px] rounded-full bg-white shadow-inner" />
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-center gap-6 text-xs text-slate-500">
                  {planData.map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <span className={`h-2.5 w-8 rounded ${item.color}`} />
                      {item.label}
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[22px] border border-white bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.03),0_14px_30px_rgba(15,23,42,0.06)]">
                <h3 className="text-base font-semibold text-slate-700">Monthly Credits: Bought vs Spent</h3>
                <div className="mt-5 h-[300px] overflow-hidden rounded-2xl bg-[linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[length:100%_32px,72px_100%] p-5">
                  <div className="flex h-full items-end gap-3">
                    {monthlyBars.map((bar) => (
                      <div key={bar.month} className="flex flex-1 flex-col items-center justify-end gap-2">
                        <div className="flex h-full w-full items-end justify-center gap-1.5">
                          <div
                            className="w-6 rounded-t-md bg-blue-500/90"
                            style={{ height: `${Math.max(8, (bar.bought / 1000000) * 220)}px` }}
                          />
                          <div
                            className="w-6 rounded-t-md bg-red-400"
                            style={{ height: `${Math.max(8, (bar.spent / 1000000) * 220)}px` }}
                          />
                        </div>
                        <span className="text-[10px] text-slate-500">{bar.month}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-center gap-5 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-8 rounded bg-blue-500" />
                    Bought
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-8 rounded bg-red-400" />
                    Spent
                  </div>
                </div>
              </section>
            </div>

            <section className="mt-6 overflow-hidden rounded-[22px] border border-white bg-white shadow-[0_1px_0_rgba(15,23,42,0.03),0_14px_30px_rgba(15,23,42,0.06)]">
              <div className="border-b border-slate-100 px-5 py-4">
                <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                  <h3 className="text-base font-semibold text-slate-700">Platform User Analytics</h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-400">
                      <Search className="h-4 w-4" />
                      <input className="w-36 bg-transparent outline-none placeholder:text-slate-400" placeholder="Search email..." />
                    </label>
                    <select className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 outline-none">
                      <option>All Plans</option>
                      <option>STARTER GIFT</option>
                      <option>PAYG LITE</option>
                    </select>
                    <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-500">
                      Joined:
                      <input type="text" placeholder="dd/mm/yyyy" className="w-20 bg-transparent outline-none placeholder:text-slate-400" />
                    </label>
                    <span className="text-slate-400">to</span>
                    <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-500">
                      <input type="text" placeholder="dd/mm/yyyy" className="w-20 bg-transparent outline-none placeholder:text-slate-400" />
                    </label>
                    <button className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50">
                      <RefreshCcw className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-slate-50 text-[11px] uppercase tracking-wide text-slate-500">
                    <tr>
                      <th className="px-5 py-4 font-semibold">User</th>
                      <th className="px-5 py-4 font-semibold">Plan</th>
                      <th className="px-5 py-4 font-semibold">API Keys</th>
                      <th className="px-5 py-4 font-semibold">Voice Clones</th>
                      <th className="px-5 py-4 font-semibold">TTS Characters</th>
                      <th className="px-5 py-4 font-semibold">STT Minutes</th>
                      <th className="px-5 py-4 font-semibold">Joined</th>
                      <th className="px-5 py-4 font-semibold">Last Active</th>
                      <th className="px-5 py-4 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {users.map((row) => (
                      <tr key={row.email} className="text-slate-600">
                        <td className="px-5 py-4 font-medium text-slate-700">{row.email}</td>
                        <td className="px-5 py-4">
                          <Pill>{row.plan}</Pill>
                        </td>
                        <td className="px-5 py-4">{row.apiKeys}</td>
                        <td className="px-5 py-4">{row.voiceClones}</td>
                        <td className="px-5 py-4">{row.ttsCharacters.toLocaleString()}</td>
                        <td className="px-5 py-4">{row.sttMinutes}</td>
                        <td className="px-5 py-4">{row.joined}</td>
                        <td className="px-5 py-4">{row.lastActive}</td>
                        <td className="px-5 py-4">
                          <button className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200">
                            <Eye className="h-3.5 w-3.5" />
                            Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-end gap-2 border-t border-slate-100 px-5 py-4 text-sm text-slate-400">
                <button className="rounded-lg px-3 py-2 hover:bg-slate-50 disabled:opacity-50" disabled>
                  Previous
                </button>
                <span>Page 1 of 1</span>
                <button className="rounded-lg px-3 py-2 hover:bg-slate-50 disabled:opacity-50" disabled>
                  Next
                </button>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
