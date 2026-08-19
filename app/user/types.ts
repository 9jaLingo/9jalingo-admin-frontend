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

export const platformUsers: UserRow[] = [
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
    email: "chijokemekelachi@gmail.com",
    plan: "STARTER GIFT",
    apiKeyCount: 7,
    joined: "5/15/2026",
    lastActive: "3 wks ago",
    status: "ACTIVE",
  },
];

export const userRows = platformUsers;

export type AdminPlan = {
  label: string;
  variant: "blue" | "gold" | "green";
};

export type AdminRow = {
  name: string;
  email: string;
  plans: AdminPlan[];
  registered: string;
  status: "ACTIVE";
};

export const adminUsers: AdminRow[] = [
  {
    name: "Abdurrazak Bello",
    email: "habdurrazakq@gmail.com",
    plans: [
      { label: "Analyst", variant: "blue" },
      { label: "Admin", variant: "gold" },
    ],
    registered: "8/3/2026",
    status: "ACTIVE",
  },
  {
    name: "Okolie Chukwuka",
    email: "okolie@9jalingo.org",
    plans: [{ label: "Super Admin", variant: "green" }],
    registered: "6/29/2026",
    status: "ACTIVE",
  },
  {
    name: "Muhammad Yakub",
    email: "myakub@9jalingo.org",
    plans: [{ label: "Super Admin", variant: "green" }],
    registered: "5/15/2026",
    status: "ACTIVE",
  },
];
