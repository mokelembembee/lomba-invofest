'use client'

import { BarChart10, Clock } from "iconest-react"
import { Flame, Target } from "lucide-react"
import { Sport } from "@/types"

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog"
import { DialogDescription } from "@radix-ui/react-dialog"
import { Button } from "@/components/ui/button"

interface SportCardProps {
    sport: Sport
    onStartProgram: (sport: Sport) => void
}

const SportCard: React.FC<SportCardProps> = ({ sport, onStartProgram }) => {
    return (
        <div className="flex p-3 text-justify bg-slate-100 rounded-lg gap-4 w-full">
            {/* === IMAGE SECTION (Disamakan h-32) === */}
            <div className="rounded-xl w-1/3 h-32 overflow-hidden">
                <img
                    src={sport.image}
                    alt={sport.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* === CONTENT SECTION === */}
            <div className="flex flex-col w-full justify-between">
                <div className="flex justify-between items-start">
                    {/* Difficulty Badge */}
                    <div
                        className={`flex px-3 py-1 rounded-full font-semibold items-center gap-1.5 ${
                            sport.difficulty === "Mudah"
                                ? "bg-primary text-white"
                                : sport.difficulty === "Sedang"
                                ? "bg-btn-medium text-white"
                                : sport.difficulty === "Sulit"
                                ? "bg-btn-hard text-white"
                                : "bg-white text-gray-700"
                        }`}
                    >
                        <BarChart10 size={12} />
                        <span className="text-xs">{sport.difficulty}</span>
                    </div>

                    {/* Area Badge (Tetap ada tapi styling disesuaikan sedikit agar rapi) */}
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-white rounded-full text-xs font-semibold text-gray-700 border border-slate-200/50">
                        <Target size={12} className="text-purple-500" />
                        <span>{sport.area}</span>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-1">
                    {sport.title}
                </h3>

                {/* Footer: Stats & Button */}
                <div className="flex justify-between items-center mt-2">
                    {/* Stats (Padding disamakan dengan MenuCard) */}
                    <div className="flex px-2 py-1.5 bg-white rounded font-semibold text-gray-700 items-center gap-1.5">
                        <div className="flex items-center gap-2">
                            <Flame size={12} className="text-yellow-500" />
                            <span className="text-xs">{sport.calories} kkal</span>
                        </div>
                        <div className="w-px h-full bg-gray-300" />
                        <div className="flex items-center gap-2">
                            <Clock size={12} />
                            <span className="text-xs">{sport.duration} menit</span>
                        </div>
                    </div>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="bg-purple-600 hover:bg-purple-500 text-white text-sm px-3 py-2 h-auto rounded-md">
                                Lihat Detail
                            </Button>
                        </DialogTrigger>

                        <DialogContent className="rounded-3xl p-0 !border-0 max-w-2xl max-h-[85vh] overflow-y-auto">
                            <DialogHeader className="p-4 h-72 bg-black relative">
                                <img
                                    src={sport.image}
                                    alt={sport.title}
                                    className="w-full h-full object-cover absolute top-0 left-0 mask-b-from-50%"
                                />
                                <div className="absolute inset-0 mask-t-to-50% mask-t-from-5% backdrop-blur-md bg-black-10" />
                                
                                <div className="absolute w-full bottom-0 left-0 p-6 z-20 text-white">
                                    <DialogTitle className="text-2xl font-bold">
                                        {sport.title}
                                    </DialogTitle>
                                    <DialogDescription className="text-slate-100/70 max-w-3/4 text-base">
                                        Latihan fokus area {sport.area} tingkat {sport.difficulty}
                                    </DialogDescription>
                                </div>
                            </DialogHeader>

                            <div className="px-6 py-4 space-y-6">
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="bg-slate-100 p-4 rounded-lg">
                                        <span className="text-xs text-gray-500">Kesulitan</span>
                                        <p className="font-medium text-gray-800">{sport.difficulty}</p>
                                    </div>
                                    <div className="bg-slate-100 p-4 rounded-lg">
                                        <span className="text-xs text-gray-500">Kalori</span>
                                        <p className="font-medium text-gray-800">{sport.calories} kkal</p>
                                    </div>
                                    <div className="bg-slate-100 p-4 rounded-lg">
                                        <span className="text-xs text-gray-500">Durasi</span>
                                        <p className="font-medium text-gray-800">{sport.duration} menit</p>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold mb-2">Program Latihan</h2>
                                    <div className="space-y-2">
                                        {sport.programs?.days?.map((day, index) => (
                                            <div key={index} className="bg-slate-100 p-4 rounded-2xl">
                                                <div className="flex items-center gap-2 mb-3 border-b border-slate-200 pb-2">
                                                    <h3 className="font-bold text-gray-800 text-lg">{day.day}</h3>
                                                </div>
                                                
                                                <div className="space-y-2">
                                                    {day.exercises.map((ex, i) => (
                                                        <div key={i} className="flex justify-between items-center text-sm bg-white p-4 rounded-xl">
                                                            <span className="font-medium text-gray-800">{ex.name}</span>
                                                            <div className="flex items-center gap-2 text-gray-500 text-xs">
                                                                <span className="bg-slate-100 px-2 py-1 rounded">
                                                                    {ex.sets} set x {ex.reps}
                                                                </span>
                                                                {ex.duration && (
                                                                     <span className="bg-slate-100 px-2 py-1 rounded">
                                                                        {ex.duration}
                                                                     </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <DialogFooter className="px-6 pb-4 gap-2">
                                <DialogClose asChild>
                                    <Button
                                        type="button"
                                        className="w-full bg-purple-600 hover:bg-purple-500 text-white"
                                        onClick={() => onStartProgram(sport)}
                                    >
                                        Mulai Program
                                    </Button>
                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}

export default SportCard