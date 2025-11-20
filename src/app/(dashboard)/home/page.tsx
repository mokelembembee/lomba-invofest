'use client'

import CharacterScene from "@/components/dashboard/character"
import SideSection from "@/components/dashboard/side"
import Footer from "@/components/footer"
import TypingAnimation from "@/components/dashboard/typinganimation";
import { ArrowRight, Calendar, Camera, MessageCircle2, User } from "iconest-react"
// 1. UPDATE IMPORT: Tambahkan Heart disini
import { Dumbbell, Flame, Shirt, Heart } from "lucide-react" 
import { useEffect, useState } from "react"
import Link from "next/link"
import { useUser } from "@stackframe/stack";
import { useRouter } from "next/navigation";
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
import { Button } from "@/components/ui/button"

const Page = () => {
    const router = useRouter()
    const user = useUser()

    const [articles, setArticles] = useState<Article[]>([])
    const [loadingArticles, setLoadingArticles] = useState(true)
    
    const [likedArticles, setLikedArticles] = useState<number[]>([])

    useEffect(() => {
        if (!user) {
            router.replace('/handler/sign-in')
        }
    }, [user, router])

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                setLoadingArticles(true)
                const res = await fetch("/api/article", { method: "GET" })
                const json = await res.json()
                const data: Article[] = json.data ?? []
                setArticles(data)
                setLikedArticles(data.filter(a => a.liked).map(a => a.id))
            } catch (error) {
                console.error("Failed to fetch articles:", error)
            } finally {
                setLoadingArticles(false)
            }
        }
        fetchArticles()
    }, [])

    const toggleLike = (id: number) => {
        setLikedArticles(prev =>
            prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
        )
    }

    if (!user) {
        return null
    }

    const statsTab = [
        {
            title: "Umum",
            route: "umum",
            content: "/images/stats/weightstat.png",
        },
        {
            title: "Pola Makan",
            route: "pola-makan",
            content: "/images/stats/caloriesstat.png",
        },
        {
            title: "Olahraga",
            route: "olahraga",
            content: "/images/stats/sportstat.png",
        },
    ];

    const [selectedStat, setSelectedStat] = useState(statsTab[0].route);

    return (
        <div className="flex w-full flex-col md:flex-row">
            <main className="relative flex flex-col w-full h-full p-4 md:p-8 pt-0 gap-6 md:gap-8 justify-between">
                <div className="flex flex-col gap-6 md:gap-8">
                    <div className="relative flex w-full items-center px-4 md:px-8 border-b min-h-[150px] md:min-h-[200px] overflow-hidden py-6 md:py-0">
                        <div className="absolute inset-0 bg-[url('/images/Rhone3.svg')] bg-left bg-no-repeat opacity-75 pointer-events-none select-none bg-cover md:bg-auto">
                        </div>
                        <div className="flex flex-col space-y-2 relative z-10 w-full">
                            <span className="text-lg md:text-xl font-medium text-gray-500">Beranda</span>
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
                                <h2 className="text-2xl md:text-4xl font-semibold text-gray-700">
                                    Halo, {user.displayName}.
                                </h2>

                                <div className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 px-3 py-1 rounded-full w-fit">
                                    <Flame size={18} className="text-zinc-100" />
                                    <span className="font-semibold text-zinc-100 text-base md:text-lg">7</span>
                                </div>

                            </div>
                            <h2 className="text-2xl md:text-4xl font-semibold text-gray-700">
                                Sudah siap hidup sehat?
                            </h2>
                        </div>

                    </div>



                    <div className="space-y-1 px-4 md:px-8">
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Statistik</h2>
                        <span className="font-medium text-sm md:text-base text-gray-600">
                            Lihat perjalanan sehatmu disini
                        </span>
                    </div>

                    <div className="flex flex-col lg:flex-row w-full gap-4 px-4 md:px-8">
                        <div className="relative w-full lg:w-4/5 h-80 md:h-96 bg-blue-200 rounded-xl overflow-hidden">
                            <div className="flex flex-col absolute bottom-20 left-1/2 -translate-x-1/2 items-center gap-2 h-fit">
                                <span className="rounded-full bg-white translate-y-10 px-4 py-1.5 text-sm w-fit whitespace-nowrap">
                                    {user.displayName}
                                </span>
                                <img src="/images/tuyul.svg" className="h-40 md:h-50 w-fit" />
                            </div>

                            <img src="/images/land.png" className="absolute w-full h-auto bottom-0 object-cover" />

                            <div className="flex flex-col absolute top-4 left-4 gap-1.5 bg-white px-1.5 py-2 rounded-full">
                                <div className="bg-primary w-fit rounded-full text-slate-100 p-2 md:p-3">
                                    <Camera />
                                </div>

                                <div className="bg-primary w-fit rounded-full text-slate-100 p-2 md:p-3">
                                    <Shirt />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-full lg:w-3/5 items-center gap-2 p-0 lg:p-4 lg:pt-0">
                            <div className="flex gap-2 w-full border-b items-center justify-start lg:justify-center overflow-x-auto no-scrollbar">
                                {statsTab.map((tab) => (
                                    <div
                                        key={tab.route}
                                        onClick={() => setSelectedStat(tab.route)}
                                        className={`flex px-4 pb-2.5 font-semibold cursor-pointer transition-colors whitespace-nowrap ${selectedStat === tab.route
                                                ? "border-b-3 border-primary text-gray-800"
                                                : "text-gray-500 hover:text-gray-700"
                                            }`}
                                    >
                                        <span className="font-medium text-sm md:text-base">{tab.title}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex w-full h-64 md:h-full bg-slate-100 rounded-xl mt-2 p-4 md:p-6 flex-col gap-4">
                                <span className="font-semibold text-gray-700 text-sm md:text-base">
                                    Kamu sudah melakukan hal yang baik. Pertahankan ya!
                                </span>
                                <img src={statsTab.find((tab) => tab.route === selectedStat)?.content} className="w-full h-full object-contain" alt="stats" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-1 px-4 md:px-8">
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                            Fakta kesehatan
                        </h2>
                        <span className="font-medium text-sm md:text-base text-gray-600">
                            Temukan fakta-fakta menarik seputar kesehatan
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8">
                        {loadingArticles ? (
                            Array.from({ length: 3 }).map((_, i) => (
                                <div key={i} className="flex flex-col gap-2 p-1 border border-border rounded-lg gap-1 animate-pulse">
                                    <div className="bg-gray-300 w-full h-48 rounded-md" />
                                    <div className="px-4 py-2 bg-gray-200 h-10 rounded-md" />
                                    <div className="p-3 pt-1 space-y-2">
                                        <div className="bg-gray-300 h-4 rounded-md" />
                                        <div className="bg-gray-300 h-4 w-5/6 rounded-md" />
                                    </div>
                                </div>
                            ))
                        ) : (
                            articles.slice(0, 3).map((article, i) => (
                                <Dialog key={article.id}>
                                    <DialogTrigger asChild>
                                        <div className="flex flex-col gap-2 p-1 border border-border text-justify rounded-lg gap-1 cursor-pointer transition">
                                            <div className="bg-gray-900 w-full h-48 rounded-md relative overflow-hidden flex">
                                                <img src={article.image} className="absolute w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                                <h3 className="font-semibold text-white relative p-4 mt-auto z-10 text-base md:text-lg line-clamp-2">
                                                    {article.title}
                                                </h3>
                                                <div className="rounded-full bg-white flex size-10 text-gray-700 absolute top-4 right-4 z-10">
                                                    <Flame className="m-auto size-5 text-orange-500" />
                                                </div>
                                            </div>
                                            <div className="px-4 py-2 bg-slate-50 text-gray-500 text-xs md:text-sm flex gap-2 md:gap-3 items-center overflow-hidden">
                                                <User className="size-3 md:size-4 text-gray-400 shrink-0" />
                                                <span className="font-semibold text-gray-700 truncate">{article.author}</span>
                                                <span>•</span>
                                                <span className="whitespace-nowrap shrink-0">
                                                    {new Date(article.created_at).toLocaleDateString("id-ID", {
                                                        day: "numeric",
                                                        month: "long",
                                                        year: "numeric"
                                                    })}
                                                </span>
                                            </div>
                                            <div className="p-3 pt-1">
                                                <p className="text-xs md:text-sm text-gray-600 line-clamp-3">
                                                    {article.description}
                                                </p>
                                            </div>
                                        </div>
                                    </DialogTrigger>

                                    <DialogContent className="w-[95vw] max-h-[85vh] overflow-y-auto rounded-3xl p-0 !border-0 max-w-3xl flex flex-col">
                                        <div className="h-48 md:h-80 w-full bg-black relative rounded-t-3xl overflow-hidden shrink-0">
                                            <img src={article.image} alt={article.title}className="absolute w-full h-full object-cover top-0 left-0 mask-b-from-50%"/>
                                            <div className="absolute inset-0 mask-t-to-50% mask-t-from-5% backdrop-blur-[2px] bg-black/20" />
                                            <div className="absolute w-full bottom-0 left-0 p-4 md:p-6 z-20 text-white">
                                                <DialogTitle className="text-xl md:text-3xl font-bold leading-tight">
                                                    {article.title}
                                                </DialogTitle>
                                                <p className="text-slate-100/75 text-xs md:text-[15px]">
                                                    Ditulis oleh {article.author} • {new Date(article.created_at).toLocaleDateString("id-ID",
                                                        { day: "numeric", month: "long", year: "numeric" })}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="px-4 md:px-6 py-4 md:py-6 space-y-4 text-gray-700 text-sm md:text-[15px] leading-relaxed">
                                            <div className="prose prose-sm max-w-none"
                                                dangerouslySetInnerHTML={{ __html: article.content }}
                                            />
                                        </div>

                                        <DialogFooter className="w-full px-4 md:px-6 pb-6 pt-0">
                                            <div className="flex gap-2 w-full">
                                                <Button
                                                    className={`flex-1 text-sm md:text-base ${likedArticles.includes(article.id)
                                                        ? "bg-red-500 hover:bg-red-600" : "bg-red-400 hover:bg-red-500"}`}
                                                    onClick={() => toggleLike(article.id)}
                                                >
                                                    <Heart size={18} className="mr-2" fill="currentColor" />
                                                    {likedArticles.includes(article.id) ? "Disukai" : "Suka"}
                                                </Button>

                                                <DialogClose asChild>
                                                    <Button className="flex-1 text-sm md:text-base bg-gray-200 text-gray-800 hover:bg-gray-300">
                                                        Tutup
                                                    </Button>
                                                </DialogClose>
                                            </div>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            ))
                        )}
                    </div>
                </div>

                <Link href="/article" className="ml-auto text-gray-600 font-medium flex items-center px-4 md:px-8 gap-2 text-sm md:text-base">
                    <span>Lihat selengkapnya</span>
                    <ArrowRight className="size-4 md:size-5" />
                </Link>

                <Footer />
            </main>
        </div>
    );
};

export default Page;
