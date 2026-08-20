'use client'
import React, { useMemo, useState } from "react";

type Speaker = {
  voiceCode: string;
  uuid: string;
  displayName: string;
  language: string;
  languageCode: string;
  gender: "Male" | "Female";
  domain: string;
  status: "Active" | "Deactivated";
};

const speakers: Speaker[] = [
  {
    voiceCode: "abdullahi_ha",
    uuid: "2be24fd4-273a-4297-8fb8-7b0c7ec04049",
    displayName: "Abdullahi",
    language: "Hausa (ha)",
    languageCode: "ha",
    gender: "Male",
    domain: "Everyday Conversation",
    status: "Deactivated",
  },
  {
    voiceCode: "abimbola_yo",
    uuid: "39d827cf-951-45b5-9c1a-3d0402997e68",
    displayName: "Abimbola",
    language: "Yoruba (yo)",
    languageCode: "yo",
    gender: "Female",
    domain: "Everyday Conversation",
    status: "Active",
  },
  {
    voiceCode: "ada_pcm",
    uuid: "eae69-6464-41ca-bb31-bff922caa506",
    displayName: "Ada",
    language: "Pidgin (pcm)",
    languageCode: "pcm",
    gender: "Female",
    domain: "Agricultural Conversation",
    status: "Active",
  },
  {
    voiceCode: "adaeze_ig",
    uuid: "1a0dfd5e-5d64-4c2d-9966-3bbf838e963",
    displayName: "Adaeze",
    language: "Igbo (ig)",
    languageCode: "ig",
    gender: "Female",
    domain: "Everyday Conversation",
    status: "Active",
  },
  {
    voiceCode: "aliyu_ha",
    uuid: "4c90444-21a-400c-9aef-c1a0094c6c13",
    displayName: "Aliyu",
    language: "Hausa (ha)",
    languageCode: "ha",
    gender: "Male",
    domain: "Everyday Conversation",
    status: "Active",
  },
];

const languageColors: Record<string, string> = {
  ha: "text-[#229b45]",
  yo: "text-[#7c28d9]",
  pcm: "text-[#aa7100]",
  ig: "text-[#0874d1]",
};

