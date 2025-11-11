'use client'

// --- Impor Komponen & Hook ---
import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown } from "iconest-react"
import { Search, Target } from "lucide-react"
import { useState } from "react"
import { Sport } from "@/types"
import FeaturedSportCard from "@/components/dashboard/FeaturedSportCard"
import SportCard from "@/components/dashboard/sportCard"
import LongFeaturedSportCard from "@/components/dashboard/LongFeaturedSportCard"

const Page = () => {
    const recSports: Sport[] = [{
        title: 'Bench Press',
        image: '/images/gym.jpeg',
        difficulty: 'Mudah',
        area: "Upper Body",
        calories: 150,
        prepTime: 10
    }, {
        title: 'Squat',
        image: '/images/gym.jpeg',
        difficulty: 'Sedang',
        area: "Lower Body",
        calories: 200,
        prepTime: 15
    }, {
        title: 'Deadlift',
        image: '/images/gym.jpeg',
        difficulty: 'Sulit',
        area: "Full Body",
        calories: 300,
        prepTime: 20
    }, {
        title: 'Plank',
        image: '/images/gym.jpeg',
        difficulty: 'Sedang',
        area: "Core",
        calories: 100,
        prepTime: 5
    }]

    const [activeDifficulty, setActiveDifficulty] = useState('Semua');
    const difficultyFilters = ['Semua', 'Mudah', 'Sedang', 'Sulit'];

    const filteredSports = recSports.filter(sport => {
        if (activeDifficulty === 'Semua') {
            return true; 
        }
        return sport.difficulty === activeDifficulty;
    });
    
    const mainRecommendation = recSports[0];
    
    return (
        <div className="w-full h-full flex">
            <main className="flex flex-col w-full h-full gap-8 justify-between p-8">
                <div className = "flex w-full items-center p-8 border-b pb-16">
                    <div className = "flex flex-col space-y-2">
                        <span className="text-xl font-medium text-gray-500">
                            Olahraga
                        </span>
                        <h2 className="text-4xl font-semibold text-gray-700">
                            Jelajahi latihan-latihan menarik disini
                        </h2>
                    </div>

                    {/* Search Bar & Filter Accordion */}
                    <div className = "bg-slate-100 w-full rounded-3xl p-4 flex flex-col h-fit ml-auto">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <div className = "w-full flex gap-2 items-center">
                                    <div className="flex gap-2 bg-white p-1 rounded-full h-fit w-full">
                                        <div className="flex bg-white items-center border border-gray-300 rounded-full w-full">
                                            <Search className="text-gray-400 ml-6" />
                                            <input type="text" id="search" placeholder="Cari latihan..." className="p px-4 py-2 pr-6 outline-none w-full"/>

                                            {/* filter ini */}
                                            <AccordionTrigger className = "mr-4 !space-y-0">
                                                <button className = "ml-auto flex !space-y-0 items-center gap-2 text whitespace-nowrap">
                                                    <span className = "text-gray-600 font-medium">Filter tambahan</span>
                                                </button>
                                            </AccordionTrigger>
                                        </div>
                                    </div>
                                </div>

                                
                                <AccordionContent>
                                    <div className = "bg-white p-1 mt-2 rounded-xl mx-6 flex">
                                        <div className = "p-5 border rounded-lg flex w-full gap-4">
                                            {/* filter area tubuh */}
                                            <div className = "w-full border-r pr-4 flex flex-col">
                                                <h2 className = "font-medium text-xl">Area Tubuh</h2>
                                                <span className = "text-gray-600">Pilih area fokus</span>
                                                <Button className = "w-full mt-auto">Terapkan</Button>
                                            </div>
                                            {/* filter durasi & kalori */}
                                            <div className = "w-full flex flex-col gap-4">
                                                <div className = "flex items-center">
                                                    <div>
                                                        <h2 className = "font-medium text-xl">Durasi (Menit)</h2>
                                                        <span className = "text-gray-600">Durasi latihan maksimum</span>
                                                    </div>
                                                    <div className = "flex gap-2 items-center ml-auto">
                                                        <Input className = "w-16 ml-auto text-center" defaultValue="30"/>
                                                        <span>menit</span>
                                                    </div>
                                                </div>
                                                <div className = "flex items-center">
                                                    <div>
                                                        <h2 className = "font-medium text-xl">Kalori (kkal)</h2>
                                                        <span className = "text-gray-600">Target pembakaran kalori</span>
                                                    </div>
                                                    <div className = "flex gap-2 items-center ml-auto">
                                                        <Input className = "w-16 ml-auto text-center" defaultValue="300"/>
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
                
                <div className = "grid grid-cols-7 p-4 pt-0 gap-4 relative">
                    <div className="flex flex-col gap-8 col-span-5">
                        
                        {/* rekomendasi */}
                        <div className="space-y-1 px-4"> 
                            <h2 className="text-2xl font-semibold text-gray-800">
                                Rekomendasi
                            </h2>
                            <span className="font-medium text-gray-600">
                                Latihan yang kami sarankan khusus untuk anda
                            </span>
                        </div>
                        
                        <div className = {`flex flex-col w-full p-2 border rounded-2xl gap-4`}>
                            <div className = "grid grid-cols-3 gap-2">
                                <FeaturedSportCard sport={mainRecommendation} />
                                <LongFeaturedSportCard sport={recSports[1]} />
                            </div>
                        </div>

                        <div className = {`flex flex-col w-full gap-2`}>
                            <div className = "flex justify-between items-center">
                                <div className="space-y-1 px-4"> 
                                    <h2 className="text-2xl font-semibold text-gray-800">
                                        Semua Latihan
                                    </h2>
                                    <span className="font-medium text-gray-600">
                                        Temukan latihan yang sempurna untuk anda
                                    </span>
                                </div>
                            </div>
                            {/* filter kesulitan */}
                            <div className = "flex justify-between items-center mb-4 px-4">
                                <div className="flex gap-2">
                                    {difficultyFilters.map((filter) => {
                                        const isActive = activeDifficulty === filter;
                                        let colorClasses = '';
                                        if (isActive) {
                                            switch (filter) {
                                                case 'Mudah':
                                                    colorClasses = 'bg-primary text-primary-foreground';
                                                    break;
                                                case 'Sedang':
                                                    colorClasses = 'bg-btn-medium text-white';
                                                    break;
                                                case 'Sulit':
                                                    colorClasses = 'bg-btn-hard text-white';
                                                    break;
                                                default:
                                                    colorClasses = 'bg-gray-800 text-white';
                                            }
                                        } else {
                                            colorClasses = 'bg-gray-200 text-gray-700 hover:bg-gray-300';
                                        }
                                        return (
                                            <button
                                                key={filter}
                                                //change state
                                                onClick={() => setActiveDifficulty(filter)}
                                                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${colorClasses}`}
                                            >
                                                {filter}
                                            </button>
                                        );
                                    })}
                                </div>
                                
                                {/* tombol sort by */}
                                <div className="flex gap-2 items-center">
                                    <p className="text-gray-600 text-sm">Sort by:</p>
                                    <div className="flex p-2 bg-gray-200 items-center text-gray-700 rounded-lg gap-1">
                                        <span className="text-xs font-medium">Calories</span>
                                        <ChevronDown size={15} />
                                    </div>
                                </div>
                            </div>
                            
                            {/* daftar latihan yang difilter */}
                            <div className = "flex flex-col gap-2">
                                {filteredSports.map((sport, i) => (
                                    <SportCard key={i} sport={sport} />
                                ))}
                                {/* error handling */}
                                {filteredSports.length === 0 && (
                                    <div className="flex flex-col items-center justify-center p-10 bg-gray-100 rounded-lg">
                                        <span className="font-semibold text-gray-700">Tidak ada latihan ditemukan</span>
                                        <span className="text-gray-500">Ganti filter Anda.</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* sidebar knan */}
                    <div className = "flex flex-col col-span-2 gap-2 sticky top-4 self-start h-fit">
                        <div className = "p-6 h-40 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-700 overflow-hidden flex text-slate-100 relative">
                            <h3 className = "text-xl font-semibold mt-auto">Area Fokus</h3>
                            <Target className="absolute -top-4 -right-8 opacity-20" size={160} strokeWidth={1} />
                        </div>

                        <div className = "border p-2 rounded-2xl flex flex-col gap-2">
                            <div className = "bg-slate-100 p-4 rounded-xl text-sm">
                                Upper Body
                            </div>
                            <div className = "bg-slate-100 p-4 rounded-xl text-sm">
                                Lower Body
                            </div>
                            <div className = "bg-slate-100 p-4 rounded-xl text-sm">
                                Core
                            </div>
                        </div>
                        <Button className = "mt-2">Pilih Area</Button>

                        {/* program latihan yang diambil (todo)*/}
                        <div className="flex flex-col gap-2 mt-6">
                            <h3 className="text-xl font-semibold text-gray-700">
                                To Do List
                            </h3>
                            <div className="border p-4 rounded-2xl flex flex-col gap-3">
                                <div className="bg-slate-100 p-4 rounded-xl">
                                    <span className="font-medium text-xs text-gray-800 block">Hari ini</span>
                                    <hr className=" border-gray-300 my-1" />
                                    <span className="font-medium text-sm text-gray-800">Bench Press</span>
                                    <span className="text-xs text-gray-600 block">3 set x 10 repetisi</span>
                                </div>
                                <div className="bg-slate-100 p-4 rounded-xl">
                                    <span className="font-medium text-sm text-gray-800">Plank</span>
                                    <span className="text-xs text-gray-600 block">3 set x 60 detik</span>
                                </div>
                                <div className="bg-slate-100 p-4 rounded-xl">
                                    <span className="font-medium text-xs text-gray-800 block">21 September 2069</span>
                                    <hr className=" border-gray-300 my-1" />
                                    <span className="font-medium text-sm text-gray-800">Bench Press</span>
                                    <span className="text-xs text-gray-600 block">3 set x 10 repetisi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default Page
