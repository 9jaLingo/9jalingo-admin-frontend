import { Sidebar } from "@/components/sidebar";
import {
  ArrowUpRight,
  Bell,
  Globe,
  Lock,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const menuItems = [
  { label: "General", icon: Globe },
  { label: "Security & Auth", icon: ShieldCheck },
  { label: "Notifications", icon: Bell },
  { label: "Permissions & Roles", icon: Lock },
  { label: "My Profile", icon: UserRound, active: true },
];

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-[#eaf2ea] text-slate-700">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[216px_minmax(0,1fr)]">
        <Sidebar />

        <section className="px-4 py-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1140px]">
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-700">System Settings</h1>
                <p className="mt-1 text-sm text-slate-500">
                  Configure system variables, security policies, and user roles.
                </p>
              </div>

              <div className="flex items-center gap-3 self-start rounded-2xl border border-white bg-white/80 px-4 py-3 shadow-[0_1px_0_rgba(15,23,42,0.03),0_12px_28px_rgba(15,23,42,0.05)] backdrop-blur">
                <div className="text-right">
                  <p className="text-xs font-semibold text-slate-600">habdurrazakq@gmail.com</p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Admin</p>
                </div>
                <button className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-slate-700">
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="grid gap-4 xl:grid-cols-[186px_minmax(0,1fr)]">
              <aside className="rounded-[18px] border border-white bg-white p-3 shadow-[0_1px_0_rgba(15,23,42,0.03),0_14px_30px_rgba(15,23,42,0.06)]">
                <nav className="space-y-1">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.label}
                        className={[
                          "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition",
                          item.active
                            ? "bg-emerald-50 text-emerald-600"
                            : "text-slate-500 hover:bg-slate-50 hover:text-slate-700",
                        ].join(" ")}
                      >
                        <Icon className="h-4 w-4 shrink-0" />
                        <span className="leading-tight">{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </aside>

              <section className="rounded-[22px] border border-white bg-white p-6 shadow-[0_1px_0_rgba(15,23,42,0.03),0_14px_30px_rgba(15,23,42,0.06)]">
                <h2 className="text-xl font-semibold text-slate-700">My Profile Settings</h2>
                <div className="mt-4 border-t border-slate-100 pt-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                        Email Address
                      </span>
                      <input
                        defaultValue="habdurrazakq@gmail.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white"
                      />
                    </label>
                    <label className="space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                        Display Name
                      </span>
                      <input
                        defaultValue=""
                        placeholder=""
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white"
                      />
                    </label>
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-100 pt-5">
                  <h3 className="text-sm font-semibold text-slate-700">Change Password</h3>
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      Old Password
                    </span>
                    <input
                      type="password"
                      defaultValue="••••••••"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-emerald-400 focus:bg-white"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      New Password
                    </span>
                    <input
                      type="password"
                      defaultValue="••••••••"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-emerald-400 focus:bg-white"
                    />
                  </label>
                </div>

                <div className="mt-10 flex justify-end">
                  <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700">
                    Update Profile
                  </button>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
