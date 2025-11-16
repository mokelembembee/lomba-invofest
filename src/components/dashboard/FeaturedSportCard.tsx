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
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";

interface FeaturedSportCardProps {
    sport: Sport;
}

const FeaturedSportCard: React.FC<FeaturedSportCardProps> = ({ sport }) => {
    return (
        <div className="col-span-1 bg-slate-100 rounded-xl flex flex-col h-full p-2 gap-2">
        <div className="relative w-full h-48 bg-gray-200 rounded-xl overflow-hidden">
            <img src={sport.image} alt={sport.title} className="w-full h-full object-cover" />
            <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full">
            Pilihan Hari Ini
            </span>
        </div>

        <div className="flex flex-col gap-2 p-2">
            <h3 className="text-xl font-semibold text-gray-800 leading-tight">{sport.title}</h3>

            <div className="flex items-center text-sm text-gray-600">
            <Target size={16} className="text-purple-500 mr-1" />
            <span className="truncate max-w-[130px]">{sport.area}</span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm bg-white rounded-lg p-4 my-2">
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
                <span className="font-medium text-gray-800 text-sm">{sport.programs?.totalDays} Hari</span>
                </div>
            </div>
            </div>

            {/* DIALOG — IDENTIK DENGAN SportCardLong */}
            <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary-shade text-white text-sm px-3 py-2 h-auto rounded-md">
                Lihat Detail
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
                    <DialogTitle className="text-2xl font-semibold">{sport.title}</DialogTitle>
                    <DialogDescription className="text-slate-100/70 max-w-3/4">
                    Program latihan {sport.programs?.totalDays} hari — progresif & berfokus pada {sport.area}.
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
                    <p className="font-medium text-gray-800 mt-1">{sport.calories} kkal / sesi</p>
                    </div>
                    <div className="bg-slate-100 p-4 rounded-xl">
                    <span className="text-gray-500 text-xs">Durasi</span>
                    <p className="font-medium text-gray-800 mt-1">{sport.duration} menit / sesi</p>
                    </div>
                </div>

                <h2 className="text-2xl font-medium">Jadwal Program</h2>

                {sport.programs?.days?.map((day, index) => (
                    <div key={index} className="p-4 bg-slate-100 rounded-2xl flex flex-col gap-2">
                    <span className="font-semibold text-gray-800 text-lg">{day.day}</span>
                    {day.exercises.map((ex, i) => (
                        <div key={i} className="flex justify-between text-gray-700 text-sm border-b pb-1">
                        <span className="font-medium">{ex.name}</span>
                        <span>{ex.sets} set × {ex.reps} • {ex.duration}</span>
                        </div>
                    ))}
                    </div>
                ))}
                </div>

                <DialogFooter className="w-full px-6 pb-4 pt-0">
                <div className="flex w-full gap-2">
                    <Button type="button" className="!text-base w-1/2 h-auto !bg-red-400 hover:!bg-red-500">
                    <Heart size={16} className="mr-1" fill="currentColor" />
                    Tambahkan Suka
                    </Button>
                    <Button type="button" className="!text-base w-1/2 h-auto">
                    Mulai Program
                    </Button>
                </div>
                </DialogFooter>
            </DialogContent>
            </Dialog>
        </div>
        </div>
    );
};

export default FeaturedSportCard;
