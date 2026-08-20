'use client'
import React, { useRef, useState } from "react";

const JsonInputSection: React.FC = () => {
  const [inputMode, setInputMode] = useState<"paste" | "upload">("upload");
  const [dryRun, setDryRun] = useState(false);
  const [json, setJson] = useState("");
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();

    reader.onload = (event) => {
      const result = event.target?.result;

      if (typeof result === "string") {
        setJson(result);
      }
    };

    reader.readAsText(file);
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      handleFile(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const file = event.dataTransfer.files?.[0];

    if (file) {
      handleFile(file);
    }
  };

  const handleProcess = () => {
    try {
      if (!json.trim()) {
        return;
      }

      JSON.parse(json);

      console.log("Process JSON:", {
        dryRun,
        json,
      });
    } catch {
      console.error("Invalid JSON");
    }
  };

  return (
    <div className="w-full max-w-[657px] h-[320px] overflow-hidden rounded-[5px] border border-[#b7b7b7] bg-white">
      <div className="grid h-full grid-cols-2">
        {/* =========================================================
            LEFT - INPUT
        ========================================================= */}
        <div className="border-r border-[#dedede] px-[31px] pt-[18px]">
          {/* Header */}
          <div className="mb-[15px] text-[11px] font-medium text-[#222]">
            Input
          </div>

          {/* Radio options */}
          <div className="mb-[17px] flex items-center gap-[22px]">
            {/* Paste JSON */}
            <label
              className={`flex cursor-pointer items-center gap-[6px] text-[11px] ${
                inputMode === "paste"
                  ? "text-[#222]"
                  : "text-[#aaa]"
              }`}
            >
              <input
                type="radio"
                name="json-input"
                checked={inputMode === "paste"}
                onChange={() => setInputMode("paste")}
                className="h-[11px] w-[11px] appearance-none rounded-full border border-[#999] bg-white checked:border-[#555] checked:bg-[radial-gradient(circle,#333_0_3px,transparent_3px)]"
              />

              <span
                className={
                  inputMode === "paste"
                    ? "underline underline-offset-[2px]"
                    : ""
                }
              >
                Paste JSON
              </span>
            </label>

            {/* Upload JSON */}
            <label
              className={`flex cursor-pointer items-center gap-[6px] text-[11px] ${
                inputMode === "upload"
                  ? "text-[#222]"
                  : "text-[#aaa]"
              }`}
            >
              <input
                type="radio"
                name="json-input"
                checked={inputMode === "upload"}
                onChange={() => setInputMode("upload")}
                className="h-[11px] w-[11px] appearance-none rounded-full border border-[#999] bg-white checked:border-[#555] checked:bg-[radial-gradient(circle,#333_0_3px,transparent_3px)]"
              />

              <span
                className={
                  inputMode === "upload"
                    ? "underline underline-offset-[2px]"
                    : ""
                }
              >
                Upload JSON
              </span>
            </label>
          </div>

          {/* =====================================================
              INPUT AREA
          ===================================================== */}
          {inputMode === "upload" ? (
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className="flex h-[131px] cursor-pointer flex-col items-center justify-center rounded-[6px] border border-[#d9dfe3] bg-[#f8fafb]"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".json,application/json"
                onChange={handleFileChange}
                className="hidden"
              />

              {/* File icon */}
              <div className="mb-[10px] flex h-[17px] w-[14px] items-center justify-center">
                <svg
                  width="15"
                  height="17"
                  viewBox="0 0 15 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 0.75H9L13 4.75V16.25H2V0.75Z"
                    stroke="#777"
                    strokeWidth="0.8"
                  />
                  <path
                    d="M9 0.75V4.75H13"
                    stroke="#777"
                    strokeWidth="0.8"
                  />
                  <path
                    d="M7.5 11.8V7.8M7.5 7.8L5.7 9.6M7.5 7.8L9.3 9.6"
                    stroke="#777"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="text-center text-[8px] leading-[12px] text-[#777]">
                {fileName ? (
                  <>
                    <div className="max-w-[150px] truncate font-medium text-[#555]">
                      {fileName}
                    </div>
                    <div className="text-[7px]">
                      Click to change file
                    </div>
                  </>
                ) : (
                  <>
                    <div>Drag and drop your audio</div>
                    <div>
                      here or{" "}
                      <span className="text-[#279447] underline">
                        choose JSON
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          ) : (
            <textarea
              value={json}
              onChange={(e) => setJson(e.target.value)}
              spellCheck={false}
              className="h-[131px] w-full resize-none rounded-[6px] border border-[#d9dfe3] bg-[#f8fafb] p-[9px] font-mono text-[7px] leading-[9px] text-[#555] outline-none focus:border-[#bbb]"
              placeholder={`[
  {
    "id": "speaker_code_name",
    "display_name": "Speaker Name",
    "name": "Speaker",
    "language": "yo",
    "language_name": "Yoruba",
    "gender": "female",
    "domain": ["Everyday conversation"],
    "speaker_code_name": [],
    "voice_id": "optional-uuid-here"
  }
]`}
            />
          )}

          {/* =====================================================
              DRY RUN
          ===================================================== */}
          <div className="mt-[17px]">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] font-medium leading-[11px] text-[#333]">
                  Dry Run Mode
                </div>

                <div className="mt-[2px] text-[7px] leading-[8px] text-[#999]">
                  Validate JSON and map fields without modifying database
                </div>
              </div>

              {/* Toggle */}
              <button
                type="button"
                onClick={() => setDryRun((value) => !value)}
                aria-label="Toggle dry run mode"
                className={`relative h-[13px] w-[25px] rounded-full border border-[#111] transition-none ${
                  dryRun ? "bg-black" : "bg-white"
                }`}
              >
                <span
                  className={`absolute top-[2px] h-[7px] w-[7px] rounded-full ${
                    dryRun
                      ? "right-[2px] bg-white"
                      : "left-[2px] bg-black"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-[16px] h-px w-full bg-[#e4e4e4]" />

          {/* Process Button */}
          <button
            type="button"
            onClick={handleProcess}
            className="mt-[13px] flex h-[19px] items-center gap-[6px] rounded-[4px] bg-[#2ca24c] px-[11px] text-[8px] font-medium text-white"
          >
            {/* Play icon */}
            <span className="flex h-[8px] w-[8px] items-center justify-center rounded-full bg-white">
              <svg
                width="4"
                height="5"
                viewBox="0 0 4 5"
                fill="none"
              >
                <path
                  d="M3.5 2.5L0.5 4.25V0.75L3.5 2.5Z"
                  fill="#2ca24c"
                />
              </svg>
            </span>

            Process and Load Paste
          </button>
        </div>

        {/* =========================================================
            RIGHT - HISTORY
        ========================================================= */}
        <div className="relative">
          {/* History header */}
          <div className="flex h-[46px] items-center justify-center border-b border-[#e5e5e5]">
            <span className="text-[11px] font-medium text-[#333]">
              History
            </span>
          </div>

          {/* Search */}
          <div className="absolute left-1/2 top-[66px] flex h-[19px] w-[180px] -translate-x-1/2 items-center rounded-full border border-[#cfcfcf] px-[8px]">
            <svg
              width="7"
              height="7"
              viewBox="0 0 7 7"
              fill="none"
              className="mr-[5px]"
            >
              <circle
                cx="3"
                cy="3"
                r="2.2"
                stroke="#777"
                strokeWidth="0.7"
              />
              <path
                d="M4.7 4.7L6.2 6.2"
                stroke="#777"
                strokeWidth="0.7"
                strokeLinecap="round"
              />
            </svg>

            <input
              type="text"
              placeholder="Search past JSONs"
              className="w-full bg-transparent text-[7px] text-[#555] outline-none placeholder:text-[#999]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JsonInputSection;