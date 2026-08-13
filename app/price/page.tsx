"use client";

import { useMemo, useState } from "react";
import { AddModelModal } from "@/components/add-model-modal";
import { ModelTable } from "@/components/model-table";
import { PageHeader } from "@/components/page-header";
import { Sidebar } from "@/components/sidebar";
import { SummaryCards } from "@/components/summary-cards";
import { initialModels, type ModelRow } from "./types";

export default function PricePage() {
  const [models, setModels] = useState(initialModels);
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredModels = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return models;

    return models.filter((model) => {
      return (
        model.name.toLowerCase().includes(needle) ||
        model.code.toLowerCase().includes(needle) ||
        model.service.toLowerCase().includes(needle) ||
        model.languages.join(" ").toLowerCase().includes(needle)
      );
    });
  }, [models, query]);

  const addModel = (model: Pick<ModelRow, "name" | "service">) => {
    setModels((current) => [
      {
        id: crypto.randomUUID(),
        name: model.name,
        code: `MDL-${new Date().getFullYear()}-${Math.random()
          .toString(36)
          .slice(2, 7)
          .toUpperCase()}`,
        service: model.service,
        languages: ["YOR", "IBO", "HAU", "PCM"],
        pricing: "0.0010 Credits / character",
        status: "ACTIVE",
      },
      ...current,
    ]);
  };

  return (
    <main className="min-h-screen bg-[#eaf2ea] text-slate-700">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[216px_minmax(0,1fr)]">
        <Sidebar />

        <section className="px-4 py-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1140px]">
            <PageHeader />
            <SummaryCards totalModels={models.length} />
            <ModelTable
              models={filteredModels}
              query={query}
              onQueryChange={setQuery}
              onAddModelClick={() => setIsModalOpen(true)}
            />
          </div>
        </section>
      </div>

      <AddModelModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={addModel}
      />
    </main>
  );
}
