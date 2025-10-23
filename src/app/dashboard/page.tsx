import CharacterScene from "@/components/dashboard/character"
import DashboardNav from "@/components/dashboard/nav"
import { MessageCircle2 } from "iconest-react"

const DashboardPage = () => {
    return (
        <div className = "w-full h-screen grid grid-cols-4">
            <main className = "col-span-3">
                <div className = "w-full h-full p-8 space-y-4">
                    <div className = "space-y-2">
                        <h1 className = "text-4xl font-semibold text-gray-700">Selamat datang, <strong className = "text-gray-800">Salman!</strong></h1>
                        <span className = "text-lg font-medium text-gray-600">Sudah siap hidup sehat hari ini?</span>
                    </div>

                    <div className = "flex flex-col p-2 bg-slate-100 h-4/6 rounded-2xl grid grid-cols-7 gap-1">
                        <div className = "bg-red-500 col-span-5 rounded-xl">
                            <CharacterScene/>
                        </div>

                        <div className = "bg-red-500 h-full col-span-2 rounded-xl">

                        </div>
                    </div>
                </div>
            </main>

            <aside className = "border-l border-border p-6 flex flex-col gap-6">
                <h2 className = "text-xl font-semibold text-gray-700">Teman</h2>

                <div className = "space-y-4">
                    <div className = "flex gap-3">
                        <div className = "relative select-none">
                            <img src = "/images/user1.png" className = "rounded-full bg-black size-12"/>
                            <div className = "rounded-full size-4 border-3 border-white bg-green-500 absolute bottom-0 -left-0.5"></div>
                        </div>

                        <div className = "flex flex-col justify-center">
                            <span className = "font-sm font-medium text-gray-700">Salman Nebula C27</span>
                            <span className = "text-xs text-gray-600">Online</span>
                        </div>

                        <button className = "ml-auto">
                            <MessageCircle2 className = "text-gray-600"/>
                        </button>
                    </div>

                    <div className = "flex gap-3">
                        <div className = "relative select-none">
                            <img src = "/images/user1.png" className = "rounded-full bg-black size-12"/>
                            <div className = "rounded-full size-4 border-3 border-white bg-yellow-500 absolute bottom-0 -left-0.5"></div>
                        </div>

                        <div className = "flex flex-col justify-center">
                            <span className = "font-sm font-medium text-gray-700">Salman Nebula C27</span>
                            <span className = "text-xs text-gray-600">Sedang memasak</span>
                        </div>

                        <button className = "ml-auto">
                            <MessageCircle2 className = "text-gray-600"/>
                        </button>
                    </div>

                    <div className = "flex gap-3">
                        <img src = "/images/user1.png" className = "rounded-full bg-black size-12"/>

                        <div className = "flex flex-col justify-center">
                            <span className = "font-sm font-medium text-gray-700">Salman Nebula C27</span>
                            <span className = "text-xs text-gray-600">Terakhir aktif 3 jam yang lalu</span>
                        </div>

                        <button className = "ml-auto">
                            <MessageCircle2 className = "text-gray-600"/>
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default DashboardPage