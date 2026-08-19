export type CreditPackageStatus = "Activated" | "Deactivated";

export type CreditPackageType = "starter" | "lite" | "standard" | "pro";

export type CreditPackage = {
  id: string;
  name: string;
  code: string;
  type: CreditPackageType;
  price: string;
  credits: number;
  bonus: number;
  totalCredits: number;
  status: CreditPackageStatus;
  popular?: boolean;
};

export const creditPackages: CreditPackage[] = [
  {
    id: "starter-gift",
    name: "Starter Gift",
    code: "CP-STARTER-GIFT",
    type: "starter",
    price: "₦0.00",
    credits: 500,
    bonus: 0,
    totalCredits: 500,
    status: "Activated",
  },
  {
    id: "payg-lite",
    name: "PAYG Lite",
    code: "CP-PAYG-LITE",
    type: "lite",
    price: "₦5,000",
    credits: 10000,
    bonus: 0,
    totalCredits: 10000,
    status: "Activated",
  },
  {
    id: "payg-standard",
    name: "PAYG Standard",
    code: "CP-PAYG-STANDARD",
    type: "standard",
    price: "₦10,000",
    credits: 20000,
    bonus: 0,
    totalCredits: 20000,
    status: "Activated",
  },
  {
    id: "payg-pro-activated",
    name: "PAYG Pro",
    code: "CP-PAYG-PRO-A",
    type: "pro",
    price: "₦50,000",
    credits: 100000,
    bonus: 10000,
    totalCredits: 110000,
    status: "Activated",
  },
  {
    id: "payg-pro-deactivated",
    name: "PAYG Pro",
    code: "CP-PAYG-PRO-D",
    type: "pro",
    price: "₦50,000",
    credits: 100000,
    bonus: 10000,
    totalCredits: 110000,
    status: "Deactivated",
  },
];
