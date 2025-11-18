'use client'

import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Search, Heart } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { Article } from "@/types"

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog"

const Page = () => {
    const [articles, setArticles] = useState<Article[]>([])
    const [loading, setLoading] = useState(true)
    const [likedArticles, setLikedArticles] = useState<number[]>([])
    const [activeCategory, setActiveCategory] = useState("Semua")
    const [categories, setCategories] = useState<string[]>([])
    // const formatDate = (date: string) =>
    //     new Date(date).toLocaleDateString("id-ID", {
    //         day: "numeric",
    //         month: "long",
    //         year: "numeric"
    // })
    
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await fetch("/api/article", { method: "GET" })
                const json = await res.json()
                const data: Article[] = json.data ?? []

                setArticles(data)
                setLikedArticles(data.filter(a => a.liked).map(a => a.id))
                setCategories(["Semua", ...Array.from(new Set(data.map(a => a.category)))])
            } finally {
                setLoading(false)
            }
        }
        fetchArticles()
    }, [])

    const toggleLike = (id: number) => {
        setLikedArticles(prev =>
            prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
        )
    }

    const filteredArticles = activeCategory === "Semua"
        ? articles
        : articles.filter(a => a.category === activeCategory)

    if (loading) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-600 text-lg">Memuat artikel...</span>
            </div>
        )
    }

    return (
        <div className="w-full h-full flex">
            <main className="flex flex-col w-full h-full p-8 gap-8 justify-between">
                <div className="flex flex-col gap-8">

                    <div className="flex w-full items-center p-8 border-b pb-16">
                        <div className="flex flex-col space-y-2">
                            <span className="text-xl font-medium text-gray-500">Artikel</span>
                            <h2 className="text-4xl font-semibold text-gray-700">
                                Jelajahi fakta & tips menarik disini
                            </h2>
                        </div>

                        <div className="bg-slate-100 w-full rounded-3xl p-4 flex flex-col gap-2 h-fit ml-auto">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <div className="w-full flex gap-2 items-center">
                                        <div className="flex gap-2 bg-white p-1 rounded-full h-fit w-full">
                                            <div className="flex bg-white items-center border border-gray-300 rounded-full w-full">
                                                <Search className="text-gray-400 ml-6" />
                                                <input type="text" id="search" placeholder="Cari artikel menarik"
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
                                                <div className="w-full pr-4 flex flex-col gap-4">
                                                    <h2 className="font-medium text-xl">Kategori</h2>
                                                    <div className="flex flex-wrap gap-2">
                                                        {categories.map(cat => (
                                                            <button
                                                                key={cat}
                                                                onClick={() => setActiveCategory(prev => prev === cat ? "Semua" : cat)}
                                                                className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${activeCategory === cat
                                                                    ? "bg-pink-600 text-white"
                                                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                                                    }`}
                                                            >
                                                                {cat}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                    <div className="grid grid-cols-7 gap-8 relative">
                        <div className="flex flex-col gap-8 col-span-5">

                            <div className="grid grid-cols-3 gap-2">
                                {filteredArticles.map((article, i) => (
                                <Dialog key={article.id}>
                                    <DialogTrigger asChild>
                                        <div className={`relative flex-shrink-0 h-60 overflow-hidden rounded-lg bg-black cursor-pointer col-span-${(i % 4 == 1 || i % 4 == 2) ? 2 : 1}`}>
                                        <img src={article.image} alt={article.title}
                                            className="object-cover w-full h-full hover:scale-105 transition duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                        <div className="absolute bottom-0 left-0 p-4 text-white z-10 flex flex-col justify-end">
                                            <h3 className="text-lg font-semibold">{article.title}</h3>
                                            <p className="text-sm text-gray-300 line-clamp-2 h-10">{article.description}</p>
                                        </div>
                                        </div>
                                    </DialogTrigger>
                                    
                                    <DialogContent className="max-h-[82vh] overflow-y-auto rounded-3xl p-0 !border-0 max-w-3xl">
                                        
                                        <div className="h-80 w-full bg-black relative rounded-t-3xl overflow-hidden">
                                        <img src={article.image} alt={article.title}
                                            className="absolute w-full h-full object-cover top-0 left-0 mask-b-from-50%"
                                        />
                                        <div className="absolute inset-0 mask-t-to-50% mask-t-from-5% backdrop-blur-[2px] bg-black/20" />
                                        <div className="absolute w-full bottom-0 left-0 p-6 z-20 text-white">
                                            <DialogTitle className="text-3xl font-bold leading-tight">{article.title}</DialogTitle>
                                            <p className="text-slate-100/75 text-[15px]">
                                            Ditulis oleh {article.author} • {new Date(article.created_at).toLocaleDateString("id-ID",
                                                { day: "numeric", month: "long", year: "numeric" })}
                                            </p>
                                        </div>
                                        </div>
                                    
                                    
                                        <div className="px-6 py-6 space-y-4 text-gray-700 text-[15px] leading-relaxed">
                                        <div className="prose prose-sm max-w-none"
                                            dangerouslySetInnerHTML={{ __html: article.content }}
                                        />
                                        </div>
                                    
                                    
                                        <DialogFooter className="w-full px-6 pb-6 pt-0">
                                        <div className="flex gap-2 w-full">
                                            <Button
                                            className={`flex-1 text-base ${likedArticles.includes(article.id)
                                                ? "bg-red-500 hover:bg-red-600" : "bg-red-400 hover:bg-red-500"}`}
                                            onClick={() => toggleLike(article.id)}
                                            >
                                            <Heart size={18} className="mr-2" fill="currentColor" />
                                            {likedArticles.includes(article.id) ? "Disukai" : "Suka"}
                                            </Button>
                                    
                                            <DialogClose asChild>
                                            <Button className="flex-1 text-base bg-gray-200 text-gray-800 hover:bg-gray-300">
                                                Tutup
                                            </Button>
                                            </DialogClose>
                                        </div>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>                                  
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col col-span-2 gap-2 sticky top-8 self-start h-fit">
                            <div className="p-6 h-40 rounded-2xl bg-gradient-to-r from-pink-500 to-pink-700 overflow-hidden flex text-slate-100 relative">
                                <h3 className="text-xl font-semibold mt-auto">Artikel Disukai</h3>
                                <Heart className="absolute -top-4 -right-8 opacity-20" size={160} strokeWidth={1} />
                            </div>

                            <div className="border p-2 rounded-2xl flex flex-col gap-2 max-h-[45vh] overflow-y-auto">
                                {articles.filter(a => likedArticles.includes(a.id)).length > 0 ? (
                                    articles.filter(a => likedArticles.includes(a.id)).map(fav => (
                                        
                                        <Dialog key={fav.id}>
                                            <DialogTrigger asChild>
                                                <div className="bg-slate-100 p-3 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition">
                                                    <img src={fav.image} className="rounded-lg object-cover size-12" alt={fav.title} />
                                                    <div className="flex flex-col">
                                                        <span className="font-semibold text-gray-800">{fav.title}</span>
                                                        <span className="text-gray-500 text-xs">{fav.category}</span>
                                                    </div>
                                                </div>
                                            </DialogTrigger>

                                            
                                            <DialogContent className="max-w-3xl p-8 bg-white rounded-xl">
                                                <DialogHeader>
                                                    <DialogTitle className="text-2xl font-bold text-gray-800">{fav.title}</DialogTitle>
                                                </DialogHeader>

                                                <div className="space-y-4 max-h-[75vh] overflow-y-auto pr-2">
                                                    <img src={fav.image} className="rounded-lg w-full h-80 object-cover" />
                                                    <div className="text-gray-700 text-[15px] leading-relaxed space-y-3"
                                                        dangerouslySetInnerHTML={{ __html: fav.content }}
                                                    />
                                                </div>

                                                <DialogFooter className="flex justify-between mt-4">
                                                    <Button
                                                        variant="ghost"
                                                        className={`flex items-center gap-2 ${likedArticles.includes(fav.id) ? "text-red-500" : "text-gray-600"
                                                            }`}
                                                        onClick={() => toggleLike(fav.id)}
                                                    >
                                                        <Heart size={18} fill={likedArticles.includes(fav.id) ? "red" : "none"} />
                                                        {likedArticles.includes(fav.id) ? "Disukai" : "Suka"}
                                                    </Button>

                                                    <DialogClose asChild>
                                                        <Button variant="outline">Tutup</Button>
                                                    </DialogClose>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                    ))
                                ) : (
                                    <div className="flex flex-col items-center justify-center p-4 bg-slate-100 rounded-xl">
                                        <span className="font-medium text-gray-700 text-sm">Belum ada artikel disukai</span>
                                        <span className="text-gray-500 text-xs">Klik “Suka” pada artikel untuk menyimpan.</span>
                                    </div>
                                )}
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
