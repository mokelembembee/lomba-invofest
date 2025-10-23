'use client'

import CharacterScene from "@/components/dashboard/character"
import SideSection from "@/components/dashboard/side"
import Footer from "@/components/footer"
import { MessageCircle2 } from "iconest-react"
import { useState } from "react"

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
        <div className="flex w-full min-h-screen ml-20">
            <main className="flex flex-col w-full h-full p-8 gap-8 justify-between">
                <div className="flex flex-col gap-8">

                    {/* Greeting */}
                    <div className="space-y-1">
                        <h1 className="text-4xl font-semibold text-gray-700">
                            Selamat datang, <strong className="text-gray-800">Salman!</strong>
                        </h1>
                        <span className="text-lg font-medium text-gray-600">
                            Sudah siap hidup sehat hari ini?
                        </span>
                    </div>

                    {/* Avatar & Stats */}
                    <div className="grid grid-cols-6 h-100 gap-2">
                        <div className="bg-red-500 col-span-4 rounded-xl">
                            <CharacterScene />
                        </div>

                        <div className="flex col-span-2 bg-red-500 rounded-xl justify-center items-center">
                            { "<StatAvatar />" }
                        </div>
                    </div>

                    {/* Full Stats */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex gap-2">
                            { statsTab.map((tab) => (
                                <div
                                    key={ tab.route }
                                    onClick={() => setSelectedStat(tab.route)}
                                    className={`flex w-30 px-3 py-1 shadow rounded-full justify-center ${
                                        selectedStat === tab.route ? 'bg-red-500 text-white' : 'text-gray-700'
                                    }`}
                                >
                                    <span className="font-medium">{ tab.title }</span>
                                </div>
                            ))}
                        </div>
                        <span className="font-semibold text-gray-700">
                            Kamu sudah melakukan hal yang baik. Pertahankan ya!
                        </span>
                        <div className="flex w-full h-50 bg-red-500 items-center rounded-xl justify-center">
                            { statsTab.find(tab => tab.route === selectedStat)?.content }
                        </div>
                    </div>

                    {/* Facts */}
                    <div className="flex flex-col w-full h-fit p-4 bg-gray-200 rounded-xl items-center gap-4">
                        <h2 className="text-xl font-semibold text-gray-700">
                            Fakta kesehatan menarik hari ini
                        </h2>
                        <div className="flex gap-2">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <div key={ i } className="flex flex-col p-2 text-justify bg-white rounded-lg gap-1">
                                    <h3 className="font-medium text-gray-600">
                                        Judul Fakta Kesehatan
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <Footer />
            </main>

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
        </div>
    )
}

export default Page