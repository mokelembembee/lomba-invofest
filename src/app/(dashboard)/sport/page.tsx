'use client'

import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "iconest-react"
import { Search } from "lucide-react"
import { useEffect, useState } from "react"
import { Sport } from "@/types"
import FeaturedSportCard from "@/components/dashboard/FeaturedSportCard"
import SportCard from "@/components/dashboard/sportCard"
import LongFeaturedSportCard from "@/components/dashboard/LongFeaturedSportCard"
import { useRouter } from "next/navigation"
import { useUser } from "@stackframe/stack"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "@/components/ui/dialog"

const Page = () => {
    const router = useRouter()
    const user = useUser()

    const [sports, setSports] = useState<Sport[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const [search, setSearch] = useState("")
    const [area, setArea] = useState("")
    const [duration, setDuration] = useState("")
    const [calories, setCalories] = useState("")
    const [activeDifficulty, setActiveDifficulty] = useState("Semua")

    const [page, setPage] = useState(1)
    const itemsPerPage = 6

    const [openDayDialog, setOpenDayDialog] = useState(false)
    const [selectedDay, setSelectedDay] = useState<any | null>(null)

    const difficultyFilters = ["Semua", "Mudah", "Sedang", "Sulit"]
    const areaFilters = ["Semua", "Upper Body", "Lower Body", "Full Body", "Core", "Cardio"]
    const durationFilters = ["Semua", "< 20", "20–40", "> 40"]
    const calorieFilters = ["Semua", "< 200", "200–400", "> 400"]

    useEffect(() => {
        if (!user) router.replace("/handler/sign-in")
    }, [user, router])

    useEffect(() => {
        const fetchSports = async () => {
            setLoading(true)
            const params = new URLSearchParams()
            if (search) params.append("search", search)
            if (area) params.append("area", area)
            if (duration) params.append("duration", duration)
            if (calories) params.append("calories", calories)

            const res = await fetch(`/api/sports?${params.toString()}`)
            const json = await res.json()
            setSports(json.data || [])
            setLoading(false)
        }
        fetchSports()
    }, [search, area, duration, calories])

    if (!user) return null

    if (loading) return (
        <div className="w-full h-full flex items-center justify-center">
            <p className="text-gray-500">Memuat latihan...</p>
        </div>
    )

    if (error) return (
        <div className="w-full h-full flex items-center justify-center">
            <p className="text-red-500">Error: {error}</p>
        </div>
    )

    const mainRecommendation = sports[0] || null
    const secondRecommendation = sports[8] || null

    const filteredSports = sports.filter(
        s => activeDifficulty === "Semua" || s.difficulty === activeDifficulty
    )

    // PAGINATION
    const totalPages = Math.ceil(filteredSports.length / itemsPerPage)
    const startIndex = (page - 1) * itemsPerPage
    const paginatedSports = filteredSports.slice(startIndex, startIndex + itemsPerPage)

    return (
        <div className="w-full h-full flex">
            <main className="flex flex-col w-full h-full gap-8 justify-between p-8">
                <div className="flex w-full items-center p-8 border-b pb-16">
                    <div className="flex flex-col space-y-2">
                        <span className="text-xl font-medium text-gray-500">Olahraga</span>
                        <h2 className="text-4xl font-semibold text-gray-700">Jelajahi latihan-latihan menarik disini</h2>
                    </div>

                    <div className="bg-slate-100 w-full rounded-3xl p-4 flex flex-col h-fit ml-auto">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <div className="w-full flex gap-2 items-center">
                                    <div className="flex gap-2 bg-white p-1 rounded-full h-fit w-full">
                                        <div className="flex bg-white items-center border border-gray-300 rounded-full w-full">
                                            <Search className="text-gray-400 ml-6" />
                                            <input
                                                type="text"
                                                placeholder="Cari latihan..."
                                                className="px-4 py-2 pr-6 outline-none w-full"
                                                value={search}
                                                onChange={(e) => {
                                                    setSearch(e.target.value)
                                                    setPage(1)
                                                }}
                                            />
                                            <AccordionTrigger className="mr-4 !space-y-0 ml-auto text-sm mx-8 flex items-center gap-2 whitespace-nowrap">
                                                <span className="text-gray-600 font-medium">Filter tambahan</span>
                                            </AccordionTrigger>
                                        </div>
                                    </div>
                                </div>

                                <AccordionContent>
                                    <div className="bg-white p-1 mt-2 rounded-xl mx-6 flex flex-col gap-6">
                                        {/* AREA */}
                                        <div className="flex flex-col gap-2">
                                            <h2 className="font-medium text-xl">Area Tubuh</h2>
                                            <div className="flex flex-wrap gap-2">
                                                {areaFilters.map(a => (
                                                    <button
                                                        key={a}
                                                        onClick={() => {
                                                            setArea(a === "Semua" ? "" : a)
                                                            setPage(1)
                                                        }}
                                                        className={`px-4 py-1.5 rounded-full text-xs font-medium ${area === a ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"}`}
                                                    >
                                                        {a}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* DURATION */}
                                        <div className="flex flex-col gap-2">
                                            <h2 className="font-medium text-xl">Durasi</h2>
                                            <div className="flex flex-wrap gap-2">
                                                {durationFilters.map(d => (
                                                    <button
                                                        key={d}
                                                        onClick={() => {
                                                            setDuration(d === "Semua" ? "" : d)
                                                            setPage(1)
                                                        }}
                                                        className={`px-4 py-1.5 rounded-full text-xs font-medium ${duration === d ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"}`}
                                                    >
                                                        {d}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* CALORIES */}
                                        <div className="flex flex-col gap-2">
                                            <h2 className="font-medium text-xl">Kalori</h2>
                                            <div className="flex flex-wrap gap-2">
                                                {calorieFilters.map(c => (
                                                    <button
                                                        key={c}
                                                        onClick={() => {
                                                            setCalories(c === "Semua" ? "" : c)
                                                            setPage(1)
                                                        }}
                                                        className={`px-4 py-1.5 rounded-full text-xs font-medium ${calories === c ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"}`}
                                                    >
                                                        {c}
                                                    </button>
                                                ))}
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
                        {/* RECOMMENDATION */}
                        <div className="space-y-1 px-4">
                            <h2 className="text-2xl font-semibold text-gray-800">Rekomendasi</h2>
                            <span className="font-medium text-gray-600">Latihan yang kami sarankan khusus untuk anda</span>
                        </div>

                        <div className="flex flex-col w-full p-2 border rounded-2xl gap-4">
                            <div className="grid grid-cols-3 gap-2">
                                {mainRecommendation && <FeaturedSportCard sport={mainRecommendation} />}
                                {secondRecommendation && <LongFeaturedSportCard sport={secondRecommendation} />}
                            </div>
                        </div>

                        {/* LIST ALL */}
                        <div className="flex flex-col w-full gap-2">
                            <div className="flex justify-between items-center">
                                <div className="space-y-1 px-4">
                                    <h2 className="text-2xl font-semibold text-gray-800">Semua Latihan</h2>
                                    <span className="font-medium text-gray-600">Temukan latihan yang sempurna untuk anda</span>
                                </div>
                            </div>

                            {/* DIFFICULTY FILTER */}
                            <div className="flex justify-between items-center mb-4 px-4">
                                <div className="flex gap-2">
                                    {difficultyFilters.map(f => {
                                        const active = activeDifficulty === f
                                        const color = active
                                            ? f === "Mudah"
                                                ? "bg-primary text-white"
                                                : f === "Sedang"
                                                    ? "bg-btn-medium text-white"
                                                    : f === "Sulit"
                                                        ? "bg-btn-hard text-white"
                                                        : "bg-gray-800 text-white"
                                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                        return (
                                            <button
                                                key={f}
                                                onClick={() => {
                                                    setActiveDifficulty(f)
                                                    setPage(1)
                                                }}
                                                className={`px-4 py-1.5 rounded-full text-xs font-medium ${color}`}
                                            >
                                                {f}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* SPORT LIST WITH PAGINATION */}
                            <div className="flex flex-col gap-2">
                                {paginatedSports.map((sport, i) => (
                                    <SportCard key={i} sport={sport} />
                                ))}

                                {filteredSports.length === 0 && (
                                    <div className="flex flex-col items-center justify-center p-10 bg-gray-100 rounded-lg">
                                        <span className="font-semibold text-gray-700">Tidak ada latihan ditemukan</span>
                                        <span className="text-gray-500">Ganti filter Anda.</span>
                                    </div>
                                )}
                            </div>

                            {/* PAGINATION BUTTONS */}
                            {totalPages > 1 && (
                                <div className="flex gap-2 justify-center items-center mt-4">
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                                        <button
                                            key={num}
                                            onClick={() => setPage(num)}
                                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
                                                page === num
                                                    ? "bg-purple-600 text-white shadow-md"
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

                    {/* RIGHT SIDEBAR: PROGRAM DAYS */}
                    <div className="flex flex-col col-span-2 gap-4 sticky top-4 self-start h-fit">
                        <div className="p-6 rounded-2xl h-40 bg-gradient-to-r from-purple-500 to-purple-700 overflow-hidden flex flex-col justify-end text-white relative shadow-md">
                            <h3 className="text-xl font-semibold leading-tight">Jadwal Latihan Minggu Ini</h3>
                            <img
                                className="absolute top-0 -right-12 size-40 rotate-24 opacity-80"
                                src="https://cdn2.iconfinder.com/data/icons/fitness-vol-2-1/512/exercise-time-fitness-weightlifting-workout-gym-barbell-3d.png"
                            />
                        </div>

                        <div className="border p-3 rounded-2xl flex flex-col gap-3 max-h-[50vh] overflow-y-auto shadow-sm bg-white">
                            {mainRecommendation?.programs?.days?.map((day: any, index: number) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setSelectedDay(day)
                                        setOpenDayDialog(true)
                                    }}
                                    className="bg-slate-100 rounded-xl p-4 flex flex-col gap-3 hover:bg-slate-200 transition text-left"
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-gray-800 text-sm">{day.day}</span>
                                        <span className="text-xs bg-purple-200 text-purple-700 px-2 py-0.5 rounded-full font-medium">
                                            {day.exercises.length} latihan
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* DIALOG LATIHAN HARI */}
                <Dialog open={openDayDialog} onOpenChange={setOpenDayDialog}>
                    <DialogContent className="max-w-lg bg-white rounded-xl">
                        <DialogHeader>
                            <DialogTitle className="text-xl font-semibold">
                                {selectedDay?.day}
                            </DialogTitle>
                        </DialogHeader>

                        <div className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto pr-2 mt-3">
                            {selectedDay && selectedDay.exercises
                                .filter((_: any, i: number) => !(selectedDay.done ?? []).includes(i))
                                .map((ex: any, i: number) => {
                                    const originalIndex = selectedDay.exercises.indexOf(ex)

                                    return (
                                        <div
                                            key={originalIndex}
                                            className="flex justify-between items-center bg-slate-100 p-3 rounded-lg border"
                                        >
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-gray-800">
                                                    {ex.name}
                                                </span>
                                                <span className="text-gray-600 text-sm">
                                                    {ex.sets} × {ex.reps}
                                                </span>
                                            </div>

                                            <Button
                                                className="bg-purple-600 text-white hover:bg-purple-500"
                                                onClick={() => {
                                                    const updatedDay = ((prev) => {
                                                        if (!prev) return prev;
                                                        const doneList = prev.done ? [...prev.done] : [];
                                                        if (!doneList.includes(originalIndex)) {
                                                            doneList.push(originalIndex);
                                                        }
                                                        return { ...prev, done: doneList };
                                                    })(selectedDay);

                                                    setSelectedDay(updatedDay);

                                                    setSports((currentSports) => {
                                                        if (currentSports.length === 0 || !currentSports[0]?.programs?.days) {
                                                            return currentSports;
                                                        }

                                                        const dayIndex = currentSports[0].programs.days.findIndex(
                                                            (d: any) => d.day === updatedDay.day
                                                        );

                                                        if (dayIndex === -1) {
                                                            return currentSports;
                                                        }

                                                        const newSports = [...currentSports];
                                                        const newDays = [...newSports[0].programs.days];

                                                        newDays[dayIndex] = updatedDay;

                                                        newSports[0] = {
                                                            ...newSports[0],
                                                            programs: {
                                                                ...newSports[0].programs,
                                                                days: newDays,
                                                            },
                                                        };

                                                        return newSports;
                                                    });
                                                }}
                                            >
                                                Selesai
                                            </Button>
                                        </div>
                                    )
                                })
                            }

                            {(selectedDay?.done?.length ?? 0) === selectedDay?.exercises?.length && (
                                <div className="text-center text-gray-700 font-medium bg-slate-100 p-4 rounded-lg">
                                    Semua latihan selesai 🎉
                                </div>
                            )}
                        </div>

                        <DialogFooter className="mt-6">
                            <Button className="w-full !bg-purple-600" onClick={() => setOpenDayDialog(false)}>
                                Tutup
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <Footer />
            </main>
        </div>
    )
}

export default Page
