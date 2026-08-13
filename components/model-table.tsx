import { Edit3, Mic, Plus, Power, Search, SlidersHorizontal } from "lucide-react";
import type { ModelRow } from "@/app/price/types";

type ModelTableProps = {
  models: ModelRow[];
  query: string;
  onQueryChange: (value: string) => void;
  onAddModelClick: () => void;
};

export function ModelTable({
  models,
  query,
  onQueryChange,
  onAddModelClick,
}: ModelTableProps) {
  return (
    <section className="mt-5 overflow-hidden rounded-3xl border border-white bg-[#f5f8f5] shadow-[0_1px_0_rgba(15,23,42,0.03),0_14px_30px_rgba(15,23,42,0.06)]">
      <div className="flex flex-col gap-4 border-b border-slate-200/70 px-5 py-4 md:flex-row md:items-center md:justify-between">
        <div className="relative max-w-sm flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search models or IDs..."
            className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-emerald-500"
          />
        </div>

        <button
          onClick={onAddModelClick}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-500"
        >
          <Plus className="h-4 w-4" />
          Add New Model
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0">
          <thead>
            <tr className="text-left text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
              <th className="px-5 py-4">Model & Service</th>
              <th className="px-5 py-4">Languages</th>
              <th className="px-5 py-4">Pricing Tier</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {models.map((model) => (
              <tr key={model.id} className="border-t border-slate-200/70">
                <td className="px-5 py-4 align-middle">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 grid h-9 w-9 place-items-center rounded-xl bg-[#edf2ff] text-[#5f7de2]">
                      {model.service === "TTS" ? (
                        <Mic className="h-4 w-4" />
                      ) : (
                        <Mic className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700">{model.name}</p>
                      <p className="text-xs text-slate-500">
                        {model.code} • {model.service}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 align-middle">
                  <div className="flex flex-wrap gap-2">
                    {model.languages.map((language) => (
                      <span
                        key={language}
                        className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-600"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-5 py-4 align-middle">
                  <p className="font-semibold text-slate-700">{model.pricing}</p>
                </td>
                <td className="px-5 py-4 align-middle">
                  <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-bold text-emerald-700">
                    {model.status}
                  </span>
                </td>
                <td className="px-5 py-4 align-middle">
                  <div className="flex justify-end gap-3 text-slate-500">
                    <button className="grid h-9 w-9 place-items-center rounded-full bg-white shadow-sm ring-1 ring-slate-200 hover:text-emerald-600">
                      <Power className="h-4 w-4" />
                    </button>
                    <button className="grid h-9 w-9 place-items-center rounded-full bg-white shadow-sm ring-1 ring-slate-200 hover:text-slate-700">
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button className="grid h-9 w-9 place-items-center rounded-full bg-white shadow-sm ring-1 ring-slate-200 hover:text-slate-700">
                      <SlidersHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
