"use client";

import { useMemo, useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { UserManagementHeader } from "@/components/user-management-header";
import { UserFilters } from "@/components/user-filters";
import { UserTable } from "@/components/user-table";
import { UserModal } from "@/components/user-modal";
import { userRows, type UserRow } from "./types";

export default function UserPage() {
  const [rows, setRows] = useState(userRows);
  const [query, setQuery] = useState("");
  const [plan, setPlan] = useState("All Plans");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredRows = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return rows.filter((row) => {
      const matchesQuery = !needle || row.email.toLowerCase().includes(needle);
      const matchesPlan = plan === "All Plans" || row.plan === plan;
      return matchesQuery && matchesPlan;
    });
  }, [rows, query, plan]);

  const addUser = (user: Pick<UserRow, "email" | "plan">) => {
    setRows((current) => [
      {
        id: crypto.randomUUID(),
        email: user.email,
        plan: user.plan,
        apiKeyCount: 0,
        joined: new Date().toLocaleDateString("en-US"),
        lastActive: "Just now",
        status: "UNVERIFIED",
      },
      ...current,
    ]);
  };

  return (
    <main className="min-h-screen bg-[#edf4e7] text-slate-700">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[216px_minmax(0,1fr)]">
        <Sidebar />

        <section className="px-4 py-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1140px]">
            <UserManagementHeader />

            <div className="mb-4 rounded-t-xl border-b border-emerald-500/40 px-1 pb-2">
              <button className="inline-flex items-center gap-2 border-b-2 border-emerald-500 px-2 pb-2 text-sm font-semibold text-emerald-600">
                Platform Users
              </button>
            </div>

            <div className="rounded-[22px] border border-white bg-white shadow-[0_1px_0_rgba(15,23,42,0.03),0_14px_30px_rgba(15,23,42,0.06)]">
              <UserFilters
                query={query}
                plan={plan}
                onQueryChange={setQuery}
                onPlanChange={setPlan}
              />
              <UserTable rows={filteredRows} />
            </div>
          </div>
        </section>
      </div>

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={addUser}
      />
    </main>
  );
}
