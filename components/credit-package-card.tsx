import { Pencil, Power, Trash2 } from "lucide-react";
import type { CreditPackage } from "@/app/credit-packages/types";

export function CreditPackageCard({ packageItem }: { packageItem: CreditPackage }) {
  return (
    <article className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.03),0_14px_30px_rgba(15,23,42,0.06)]">
      {packageItem.popular ? (
        <div className="absolute right-[-14px] top-3 rotate-45 bg-amber-200 px-6 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-700">
          Popular
        </div>
      ) : null}

      <div className="mb-1 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-700">{packageItem.name}</h3>
          <p className="rounded-md bg-slate-50 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-slate-400">
            {packageItem.code}
          </p>
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-600">
          {packageItem.status}
        </span>
      </div>

      <div className="mt-4 border-b border-slate-200 pb-4">
        <p className="text-2xl font-bold text-emerald-600">
          {packageItem.price} <span className="text-sm font-normal text-slate-500">/ One Off</span>
        </p>
      </div>

      <dl className="mt-4 grid grid-cols-[1fr_auto] gap-y-2 text-sm">
        <dt className="text-slate-500">Credits</dt>
        <dd className="font-semibold text-slate-700">{packageItem.credits.toLocaleString()}</dd>
        <dt className="text-slate-500">Bonus</dt>
        <dd className="font-semibold text-emerald-600">{packageItem.bonus > 0 ? `+${packageItem.bonus.toLocaleString()}` : "+0"}</dd>
        <dt className="text-slate-500">Total Credits</dt>
        <dd className="font-semibold text-emerald-600">{packageItem.totalCredits.toLocaleString()}</dd>
        <dt className="text-slate-500">Type</dt>
        <dd>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500">
            One-off
          </span>
        </dd>
      </dl>

      <div className="mt-5 flex gap-2">
        <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700">
          <Power className="h-4 w-4 text-rose-500" />
          Deactivate
        </button>
        <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700">
          <Pencil className="h-4 w-4" />
          Edit
        </button>
        <button className="inline-flex items-center justify-center rounded-lg border border-rose-100 bg-rose-50 px-3 py-2 text-rose-500">
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}
