'use client'

import { BarChart10 } from "iconest-react";
import { Clock, Flame, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sport } from "@/types";

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";

const formatDuration = (d: string) => d.includes("menit") ? d : `${d} menit`;

interface SportCardLongProps {
    sport: Sport;
    onStartProgram: (sport: Sport) => void;
}

const SportCardLong: React.FC<SportCardLongProps> = ({ sport, onStartProgram }) => {
    return (
        <div className="w-full col-span-2 bg-slate-100 rounded-xl flex flex-col h-full p-2 gap-2">
        <div className="relative w-full h-48 bg-gray-200 rounded-xl overflow-hidden">
            <img src={sport.image} alt={sport.title} className="w-full h-full object-cover rounded-xl" />
        </div>

        <div className="p-2 flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-gray-800 leading-tight flex items-start h-[3.1rem]">{sport.title}</h3>

            <div className="flex items-center text-sm text-gray-600">
            <Target size={16} className="text-purple-500 mr-1" />
            <span className="truncate max-w-[130px]">{sport.area}</span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm bg-white rounded-lg p-4 my-2 w-full">
            <div className="flex items-center gap-3">
                <BarChart10 size={16} className="text-gray-500" />
                <div className="flex flex-col">
                <span className="text-gray-500 text-xs">Kesulitan</span>
                <span className="font-medium text-gray-800 text-sm">{sport.difficulty}</span>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <Flame size={16} className="text-red-500" />
                <div className="flex flex-col">
                <span className="text-gray-500 text-xs">Kalori</span>
                <span className="font-medium text-gray-800 text-sm">{sport.calories} kkal</span>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <Clock size={16} className="text-blue-500" />
                <div className="flex flex-col">
                <span className="text-gray-500 text-xs">Durasi / Hari</span>
                <span className="font-medium text-gray-800 text-sm">{sport.duration} menit</span>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <Target size={16} className="text-purple-500" />
                <div className="flex flex-col">
                <span className="text-gray-500 text-xs">Total Hari</span>
                <span className="font-medium text-gray-800 text-sm">
                    {sport.programs?.totalDays ?? 0} Hari
                </span>
                </div>
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
                                        className="w-full text-base bg-purple-600 hover:bg-purple-500 text-white"
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
    );
};

export default SportCardLong;
