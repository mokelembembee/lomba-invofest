'use client'

import CharacterScene from "@/components/dashboard/character"
import SideSection from "@/components/dashboard/side"
import Footer from "@/components/footer"
import TypingAnimation from "@/components/dashboard/typinganimation";
import { ArrowRight, Calendar, Camera, MessageCircle2, User } from "iconest-react"
import { Dumbbell, Flame, Shirt } from "lucide-react"
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

    // const formatDate = (date: string) =>
    //     new Date(date).toLocaleDateString("id-ID", {
    //         day: "numeric",
    //         month: "long",
    //         year: "numeric"
    // })

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
            } catch (error) {
                console.error("Failed to fetch articles:", error)
            } finally {
                setLoadingArticles(false)
            }
        }
        fetchArticles()
    }, [])


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
        <div className="flex w-full">
            <main className="relative flex flex-col w-full h-full p-8 pt-0 gap-8 justify-between">
                <div className="flex flex-col gap-8">
                    <div className="relative flex w-full items-center px-8 border-b min-h-50 overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/images/Rhone3.svg')] bg-left  bg-no-repeat opacity-75 pointer-events-none select-none">
                        </div>
                        <div className="flex flex-col space-y-2 relative z-10">
                            <span className="text-xl font-medium text-gray-500">Beranda</span>
                            <h2 className="text-4xl font-semibold text-gray-700">
                                Halo, {user.displayName}. Sudah siap hidup sehat?
                            </h2>
                        </div>
                    </div>



                    <div className="space-y-1 px-8">
                        <h2 className="text-2xl font-semibold text-gray-800">Statistik</h2>
                        <span className="font-medium text-gray-600">
                            Lihat perjalanan sehatmu disini
                        </span>
                    </div>

                    <div className="flex flex-col md:flex-row w-full gap-4 px-8">
                        <div className="relative w-full md:w-4/5 h-96 bg-blue-200 rounded-xl overflow-hidden">
                            <div className="flex flex-col absolute bottom-20 left-1/2 -translate-x-1/2 items-center gap-2 h-fit">
                                <span className="rounded-full bg-white translate-y-10 px-4 py-1.5 text-sm w-fit">
                                    Salman
                                </span>
                                <img src="/images/tuyul.svg" className="h-50 w-fit" />
                            </div>

                            <img src="/images/land.png" className="absolute w-full h-auto bottom-0" />

                            <div className="flex flex-col absolute top-4 left-4 gap-1.5 bg-white px-1.5 py-2 rounded-full">
                                <div className="bg-primary w-fit rounded-full text-slate-100 p-3">
                                    <Camera />
                                </div>

                                <div className="bg-primary w-fit rounded-full text-slate-100 p-3">
                                    <Shirt />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-full  md:w-3/5 items-center gap-2 p-4 pt-0">
                            <div className="flex gap-2 w-full border-b items-center justify-center">
                                {statsTab.map((tab) => (
                                    <div
                                        key={tab.route}
                                        onClick={() => setSelectedStat(tab.route)}
                                        className={`flex px-4 pb-2.5 font-semibold cursor-pointer transition-colors ${selectedStat === tab.route
                                                ? "border-b-3 border-primary text-gray-800"
                                                : "text-gray-500 hover:text-gray-700"
                                            }`}
                                    >
                                        <span className="font-medium">{tab.title}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex w-full h-full bg-slate-100 rounded-xl mt-2 p-6 flex-col gap-4">
                                <span className="font-semibold text-gray-700">
                                    Kamu sudah melakukan hal yang baik. Pertahankan ya!
                                </span>
                                <img src={statsTab.find((tab) => tab.route === selectedStat)?.content} className="w-full h-full object-contain" alt="stats" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-1 px-8">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Fakta kesehatan
                        </h2>
                        <span className="font-medium text-gray-600">
                            Temukan fakta-fakta menarik seputar kesehatan
                        </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 px-8">
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
                                        <div className="flex flex-col gap-2 p-1 border border-border text-justify rounded-lg gap-1 cursor-pointer transition hover:shadow-md" >
                                            <div className="bg-gray-900 w-full h-48 rounded-md relative overflow-hidden flex">
                                                <img src={article.image} className="absolute w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                                <h3 className="font-semibold text-white relative p-4 mt-auto z-10">
                                                    {article.title}
                                                </h3>
                                                <div className="rounded-full bg-white flex size-10 text-gray-700 absolute top-4 right-4 z-10">
                                                    <Flame className="m-auto size-5 text-orange-500" />
                                                </div>
                                            </div>
                                            <div className="px-4 py-2 bg-slate-50 text-gray-500 text-sm flex gap-3 items-center">
                                                <User className="size-4 text-gray-400" />
                                                <span className="font-semibold text-gray-700">{article.author}</span>
                                                <span>•</span>
                                                <span className="whitespace-nowrap">
                                                    {new Date(article.created_at).toLocaleDateString("id-ID", {
                                                        day: "numeric",
                                                        month: "long",
                                                        year: "numeric"
                                                    })}
                                                </span>
                                            </div>
                                            <div className="p-3 pt-1">
                                                <p className="text-sm text-gray-600 line-clamp-3">
                                                    {article.description}
                                                </p>
                                            </div>
                                        </div>
                                    </DialogTrigger>

                                    <DialogContent className="max-w-3xl p-8 bg-white rounded-xl">
                                        <DialogHeader>
                                            <DialogTitle className="text-2xl font-bold text-gray-800">{article.title}</DialogTitle>
                                        </DialogHeader>

                                        <div className="space-y-4 max-h-[75vh] overflow-y-auto pr-2">
                                            <img src={article.image} className="rounded-lg w-full h-80 object-cover" />
                                            <div className="text-gray-700 text-[15px] leading-relaxed space-y-3"
                                                dangerouslySetInnerHTML={{ __html: article.content }}
                                            />
                                        </div>

                                        <DialogFooter className="flex justify-end mt-4">
                                            <DialogClose asChild>
                                                <Button variant="outline">Tutup</Button>
                                            </DialogClose>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            ))
                        )}
                    </div>
                </div>

                <Link href="/article" className="ml-auto text-gray-600 font-medium flex items-center px-8 gap-2">
                    <span>Lihat selengkapnya</span>
                    <ArrowRight className="size-5" />
                </Link>

                <Footer />
            </main>
        </div>
    );
};

export default Page;
