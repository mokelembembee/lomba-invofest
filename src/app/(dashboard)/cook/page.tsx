'use client'

import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, Search } from "lucide-react"
import { useEffect, useState } from "react"
import { Menu } from "@/types" 
import FeaturedMenuCard from "@/components/dashboard/FeaturedMenuCard"
import MenuCard from "@/components/dashboard/menuCard"
import MenuCardLong from "@/components/dashboard/LongFeaturedMenuCard"
import { useRouter } from "next/navigation"
import { useUser } from "@stackframe/stack"

// Jika struktur Recipe berbeda, sesuaikan di sini
type Recipe = {
    title: string
    image: string
    difficulty: "Mudah" | "Sedang" | "Sulit"
    rating: number
    calories: number
    steps: number
    prepTime: number
}

const Page = () => {
    const router = useRouter()
    const user = useUser()

    // State untuk data API
    const [menus, setMenus] = useState<Recipe[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    // Filtering
    const [activeDifficulty, setActiveDifficulty] = useState("Semua")
    const difficultyFilters = ["Semua", "Mudah", "Sedang", "Sulit"]

    // Redirect jika belum login
    useEffect(() => {
        if (!user) router.replace("/handler/sign-in")
    }, [user, router])

    // Fetch data resep dari API
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const res = await fetch("/api/recipe", { method: "GET" })

                if (!res.ok) throw new Error("Gagal memuat data resep")

                const json = await res.json()
                setMenus(json.data)
            } catch (err: any) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchRecipes()
    }, [])

    if (!user) return null

    if (loading) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-600 text-lg">Memuat resep...</span>
            </div>
        )
    }

    if (error) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <span className="text-red-600 text-lg">{error}</span>
            </div>
        )
    }

    // Data sudah siap
    const filteredMenus = menus.filter(menu => {
        if (activeDifficulty === "Semua") return true
        return menu.difficulty === activeDifficulty
    })

    const mainRecommendation = menus[0]

    return (
        <div className="w-full h-full flex">
            <main className="flex flex-col w-full h-full gap-8 justify-between p-8">

                {/* Header + Search */}
                <div className="flex w-full items-center p-8 border-b pb-16">
                    <div className="flex flex-col space-y-2">
                        <span className="text-xl font-medium text-gray-500">
                            Menu
                        </span>
                    
                        <h2 className="text-4xl font-semibold text-gray-700">
                            Jelajahi resep-resep menarik disini
                        </h2>
                    </div>

                    <div className="bg-slate-100 w-full rounded-3xl p-4 flex flex-col gap-2 h-fit ml-auto">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <div className="w-full flex gap-2 items-center">
                                    <div className="flex gap-2 bg-white p-1 rounded-full h-fit w-full">
                                        <div className="flex bg-white items-center border border-gray-300 rounded-full w-full">
                                            <Search className="text-gray-400 ml-6" />
                                            <input
                                                type="text"
                                                id="search"
                                                placeholder="Cari resep..."
                                                className="px-4 py-2 pr-6 outline-none w-full"
                                            />

                                            <AccordionTrigger className="mr-4 !space-y-0 ml-auto text-sm mx-8 flex items-center gap-2 whitespace-nowrap">
                                                <span className="text-gray-600 font-medium">Filter tambahan</span>
                                            </AccordionTrigger>
                                        </div>
                                    </div>
                                </div>

                                <AccordionContent>
                                    <div className="bg-white p-1 mt-2 rounded-xl mx-6 flex">
                                        <div className="p-5 border rounded-lg flex w-full gap-4">
                                            <div className="w-full border-r pr-4 flex flex-col">
                                                <h2 className="font-medium text-xl">Bahan </h2>
                                                <span className="text-gray-600">Belum ada bahan</span>
                                            
                                                <Button className="w-full mt-auto">Tambah</Button>
                                            </div>

                                            <div className="w-full flex flex-col gap-4">
                                                <div className="flex items-center">
                                                    <div>
                                                        <h2 className="font-medium text-xl">Sajian</h2>
                                                        <span className="text-gray-600">Jumlah sajian per sekali masak</span>
                                                    </div>

                                                    <div className="flex gap-2 items-center ml-auto">
                                                        <Input className="w-10 text-center" defaultValue="1" />
                                                        <span>sajian</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center">
                                                    <div>
                                                        <h2 className="font-medium text-xl">Salman</h2>
                                                        <span className="text-gray-600">Jumlah salman</span>
                                                    </div>

                                                    <div className="flex gap-2 items-center ml-auto">
                                                        <Input className="w-10 text-center" defaultValue="1" />
                                                        <span>salman</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <button className="text-sm mt-2 ml-auto mr-4">Tampilkan Favorit</button>
                    </div>
                </div>

                {/* Grid Utama */}
                <div className="grid grid-cols-7 p-4 pt-0 gap-4 relative">
                    {/* Kolom Kiri */}
                    <div className="flex flex-col gap-8 col-span-5">
                        {/* Rekomendasi */}
                        <div className="space-y-1 px-4"> 
                            <h2 className="text-2xl font-semibold text-gray-800">Rekomendasi</h2>
                            <span className="font-medium text-gray-600">Menu-menu yang kami sarankan khusus untuk anda</span>
                        </div>

                        <div className="flex flex-col w-full p-2 border rounded-2xl gap-4">
                            <div className="grid grid-cols-3 gap-2">
                                {mainRecommendation && (
                                    <>
                                        <FeaturedMenuCard menu={mainRecommendation} />
                                        <MenuCardLong menu={mainRecommendation} />
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Semua Menu */}
                        <div className="flex flex-col w-full gap-2">
                            <div className="flex justify-between items-center">
                                <div className="space-y-1 px-4"> 
                                    <h2 className="text-2xl font-semibold text-gray-800">Semua Menu</h2>
                                    <span className="font-medium text-gray-600">Menu-menu berdasarkan preferensi anda</span>
                                </div>
                            </div>
                            
                            {/* Filters */}
                            <div className="flex justify-between items-center mb-4 px-4">
                                <div className="flex gap-2">
                                    {difficultyFilters.map(filter => {
                                        const isActive = activeDifficulty === filter
                                        let colorClasses = ''

                                        if (isActive) {
                                            switch (filter) {
                                                case "Mudah": colorClasses = "bg-primary text-white"; break
                                                case "Sedang": colorClasses = "bg-btn-medium text-white"; break
                                                case "Sulit": colorClasses = "bg-btn-hard text-white"; break
                                                default: colorClasses = "bg-gray-800 text-white"
                                            }
                                        } else {
                                            colorClasses = "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                        }

                                        return (
                                            <button
                                                key={filter}
                                                onClick={() => setActiveDifficulty(filter)}
                                                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${colorClasses}`}
                                            >
                                                {filter}
                                            </button>
                                        )
                                    })}
                                </div>
                                
                                <div className="flex gap-2 items-center">
                                    <p className="text-gray-600 text-sm">Sort by:</p>
                                    <div className="flex p-2 bg-gray-200 items-center text-gray-700 rounded-lg gap-1">
                                        <span className="text-xs font-medium">Calories</span>
                                        <ChevronDown size={15} />
                                    </div>
                                </div>
                            </div>
                            
                            {/* List Menu */}
                            <div className="flex flex-col gap-2">
                                {filteredMenus.map((menu, i) => (
                                    <MenuCard key={i} menu={menu} />
                                ))}

                                {filteredMenus.length === 0 && (
                                    <div className="flex flex-col items-center justify-center p-10 bg-gray-100 rounded-lg">
                                        <span className="font-semibold text-gray-700">Tidak ada menu ditemukan</span>
                                        <span className="text-gray-500">Coba ganti filter atau kata pencarian.</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Kolom Kanan */}
                    <div className="flex flex-col col-span-2 gap-2 sticky top-4 self-start h-fit">
                        <div className="p-6 h-40 rounded-2xl bg-gradient-to-r from-primary to-primary-shade overflow-hidden flex text-slate-100 relative">
                            <h3 className="text-xl font-semibold mt-auto">Bahan Makanan</h3>
                            <img className="absolute top-0 -right-16 size-56 -rotate-24" src="https://cdn3d.iconscout.com/3d/premium/thumb/vegetables-3d-icon-png-download-6478875.png"/>
                        </div>

                        <div className="border p-2 rounded-2xl flex flex-col gap-2">
                            <div className="bg-slate-100 p-4 rounded-xl text-sm">Bayam</div>
                            <div className="bg-slate-100 p-4 rounded-xl text-sm">Wortel</div>
                            <div className="bg-slate-100 p-4 rounded-xl text-sm">Daging Salman</div>
                        </div>

                        <Button className="mt-2">Tambah</Button>
                    </div>
                </div>

                <Footer />
            </main>
        </div>
    )
}

export default Page