const SpeakerRegistry: React.FC = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filteredSpeakers = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return speakers;

    return speakers.filter((speaker) =>
      [
        speaker.voiceCode,
        speaker.uuid,
        speaker.displayName,
        speaker.language,
        speaker.languageCode,
        speaker.gender,
        speaker.domain,
        speaker.status,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [search]);

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  return (
    <div className="w-[657px]">
      {/* Main Registry Card */}
      <div className="w-full overflow-hidden rounded-[5px] border border-[#b9b9b9] bg-white">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="flex h-[65px] items-center px-[19px]">
          {/* Title */}
          <div className="whitespace-nowrap text-[14px] font-semibold text-[#333]">
            Base Speaker Registry (240)
          </div>

          {/* Search */}
          <div className="ml-[53px] flex h-[26px] w-[233px] items-center rounded-full border border-[#c7c7c7] px-[9px]">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              className="mr-[6px] shrink-0"
            >
              <circle
                cx="3.3"
                cy="3.3"
                r="2.5"
                stroke="#777"
                strokeWidth="0.7"
              />

              <path
                d="M5.2 5.2L7 7"
                stroke="#777"
                strokeWidth="0.7"
                strokeLinecap="round"
              />
            </svg>

            <input
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              type="text"
              placeholder="Search voices, domain, languages, codes..."
              className="w-full bg-transparent text-[7px] text-[#555] outline-none placeholder:text-[#999]"
            />
          </div>

          {/* Export button */}
          <button
            type="button"
            className="ml-auto flex h-[25px] items-center rounded-full bg-[#3c3c3c] px-[12px] text-[7px] font-medium text-white"
          >
            Export voices
          </button>
        </div>

        {/* =====================================================
            TABLE
        ===================================================== */}

        {/* Table Header */}
        <div className="grid h-[25px] grid-cols-[160px_85px_84px_60px_134px_87px] items-center bg-[#d1d1d1] px-[19px]">
          <div className="text-[9px] font-medium text-[#333]">
            Voice Code / UUID
          </div>

          <div className="text-[9px] font-medium text-[#333]">
            Display Name
          </div>

          <div className="text-[9px] font-medium text-[#333]">
            Language
          </div>

          <div className="text-[9px] font-medium text-[#333]">
            Gender
          </div>

          <div className="text-[9px] font-medium text-[#333]">
            Domain
          </div>

          <div className="text-[9px] font-medium text-[#333]">
            Status
          </div>
        </div>

        {/* Table Rows */}
        <div>
          {filteredSpeakers.map((speaker) => (
            <div
              key={speaker.uuid}
              className="grid min-h-[32px] grid-cols-[160px_85px_84px_60px_134px_87px] items-center px-[19px]"
            >
              {/* Voice Code / UUID */}
              <div className="min-w-0">
                <div
                  className={`truncate text-[9px] font-medium ${
                    speaker.status === "Deactivated"
                      ? "text-[#999]"
                      : "text-[#333]"
                  }`}
                >
                  {speaker.voiceCode}
                </div>

                <div className="truncate text-[6px] leading-[7px] text-[#999]">
                  {speaker.uuid}
                </div>
              </div>

              {/* Display Name */}
              <div
                className={`truncate text-[9px] ${
                  speaker.status === "Deactivated"
                    ? "text-[#999]"
                    : "text-[#444]"
                }`}
              >
                {speaker.displayName}
              </div>

              {/* Language */}
              <div
                className={`text-[9px] font-semibold ${
                  languageColors[speaker.languageCode] ||
                  "text-[#333]"
                }`}
              >
                {speaker.language}
              </div>

              {/* Gender */}
              <div
                className={`text-[9px] ${
                  speaker.gender === "Female"
                    ? "text-[#e000d8]"
                    : "text-[#1874d1]"
                }`}
              >
                {speaker.gender}
              </div>

              {/* Domain */}
              <div
                className={`truncate text-[8px] ${
                  speaker.status === "Deactivated"
                    ? "text-[#999]"
                    : "text-[#555]"
                }`}
              >
                {speaker.domain}
              </div>

              {/* Status */}
              <div>
                <span
                  className={`inline-flex h-[17px] items-center rounded-full border px-[7px] text-[7px] ${
                    speaker.status === "Active"
                      ? "border-[#39ad58] text-[#229b45]"
                      : "border-[#d1d1d1] text-[#999]"
                  }`}
                >
                  {speaker.status}
                </span>
              </div>
            </div>
          ))}

          {/* Empty state */}
          {filteredSpeakers.length === 0 && (
            <div className="flex h-[160px] items-center justify-center text-[9px] text-[#999]">
              No speakers found
            </div>
          )}
        </div>
      </div>

      {/* =======================================================
          PAGINATION
      ======================================================= */}
      <div className="flex h-[34px] items-center justify-center gap-[18px]">
        {/* Previous */}
        <button
          type="button"
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="h-[16px] rounded-[2px] border border-[#d2d2d2] bg-[#f7f7f7] px-[7px] text-[7px] text-[#aaa] disabled:cursor-default"
        >
          ‹ Prev
        </button>

        {/* Page */}
        <span className="text-[8px] text-[#555]">
          Page {page} of 2
        </span>

        {/* Next */}
        <button
          type="button"
          disabled={page === 2}
          onClick={() => setPage((p) => Math.min(2, p + 1))}
          className="h-[16px] rounded-[2px] border border-[#999] bg-white px-[7px] text-[7px] text-[#333]"
        >
          Next ›
        </button>
      </div>
    </div>
  );
};

export default SpeakerRegistry;