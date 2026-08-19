"use client"
import { Sidebar } from "./sidebar";
import { UserManagementHeader } from "./user-management-header";
import React, { useState } from 'react';
// import { UserTable } from "./user-table";

interface UserManagementPageProps {
    activeHref: string;
}

export function UserManagementPage({ activeHref = "/user" }: UserManagementPageProps) {
    return (
        <main className="min-h-screen bg-[#efefef] text-[#444]">
            <div className="flex flex-row">
                <Sidebar activeHref={activeHref} />
                <section className="flex-1">
                    <div className="mx-auto max-w-[1200px] px-4 py-8">
                        <UserManagementHeader />
                        {/* <UserTable rows={[]}/> */}
                        <UserTable />
                    </div>
                </section>
            </div>
        </main>
    );
}


const UserTable = () => {
    const [activeTab, setActiveTab] = useState('customers');
    const [searchTerm, setSearchTerm] = useState('');
    const [planFilter, setPlanFilter] = useState('all');
    const [dateFilter, setDateFilter] = useState('all');

    // ─── Data ──────────────────────────────────────────────────────────
    const customers = [
        {
            email: 'albertokolie1515@gmail.com',
            plan: 'Starter Gift',
            apiKey: 0,
            registered: '7/24/2026',
            lastActive: '2 wks ago',
            status: 'Unverified',
        },
        {
            email: 'albertokolie1515@gmail.com',
            plan: 'PAYG Lite',
            apiKey: 7,
            registered: '5/26/2026',
            lastActive: '2 days ago',
            status: 'Active',
        },
        {
            email: 'chijokemekelachi@gmail.com',
            plan: '—',
            apiKey: 7,
            registered: '5/15/2026',
            lastActive: '3 wks ago',
            status: 'Active',
        },
    ];

    const admins = [
        {
            name: 'Abdurrazak Bello',
            email: 'habdurrazakq@gmail.com',
            plan: ['Analyst', 'Admin'],
            registered: '8/3/2026',
            status: 'Active',
        },
        {
            name: 'Okolie Chukwuka',
            email: 'okolie@9jalingo.org',
            plan: ['Super Admin'],
            registered: '6/29/2026',
            status: 'Active',
        },
        {
            name: 'Muhammad Yakub',
            email: 'myakub@9jalingo.org',
            plan: ['Super Admin'],
            registered: '5/15/2026',
            status: 'Active',
        },
    ];

    // ─── Filters ──────────────────────────────────────────────────────
    const filteredCustomers = customers.filter((c) => {
        const matchSearch = c.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchPlan = planFilter === 'all' || c.plan === planFilter;
        return matchSearch && matchPlan;
    });

    const filteredAdmins = admins.filter((a) => {
        const matchSearch =
            a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            a.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchPlan =
    planFilter === 'all' || a.plan.includes(planFilter);
        return matchSearch && matchPlan;
    });

    const allPlans = [
    ...new Set([
        ...customers.map((c) => c.plan),
        ...admins.flatMap((a) => a.plan),
    ]),
].filter(Boolean);

    // ─── Export CSV ──────────────────────────────────────────────────
    const handleExport = () => {
    if (activeTab === 'customers') {
        const headers = [
            'Email',
            'Plan',
            'API Key',
            'Registered',
            'Last Active',
            'Status',
        ];

        const rows = filteredCustomers.map((row) => [
            row.email,
            row.plan,
            row.apiKey,
            row.registered,
            row.lastActive,
            row.status,
        ]);

        const csvContent = [
            headers.join(','),
            ...rows.map((row) => row.join(',')),
        ].join('\n');

        const blob = new Blob([csvContent], {
            type: 'text/csv;charset=utf-8;',
        });

        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');

        a.href = url;
        a.download = 'customers_list.csv';
        a.click();

        URL.revokeObjectURL(url);
    } else {
        const headers = [
            'Name',
            'Email',
            'Plan',
            'Registered',
            'Status',
        ];

        const rows = filteredAdmins.map((row) => [
            row.name,
            row.email,
            row.plan.join(', '),
            row.registered,
            row.status,
        ]);

        const csvContent = [
            headers.join(','),
            ...rows.map((row) => row.join(',')),
        ].join('\n');

        const blob = new Blob([csvContent], {
            type: 'text/csv;charset=utf-8;',
        });

        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');

        a.href = url;
        a.download = 'admins_list.csv';
        a.click();

        URL.revokeObjectURL(url);
    }
};

    // ─── Render ──────────────────────────────────────────────────────
    return (
        <div className="max-w-6xl mx-auto px-4 py-8min-h-screen font-sans">

            {/* Tabs */}
            <div className="flex border-b border-green-200 mb-6">
                <button
                    className={`px-5 py-2.5 text-sm font-medium border-b-3 transition ${activeTab === 'customers'
                            ? 'text-green-900 border-green-600'
                            : 'text-slate-500 border-transparent hover:text-slate-700'
                        }`}
                    onClick={() => setActiveTab('customers')}
                >
                    Registered Customers
                </button>
                <button
                    className={`px-5 py-2.5 text-sm font-medium border-b-3 transition ${activeTab === 'admins'
                            ? 'text-green-900 border-green-600'
                            : 'text-slate-500 border-transparent hover:text-slate-700'
                        }`}
                    onClick={() => setActiveTab('admins')}
                >
                    Administrative Team
                </button>
            </div>

            <div className="flex flex-col bg-slate-50"> 
                {/* Controls */}
            <div className="flex flex-row justify-between">
                   {activeTab === 'customers' ? (
                    <div className="flex flex-wrap items-center gap-3 p-4">
                     <input
                        type="text"
                        placeholder={
                            activeTab === 'customers' ? 'Search email' : 'Search name / email'
                        }
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1 min-w-[160px] px-4 py-2 border border-slate-300 rounded-lg text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />

                    <select
                        value={planFilter}
                        onChange={(e) => setPlanFilter(e.target.value)}
                        className="px-4 py-2 border border-slate-300 rounded-lg text-sm bg-slate-50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="all">All Plans</option>
                        {allPlans.map((plan, index) => (
                            <option key={index} value={plan}>
                                {plan}
                            </option>
                        ))}
                    </select>

                    <select
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                        className="px-4 py-2 border border-slate-300 rounded-lg text-sm bg-slate-50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="all">Date joined</option>
                        <option value="today">Today</option>
                        <option value="week">This week</option>
                        <option value="month">This month</option>
                    </select>
                    </div>
                   ):(
                    <div></div>
                   )}

                    <div className="p-4">
                        {
                        activeTab === 'customers' ? (
                            <button
                                onClick={handleExport}
                                className="ml-auto px-5 py-2  text-white text-sm font-medium rounded-lg hover:bg-grey-900 transition whitespace-nowrap bg-black"
                            >
                                Export user list
                            </button>
                        ) : (

                            <button
                                onClick={handleExport}
                                className="ml-auto px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-blue-500 transition"
                            >
                               + Add Admin
                            </button>
                        )
                    }
                    </div>
                </div>

                {/* Table */}
                <div className="verflow-hidden">
                    {activeTab === 'customers' ? (
                        <>
                            <h2 className="text-base font-semibold text-slate-900 px-6 pt-5 pb-2 border-b border-slate-100">
                                Registered Customers
                            </h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-slate-50/80 border-b border-slate-200">
                                            <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                                Customer Email
                                            </th>
                                            <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                                Current Plan
                                            </th>
                                            <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                                API Key
                                            </th>
                                            <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                                Registered
                                            </th>
                                            <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                                Last Active
                                            </th>
                                            <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {filteredCustomers.length === 0 ? (
                                            <tr>
                                                <td
                                                    colSpan={4}
                                                    className="px-6 py-8 text-center text-slate-400"
                                                >
                                                    No customers found
                                                </td>
                                            </tr>
                                        ) : (
                                            filteredCustomers.map((c, idx) => (
                                                <tr key={idx} className="hover:bg-slate-50/50">
                                                    <td className="px-6 py-4 text-slate-800">{c.email}</td>
                                                    <td className="px-6 py-4">
                                                        <span className="inline-block px-3 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-full">
                                                            {c.plan}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-slate-800">{c.apiKey}</td>
                                                    <td className="px-6 py-4 text-slate-800">
                                                        {c.registered}
                                                    </td>
                                                    <td className="px-6 py-4 text-slate-800">
                                                        {c.lastActive}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span
                                                            className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${c.status === 'Active'
                                                                    ? 'bg-green-100 text-green-800'
                                                                    : 'bg-amber-100 text-amber-800'
                                                                }`}
                                                        >
                                                            {c.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    ) : (
                        <>
                            <h2 className="text-base font-semibold text-slate-900 px-6 pt-5 pb-2 border-b border-slate-100">
                                Administrative Team
                            </h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-slate-50/80 border-b border-slate-200">
                                            <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                                Admin Name / Email
                                            </th>
                                            <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                                Current Plan
                                            </th>
                                            <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                                Registered
                                            </th>
                                            <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {filteredAdmins.length === 0 ? (
                                            <tr>
                                                <td
                                                    colSpan={4}
                                                    className="px-6 py-8 text-center text-slate-400"
                                                >
                                                    No admins found
                                                </td>
                                            </tr>
                                        ) : (
                                            filteredAdmins.map((a, idx) => (
                                                <tr key={idx} className="hover:bg-slate-50/50">
                                                    <td className="px-6 py-4">
                                                        <div className="font-medium text-slate-800">
                                                            {a.name}
                                                        </div>
                                                        <div className="text-xs text-slate-500 mt-0.5">
                                                            {a.email}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className="flex flex-row gap-1">
                                                            {a.plan.map((value, index)=>(
                                                                <div className={`border border-${()=>{
                                                                    var num_temp = Math.floor(Math.random() * 2);
                                                                    var list_color = ['green','yellow','blue']
                                                                    console.log(num_temp)
                                                                    return list_color[num_temp]
                                                                }
                                                                    }-500 p-1 rounded-[10px] text-${()=>{
                                                                    var num_temp = Math.floor(Math.random() * 2);
                                                                    var list_color = ['green','yellow','blue']
                                                                    console.log(num_temp)
                                                                    return list_color[num_temp]
                                                                }
                                                                    }-500`}>
                                                                    {value}
                                                                </div>
                                                            ))}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-slate-800">
                                                        {a.registered}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                                                            {a.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}
                </div>
            </div>
            </div>
    );
};
