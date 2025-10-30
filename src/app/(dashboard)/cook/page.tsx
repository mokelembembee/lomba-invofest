'use client'

import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown } from "iconest-react"
import { Search } from "lucide-react"
import { useState } from "react"
import { Menu } from "@/types" 
import FeaturedMenuCard from "@/components/dashboard/FeaturedMenuCard"
import MenuCard from "@/components/dashboard/menuCard" 

const Page = () => {
    const recMenus: Menu[] = [{
        title: 'Salman Goreng',
        image: '/images/user1.png',
        difficulty: 'Mudah',
        rating: 9,
        calories: 350,
        steps: 5,
        prepTime: 15
    }, {
        title: 'Nebula Bakar',
        image: '/images/gosong_wok.webp',
        difficulty: 'Sedang',
        rating: 8,
        calories: 400,
        steps: 9,
        prepTime: 20
    }, {
        title: 'Salman Bakar',
        image: '/images/gosong_wok.webp',
        difficulty: 'Sulit',
        rating: 4,
        calories: 500,
        steps: 11,
        prepTime: 30
    }]

    const [activeDifficulty, setActiveDifficulty] = useState('Semua');
    const difficultyFilters = ['Semua', 'Mudah', 'Sedang', 'Sulit'];

    const filteredMenus = recMenus.filter(menu => {
        if (activeDifficulty === 'Semua') {
            return true;
        }
        return menu.difficulty === activeDifficulty;
    });
    
    const mainRecommendation = recMenus[0];
    
    return (
        <div className="w-full h-full flex">
            <main className="flex flex-col w-full h-full gap-8 justify-between p-8">
                <div className = "flex w-full items-center p-8 border-b pb-16">
                    <div className = "flex flex-col space-y-2">
                        <span className="text-xl font-medium text-gray-500">
                            Menu
                        </span>
                    
                        <h2 className="text-4xl font-semibold text-gray-700">
                            Jelajahi resep-resep menarik disini
                        </h2>
                    </div>

                    <div className = "bg-slate-100 w-full rounded-3xl p-4 flex flex-col h-fit ml-auto">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <div className = "w-full flex gap-2 items-center">
                                    <div className="flex gap-2 bg-white p-1 rounded-full h-fit w-full">
                                        <div className="flex bg-white items-center border border-gray-300 rounded-full w-full">
                                            <Search className="text-gray-400 ml-6" />
                                            <input type="text" id="search" placeholder="Cari resep..." className="p px-4 py-2 pr-6 outline-none w-full"/>
                                        
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
                                            <div className = "w-full border-r pr-4 flex flex-col">
                                                <h2 className = "font-medium text-xl">Bahan </h2>

                                                <span className = "text-gray-600">Belum ada bahan</span>
                                            
                                                <Button className = "w-full mt-auto">Tambah</Button>
                                            </div>

                                            <div className = "w-full flex flex-col gap-4">
                                                <div className = "flex items-center">
                                                    <div>
                                                        <h2 className = "font-medium text-xl">Sajian </h2>
                                                        <span className = "text-gray-600">Jumlah sajian per satu kali masak</span>
                                                    </div>

                                                    <div className = "flex gap-2 items-center ml-auto">
                                                        <Input className = "w-10 ml-auto text-center" defaultValue="1"/>
                                                        <span>sajian</span>
                                                    </div>
                                                </div>

                                                <div className = "flex items-center">
                                                    <div>
                                                        <h2 className = "font-medium text-xl">Salman </h2>
                                                        <span className = "text-gray-600">Jumlah salman per satu kali masak</span>
                                                    </div>

                                                    <div className = "flex gap-2 items-center ml-auto">
                                                        <Input className = "w-10 ml-auto text-center" defaultValue="1"/>
                                                        <span>salman</span>
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
                        <div className="space-y-1 px-4"> 
                            <h2 className="text-2xl font-semibold text-gray-800">
                                Rekomendasi
                            </h2>
                            
                            <span className="font-medium text-gray-600">
                                Menu-menu yang kami sarankan khusus untuk anda
                            </span>
                        </div>

                        <div className = {`flex flex-col w-full p-2 border rounded-2xl gap-4`}>
                            <div className = "grid grid-cols-3 gap-2">
                                
                                <FeaturedMenuCard menu={mainRecommendation} />

                                <div className = "col-span-2 flex flex-col gap-2">
                                {recMenus.slice(1).map((menu, i) => (
                                    <MenuCard key={i} menu={menu} />
                                ))}
                                </div>
                            </div>
                        </div>

                        <div className = {`flex flex-col w-full gap-2`}>
                            <div className = "flex justify-between items-center">
                                <div className="space-y-1 px-4"> 
                                    <h2 className="text-2xl font-semibold text-gray-800">
                                        Semua Menu
                                    </h2>
                                    
                                    <span className="font-medium text-gray-600">
                                        Menu-menu yang kami sarankan khusus untuk anda
                                    </span>
                                </div>
                            </div>
                            
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
                                                onClick={() => setActiveDifficulty(filter)}
                                                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${colorClasses}`}
                                            >
                                                {filter}
                                            </button>
                                        );
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
                            
                            <div className = "flex flex-col gap-2">
                                {filteredMenus.map((menu, i) => (
                                    <MenuCard key={i} menu={menu} />
                                ))}

                                {filteredMenus.length === 0 && (
                                    <div className="flex flex-col items-center justify-center p-10 bg-gray-100 rounded-lg">
                                        <span className="font-semibold text-gray-700">Tidak ada menu ditemukan</span>
                                        <span className="text-gray-500">Ganti filter Salman Anda.</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className = "flex flex-col col-span-2 gap-2 sticky top-4 self-start h-fit">
                        <div className = "p-6 h-40 rounded-2xl bg-gradient-to-r from-primary to-primary-shade overflow-hidden relative flex text-slate-100 relative">
                            <h3 className = "text-xl font-semibold mt-auto">Bahan Makanan</h3>

                            <img className = "absolute top-0 -right-16 size-56 -rotate-24" src = "https://cdn3d.iconscout.com/3d/premium/thumb/vegetables-3d-icon-png-download-6478875.png"/>
                        </div>

                        <div className = "border p-2 rounded-2xl flex flex-col gap-2">
                            <div className = "bg-slate-100 p-4 rounded-xl text-sm">
                                Bayam
                            </div>

                            <div className = "bg-slate-100 p-4 rounded-xl text-sm">
                                Wortel
                            </div>

                            <div className = "bg-slate-100 p-4 rounded-xl text-sm">
                                Daging Salman
                            </div>
                        </div>

                        <Button className = "mt-2">Tambah</Button>
                    </div>
                </div>

                <Footer />
            </main>
        </div>
    )
}

export default Page