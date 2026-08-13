import { LogOut } from "lucide-react";

export function CreditPackagesHeader() {
  return (
    <header className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-700">
          Credit Packages
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Manage available credit bundles and subscription tiers.
        </p>
      </div>

      <div className="flex items-start gap-4 self-end sm:self-auto">
        <div className="text-right">
          <p className="text-sm font-semibold text-slate-700">
            habdurrazakq@gmail.com
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Admin
          </p>
        </div>
        <button className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm">
          <LogOut className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
