import { CircleAlert, CircleDotDashedIcon, CircleDotIcon, CircleIcon, DotIcon, Edit, FileEdit, SlidersHorizontal, TowerControl } from "lucide-react";


export default function CreditPackageCard() {
    return (
        <div className="flex flex-col gap-5 bg-white p-4 rounded-md w-65 text-black text-[10px] border border-green-700 border-2">
            <div>
                <div className="flex flex-row justify-between">
                    <p className="text-[20px] font-[500] ">Starter Gift</p>

                    <div className="px-4 mt-2 bg-green-700 text-white rounded-[20px] h-4 justify-center item-center ">
                        <p>Activated</p>
                    </div>
                </div>
                <div>
                    <p className="text-[24px] font-[900] text-green-700">$0.00</p>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                    <p>Type</p>
                    <div className="bg-slate-400 px-2 rounded-md border border-slate-500">
                        <p>One-off</p>
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <p>Credits</p>
                    <p>+0</p>
                </div>
                <div className="border-b border-slate-500 flex flex-row justify-between">
                    <p>Bonus</p>
                    <p>+0</p>
                </div>
                <div className="text-green-700 flex flex-row justify-between font-700">
                    <p className="">Total Credit</p>
                    <p>500</p>
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <button className="flex flex-row items-center  gap-[1px]  text-red-500 rounded-[3px] p-[3px] border border-red-500  justify-center">
                    <CircleAlert size={11} color="red"/>
                    Deactivate
                </button>

                <button className="flex flex-row items-center  gap-[1px] bg-black text-white rounded-[3px] p-[3px] justify-center">
                    <SlidersHorizontal size={11} color="white"/>
                    Edit
                </button>
            </div>
        </div>
    )
}