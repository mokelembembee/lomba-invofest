import SideSection from "@/components/dashboard/side"
import Footer from "@/components/footer"
import { BarChart10, ChevronDown, Clock, MessageCircle2, Star } from "iconest-react"
import { Filter, Flame, Search } from "lucide-react"

const Page = () => {
    const recMenus = [{
        title: 'Salman Goreng',
        image: '/images/user1.png',
        difficulty: 'Easy',
        rating: 9,
        calories: 350,
        prepTime: 15
    }, {
        title: 'Nebula Bakar',
        image: '/images/user1.png',
        difficulty: 'Medium',
        rating: 8,
        calories: 400,
        prepTime: 20
    }, {
        title: 'Salman Bakar',
        image: '/images/user1.png',
        difficulty: 'Hard',
        rating: 4,
        calories: 500,
        prepTime: 30
    }, {
        title: 'Nebula Goreng',
        image: '/images/user1.png',
        difficulty: 'Hard',
        rating: 6,
        calories: 450,
        prepTime: 25
    }]

    return (
        <div className="flex w-full min-h-screen ml-20">
            <main className="flex flex-col w-full h-full p-8 gap-8 justify-between">
                <div className="flex flex-col gap-8">

                    {/* Title and Searchbar */}
                    <div className="flex justify-between items-center">
                        <h1 className="text-4xl font-bold text-gray-800">Menu</h1>
                        <div className="flex gap-2">
                            <div className="flex px-2 py-1 items-center border border-gray-300 rounded-xl gap-1">
                                <Search className="text-gray-400" />
                                <input type="text" id="search" placeholder="Cari bahan..." className="p-1 outline-none" />
                            </div>
                            <button className="px-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition">Pilih Bahan</button>
                        </div>
                    </div>

                    {/* Recommendation */}
                    <div className = {`flex flex-col w-full p-4 bg-gray-200 rounded-xl gap-4`}>
                        <h2 className = "text-xl font-semibold text-gray-700">
                            Rekomendasi
                        </h2>
                        <div className = "grid grid-cols-2 gap-2">
                            {recMenus.map((menu, i) => (
                                <div key={ i } className = "flex p-3 text-justify bg-[#B5ABAB] rounded-lg gap-3">
                                    <div className="rounded-xl w-1/2 h-20 overflow-hidden">
                                        <img src={menu.image} className="object-cover w-full h-full scale-130" />
                                    </div>
                                    <div className="flex flex-col w-full justify-between">
                                        <div className="flex justify-between">
                                            <div className="flex px-1 py-0.5 bg-white rounded font-semibold text-gray-700 items-center gap-1">
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
                                                    <Star size={12} />
                                                </div>
                                                <div className="flex px-1 py-0.5 bg-green-300 rounded font-semibold text-gray-700 items-center gap-1">
                                                    <span className="text-xs">Lihat</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
                                    <span className="text-xs font-medium">Semua</span>
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
                                        <img src={menu.image} className="object-cover w-full h-full scale-130" />
                                    </div>
                                    <div className="flex flex-col w-full justify-between">
                                        <div className="flex justify-between">
                                            <div className="flex px-1 py-0.5 bg-white rounded font-semibold text-gray-700 items-center gap-1">
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
                                                    <Star size={12} />
                                                </div>
                                                <div className="flex px-1 py-0.5 bg-green-300 rounded font-semibold text-gray-700 items-center gap-1">
                                                    <span className="text-xs">Lihat</span>
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
                <h2 className = "text-xl font-semibold text-gray-700">Teman</h2>

                <div className = "space-y-4">
                    <div className = "flex gap-3">
                        <div className = "relative select-none">
                            <img src = "/images/user1.png" className = "rounded-full bg-black size-12" />
                            <div className = "rounded-full size-4 border-3 border-white bg-green-500 absolute bottom-0 -left-0.5"></div>
                        </div>

                        <div className = "flex flex-col justify-center">
                            <span className = "font-sm font-medium text-gray-700">Salman Nebula C27</span>
                            <span className = "text-xs text-gray-600">Online</span>
                        </div>

                        <button className = "ml-auto">
                            <MessageCircle2 className = "text-gray-600" />
                        </button>
                    </div>

                    <div className = "flex gap-3">
                        <div className = "relative select-none">
                            <img src = "/images/user1.png" className = "rounded-full bg-black size-12" />
                            <div className = "rounded-full size-4 border-3 border-white bg-yellow-500 absolute bottom-0 -left-0.5"></div>
                        </div>

                        <div className = "flex flex-col justify-center">
                            <span className = "font-sm font-medium text-gray-700">Salman Nebula C27</span>
                            <span className = "text-xs text-gray-600">Sedang memasak</span>
                        </div>

                        <button className = "ml-auto">
                            <MessageCircle2 className = "text-gray-600" />
                        </button>
                    </div>

                    <div className = "flex gap-3">
                        <img src = "/images/user1.png" className = "rounded-full bg-black size-12" />

                        <div className = "flex flex-col justify-center">
                            <span className = "font-sm font-medium text-gray-700">Salman Nebula C27</span>
                            <span className = "text-xs text-gray-600">Terakhir aktif 3 jam yang lalu</span>
                        </div>

                        <button className = "ml-auto">
                            <MessageCircle2 className = "text-gray-600" />
                        </button>
                    </div>
                </div>
            </SideSection>
        </div>
    )
}

export default Page