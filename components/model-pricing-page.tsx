import { Plus, Search } from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { modelRows } from "@/app/price/types";

type ModelPricingPageProps = {
  activeHref?: string;
};

export function ModelPricingPage({ activeHref = "/price" }: ModelPricingPageProps) {
  return (
    <main className="min-h-screen bg-[#efefef] text-[#444]">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[200px_minmax(0,1fr)]">
        <Sidebar activeHref={activeHref} />

        <section className="px-5 py-5 sm:px-7">
          <div className="max-w-[806px]">
            <header className="mb-8">
              <h1 className="text-[33px] font-semibold leading-none tracking-[-0.02em] text-[#3f3f3f]">
                Model Pricing
              </h1>
              <p className="mt-2 text-[14px] text-[#575757]">
                Manage service costs and usage limits for different AI models.
              </p>
            </header>

            <section className="overflow-hidden rounded-[8px] border border-[#b7b7b7] bg-white">
              <div className="grid gap-5 px-6 py-6 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center">
                <div className="flex items-start gap-12">
                  <StatBlock label="Total Models:" value={modelRows.length.toString()} />
                  <StatBlock label="System Health:" value="Operational" />
                </div>

                <div className="justify-self-center">
                  <label className="relative block">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#8f8f8f]" />
                    <input
                      aria-label="Search models or IDs"
                      placeholder="Search models or IDs"
                      className="h-10 w-[133px] rounded-full border border-[#bdbdbd] bg-white pl-9 pr-3 text-[12px] text-[#555] outline-none placeholder:text-[#8c8c8c]"
                    />
                  </label>
                </div>

                <button className="inline-flex h-10 items-center gap-2 rounded-[4px] bg-[#3aa64a] px-4 text-[12px] font-medium text-white shadow-sm justify-self-end">
                  <span className="grid h-4 w-4 place-items-center rounded-full border border-white/70 text-[9px] leading-none">
                    <Plus className="h-2.5 w-2.5" />
                  </span>
                  Add Model
                </button>
              </div>

              <div className="overflow-x-auto">
                <div className="min-w-[760px]">
                  <div className="grid grid-cols-[2.15fr_1.15fr_1.3fr_0.8fr_0.8fr] border-y border-[#c9c9c9] bg-[#d1d1d1] px-6 py-3 text-[15px] font-semibold text-[#444]">
                    <div>Model &amp; Service</div>
                    <div>Languages</div>
                    <div>Pricing Tier</div>
                    <div>Status</div>
                    <div>Actions</div>
                  </div>

                  {modelRows.map((row) => (
                    <div
                      key={row.id}
                      className="grid grid-cols-[2.15fr_1.15fr_1.3fr_0.8fr_0.8fr] items-center px-6 py-6"
                    >
                      <div className="leading-tight">
                        <p className="text-[17px] font-semibold text-[#444]">{row.name}</p>
                        <p className="mt-0.5 text-[11px] text-[#555]">
                          {row.code} • {row.service}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {row.languages.map((language) => (
                          <LanguageChip key={language} language={language} />
                        ))}
                      </div>

                      <div className="text-[16px] text-[#444]">
                        <span className="font-semibold">{row.pricing}</span>{" "}
                        <span className="text-[11px]">{row.pricingUnit}</span>
                      </div>

                      <div>
                        <StatusPill status={row.status} />
                      </div>

                      <div className="h-8" />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

function StatBlock({ label, value }: { label: string; value: string }) {
  const valueClass = value === "Operational" ? "text-[#2faa3f]" : "text-[#2faa3f]";

  return (
    <div className="min-w-[108px]">
      <p className="text-[11px] font-medium text-[#444]">{label}</p>
      <p className={`mt-0.5 text-[18px] font-semibold leading-none ${valueClass}`}>{value}</p>
    </div>
  );
}

function LanguageChip({ language }: { language: string }) {
  const chipStyles: Record<string, string> = {
    YOR: "border-[#d8b5f5] text-[#b064e0]",
    IBO: "border-[#b8caf7] text-[#6b8fe8]",
    HAU: "border-[#a9dfba] text-[#49a86c]",
    PCM: "border-[#f4b7a5] text-[#e07a5f]",
  };

  return (
    <span
      className={`inline-flex rounded-[2px] border px-1.5 py-0.5 text-[8px] font-medium leading-none ${
        chipStyles[language] ?? "border-[#d0d0d0] text-[#666]"
      }`}
    >
      {language}
    </span>
  );
}

function StatusPill({ status }: { status: "Active" | "Deactivated" }) {
  const className =
    status === "Active"
      ? "border-[#8ad08c] text-[#34a853]"
      : "border-[#ff8a80] text-[#ff1f1f]";

  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-[12px] font-medium ${className}`}>
      {status}
    </span>
  );
}
