import { Search, Plus, ChevronDown, MoreHorizontal, Home, CreditCard, Users, BarChart3, Settings, LogOut } from "lucide-react";
import { Sidebar } from "./sidebar";

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
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-blue-700 transition">
            <Plus size={18} /> Add Package
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Q Search name or code"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500">
              <option>All Billing Cycles</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500">
              <option>All Statuses</option>
              <option>Activated</option>
              <option>Deactivated</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500">
              <option>All Types</option>
              <option>One-off</option>
              <option>Subscription</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>
          <button className="text-sm text-gray-500 underline underline-offset-2 hover:text-gray-700 transition">Reset filters</button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Card 1: Starter Gift */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-900">Starter Gift</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Activated</span>
            </div>
            <div className="space-y-1 mb-4">
              <div className="text-sm text-gray-500">No. 00</div>
              <div className="text-2xl font-bold text-gray-900">$5,000</div>
              <div className="text-sm text-gray-500">Type: One-off</div>
            </div>
            <div className="border-t border-gray-100 pt-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Credits</span>
                <span className="font-medium text-gray-900">500</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Bonus</span>
                <span className="font-medium text-gray-900">+0</span>
              </div>
              <div className="flex justify-between text-sm font-medium border-t border-gray-100 pt-2 mt-1">
                <span className="text-gray-700">Total Credits</span>
                <span className="text-gray-900">500</span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-auto pt-2 border-t border-gray-100">
              <button className="text-xs text-gray-500 hover:text-gray-700 transition">Deactivate</button>
              <span className="w-px h-4 bg-gray-200"></span>
              <button className="text-xs text-blue-600 hover:text-blue-800 transition">Edit</button>
              <MoreHorizontal className="ml-auto text-gray-400" size={16} />
            </div>
          </div>

          {/* Card 2: PAYG Lite */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-900">PAYG Lite</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Activated</span>
            </div>
            <div className="space-y-1 mb-4">
              <div className="text-sm text-gray-500">No. 00</div>
              <div className="text-2xl font-bold text-gray-900">$10,000</div>
              <div className="text-sm text-gray-500">Type: One-off</div>
            </div>
            <div className="border-t border-gray-100 pt-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Credits</span>
                <span className="font-medium text-gray-900">10,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Bonus</span>
                <span className="font-medium text-gray-900">+0</span>
              </div>
              <div className="flex justify-between text-sm font-medium border-t border-gray-100 pt-2 mt-1">
                <span className="text-gray-700">Total Credits</span>
                <span className="text-gray-900">10,000</span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-auto pt-2 border-t border-gray-100">
              <button className="text-xs text-gray-500 hover:text-gray-700 transition">Deactivate</button>
              <span className="w-px h-4 bg-gray-200"></span>
              <button className="text-xs text-blue-600 hover:text-blue-800 transition">Edit</button>
              <MoreHorizontal className="ml-auto text-gray-400" size={16} />
            </div>
          </div>

          {/* Card 3: PAYG Standard */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-900">PAYG Standard</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Activated</span>
            </div>
            <div className="space-y-1 mb-4">
              <div className="text-sm text-gray-500">No. 00</div>
              <div className="text-2xl font-bold text-gray-900">$20,000</div>
              <div className="text-sm text-gray-500">Type: One-off</div>
            </div>
            <div className="border-t border-gray-100 pt-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Credits</span>
                <span className="font-medium text-gray-900">20,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Bonus</span>
                <span className="font-medium text-gray-900">+0</span>
              </div>
              <div className="flex justify-between text-sm font-medium border-t border-gray-100 pt-2 mt-1">
                <span className="text-gray-700">Total Credits</span>
                <span className="text-gray-900">20,000</span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-auto pt-2 border-t border-gray-100">
              <button className="text-xs text-gray-500 hover:text-gray-700 transition">Deactivate</button>
              <span className="w-px h-4 bg-gray-200"></span>
              <button className="text-xs text-blue-600 hover:text-blue-800 transition">Edit</button>
              <MoreHorizontal className="ml-auto text-gray-400" size={16} />
            </div>
          </div>

          {/* Card 4: PAYG Pro (Activated) */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-900">PAYG Pro</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Activated</span>
            </div>
            <div className="space-y-1 mb-4">
              <div className="text-sm text-gray-500">No. 00</div>
              <div className="text-2xl font-bold text-gray-900">$50,000</div>
              <div className="text-sm text-gray-500">Type: One-off</div>
            </div>
            <div className="border-t border-gray-100 pt-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Credits</span>
                <span className="font-medium text-gray-900">100,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Bonus</span>
                <span className="font-medium text-gray-900">+10,000</span>
              </div>
              <div className="flex justify-between text-sm font-medium border-t border-gray-100 pt-2 mt-1">
                <span className="text-gray-700">Total Credits</span>
                <span className="text-gray-900">110,000</span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-auto pt-2 border-t border-gray-100">
              <button className="text-xs text-gray-500 hover:text-gray-700 transition">Deactivate</button>
              <span className="w-px h-4 bg-gray-200"></span>
              <button className="text-xs text-blue-600 hover:text-blue-800 transition">Edit</button>
              <MoreHorizontal className="ml-auto text-gray-400" size={16} />
            </div>
          </div>

          {/* Card 5: PAYG Pro (Deactivated) */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col opacity-80">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-900">PAYG Pro</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">Deactivated</span>
            </div>
            <div className="space-y-1 mb-4">
              <div className="text-sm text-gray-500">No. 00</div>
              <div className="text-2xl font-bold text-gray-900">$50,000</div>
              <div className="text-sm text-gray-500">Type: One-off</div>
            </div>
            <div className="border-t border-gray-100 pt-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Credits</span>
                <span className="font-medium text-gray-900">100,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Bonus</span>
                <span className="font-medium text-gray-900">+10,000</span>
              </div>
              <div className="flex justify-between text-sm font-medium border-t border-gray-100 pt-2 mt-1">
                <span className="text-gray-700">Total Credits</span>
                <span className="text-gray-900">110,000</span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-auto pt-2 border-t border-gray-100">
              <button className="text-xs text-blue-600 hover:text-blue-800 transition font-medium">Activate</button>
              <span className="w-px h-4 bg-gray-200"></span>
              <button className="text-xs text-blue-600 hover:text-blue-800 transition">Edit</button>
              <MoreHorizontal className="ml-auto text-gray-400" size={16} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}