'use client'

import CharacterScene from "@/components/dashboard/character"
import SideSection from "@/components/dashboard/side"
import Footer from "@/components/footer"
import TypingAnimation from "@/components/dashboard/typinganimation";
import { ArrowRight, Calendar, Camera, MessageCircle2, User } from "iconest-react"
import { Dumbbell, Flame, Shirt } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const Page = () => {
    const statsTab = [
        {
            title: "Umum",
            route: "umum",
            content: "<StatUmum />",
        },
        {
            title: "Pola Makan",
            route: "pola-makan",
            content: "<StatPolaMakan />",
        },
        {
            title: "Olahraga",
            route: "olahraga",
            content: "<StatOlahraga />",
        },
        {
            title: "Jam Tidur",
            route: "jam-tidur",
            content: "<StatJamTidur />",
        },
    ];

    const [selectedStat, setSelectedStat] = useState(statsTab[0].route);

    return (
        <div className="flex w-full">
            <main className="flex flex-col w-full h-full p-8 pt-0 gap-8 justify-between">
                <div className="flex flex-col gap-8">
                    <div className="flex w-full items-center border-b pb-8">
                        <div className="flex flex-col space-y-4 w-full p-4">
                            <div className="flex items-center gap-4 ">
                                <span className="text-xl font-medium text-gray-500">
                                    Halo, Salman
                                </span>
                                <div className="flex gap-2 items-center bg-gradient-to-r from-orange-400 to-yellow-500 w-fit text-slate-100 py-2 px-4 rounded-full">
                                    <Flame className="size-4" />
                                    <span className="font-semibold">10</span>
                                </div>
                            </div>
                            <TypingAnimation />
                        </div>
                    </div>
                    {/* STATISTIK */}
                    <div className="space-y-1 px-8">
                        <h2 className="text-2xl font-semibold text-gray-800">Statistik</h2>
                        <span className="font-medium text-gray-600">
                            Lihat perjalanan sehatmu disini
                        </span>
                    </div>

                    <div className="flex flex-col md:flex-row w-full gap-4 px-8">
                        <div className="relative w-full md:w-4/5 h-96 bg-blue-200 rounded-xl overflow-hidden">
                            <div className="flex flex-col absolute bottom-20 left-1/2 -translate-x-1/2 items-center gap-2 h-fit">
                                <span className="rounded-full bg-white translate-y-10 px-4 py-1.5 text-sm w-fit">
                                    Salman
                                </span>
                                <img src="/images/tuyul.svg" className="h-50 w-fit" />
                            </div>

                            <img src="/images/land.png" className="absolute w-full h-auto bottom-0" />

                            <div className="flex flex-col absolute top-4 left-4 gap-1.5 bg-white px-1.5 py-2 rounded-full">
                                <div className="bg-primary w-fit rounded-full text-slate-100 p-3">
                                    <Camera />
                                </div>

                                <div className="bg-primary w-fit rounded-full text-slate-100 p-3">
                                    <Shirt />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-full md:w-3/5 items-center gap-2 p-4 pt-0">
                            <div className="flex gap-2 w-full border-b">
                                {statsTab.map((tab) => (
                                    <div
                                        key={tab.route}
                                        onClick={() => setSelectedStat(tab.route)}
                                        className={`flex px-4 pb-2.5 font-semibold cursor-pointer transition-colors ${
                                            selectedStat === tab.route
                                                ? "border-b-3 border-primary text-gray-800"
                                                : "text-gray-500 hover:text-gray-700"
                                        }`}
                                    >
                                        <span className="font-medium">{tab.title}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex w-full h-64 bg-slate-100 rounded-xl mt-2 p-6 flex-col gap-4">
                                <span className="font-semibold text-gray-700">
                                    Kamu sudah melakukan hal yang baik. Pertahankan ya!
                                </span>
                                {statsTab.find((tab) => tab.route === selectedStat)?.content}
                            </div>
                        </div>
                    </div>

                    {/* ARTIKEL */}
                    <div className="space-y-1 mt-4">
                        <h2 className="text-4xl font-semibold text-gray-800">
                            Fakta kesehatan
                        </h2>
                        <span className="text-lg font-medium text-gray-600">
                            Temukan fakta-fakta menarik seputar kesehatan
                        </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="flex flex-col gap-2 p-1 border border-border text-justify rounded-lg gap-1" >
                                <div className="bg-gray-900 w-full h-48 rounded-md relative overflow-hidden flex">
                                    <img src="https://media.tenor.com/j2zxNjGok-oAAAAe/squidward-ass.png" className="absolute w-full h-full object-cover mask-b-from-50%" />
                                    <h3 className="font-semibold text-gray-700 text-white relative p-4 mt-auto">
                                        Manfaat Konsumsi Salman Goreng
                                    </h3>
                                    <div className="rounded-full bg-white flex size-10 text-gray-700 absolute top-4 right-4">
                                        <Dumbbell className="m-auto size-5" />
                                    </div>
                                </div>
                                <div className="px-4 py-2 bg-slate-100 text-gray-600 text-sm flex gap-2 items-center">
                                    <User className="size-4" />
                                    <span className="font-medium">Salmanicus Javanicus</span>
                                    <Calendar className="size-4 ml-2" />
                                    <span className="font-medium whitespace-nowrap">
                                        26 Sept 2025
                                    </span>
                                </div>

                                <div className="p-3 pt-1">
                                    <p className="text-sm text-gray-600">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <Link href="/article" className="ml-auto text-gray-600 font-medium flex items-center gap-2">
                    <span>Lihat selengkapnya</span>
                    <ArrowRight className="size-5" />
                </Link>

                <Footer />
            </main>
        </div>
    );
};

export default Page;
