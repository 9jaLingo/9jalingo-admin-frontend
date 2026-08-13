export type UserStatus = "ACTIVE" | "UNVERIFIED" | "SUSPENDED";

export type UserRow = {
  id: string;
  email: string;
  plan: "STARTER GIFT" | "PAYG LITE";
  apiKeyCount: number;
  joined: string;
  lastActive: string;
  status: UserStatus;
};

export const userRows: UserRow[] = [
  {
    id: "1",
    email: "albertokolie1515@gmail.com",
    plan: "STARTER GIFT",
    apiKeyCount: 0,
    joined: "7/24/2026",
    lastActive: "2 wks ago",
    status: "UNVERIFIED",
  },
  {
    id: "2",
    email: "omotade.my@gmail.com",
    plan: "PAYG LITE",
    apiKeyCount: 7,
    joined: "5/26/2026",
    lastActive: "2 days ago",
    status: "ACTIVE",
  },
  {
    id: "3",
    email: "chijokemeekelachi@gmail.com",
    plan: "STARTER GIFT",
    apiKeyCount: 7,
    joined: "5/15/2026",
    lastActive: "3 wks ago",
    status: "ACTIVE",
  },
];
