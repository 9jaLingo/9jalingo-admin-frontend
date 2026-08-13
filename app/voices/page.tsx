import { Sidebar } from "@/components/sidebar";
import {
  ArrowUpRight,
  ChevronDown,
  CircleUserRound,
  FileJson,
  Filter,
  Mic,
  Search,
  Settings2,
  Upload,
  Waves,
} from "lucide-react";

const registryRows = [
  {
    code: "abdullahi_ha",
    uuid: "9be21f4-273a-4297-8fbc-7bc7ec0f049",
    name: "Abdullahi",
    language: "HAUSA (HA)",
    gender: "Male",
    domain: "Everyday Conversation",
    status: "ACTIVE",
  },
  {
    code: "abimbola_yo",
    uuid: "39d827c-f951-45cb-91ca-3d4402997eb8",
    name: "Abimbola",
    language: "YORUBA (YO)",
    gender: "Female",
    domain: "Everyday Conversation",
    status: "ACTIVE",
  },
  {
    code: "abisoye_yo",
    uuid: "8d6e252-b527-4951-9910-46cfe477705c",
    name: "Abisoye",
    language: "YORUBA (YO)",
    gender: "Female",
    domain: "Business Conversation",
    status: "ACTIVE",
  },
  {
    code: "abubakar_ha",
    uuid: "2754d7b-910d-4274-8c28-3115629c2513",
    name: "Abubakar",
    language: "HAUSA (HA)",
    gender: "Male",
    domain: "Agricultural Conversation",
    status: "ACTIVE",
  },
  {
    code: "ada_pcm",
    uuid: "1e69bf9-6464-41ca-bb31-bffb922ac506",
    name: "Ada",
    language: "PIDGIN (PCM)",
    gender: "Female",
    domain: "Agricultural Conversation",
    status: "ACTIVE",
  },
  {
    code: "adaeze_ig",
    uuid: "1fa3de-5d64-ad0-9996-5b1f8338e963",
    name: "Adaeze",
    language: "IGBO (IG)",
    gender: "Female",
    domain: "Everyday Conversation",
    status: "ACTIVE",
  },
];

function StatusPill({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-emerald-700">
      {children}
    </span>
  );
}

function GenderTag({ gender }: { gender: "Male" | "Female" }) {
  const isMale = gender === "Male";
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 text-xs font-medium",
        isMale ? "text-sky-600" : "text-pink-500",
      ].join(" ")}
    >
      <CircleUserRound className="h-3.5 w-3.5" />
      {gender}
    </span>
  );
}

