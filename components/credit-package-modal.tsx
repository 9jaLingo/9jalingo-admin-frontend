"use client";

import { useState } from "react";
import { X } from "lucide-react";
import type { CreditPackage } from "@/app/credit-packages/types";

type CreditPackageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (entry: Pick<CreditPackage, "name" | "code" | "type">) => void;
};

export function CreditPackageModal({
  isOpen,
  onClose,
  onSave,
}: CreditPackageModalProps) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [type, setType] = useState<CreditPackage["type"]>("starter");

  const close = () => {
    setName("");
    setCode("");
    setType("starter");
    onClose();
  };

  const save = () => {
    if (!name.trim() || !code.trim()) return;
    onSave({ name: name.trim(), code: code.trim(), type });
    close();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-3xl border border-white bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-800">
              Add New Package
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Create a new credit bundle entry.
            </p>
          </div>
          <button
            onClick={close}
            className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-slate-500 hover:bg-slate-200"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-600">
              Package Name
            </span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-emerald-500"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-600">
              Package Code
            </span>
            <input
              value={code}
              onChange={(event) => setCode(event.target.value)}
              className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-emerald-500"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-600">
              Type
            </span>
            <select
              value={type}
              onChange={(event) =>
                setType(event.target.value as CreditPackage["type"])
              }
              className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-emerald-500"
            >
              <option value="starter">starter</option>
              <option value="lite">lite</option>
              <option value="standard">standard</option>
              <option value="pro">pro</option>
            </select>
          </label>
        </div>

        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            onClick={close}
            className="h-11 rounded-xl border border-slate-200 px-5 text-sm font-semibold text-slate-600"
          >
            Cancel
          </button>
          <button
            onClick={save}
            className="h-11 rounded-xl bg-emerald-600 px-5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20"
          >
            Save Package
          </button>
        </div>
      </div>
    </div>
  );
}
