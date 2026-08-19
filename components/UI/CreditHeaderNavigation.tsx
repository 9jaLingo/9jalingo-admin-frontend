import { CirclePlus, Loader, LoaderCircle, LoaderCircleIcon, Recycle, Replace, Search } from "lucide-react";

export default function CreditHeaderNav(){
    return (
        <div className="flex flex-row  w-full justify-between text-[10px] px-3">
            <div className="flex flex-row gap-3 items-end">
                <div className="relative">
                    <Search  size={11} className="absolute left-3 top-1/2 -translate-y-1/2  text-slate-500"/>
                    <input type="text" name="" id=""  placeholder="Search name or Code" className="h-7 border border-slate-500 bg-white text-black rounded-[20px] placeholder-slate-400  pl-8 pr-4text-[10px] focus:outline-none"/>
                </div>
            <select name="Billing" className="bg-white text-slate-600 px-4 h-7 rounded border border-slate-500">
                <option value="">All Billing Cycle</option>
                <option value="Starter" >Starter</option>
                <option value="Starter">Paygo Lite</option>
                <option value="Starter">Paygo Standard</option>
                <option value="Starter">Stuff</option>
            </select>
            <select name="Billing" className="bg-white text-slate-600 px-4 h-7 rounded border border-slate-500" >
                <option value="all">All Status</option>
                <option value="Starter">Activated</option>
                <option value="Starter">Deactivated</option>
            </select>
            <select name="Billing" className="bg-white text-slate-600 px-4 h-7 rounded border border-slate-500">
                <option value="Starter">All Types</option>
                <option value="Starter"></option>
                <option value="Starter"></option>
                <option value="Starter"></option>
            </select>
            <button className="flex flex-row items-center gap-1 bg-black text-white rounded px-3 h-7">
                <LoaderCircleIcon size={10}/>
                Reset filters
            </button>
            </div>
            <button className="flex flex-row items-center gap-1 bg-green-700 text-white rounded px-3">
                <CirclePlus size={10}/>
                Add Package
            </button>
        </div>
    )
}