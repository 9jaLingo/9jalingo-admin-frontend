import { RotateCcw, Search } from "lucide-react";

type UserFiltersProps = {
  query: string;
  plan: string;
  onQueryChange: (value: string) => void;
  onPlanChange: (value: string) => void;
};

export function UserFilters({
  query,
  plan,
  onQueryChange,
  onPlanChange,
}: UserFiltersProps) {
  return (
    <div className="border-b border-slate-200 bg-white px-5 py-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-2 text-sm font-medium text-emerald-600">
            <Search className="h-4 w-4" />
            Platform Users
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Search email..."
              className="h-9 w-[134px] rounded-md border border-slate-200 bg-white pl-9 pr-3 text-xs text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>

          <select
            value={plan}
            onChange={(event) => onPlanChange(event.target.value)}
            className="h-9 w-[110px] rounded-md border border-slate-200 bg-white px-3 text-xs text-slate-700 outline-none"
          >
            <option>All Plans</option>
            <option>STARTER GIFT</option>
            <option>PAYG LITE</option>
          </select>

          <div className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-500">
            Joined:
            <input
              type="date"
              className="bg-transparent outline-none [color-scheme:light]"
            />
            <span>to</span>
            <input
              type="date"
              className="bg-transparent outline-none [color-scheme:light]"
            />
          </div>

          <button className="grid h-9 w-9 place-items-center rounded-md border border-slate-200 bg-white text-slate-500">
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
