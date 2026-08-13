"use client";

import { useMemo, useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { CreditPackagesHeader } from "@/components/credit-packages-header";
import { CreditPackagesFilters } from "@/components/credit-packages-filters";
import { CreditPackageCard } from "@/components/credit-package-card";
import { CreditPackageModal } from "@/components/credit-package-modal";
import { creditPackagesSeed, type CreditPackage } from "./types";

export default function CreditPackagesPage() {
  const [packages, setPackages] = useState(creditPackagesSeed);
  const [query, setQuery] = useState("");
  const [billingCycle, setBillingCycle] = useState("All Billing Cycles");
  const [status, setStatus] = useState("All Statuses");
  const [type, setType] = useState("All Types");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredPackages = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return packages.filter((pkg) => {
      const matchesQuery =
        !needle ||
        pkg.name.toLowerCase().includes(needle) ||
        pkg.code.toLowerCase().includes(needle);
      const matchesBilling =
        billingCycle === "All Billing Cycles" || pkg.billingCycle === billingCycle;
      const matchesStatus = status === "All Statuses" || pkg.status === status;
      const matchesType = type === "All Types" || pkg.type === type;
      return matchesQuery && matchesBilling && matchesStatus && matchesType;
    });
  }, [packages, query, billingCycle, status, type]);

  const addPackage = (entry: Pick<CreditPackage, "name" | "code" | "type">) => {
    setPackages((current) => [
      {
        id: crypto.randomUUID(),
        name: entry.name,
        code: entry.code,
        billingCycle: "One Off",
        status: "Active",
        type: entry.type,
        price: "NGN 0.00",
        credits: 0,
        bonus: 0,
        totalCredits: 0,
        popular: false,
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
            <CreditPackagesHeader />
            <CreditPackagesFilters
              query={query}
              billingCycle={billingCycle}
              status={status}
              type={type}
              onQueryChange={setQuery}
              onBillingCycleChange={setBillingCycle}
              onStatusChange={setStatus}
              onTypeChange={setType}
              onCreateClick={() => setIsModalOpen(true)}
            />

            <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredPackages.map((pkg) => (
                <CreditPackageCard key={pkg.id} packageItem={pkg} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <CreditPackageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={addPackage}
      />
    </main>
  );
}