export default function VoicesPage() {
  return (
    <main className="min-h-screen bg-[#eaf2ea] text-slate-700">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[216px_minmax(0,1fr)]">
        <Sidebar />

        <section className="px-4 py-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1140px]">
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-700">Voice Management</h1>
                <p className="mt-1 text-sm text-slate-500">
                  Load and configure base speaker voices and embeddings for TTS services.
                </p>
              </div>

              <div className="flex items-center gap-3 self-start rounded-2xl border border-white bg-white/80 px-4 py-3 shadow-[0_1px_0_rgba(15,23,42,0.03),0_12px_28px_rgba(15,23,42,0.05)] backdrop-blur">
                <div className="text-right">
                  <p className="text-xs font-semibold text-slate-600">habdurrazakq@gmail.com</p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Admin</p>
                </div>
                <button className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-slate-700">
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="grid gap-4 xl:grid-cols-2">
              <section className="rounded-[22px] border border-white bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.03),0_14px_30px_rgba(15,23,42,0.06)]">
                <div className="flex items-center gap-2 text-base font-semibold text-slate-700">
                  <Waves className="h-4 w-4 text-slate-500" />
                  Paste Speaker JSON
                </div>
                <p className="mt-2 text-sm font-medium text-slate-600">Speaker JSON List</p>
                <div className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <pre className="max-h-[220px] overflow-auto text-[11px] leading-5 text-slate-500">
{`[
  {
    "id": "speaker_code_name",
    "display_name": "Speaker Name",
    "name": "speaker",
    "language": "yo",
    "language_name": "Yoruba",
    "gender": "female",
    "domain": ["Everyday Conversation"],
    "speaker_code_name_embedding": [],
    "voice_id": "optional-uuid-here"
  }
]`}
                  </pre>
                </div>
                <div className="mt-4 flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-700">Dry Run Mode</p>
                    <p className="text-xs text-slate-500">Validate JSON and map fields without modifying database</p>
                  </div>
                  <div className="h-5 w-10 rounded-full bg-slate-300 p-0.5">
                    <div className="h-4 w-4 rounded-full bg-white shadow-sm" />
                  </div>
                </div>
                <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700">
                  <FileJson className="h-4 w-4" />
                  Process and Load Paste
                </button>
              </section>

              <section className="rounded-[22px] border border-white bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.03),0_14px_30px_rgba(15,23,42,0.06)]">
                <div className="flex items-center gap-2 text-base font-semibold text-slate-700">
                  <Upload className="h-4 w-4 text-slate-500" />
                  Upload JSON File
                </div>
                <p className="mt-2 text-sm font-medium text-slate-600">Upload File</p>
                <div className="mt-2 grid min-h-[102px] place-items-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 text-center">
                  <div>
                    <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-white text-slate-400 shadow-sm">
                      <FileJson className="h-5 w-5" />
                    </div>
                    <p className="mt-3 text-sm text-slate-500">
                      <span className="font-semibold text-emerald-600">Click to upload</span> or drag and drop
                    </p>
                    <p className="mt-1 text-xs text-slate-400">JSON files only</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-700">Dry Run Mode</p>
                    <p className="text-xs text-slate-500">Validate JSON and map fields without modifying database</p>
                  </div>
                  <div className="h-5 w-10 rounded-full bg-slate-300 p-0.5">
                    <div className="h-4 w-4 rounded-full bg-white shadow-sm" />
                  </div>
                </div>
                <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700">
                  <Upload className="h-4 w-4" />
                  Upload and Process File
                </button>
                <p className="mt-4 text-xs leading-5 text-slate-500">
                  <span className="font-semibold text-slate-600">Expected JSON Format:</span> Supports the standard
                  speakers JSON structure, dynamically extracting embeddings based on voice identifier
                  <code className="rounded bg-slate-100 px-1 py-0.5 text-[11px] text-slate-600">{"<id>_embedding"}</code>.
                </p>
              </section>
            </div>

            <section className="mt-6 overflow-hidden rounded-[22px] border border-white bg-white shadow-[0_1px_0_rgba(15,23,42,0.03),0_14px_30px_rgba(15,23,42,0.06)]">
              <div className="flex flex-col gap-4 border-b border-slate-100 px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
                <h2 className="flex items-center gap-2 text-base font-semibold text-slate-700">
                  <Mic className="h-4 w-4 text-slate-500" />
                  Base Speaker Registry (240)
                </h2>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-400 shadow-sm">
                    <Search className="h-4 w-4" />
                    <input
                      className="w-52 bg-transparent text-sm outline-none placeholder:text-slate-400"
                      placeholder="Search voices, codes, languages..."
                    />
                  </div>
                  <button className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50">
                    <Filter className="h-4 w-4" />
                  </button>
                  <button className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50">
                    <Settings2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-slate-50 text-[11px] uppercase tracking-wide text-slate-500">
                    <tr>
                      <th className="px-5 py-4 font-semibold">Voice Code / UUID</th>
                      <th className="px-5 py-4 font-semibold">Display Name</th>
                      <th className="px-5 py-4 font-semibold">Language</th>
                      <th className="px-5 py-4 font-semibold">Gender</th>
                      <th className="px-5 py-4 font-semibold">Domain</th>
                      <th className="px-5 py-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                </table>

                <div className="max-h-[360px] overflow-y-auto overflow-x-hidden">
                  <table className="min-w-full text-left text-sm">
                    <tbody className="divide-y divide-slate-100">
                      {registryRows.map((row) => (
                        <tr key={row.code} className="text-slate-600">
                          <td className="px-5 py-4">
                            <div className="font-semibold text-slate-700">{row.code}</div>
                            <div className="mt-1 text-[11px] text-slate-400">{row.uuid}</div>
                          </td>
                          <td className="px-5 py-4 font-medium text-slate-700">{row.name}</td>
                          <td className="px-5 py-4">
                            <span className="inline-flex rounded-md bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                              {row.language}
                            </span>
                          </td>
                          <td className="px-5 py-4">
                            <GenderTag gender={row.gender} />
                          </td>
                          <td className="px-5 py-4 text-slate-500">{row.domain}</td>
                          <td className="px-5 py-4">
                            <StatusPill>{row.status}</StatusPill>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 border-t border-slate-100 px-5 py-4 text-sm text-slate-400">
                <button className="rounded-lg px-3 py-2 hover:bg-slate-50" disabled>
                  Previous
                </button>
                <span>Page 1 of 24</span>
                <button className="rounded-lg px-3 py-2 hover:bg-slate-50">
                  Next
                </button>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
