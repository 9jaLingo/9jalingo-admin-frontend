import { Filter, Plus, Search } from "lucide-react";

type CreditPackagesFiltersProps = {
  query: string;
  billingCycle: string;
  status: string;
  type: string;
  onQueryChange: (value: string) => void;
  onBillingCycleChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onCreateClick: () => void;
};

export function CreditPackagesFilters({
  query,
  billingCycle,
  status,
  type,
  onQueryChange,
  onBillingCycleChange,
  onStatusChange,
  onTypeChange,
  onCreateClick,
}: CreditPackagesFiltersProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl px-1 py-1 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search name or code..."
            className="h-9 w-[140px] rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-xs outline-none placeholder:text-slate-400"
          />
        </div>

        <select
          value={billingCycle}
          onChange={(event) => onBillingCycleChange(event.target.value)}
          className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs outline-none"
        >
          <option>All Billing Cycles</option>
          <option>One Off</option>
          <option>Monthly</option>
        </select>

        <select
          value={status}
          onChange={(event) => onStatusChange(event.target.value)}
          className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs outline-none"
        >
          <option>All Statuses</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <select
          value={type}
          onChange={(event) => onTypeChange(event.target.value)}
          className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs outline-none"
        >
          <option>All Types</option>
          <option value="starter">Starter</option>
          <option value="lite">Lite</option>
          <option value="standard">Standard</option>
          <option value="pro">Pro</option>
        </select>

        <button className="inline-flex h-9 items-center gap-2 rounded-lg bg-emerald-600 px-4 text-xs font-semibold text-white shadow-sm">
          <Filter className="h-4 w-4" />
          Filter
        </button>
      </div>

      <button
        onClick={onCreateClick}
        className="inline-flex h-11 items-center gap-2 rounded-xl bg-emerald-600 px-5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20"
      >
        <Plus className="h-4 w-4" />
        Add New Package
      </button>
    </div>
  );
}
