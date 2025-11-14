'use client'

import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown } from "iconest-react"
import { Search, Target } from "lucide-react"
import { useEffect, useState } from "react"
import { Sport } from "@/types"
import FeaturedSportCard from "@/components/dashboard/FeaturedSportCard"
import SportCard from "@/components/dashboard/menuCard"
import LongFeaturedSportCard from "@/components/dashboard/LongFeaturedSportCard"
import { useRouter } from "next/navigation"
import { useUser } from "@stackframe/stack"

const Page = () => {
    const router = useRouter()
    const user = useUser()

    const [sports, setSports] = useState<Sport[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const [activeDifficulty, setActiveDifficulty] = useState('Semua')
    const difficultyFilters = ['Semua', 'Mudah', 'Sedang', 'Sulit']

    // Redirect jika belum login
    useEffect(() => {
        if (!user) {
            router.replace('/handler/sign-in')
        }
    }, [user, router])

    // Fetch data sport
    useEffect(() => {
        const fetchSports = async () => {
            try {
                const res = await fetch('/api/sports')
                const json = await res.json()

                if (!res.ok) throw new Error(json.error || 'Gagal memuat data')
                setSports(json.data || [])
            } catch (e: any) {
                setError(e.message)
            } finally {
                setLoading(false)
            }
        }

        fetchSports()
    }, [])

    if (!user) return null

    if (loading) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-500">Memuat latihan...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <p className="text-red-500">Error: {error}</p>
            </div>
        )
    }

    const mainRecommendation = sports[0] || null
    const secondRecommendation = sports[1] || null

    const filteredSports = sports.filter(sport => {
        if (activeDifficulty === 'Semua') return true
        return sport.difficulty === activeDifficulty
    })

    return (
        <div className="w-full h-full flex">
            <main className="flex flex-col w-full h-full gap-8 justify-between p-8">
                
                {/* Header */}
                <div className="flex w-full items-center p-8 border-b pb-16">
                    <div className="flex flex-col space-y-2">
                        <span className="text-xl font-medium text-gray-500">
                            Olahraga
                        </span>
                        <h2 className="text-4xl font-semibold text-gray-700">
                            Jelajahi latihan-latihan menarik disini
                        </h2>
                    </div>

                    {/* Search + Filter */}
                    <div className="bg-slate-100 w-full rounded-3xl p-4 flex flex-col h-fit ml-auto">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <div className="w-full flex gap-2 items-center">
                                    <div className="flex gap-2 bg-white p-1 rounded-full h-fit w-full">
                                        <div className="flex bg-white items-center border border-gray-300 rounded-full w-full">
                                            <Search className="text-gray-400 ml-6" />
                                            <input 
                                                type="text" 
                                                id="search" 
                                                placeholder="Cari latihan..." 
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
                                                <h2 className="font-medium text-xl">Area Tubuh</h2>
                                                <span className="text-gray-600">Pilih area fokus</span>
                                                <Button className="w-full mt-auto">Terapkan</Button>
                                            </div>

                                            <div className="w-full flex flex-col gap-4">
                                                <div className="flex items-center">
                                                    <div>
                                                        <h2 className="font-medium text-xl">Durasi (Menit)</h2>
                                                        <span className="text-gray-600">Durasi latihan maksimum</span>
                                                    </div>
                                                    <div className="flex gap-2 items-center ml-auto">
                                                        <Input className="w-16 text-center" defaultValue="30" />
                                                        <span>menit</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center">
                                                    <div>
                                                        <h2 className="font-medium text-xl">Kalori (kkal)</h2>
                                                        <span className="text-gray-600">Target pembakaran kalori</span>
                                                    </div>
                                                    <div className="flex gap-2 items-center ml-auto">
                                                        <Input className="w-16 text-center" defaultValue="300" />
                                                        <span>kkal</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>

                {/* MAIN CONTENT */}
                <div className="grid grid-cols-7 p-4 pt-0 gap-4 relative">
                    
                    {/* LEFT CONTENT */}
                    <div className="flex flex-col gap-8 col-span-5">

                        {/* RECOMMENDATION */}
                        <div className="space-y-1 px-4">
                            <h2 className="text-2xl font-semibold text-gray-800">Rekomendasi</h2>
                            <span className="font-medium text-gray-600">
                                Latihan yang kami sarankan khusus untuk anda
                            </span>
                        </div>

                        <div className="flex flex-col w-full p-2 border rounded-2xl gap-4">
                            <div className="grid grid-cols-3 gap-2">
                                {mainRecommendation && <FeaturedSportCard sport={mainRecommendation} />}
                                {secondRecommendation && <LongFeaturedSportCard sport={secondRecommendation} />}
                            </div>
                        </div>

                        {/* ALL SPORTS */}
                        <div className="flex flex-col w-full gap-2">
                            <div className="flex justify-between items-center">
                                <div className="space-y-1 px-4">
                                    <h2 className="text-2xl font-semibold text-gray-800">Semua Latihan</h2>
                                    <span className="font-medium text-gray-600">
                                        Temukan latihan yang sempurna untuk anda
                                    </span>
                                </div>
                            </div>

                            {/* Difficulty Filter */}
                            <div className="flex justify-between items-center mb-4 px-4">
                                <div className="flex gap-2">
                                    {difficultyFilters.map((filter) => {
                                        const isActive = activeDifficulty === filter
                                        let color = isActive 
                                            ? filter === 'Mudah'
                                                ? 'bg-primary text-white'
                                                : filter === 'Sedang'
                                                    ? 'bg-btn-medium text-white'
                                                    : filter === 'Sulit'
                                                        ? 'bg-btn-hard text-white'
                                                        : 'bg-gray-800 text-white'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'

                                        return (
                                            <button
                                                key={filter}
                                                onClick={() => setActiveDifficulty(filter)}
                                                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${color}`}
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

                            {/* Sport List */}
                            <div className="flex flex-col gap-2">
                                {filteredSports.map((sport, i) => (
                                    <SportCard key={i} menu={sport} />
                                ))}

                                {filteredSports.length === 0 && (
                                    <div className="flex flex-col items-center justify-center p-10 bg-gray-100 rounded-lg">
                                        <span className="font-semibold text-gray-700">Tidak ada latihan ditemukan</span>
                                        <span className="text-gray-500">Ganti filter Anda.</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* SIDEBAR */}
                    <div className="flex flex-col col-span-2 gap-2 sticky top-4 self-start h-fit">
                        <div className="p-6 h-40 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-700 overflow-hidden flex text-slate-100 relative">
                            <h3 className="text-xl font-semibold mt-auto">Fokus Latihan</h3>
                            <img className="absolute top-0 -right-16 size-48 rotate-24" src="https://cdn2.iconfinder.com/data/icons/fitness-vol-2-1/512/exercise-time-fitness-weightlifting-workout-gym-barbell-3d.png"/>
                        </div>

                        <div className="border p-2 rounded-2xl flex flex-col gap-2">
                            <div className="bg-slate-100 p-4 rounded-xl text-sm">Upper Body</div>
                            <div className="bg-slate-100 p-4 rounded-xl text-sm">Lower Body</div>
                            <div className="bg-slate-100 p-4 rounded-xl text-sm">Core</div>
                        </div>

                        <Button className="mt-2">Pilih Area</Button>
                    </div>
                </div>

                <Footer />
            </main>
        </div>
    )
}

export default Page
