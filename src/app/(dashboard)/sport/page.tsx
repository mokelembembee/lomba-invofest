import SideSection from "@/components/dashboard/side"
import Footer from "@/components/footer"
import { BarChart10, ChevronDown, Clock, Star } from "iconest-react"
import { Filter, Flame, Search, Info } from "lucide-react"

const Page = () => {
    const recSports = [{
        title: 'Salman Goreng',
        image: '/images/user1.png',
        difficulty: 'Mudah',
        area: "Upper Body",
        calories: 350,
        prepTime: 15
    }, {
        title: 'Nebula Bakar',
        image: '/images/user1.png',
        difficulty: 'Sedang',
        area: "Lower Body",
        calories: 400,
        prepTime: 20
    }, {
        title: 'Salman Bakar',
        image: '/images/user1.png',
        difficulty: 'Sulit',
        area: "Full Body",
        calories: 500,
        prepTime: 30
    }, {
        title: 'Nebula Goreng',
        image: '/images/user1.png',
        difficulty: 'Sulit',
        area: "Core",
        calories: 450,
        prepTime: 25
    }]

    return (
        <div className="w-full h-full flex">
            <main className="flex flex-col w-full h-full p-8 gap-8 justify-between">
                <div className="flex flex-col gap-8">

                    {/* Title and Searchbar */}
                    <div className="flex justify-between items-center">
                        <h1 className="text-4xl font-bold text-gray-800">Olahraga</h1>
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
                            {recSports.map((exercise, i) => (
                                <div key={ i } className = "flex p-3 text-justify bg-[#B5ABAB] rounded-lg gap-3">
                                    <div className="rounded-xl w-1/2 h-20 overflow-hidden">
                                        <img src={exercise.image} className="object-cover w-full h-full" />
                                    </div>
                                    <div className="flex flex-col w-full justify-between">
                                        <div className="flex justify-between">
                                            <div className="flex px-1 py-0.5 bg-white rounded font-semibold text-gray-700 items-center gap-1">
                                                <BarChart10 size={12} />
                                                <span className="text-xs">{exercise.difficulty}</span>
                                            </div>
                                            <div className="flex px-1 py-0.5 bg-white rounded font-semibold text-gray-700 items-center gap-1">
                                                <span className="text-xs">{exercise.area}</span>
                                                <Info size={10} />
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {exercise.title}
                                        </h3>
                                        <div className="flex justify-between">
                                            <div className="flex px-1 py-0.5 bg-white rounded font-semibold text-gray-700 items-center gap-1.5">
                                                <div className="flex items-center gap-0.5">
                                                    <Flame size={12} />
                                                    <span className="text-xs">{exercise.calories} kkal</span>
                                                </div>
                                                <div className="w-[1px] h-full bg-gray-300" />
                                                <div className="flex items-center gap-0.5">
                                                    <Clock size={12} />
                                                    <span className="text-xs">{exercise.prepTime} menit</span>
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

                    {/* All Sport */}
                    <div className = {`flex flex-col w-full gap-2`}>
                        <div className = "flex justify-between items-center">
                            <h2 className = "text-xl font-semibold text-gray-700">
                                Semua Olahraga
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
                                    <span className="text-xs font-medium">Ascending</span>
                                    <ChevronDown size={15} />
                                </div>
                            </div>
                        </div>
                        <div className = "flex flex-col gap-2">
                            {recSports.map((exercise, i) => (
                                <div key={ i } className = "flex p-3 text-justify bg-[#B5ABAB] rounded-lg gap-3">
                                    <div className="rounded-xl w-1/3 h-25 overflow-hidden">
                                        <img src={exercise.image} className="object-cover w-full h-full" />
                                    </div>
                                    <div className="flex flex-col w-full justify-between">
                                        <div className="flex justify-between">
                                            <div className="flex px-1 py-0.5 bg-white rounded font-semibold text-gray-700 items-center gap-1">
                                                <BarChart10 size={12} />
                                                <span className="text-xs">{exercise.difficulty}</span>
                                            </div>
                                            <div className="flex px-1 py-0.5 bg-white rounded font-semibold text-gray-700 items-center gap-1">
                                                <span className="text-xs">{exercise.area}</span>
                                                <Info size={10} />
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {exercise.title}
                                        </h3>
                                        <div className="flex justify-between">
                                            <div className="flex px-1 py-0.5 bg-white rounded font-semibold text-gray-700 items-center gap-1.5">
                                                <div className="flex items-center gap-0.5">
                                                    <Flame size={12} />
                                                    <span className="text-xs">{exercise.calories} kkal</span>
                                                </div>
                                                <div className="w-[1px] h-full bg-gray-300" />
                                                <div className="flex items-center gap-0.5">
                                                    <Clock size={12} />
                                                    <span className="text-xs">{exercise.prepTime} menit</span>
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
                <h2 className = "text-xl font-semibold text-gray-700">sabar</h2>

                
            </SideSection>
        </div>
    )
}

export default Page