'use client'

import { BarChart10, Clock } from "iconest-react"
import { Flame, Target, Star } from "lucide-react"
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

const SportCard: React.FC<SportCardProps> = ({ sport , onStartProgram}) => {
    return (
        <div className="flex p-3 text-justify bg-slate-100 rounded-lg gap-3">
            <div className="rounded-xl w-1/3 h-24 overflow-hidden">
                <img
                    src={sport.image}
                    alt={sport.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex flex-col w-full justify-between">
                <div className="flex justify-between items-center">
                    <div
                        className={`flex px-4 rounded font-semibold items-center gap-1 ${
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

                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full text-xs font-semibold text-gray-700">
                        <Target size={12} className="text-purple-500" />
                        <span>{sport.area}</span>
                    </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-800">
                    {sport.title}
                </h3>

                <div className="flex justify-between items-center">
                    <div className="flex px-1 py-0.5 bg-white rounded font-semibold text-gray-700 items-center gap-1.5">
                        <div className="flex items-center gap-0.5">
                            <Flame size={12} className="text-yellow-500" />
                            <span className="text-xs">{sport.calories} kkal</span>
                        </div>
                        <div className="w-px h-full bg-gray-300" />
                        <div className="flex items-center gap-0.5">
                            <Clock size={12} />
                            <span className="text-xs">{sport.duration} menit</span>
                        </div>
                    </div>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="bg-purple-600 hover:bg-purple-500 text-white text-sm px-3 py-1 h-auto">
                                Lihat
                            </Button>
                        </DialogTrigger>

                        <DialogContent className="max-h-[75vh] overflow-y-auto min-w-[38vw] rounded-3xl p-0 !border-0">
                            <DialogHeader className="p-4 h-80 bg-black relative">
                                <img
                                    src={sport.image}
                                    alt={sport.title}
                                    className="w-full h-full object-cover absolute top-0 left-0 mask-b-from-50%"
                                />
                                <div className="absolute inset-0 mask-t-to-50% backdrop-blur-[2px] bg-black/20" />
                                <div className="absolute w-full bottom-0 left-0 p-6 z-20 text-white">
                                    <DialogTitle className="text-2xl font-semibold">
                                        {sport.title}
                                    </DialogTitle>
                                    <DialogDescription className="text-slate-100/70 max-w-3/4">
                                        Latihan {sport.area} • {sport.difficulty}
                                    </DialogDescription>
                                </div>
                            </DialogHeader>

                            <div className="flex flex-col gap-6 px-6 py-4">
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="bg-slate-100 p-4 rounded-xl">
                                        <span className="text-gray-500 text-xs">Kesulitan</span>
                                        <p className="font-medium text-gray-800 mt-1">{sport.difficulty}</p>
                                    </div>
                                    <div className="bg-slate-100 p-4 rounded-xl">
                                        <span className="text-gray-500 text-xs">Kalori</span>
                                        <p className="font-medium text-gray-800 mt-1">{sport.calories} kkal</p>
                                    </div>
                                    <div className="bg-slate-100 p-4 rounded-xl">
                                        <span className="text-gray-500 text-xs">Durasi</span>
                                        <p className="font-medium text-gray-800 mt-1">{sport.duration} menit</p>
                                    </div>
                                </div>

                                <h2 className="text-2xl font-medium">Program Latihan</h2>
                                {sport.programs?.days?.map((day, index) => (
                                    <div key={index} className="p-4 bg-slate-100 rounded-2xl flex flex-col gap-2">
                                        <span className="font-semibold text-gray-800 text-lg">{day.day}</span>
                                        {day.exercises.map((ex, i) => (
                                            <div key={i} className="flex justify-between text-gray-700 text-sm border-b pb-1">
                                                <span className="font-medium">{ex.name}</span>
                                                <span>{ex.sets} × {ex.reps} • {ex.duration}</span>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>

                            <DialogFooter className="w-full px-6 pb-4 pt-0">
                                <div className="flex w-full gap-2">
                                    <DialogClose asChild>
                                    <Button
                                        type="button"
                                        className="!text-base w-1/2 h-auto ml-auto !bg-purple-600 hover:!bg-purple-500 text-white"
                                        onClick={() => onStartProgram(sport)}
                                    >
                                        Mulai Program
                                    </Button>
                                    </DialogClose>
                                </div>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}

export default SportCard
