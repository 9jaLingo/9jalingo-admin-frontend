export type ModelRow = {
  id: string;
  name: string;
  code: string;
  service: "TTS" | "VCN";
  languages: string[];
  pricing: string;
  status: "ACTIVE" | "INACTIVE";
};

export const initialModels: ModelRow[] = [
  {
    id: "1",
    name: "9jalingo-tts-1",
    code: "MDL-20260515-BK2JD",
    service: "TTS",
    languages: ["YOR", "IBO", "HAU", "PCM"],
    pricing: "0.0010 Credits / character",
    status: "ACTIVE",
  },
  {
    id: "2",
    name: "9jalingo-tts-1",
    code: "MDL-20260629-EQH11",
    service: "VCN",
    languages: ["YOR", "IBO", "HAU", "PCM"],
    pricing: "0.0010 Credits / character",
    status: "ACTIVE",
  },
];

export const navItems = [
  { label: "Model Pricing", active: true, icon: "database" },
  { label: "Voices", icon: "mic" },
  { label: "Users", icon: "users" },
  { label: "Credit Packages", icon: "credit-card" },
  { label: "Analytics", icon: "bar-chart-3" },
  { label: "Settings", icon: "settings" },
];
