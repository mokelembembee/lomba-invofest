import SideSection from "@/components/dashboard/side"
import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, BarChart10, ChevronDown, Clock, Star } from "iconest-react"
import { Filter, Flame, Search, SearchIcon } from "lucide-react"

const Page = () => {
    const recMenus = [{
        title: 'Salman Goreng',
        image: '/images/user1.png',
        difficulty: 'Mudah',
        rating: 9,
        calories: 350,
        prepTime: 15
    }, {
        title: 'Nebula Bakar',
        image: '/images/gosong_wok.webp',
        difficulty: 'Sedang',
        rating: 8,
        calories: 400,
        prepTime: 20
    }, {
        title: 'Salman Bakar',
        image: '/images/gosong_wok.webp',
        difficulty: 'Sulit',
        rating: 4,
        calories: 500,
        prepTime: 30
    }]

    return (
        <div className="w-full h-full flex">
            <main className="flex flex-col w-full h-full gap-8 justify-between">
                <div className = "bg-black rounded-b-3xl p-4 relative overflow-hidden min-h-96 flex">
                    <img src = "https://www.shutterstock.com/image-photo/fresh-clean-veetables-being-put-260nw-1678756072.jpg" className = "absolute top-0 left-0 w-full h-auto mask-b-from-50%"/>
                    <div className = "absolute w-full h-full bg-black/10 top-0 left-0 mask-t-from-0% backdrop-blur-sm"/>

                    <div className = "p-8 flex flex-col gap-4 bg-white relative mt-auto h-fit w-full rounded-2xl">
                        <div className="space-y-1">
                            <h2 className="text-4xl font-semibold text-gray-800">
                                Menu
                            </h2>
                            
                            <span className="text-lg font-medium text-gray-600">
                                Lorem ipsum dolor sit amet
                            </span>
                        </div>

                        <div className = "bg-slate-100 rounded-3xl p-4 flex flex-col">
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
                            {/*
                            <div className = "grid grid-cols-7 w-full gap-2">
                                <div className = "col-span-2 bg-white p-4 flex flex-col">
                                    <h2 className = "mt-4">Bahan populer: </h2>
                                    <div className = "flex flex-col p-4 bg-red-500 gap-2">
                                        <button className = " flex flex-col bg-blue-500">
                                            <img src = "/images/user1.png" className = "size-20"/>
                                            
                                            <span>Salman</span>
                                        </button>

                                        <button className = " flex flex-col bg-blue-500">
                                            <img src = "/images/user1.png" className = "size-20"/>
                                            
                                            <span>Salman</span>
                                        </button>

                                        <button className = " flex flex-col bg-blue-500">
                                            <img src = "/images/user1.png" className = "size-20"/>
                                            
                                            <span>Salman</span>
                                        </button>
                                    </div>
                                </div>

                                <div className = "p-1 bg-white rounded-2xl col-span-5">
                                    <div className = "p-5 rounded-xl border h-full">
                                        <h1 className = "text-xl font-medium">Daftar Bahan</h1>
                                    </div>

                                    <div className = "">
                                        
                                    </div>
                                </div>
                            </div>

                            <div className = "mt-2">
                                <button className="whitespace-nowrap px-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition">Pilih Bahan</button>
                            </div>
                            */}
                        </div>
                    </div>
                </div>

                <div className="space-y-1 mt-4 p-8"> 
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Rekomendasi
                    </h2>
                    
                    <span className="font-medium text-gray-600">
                        Temukan fakta-fakta menarik seputar kesehatan
                    </span>
                </div>

                <div className="flex flex-col gap-8 p-8 pt-0">
                    {/* Recommendation */}
                    <div className = {`flex flex-col w-full p-2 border rounded-2xl gap-4`}>
                        <div className = "grid grid-cols-3 gap-2">
                            <div className = "bg-red-500 h-full rounded-xl">

                            </div>

                            <div className = "col-span-2 flex flex-col gap-2">
                            {recMenus.map((menu, i) => (
                                <div key={ i } className = "flex p-3 text-justify bg-slate-100 h-full rounded-lg gap-3">
                                    <div className="rounded-xl w-1/2 h-20 overflow-hidden">
                                        <img src={menu.image} className="object-cover w-full h-full" />
                                    </div>

                                    <div className="flex flex-col w-full justify-between">
                                        <div className="flex justify-between mb-2">
                                            <div className={`flex px-1 py-0.5 rounded font-semibold text-gray-700 items-center gap-1 ${menu.difficulty === 'Easy' ? 'bg-btn-easy' : 'bg-white'}`}>
                                                <BarChart10 size={12} />
                                                <span className="text-xs">{menu.difficulty}</span>
                                            </div>

                                            <div className="flex px-1 py-0.5 text-gray-500 items-center gap-1">
                                                <span className="text-sm"><span className="font-semibold text-gray-700">{menu.rating}</span>/10</span>
                                                <div className="flex h-full gap-0.5 ml-2">
                                                    {Array.from({ length: 10 }, (_, i) => (
                                                        <div key={ i } className={`w-1 h-full rounded ${
                                                            i < menu.rating ? 'bg-yellow-400' : 'bg-gray-300'
                                                        }`} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {menu.title}
                                        </h3>
                                        <div className="flex justify-between">
                                            <div className="flex px-1 py-0.5 rounded font-semibold items-center gap-3">
                                                <div className="flex items-center gap-2 text-slate-600">
                                                    <Flame size={12} />
                                                    <span className="text-xs">{menu.calories} kkal</span>
                                                </div>

                                                <div className="w-[1px] h-[12px] bg-gray-300" />
                                                
                                                <div className="flex items-center gap-2 text-slate-600">
                                                    <Clock size={12} />
                                                    <span className="text-xs">{menu.calories} menit</span>
                                                </div>
                                            </div>
                                            <div className="flex gap-1">
                                                <div className="flex px-1 py-0.5 text-gray-700 items-center">
                                                    <Star size={17} />
                                                </div>

                                                <button className="flex bg-primary px-4 text-sm py-1.5 text-slate-100 rounded-md font-semibold text-gray-700 items-center gap-1">
                                                    Lihat
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>

                    {/* All Menu */}
                    <div className = {`flex flex-col w-full gap-2`}>
                        <div className = "flex justify-between items-center">
                            <h2 className = "text-xl font-semibold text-gray-700">
                                Semua Menu
                            </h2>
                            <div className="flex gap-2">
                                <div className="flex p-2 bg-gray-200 items-center text-gray-700 rounded-lg gap-1">
                                    <Filter size={15} />
                                    <span className="text-xs font-medium">Filter</span>
                                    <ChevronDown size={15} />
                                </div>
                            </div>
                        </div>
                        <div className = "flex justify-between items-center">
                            <div className="flex gap-2">
                                <div className="flex px-3 py-2 bg-gray-200 items-center text-gray-700 rounded-lg gap-6">
                                    <span className="text-xs font-medium ">Semua</span>
                                    <span className="text-xs font-medium">Mudah</span>
                                    <span className="text-xs font-medium">Sedang</span>
                                    <span className="text-xs font-medium">Sulit</span>
                                </div>
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
                            {recMenus.map((menu, i) => (
                                <div key={ i } className = "flex p-3 text-justify bg-[#B5ABAB] rounded-lg gap-3">
                                    <div className="rounded-xl w-1/3 h-25 overflow-hidden">
                                        <img src={menu.image} className="object-cover w-full h-full" />
                                    </div>
                                    <div className="flex flex-col w-full justify-between">
                                        <div className="flex justify-between">
                                            <div className={`flex px-4 rounded font-semibold items-center gap-1 ${
                                                menu.difficulty === 'Mudah' ? 'bg-primary text-white' : 
                                                menu.difficulty === 'Sedang' ? 'bg-btn-medium text-white' : 
                                                menu.difficulty === 'Sulit' ? 'bg-btn-hard text-white' : 
                                                'bg-white text-gray-700'
                                            }`}>
                                                <BarChart10 size={12} />
                                                <span className="text-xs">{menu.difficulty}</span>
                                            </div>
                                            <div className="flex px-1 py-0.5 text-gray-500 items-center gap-1">
                                                <span className="text-xs"><span className="font-semibold text-gray-700">{menu.rating}</span>/10</span>
                                                <div className="flex h-full gap-0.5">
                                                    {Array.from({ length: 10 }, (_, i) => (
                                                        <div key={ i } className={`w-1 h-full rounded ${
                                                            i < menu.rating ? 'bg-yellow-400' : 'bg-gray-300'
                                                        }`} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {menu.title}
                                        </h3>
                                        <div className="flex justify-between">
                                            <div className="flex px-1 py-0.5 bg-white rounded font-semibold text-gray-700 items-center gap-1.5">
                                                <div className="flex items-center gap-0.5">
                                                    <Flame size={12} />
                                                    <span className="text-xs">{menu.calories} kkal</span>
                                                </div>
                                                <div className="w-[1px] h-full bg-gray-300" />
                                                <div className="flex items-center gap-0.5">
                                                    <Clock size={12} />
                                                    <span className="text-xs">{menu.prepTime} menit</span>
                                                </div>
                                            </div>
                                            <div className="flex gap-1">
                                                <div className="flex px-1 py-0.5 bg-white rounded text-gray-700 items-center">
                                                    <Star size={17} />
                                                </div>
                                                <div className="flex bg-primary text-slate-100 rounded-md font-semibold text-gray-700 items-center gap-1">
                                                    <span className="text-sm px-3 py-1">Lihat</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <Footer />
            </main>

            <SideSection>
                <h2 className = "text-xl font-semibold text-gray-700">Menu Favorit</h2>
                {/* Code */}
                
                <h2 className = "text-xl font-semibold text-gray-700">Riwayat</h2>
                {/* Code */}
                
            </SideSection>
        </div>
    )
}

export default Page