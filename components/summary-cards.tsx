export function SummaryCards({ totalModels }: { totalModels: number }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <article className="rounded-2xl border border-white bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.03),0_10px_25px_rgba(15,23,42,0.04)]">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">
          Total Models
        </p>
        <p className="mt-2 text-3xl font-semibold text-slate-700">{totalModels}</p>
      </article>

      <article className="rounded-2xl border border-white bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.03),0_10px_25px_rgba(15,23,42,0.04)]">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">
          System Health
        </p>
        <p className="mt-2 text-3xl font-semibold text-emerald-600">Operational</p>
      </article>
    </div>
  );
}
