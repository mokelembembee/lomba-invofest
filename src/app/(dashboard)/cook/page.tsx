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
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";

const Page = () => {
    const router = useRouter()
    const user = useUser()

    const [search, setSearch] = useState("")
    const [menus, setMenus] = useState<Menu[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const [activeDifficulty, setActiveDifficulty] = useState("Semua")
    const difficultyFilters = ["Semua", "Mudah", "Sedang", "Sulit"]
    const [ingredients, setIngredients] = useState<string[]>([])
    const [newIngredient, setNewIngredient] = useState("")

    const [page, setPage] = useState(1)
    const itemsPerPage = 7

    const referenceIngredients = [
        // Awal
        "Salmon", "Tuna", "Bayam", "Wortel", "Brokoli", "Tomat", "Kubis", "Telur", "Ayam", "Daging", "Kentang",
        "Keju", "Bawang Putih", "Bawang Merah", "Cabai", "Minyak Zaitun", "Mentega", "Garam", "Merica","Apel",

        // Tambahan Protein & Daging
        "Udang", "Cumi-cumi", "Kerang", "Gurame", "Bandeng", "Kakap", "Kepiting", "Lobster", "Sarden",
        "Bebek", "Kalkun", "Puyuh", "Sapi", "Kambing", "Iga", "Sosis", "Bacon", "Ham",

        // Tambahan Sayuran
        "Sawi", "Selada", "Pakcoy", "Kangkung", "Daun Bawang", "Seledri", "Daun Singkong",
        "Ubi Jalar", "Singkong", "Lobak", "Bit", "Terong", "Labu Siam", "Timun", "Zukini", "Paprika", "Jagung", "Jamur Kancing", "Jamur Tiram",
        "Buncis", "Kacang Panjang", "Edamame", "Kacang Polong",

        // Biji-bijian & Karbohidrat
        "Nasi Putih", "Beras Ketan", "Mie Telor", "Pasta Spaghetti", "Roti", "Gandum", "Oatmeal", "Quinoa",

        // Produk Susu & Alternatif
        "Susu Sapi", "Yoghurt", "Krim", "Santan", "Tahu", "Tempe",

        // Rempah-rempah, Bumbu Dasar, & Perasa
        "Jahe", "Kunyit", "Lengkuas", "Kencur", "Serai", "Daun Salam", "Ketumbar", "Jintan", "Kayu Manis", "Cengkeh", "Pala", "Kapulaga",
        "Kecap Manis", "Kecap Asin", "Saus Tiram", "Saus Sambal", "Cuka", "Gula Pasir", "MSG",

        // Minyak & Lemak
        "Minyak Kelapa", "Minyak Sayur", "Margarin", "Minyak Wijen"
    ]

    const suggestions = referenceIngredients.filter(
        ing =>
            newIngredient &&
            ing.toLowerCase().includes(newIngredient.toLowerCase()) &&
            !ingredients.includes(ing)
    )

    useEffect(() => {
        if (!user) router.replace("/handler/sign-in")
    }, [user, router])

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const res = await fetch("/api/recipe", { method: "GET" })
                if (!res.ok) throw new Error("Gagal memuat data resep")
                const json = await res.json()
                const mapped: Menu[] = json.data.map((item: any) => ({
                    title: item.title,
                    image: item.image,
                    description: item.description ?? "Tidak ada deskripsi",
                    difficulty: item.difficulty,
                    rating: item.rating,
                    calories: item.calories,
                    steps: Array.isArray(item.steps) ? item.steps : [],
                    duration: item.duration,
                    ingredients: item.ingredients ?? {},
                    liked: item.liked ?? false
                }))
                setMenus(mapped)
            } catch (err: any) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchRecipes()
    }, [])

    if (!user) return null
    if (loading) return <div className="w-full h-full flex items-center justify-center"><span className="text-gray-600 text-lg">Memuat resep...</span></div>
    if (error) return <div className="w-full h-full flex items-center justify-center"><span className="text-red-600 text-lg">{error}</span></div>

    const filteredMenus = menus.filter(menu => {
        if (activeDifficulty === "Semua") return true
        return menu.difficulty === activeDifficulty
    })

    const totalPages = Math.ceil(filteredMenus.length / itemsPerPage)
    const startIndex = (page - 1) * itemsPerPage
    const paginatedMenus = filteredMenus.slice(startIndex, startIndex + itemsPerPage)

    const mainRecommendation = menus[9]
    const secondRecommendation = menus[8]

    const toggleLikeGlobal = (title: string) => {
        setMenus(prev =>
            prev.map(menu =>
            menu.title === title ? { ...menu, liked: !menu.liked } : menu
            )
        );
    };

    return (
        <div className="w-full h-full flex">
            <main className="flex flex-col w-full h-full gap-8 justify-between p-8">
                <div className="flex w-full items-center p-8 border-b pb-16">
                    <div className="flex flex-col space-y-2">
                        <span className="text-xl font-medium text-gray-500">Menu</span>
                        <h2 className="text-4xl font-semibold text-gray-700">Jelajahi resep-resep menarik disini</h2>
                    </div>

                    <div className="bg-slate-100 w-full rounded-3xl flex flex-col gap-2 h-fit ml-auto">
                        <Accordion type="single" collapsible className = "p-4">
                            <AccordionItem value="item-1">
                                <div className="w-full flex gap-2 items-center">
                                    <div className="flex gap-2 bg-white p-1 rounded-full h-fit w-full">
                                        <div className="flex bg-white items-center border border-gray-300 rounded-full w-full">
                                            <Search className="text-gray-400 ml-6" />
                                            <input
                                                type="text"
                                                placeholder="Cari resep..."
                                                className="px-4 py-2 pr-6 outline-none w-full"
                                                value={search}
                                                onChange={e => setSearch(e.target.value)}
                                            />
                                            <AccordionTrigger className="mr-4 ml-auto text-sm mx-8 flex items-center gap-2 whitespace-nowrap">
                                                <span className="text-gray-600 font-medium">Filter tambahan</span>
                                            </AccordionTrigger>
                                        </div>
                                    </div>
                                </div>

                                <AccordionContent>
                                    <div className="bg-white p-1 mt-2 rounded-xl flex">
                                        <div className="p-5 border rounded-lg flex w-full gap-4">
                                            <div className="w-full flex flex-col gap-4">
                                                <h2 className="font-medium text-xl">Bahan</h2>
                                                <div className="flex flex-wrap gap-2">
                                                    {ingredients.length === 0 && <span className="text-gray-400 text-sm">Belum ada bahan</span>}
                                                    {ingredients.map((bahan, i) => (
                                                        <span
                                                            key={i}
                                                            className="bg-slate-200 py-1 px-3 rounded-full text-gray-700 text-xs cursor-pointer hover:bg-slate-300"
                                                            onClick={() => setIngredients(prev => prev.filter(x => x !== bahan))}
                                                        >
                                                            {bahan} ×
                                                        </span>
                                                    ))}
                                                </div>
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <Button className="w-full">Tambah Bahan</Button>
                                                    </DialogTrigger>
                                                    <DialogContent className="rounded-xl">
                                                        <DialogHeader><DialogTitle className="text-xl font-semibold">Tambah Bahan</DialogTitle></DialogHeader>
                                                        <div className="flex flex-col gap-3 relative">
                                                            <Input
                                                                placeholder="Ketik bahan..."
                                                                value={newIngredient}
                                                                onChange={(e) => setNewIngredient(e.target.value)}
                                                            />
                                                            {suggestions.length > 0 && (
                                                                <div className="absolute top-14 w-full bg-white border rounded-lg shadow-lg max-h-40 overflow-y-auto z-20">
                                                                    {suggestions.map((item, idx) => (
                                                                        <button
                                                                            key={idx}
                                                                            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                                                                            onClick={() => {
                                                                                setIngredients(prev => [...prev, item])
                                                                                setNewIngredient("")
                                                                            }}
                                                                        >
                                                                            {item}
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                        <DialogFooter>
                                                            <Button
                                                                className="w-full"
                                                                onClick={() => {
                                                                    if (newIngredient.trim() !== "" && !ingredients.includes(newIngredient.trim())) {
                                                                        setIngredients(prev => [...prev, newIngredient.trim()])
                                                                    }
                                                                    setNewIngredient("")
                                                                }}
                                                            >
                                                                Simpan
                                                            </Button>
                                                        </DialogFooter>
                                                    </DialogContent>
                                                </Dialog>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>

                <div className="grid grid-cols-7 p-4 pt-0 gap-4 relative">
                    <div className="flex flex-col gap-8 col-span-5">
                        <div className="space-y-1 px-4">
                            <h2 className="text-2xl font-semibold text-gray-800">Rekomendasi</h2>
                            <span className="font-medium text-gray-600">Menu-menu yang kami sarankan khusus untuk anda</span>
                        </div>

                        <div className="flex flex-col w-full p-2 border rounded-2xl gap-4">
                            <div className="grid grid-cols-3 gap-2">
                                {mainRecommendation && (
                                    <>
                                        <FeaturedMenuCard menu={mainRecommendation} onToggleLike={toggleLikeGlobal} />
                                        <MenuCardLong menu={secondRecommendation} onToggleLike={toggleLikeGlobal} />
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col w-full gap-2">
                            <div className="flex justify-between items-center">
                                <div className="space-y-1 px-4">
                                    <h2 className="text-2xl font-semibold text-gray-800">Semua Menu</h2>
                                    <span className="font-medium text-gray-600">Menu-menu berdasarkan preferensi anda</span>
                                </div>
                            </div>

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
                                                onClick={() => {
                                                    setActiveDifficulty(filter)
                                                    setPage(1)
                                                }}
                                                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${colorClasses}`}
                                            >
                                                {filter}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                {paginatedMenus.map((menu, i) => (
                                    <MenuCard key={i} menu={menu} onToggleLike={toggleLikeGlobal} />
                                ))}

                                {filteredMenus.length === 0 && (
                                    <div className="flex flex-col items-center justify-center p-10 bg-gray-100 rounded-lg">
                                        <span className="font-semibold text-gray-700">Tidak ada menu ditemukan</span>
                                        <span className="text-gray-500">Coba ganti filter atau kata pencarian.</span>
                                    </div>
                                )}
                            </div>

                            {totalPages > 1 && (
                                <div className="flex gap-2 justify-center items-center mt-4">
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                                        <button
                                            key={num}
                                            onClick={() => setPage(num)}
                                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition aspect-square ${page === num
                                                    ? "bg-green-400 text-white"
                                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                                }`}
                                        >
                                            {num}
                                        </button>
                                    ))}
                                </div>
                            )}

                        </div>
                    </div>

                    <div className="flex flex-col col-span-2 gap-2 sticky top-4 self-start h-fit">
                        <div className="p-6 h-40 rounded-2xl bg-gradient-to-r from-primary to-primary-shade overflow-hidden flex text-slate-100 relative">
                            <h3 className="text-xl font-semibold mt-auto z-10">Resep Favorit Kamu</h3>
                            <img
                                className="absolute top-0 -right-16 size-56 -rotate-24"
                                src="https://cdn3d.iconscout.com/3d/premium/thumb/vegetables-3d-icon-png-download-6478875.png"
                            />
                        </div>

                        <div className="border p-2 rounded-2xl flex flex-col gap-2 max-h-[52vh] overflow-y-auto">
                            {menus.filter(m => m.liked).length > 0 ? (
                                menus
                                    .filter(m => m.liked)
                                    .map((fav, i) => (
                                        <button
                                            key={i}
                                            className="bg-slate-100 hover:bg-slate-200 transition p-4 rounded-xl text-sm flex items-center gap-3 text-left"
                                            onClick={() => router.push(`/cook/${fav.title}`)}
                                        >
                                            <img
                                                src={fav.image}
                                                className="rounded-lg object-cover size-12"
                                                alt={fav.title}
                                            />
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-gray-800">{fav.title}</span>
                                                <span className="text-gray-500 text-xs">{fav.calories} kkal • {fav.duration} menit</span>
                                            </div>
                                        </button>
                                    ))
                            ) : (
                                <div className="flex flex-col items-center justify-center p-4 bg-slate-100 rounded-xl">
                                    <span className="font-medium text-gray-700 text-sm">Belum ada resep favorit</span>
                                    <span className="text-gray-500 text-xs">Klik “Tambahkan Suka” pada resep untuk menyimpan.</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <Footer />
            </main>
        </div>
    )
}

export default Page
