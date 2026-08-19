export type ModelService = "TTS" | "VCN";

export type ModelStatus = "Active" | "Deactivated";

export type ModelRow = {
  id: string;
  name: string;
  code: string;
  service: ModelService;
  languages: string[];
  pricing: string;
  pricingUnit: string;
  status: ModelStatus;
};

export const modelRows: ModelRow[] = [
  {
    id: "mdl-20260515-bk2jd-a",
    name: "9jalingo-tts-1",
    code: "MDL-20260515-BK2jD",
    service: "TTS",
    languages: ["YOR", "IBO", "HAU", "PCM"],
    pricing: "0.0010",
    pricingUnit: "Credits / character",
    status: "Deactivated",
  },
  {
    id: "mdl-20260515-bk2jd-b",
    name: "9jalingo-tts-1",
    code: "MDL-20260515-BK2jD",
    service: "TTS",
    languages: ["YOR", "IBO", "HAU", "PCM"],
    pricing: "0.0010",
    pricingUnit: "Credits / character",
    status: "Active",
  },
];

export const navItems = [
  { label: "Dashboard", icon: "layout-dashboard" },
  { label: "Model Pricing", icon: "package-2" },
  { label: "Voices", icon: "mic" },
  { label: "Users", icon: "users" },
  { label: "Credit Packages", icon: "credit-card" },
  { label: "Analytics", icon: "bar-chart-3" },
  { label: "Settings", icon: "settings" },
] as const;
