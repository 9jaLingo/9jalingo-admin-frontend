import { Search, Plus, ChevronDown, MoreHorizontal, Home, CreditCard, Users, BarChart3, Settings, LogOut } from "lucide-react";
import { Sidebar } from "./sidebar";
import CreditHeaderNav from "./UI/CreditHeaderNavigation";
import CreditPackageCard from "./UI/CreditPackageCard";

export default function CreditPage() {
  return (
    <div className="flex min-h-screen bg-[#f7f8fc] font-sans">
      {/* Sidebar */}
      <div>
        <Sidebar/>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Credit Packages</h2>
            <p className="text-sm text-gray-500">Manage available credit bundles and subscription tiers.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-blue-700 transition">
            <Plus size={18} /> Add Package
          </button>
        </div>

        {/* Filters */}
        <div>
          <CreditHeaderNav/>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap flex-row gap-5 mt-19">
          
          <CreditPackageCard/>
          <CreditPackageCard/>
          <CreditPackageCard/>
          <CreditPackageCard/>
          <CreditPackageCard/>
          <CreditPackageCard/>
          <CreditPackageCard/>
        </div>
      </main>
    </div>
  );
}