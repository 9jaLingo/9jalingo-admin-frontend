export type CreditPackage = {
  id: string;
  name: string;
  code: string;
  billingCycle: "One Off" | "Monthly";
  status: "Active" | "Inactive";
  type: "starter" | "lite" | "standard" | "pro";
  price: string;
  credits: number;
  bonus: number;
  totalCredits: number;
  popular?: boolean;
};

export const creditPackagesSeed: CreditPackage[] = [
  {
    id: "1",
    name: "Starter Gift",
    code: "starter",
    billingCycle: "One Off",
    status: "Active",
    type: "starter",
    price: "NGN 0.00",
    credits: 500,
    bonus: 0,
    totalCredits: 500,
    popular: false,
  },
  {
    id: "2",
    name: "PAYG Lite",
    code: "lite",
    billingCycle: "One Off",
    status: "Active",
    type: "lite",
    price: "NGN 5,000.00",
    credits: 10000,
    bonus: 0,
    totalCredits: 10000,
    popular: false,
  },
  {
    id: "3",
    name: "PAYG Standard",
    code: "standard",
    billingCycle: "One Off",
    status: "Active",
    type: "standard",
    price: "NGN 10,000.00",
    credits: 20000,
    bonus: 0,
    totalCredits: 20000,
    popular: true,
  },
  {
    id: "4",
    name: "PAYG Pro",
    code: "pro",
    billingCycle: "One Off",
    status: "Active",
    type: "pro",
    price: "NGN 50,000.00",
    credits: 100000,
    bonus: 10000,
    totalCredits: 110000,
    popular: false,
  },
];
