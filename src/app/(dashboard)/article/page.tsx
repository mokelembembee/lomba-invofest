'use client'

import Footer from "@/components/footer"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"
import { Button } from "@/components/ui/button"
import { Search, Heart } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { useState } from "react"

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog"

const Page = () => {
    const articles = [
        {
            title: 'Salman Goreng',
            image: '/images/dapur.jpeg',
            description: 'Resep mudah dan lezat untuk membuat salmon goreng renyah dengan bumbu sederhana.',
            content: 'Langkah-langkah membuat Salman Goreng: 1. Siapkan bahan, 2. Lumuri salmon dengan bumbu, 3. Goreng hingga matang, 4. Sajikan hangat bersama nasi putih dan sambal.',
        },
        {
            title: 'Nebula Bakar',
            image: '/images/dapur.jpeg',
            description: 'Resep mudah dan lezat untuk membuat nebula bakar dengan bumbu sederhana.',
            content: 'Langkah-langkah: 1. Rendam nebula dalam saus madu, 2. Bakar di atas arang, 3. Sajikan dengan saus pedas.',
        },
        {
            title: 'Salman Bakar',
            image: '/images/dapur.jpeg',
            description: 'Resep mudah dan lezat untuk membuat salmon bakar dengan bumbu sederhana.',
            content: 'Cara membuat Salmon Bakar: 1. Marinasi salmon, 2. Bakar hingga permukaannya kecoklatan, 3. Sajikan dengan lalapan segar.',
        },
        {
            title: 'Salman Bakar',
            image: '/images/dapur.jpeg',
            description: 'Resep mudah dan lezat untuk membuat salmon bakar dengan bumbu sederhana.',
            content: 'Cara membuat Salmon Bakar: 1. Marinasi salmon, 2. Bakar hingga permukaannya kecoklatan, 3. Sajikan dengan lalapan segar.',
        }
    ]

const [likedArticles, setLikedArticles] = useState<string[]>([])

const toggleLike = (title: string) => {
    setLikedArticles((prev) =>
    prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    )
}

    return (
        <div className="w-full h-full flex">
            <main className="flex flex-col w-full h-full p-8 gap-8 justify-between">
                <div className="flex flex-col gap-8">
                    {/* Header */}
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
                                                <input
                                                    type="text"
                                                    id="search"
                                                    placeholder="Cari artikel menarik"
                                                    className="p px-4 py-2 pr-6 outline-none w-full"
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
                                                    <h2 className="font-medium text-xl">Kategori</h2>
                                                    <span className="text-gray-600">Pilih kategori artikel</span>
                                                    <span className="text-gray-400 text-sm my-4">Contoh: Resep, Tips, Kesehatan</span>
                                                    <Button className="w-full mt-auto">Terapkan</Button>
                                                </div>
                                                <div className="w-full flex flex-col gap-4">
                                                    <div className="flex items-center">
                                                        <div>
                                                            <h2 className="font-medium text-xl">Durasi Baca</h2>
                                                            <span className="text-gray-600">Durasi baca maksimum</span>
                                                        </div>
                                                        <div className="flex gap-2 items-center ml-auto">
                                                            <Input className="w-16 ml-auto text-center" defaultValue="10" />
                                                            <span>menit</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div>
                                                            <h2 className="font-medium text-xl">Tipe Salman</h2>
                                                            <span className="text-gray-600">Pilih Salman</span>
                                                        </div>
                                                        <div className="flex gap-2 items-center ml-auto">
                                                            <span className="text-gray-400 text-sm">BLABLABLABLUBLUBLU</span>
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

                    {/* Artikel + Sidebar */}
                    <div className="grid grid-cols-7 gap-8 relative">
                        <div className="flex flex-col gap-8 col-span-5">
                            <div className="grid grid-cols-3 gap-2">
                                {articles.map((article, i) => (
                                    <Dialog key={i}>
                                        <DialogTrigger asChild>
                                            <div
                                                className={`relative flex-shrink-0 h-60 overflow-hidden rounded-lg bg-black cursor-pointer col-span-${
                                                    (i % 4 == 1 || i % 4 == 2) ? 2 : 1
                                                }`}
                                            >
                                                <img src={article.image} alt={article.title}
                                                className="object-cover w-full h-full hover:blur-none hover:scale-105 transition duration-300 mask-b-from-50%"
                                                />

                                                <div className = "w-full h-full absolute top-0 left-0 mask-t-to-60% mask-t-from-2% backdrop-blur-sm"></div>

                                                <div className="absolute bottom-0 left-0 p-4 text-white z-10 flex flex-col justify-end">
                                                    <h3 className="text-lg font-semibold">{article.title}</h3>
                                                    <p className={`text-sm text-gray-300 line-clamp-2 h-10
                                                        ${ !(i == 0 || i == 3) && 'max-w-3/4' }`}
                                                    >
                                                        {article.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </DialogTrigger>

                                        <DialogContent className="max-w-3xl p-8 bg-white rounded-xl">
                                            <DialogHeader>
                                                <DialogTitle className="text-2xl font-bold text-gray-800">
                                                {article.title}
                                                </DialogTitle>
                                            </DialogHeader>

                                            <div className="space-y-4 max-h-[75vh] overflow-y-auto pr-2">
                                                <img src={article.image} alt={article.title} className="rounded-lg w-full h-80 object-cover" />
                                                <div className="text-gray-700 text-[15px] leading-relaxed space-y-3" dangerouslySetInnerHTML={{ __html: article.content }} />
                                            </div>

                                            <DialogFooter className="flex justify-between mt-4">
                                                <Button
                                                variant="ghost"
                                                className={`flex items-center gap-2 ${
                                                    likedArticles.includes(article.title)
                                                    ? 'text-red-500'
                                                    : 'text-gray-600'
                                                }`}
                                                onClick={() => toggleLike(article.title)}
                                                >
                                                <Heart
                                                    size={18}
                                                    fill={likedArticles.includes(article.title) ? 'red' : 'none'}
                                                />
                                                {likedArticles.includes(article.title)
                                                    ? 'Disukai'
                                                    : 'Suka'}
                                                </Button>

                                                <Button variant="outline">Tutup</Button>
                                            </DialogFooter>
                                        </DialogContent>

                                    </Dialog>
                                ))}
                            </div>
                        </div>

                        {/* RIGHTSIDE */}
                        <div className="flex flex-col col-span-2 gap-2 sticky top-8 self-start h-fit">
                            <div className="p-6 h-40 rounded-2xl bg-gradient-to-r from-pink-500 to-pink-700 overflow-hidden flex text-slate-100 relative">
                                <h3 className="text-xl font-semibold mt-auto">Artikel Disukai</h3>
                                <Heart className="absolute -top-4 -right-8 opacity-20" size={160} strokeWidth={1} />
                            </div>

                            <div className="border p-2 rounded-2xl flex flex-col gap-2">
                                <div className="bg-slate-100 p-4 rounded-xl text-sm font-medium">
                                    Resep Salmon Goreng
                                </div>
                                <div className="bg-slate-100 p-4 rounded-xl text-sm font-medium">
                                    Tips Menyimpan Sayur
                                </div>
                                <div className="bg-slate-100 p-4 rounded-xl text-sm font-medium">
                                    Sejarah Bumbu Dapur
                                </div>
                            </div>
                            <Button className="mt-2">Lihat Semua</Button>

                            <div className="flex flex-col gap-2 mt-6">
                                <h3 className="text-xl font-semibold text-gray-700">Riwayat Baca</h3>
                                <div className="border p-2 rounded-2xl flex flex-col gap-2">
                                    <div className="bg-slate-100 p-4 rounded-xl">
                                        <span className="font-medium text-xs text-gray-800 block">Dibaca Hari Ini</span>
                                        <hr className="border-gray-300 my-1" />
                                        <span className="font-medium text-sm text-gray-800">Manfaat Minyak Zaitun</span>
                                        <span className="text-xs text-gray-600 block">Kategori: Kesehatan</span>
                                    </div>
                                    <div className="bg-slate-100 p-4 rounded-xl">
                                        <span className="font-medium text-sm text-gray-800">Cara Membuat Kaldu</span>
                                        <span className="text-xs text-gray-600 block">Kategori: Tips & Trik</span>
                                    </div>
                                    <div className="bg-slate-100 p-4 rounded-xl">
                                        <span className="font-medium text-xs text-gray-800 block">Dibaca Kemarin</span>
                                        <hr className="border-gray-300 my-1" />
                                        <span className="font-medium text-sm text-gray-800">Perbedaan Bawang Merah dan Bawang Bombay</span>
                                        <span className="text-xs text-gray-600 block">Kategori: Pengetahuan</span>
                                    </div>
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
