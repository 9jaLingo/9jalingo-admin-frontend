'use client'
import { Sidebar } from "@/components/sidebar";
import JsonInputSection from "@/components/UI/voice/JsonCard";
import SpeakerRegistry from "@/components/UI/voice/VoiceList";

export default function VoicePage(){
    return (
        <div className="flex flex-row"> 
            <div>
                <Sidebar activeHref="/voice"/>
            </div>
            <div className="flex flex-col  bg-slate-50 w-full px-10 py-6 gap-10">
                <div className="flex flex-col ">
                    <p className="text-[30px] font-[500] text-black">Voice Management</p>
                    <p className="text-[12px] font-[400] text-slate-400">Load and Configure base speakers voices and embeding for TTS services</p>
                </div>
                <JsonInputSection/>
                <div>
                    <SpeakerRegistry/>
                </div>
            </div>
        </div>
    )
}