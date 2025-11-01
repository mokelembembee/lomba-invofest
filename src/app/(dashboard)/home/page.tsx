'use client'

import CharacterScene from "@/components/dashboard/character"
import SideSection from "@/components/dashboard/side"
import Footer from "@/components/footer"
import TypingAnimation from "@/components/dashboard/typinganimation";
import { ArrowRight, Calendar, MessageCircle2, User } from "iconest-react"
import { Dumbbell } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const Page = () => {
    const statsTab = [{
        title: "Umum",
        route: "umum",
        content: "<StatUmum />"
    }, {
        title: "Pola Makan",
        route: "pola-makan",
        content: "<StatPolaMakan />"
    }, {
        title: "Olahraga",
        route: "olahraga",
        content: "<StatOlahraga />"
    }, {
        title: "Jam Tidur",
        route: "jam-tidur",
        content: "<StatJamTidur />"
    }]

    const [selectedStat, setSelectedStat] = useState(statsTab[0].route)

    
    return (
        <div className="flex w-full">
            <main className="flex flex-col w-full h-full p-8 gap-8 justify-between">
                <div className="flex flex-col gap-8">
                    <div className = "flex w-full items-center p-8 border-b pb-16 relative h-72">
                        <div className = "flex flex-col space-y-2">
                            <span className="text-xl font-medium text-gray-500">
                                Halo, Salman
                            </span>
                        
                            <h2 className="text-4xl font-semibold text-gray-700">
                                Sudah Siap Mulai Hidup Sehat?
                            </h2>
                        </div>

                        <div className = "ml-auto absolute top-0 right-0 h-full w-1/3 aspect-square rounded-3xl flex flex-col ml-auto">
                            <span>Karakter disini</span>
                        </div>
                    </div>

                    {/*
                    <div className="grid grid-cols-6 h-100 gap-2">
                        <div className="bg-red-500 col-span-4 rounded-xl">
                            <CharacterScene />
                        </div>

                        <div className="flex col-span-2 bg-red-500 rounded-xl justify-center items-center">
                            { "<StatAvatar />" }
                        </div>
                    </div>
                    */}

                    <div className="space-y-1 px-8"> 
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Statistik
                        </h2>
                        
                        <span className="font-medium text-gray-600">
                            Lihat perjalanan sehatmu disini
                        </span>
                    </div>

                    {/* Full Stats */}
                    <div className="flex flex-col items-center gap-2 p-4 pt-0">
                        <div className="flex gap-2 w-full border-b">
                            { statsTab.map((tab) => (
                                <div
                                    key={ tab.route }
                                    onClick={() => setSelectedStat(tab.route)}
                                    className={`flex px-4 pb-2.5 font-semibold cursor-default ${
                                        selectedStat === tab.route ? 'border-b-3 border-primary text-gray-800' : 'text-gray-500'
                                    }`}
                                >
                                    <span className="font-medium">{ tab.title }</span>
                                </div>
                            ))}
                        </div>
                        
                        <div className="flex w-full h-64 bg-slate-100 rounded-xl mt-2 p-6 flex-col gap-4">
                            <span className="font-semibold text-gray-700">
                                Kamu sudah melakukan hal yang baik. Pertahankan ya!
                            </span>
                            
                            { statsTab.find(tab => tab.route === selectedStat)?.content }
                        </div>
                    </div>

                    <div className="space-y-1 mt-4">
                        <h2 className="text-4xl font-semibold text-gray-800">
                            Fakta kesehatan
                        </h2>
                        
                        <span className="text-lg font-medium text-gray-600">
                            Temukan fakta-fakta menarik seputar kesehatan
                        </span>
                    </div>

                    {/* Facts */}
                    <div className="grid grid-cols-3 gap-2">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div key={ i } className="flex flex-col gap-2 p-1 border border-border text-justify rounded-lg gap-1">
                                <div className = "bg-gray-900 w-full h-48 rounded-md relative rounded-md overflow-hidden flex">
                                    <img src = "https://media.tenor.com/j2zxNjGok-oAAAAe/squidward-ass.png" className = "absolute w-full h-full object-cover mask-b-from-50%"/>
                                
                                    <h3 className="font-semibold text-gray-700 text-white relative p-4 mt-auto">
                                        Manfaat Konsumsi Salman Goreng
                                    </h3>

                                    <div className = "rounded-full bg-white flex size-10 text-gray-700 absolute top-4 right-4">
                                        <Dumbbell className = "m-auto size-5"/>
                                    </div>
                                </div>

                                <div className = "px-4 py-2 bg-slate-100 text-gray-600 text-sm flex gap-2 items-center">
                                    <User className = "size-4"/>
                                    <span className = "font-medium">Salmanicus Javanicus</span>

                                    <Calendar className = "size-4 ml-2"/>
                                    <span className = "font-medium whitespace-nowrap">26 Sept 2025</span>
                                </div>

                                <div className = "p-3 pt-1">
                                    <p className="text-sm text-gray-600">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <Link href="/article" className = "ml-auto text-gray-600 font-medium flex items-center gap-2">
                    <span>Lihat selengkapnya</span>
                    <ArrowRight className = "size-5"/>
                </Link>

                <Footer />
            </main>

            {/*
            <SideSection>
                <h2 className="text-xl font-semibold text-gray-700">Teman</h2>

                <div className="space-y-4">
                    <div className="flex gap-3">
                        <div className="relative select-none">
                            <img src="/images/user1.png" className="rounded-full bg-black size-12" />
                            <div className="rounded-full size-4 border-3 border-white bg-green-500 absolute bottom-0 -left-0.5"></div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <span className="font-sm font-medium text-gray-700">Salman Nebula C27</span>
                            <span className="text-xs text-gray-600">Online</span>
                        </div>

                        <button className="ml-auto">
                            <MessageCircle2 className="text-gray-600" />
                        </button>
                    </div>

                    <div className="flex gap-3">
                        <div className="relative select-none">
                            <img src="/images/user1.png" className="rounded-full bg-black size-12" />
                            <div className="rounded-full size-4 border-3 border-white bg-yellow-500 absolute bottom-0 -left-0.5"></div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <span className="font-sm font-medium text-gray-700">Salman Nebula C27</span>
                            <span className="text-xs text-gray-600">Sedang memasak</span>
                        </div>

                        <button className="ml-auto">
                            <MessageCircle2 className="text-gray-600" />
                        </button>
                    </div>

                    <div className="flex gap-3">
                        <img src="/images/user1.png" className="rounded-full bg-black size-12" />

                        <div className="flex flex-col justify-center">
                            <span className="font-sm font-medium text-gray-700">Salman Nebula C27</span>
                            <span className="text-xs text-gray-600">Terakhir aktif 3 jam yang lalu</span>
                        </div>

                        <button className="ml-auto">
                            <MessageCircle2 className="text-gray-600" />
                        </button>
                    </div>
                </div>
            </SideSection>
            */}
        </div>
    )
}

export default Page
