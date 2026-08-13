"use client";

import { useState } from "react";
import { X } from "lucide-react";
import type { UserRow } from "@/app/user/types";

type UserModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (user: Pick<UserRow, "email" | "plan">) => void;
};

export function UserModal({ isOpen, onClose, onSave }: UserModalProps) {
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState<UserRow["plan"]>("STARTER GIFT");

  const close = () => {
    setEmail("");
    setPlan("STARTER GIFT");
    onClose();
  };

  const save = () => {
    if (!email.trim()) return;
    onSave({ email: email.trim(), plan });
    close();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-3xl border border-white bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-800">
              Add New User
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Create a platform customer account entry.
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
              Customer Email
            </span>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="e.g. user@example.com"
              className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-emerald-500"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-600">
              Plan
            </span>
            <select
              value={plan}
              onChange={(event) => setPlan(event.target.value as UserRow["plan"])}
              className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-emerald-500"
            >
              <option value="STARTER GIFT">STARTER GIFT</option>
              <option value="PAYG LITE">PAYG LITE</option>
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
            Save User
          </button>
        </div>
      </div>
    </div>
  );
}
