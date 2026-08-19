import CreditPage from "@/components/credit-packages-page";
import CreditHeaderNav from "@/components/UI/CreditHeaderNavigation";
import CreditPackageCard from "@/components/UI/CreditPackageCard";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <div className="flex justify-center bg-slate-400">
      {/* <CreditPackageCard/> */}
      {/* <CreditHeaderNav/> */}
      <CreditPage/>
    </div>
  )
}
