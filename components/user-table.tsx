import {
  Eye,
  ShieldOff,
  Trash2,
  ShieldCheck,
} from "lucide-react";
import type { UserRow } from "@/app/user/types";

type UserTableProps = {
  rows: UserRow[];
};

export function UserTable({ rows }: UserTableProps) {
  return (
    <div className="overflow-hidden rounded-b-[22px]">
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0">
          <thead className="bg-slate-50">
            <tr className="text-left text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
              <th className="px-5 py-4">Customer Email</th>
              <th className="px-5 py-4">Current Plan</th>
              <th className="px-5 py-4">API Key Count</th>
              <th className="px-5 py-4">Joined</th>
              <th className="px-5 py-4">Last Active</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-t border-slate-200">
                <td className="px-5 py-4 text-sm font-semibold text-slate-700">
                  {row.email}
                </td>
                <td className="px-5 py-4">
                  <PlanBadge plan={row.plan} />
                </td>
                <td className="px-5 py-4 text-sm text-slate-700">
                  {row.apiKeyCount}
                </td>
                <td className="px-5 py-4 text-sm text-slate-700">{row.joined}</td>
                <td className="px-5 py-4 text-sm text-slate-500">
                  {row.lastActive}
                </td>
                <td className="px-5 py-4">
                  <StatusBadge status={row.status} />
                </td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-1.5">
                    <IconButton label="View" icon={Eye} />
                    <IconButton label="Verify" icon={ShieldCheck} />
                    <IconButton label="Suspend" icon={ShieldOff} />
                    <IconButton label="Delete" icon={Trash2} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-slate-200 bg-white px-5 py-4 text-sm text-slate-400">
        <button className="rounded-md bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-300">
          Previous
        </button>
        <p>Page 1 of 1</p>
        <button className="rounded-md bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-300">
          Next
        </button>
      </div>
    </div>
  );
}

function PlanBadge({ plan }: { plan: UserRow["plan"] }) {
  return (
    <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">
      {plan}
    </span>
  );
}

function StatusBadge({ status }: { status: UserRow["status"] }) {
  const classes =
    status === "ACTIVE"
      ? "bg-emerald-100 text-emerald-600"
      : status === "UNVERIFIED"
        ? "bg-amber-100 text-amber-600"
        : "bg-rose-100 text-rose-600";

  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${classes}`}>
      {status}
    </span>
  );
}

function IconButton({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <button
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-md border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:text-slate-700"
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
