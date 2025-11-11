'use client'

import { BarChart10, Clock, Star } from "iconest-react";
import { Flame, Target } from "lucide-react";
import { Sport } from "@/types";

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface SportCardProps {
    sport: Sport;
}

const SportCard: React.FC<SportCardProps> = ({ sport }) => {
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
                            <span className="text-xs">{sport.prepTime} menit</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-1">
                        <div className="flex px-1 py-0.5 rounded text-gray-700 items-center">
                            <Star size={20} />
                        </div>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="bg-primary hover:bg-primary-shade text-white text-sm px-3 py-1 h-auto">
                                    Lihat
                                </Button>
                            </DialogTrigger>

                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>{sport.title}</DialogTitle>
                                </DialogHeader>

                                <div className="space-y-2">
                                    <img
                                        src={sport.image}
                                        alt={sport.title}
                                        className="rounded-lg w-full object-cover"
                                    />
                                    <p><strong>Kesulitan:</strong> {sport.difficulty}</p>
                                    <p><strong>Kalori:</strong> {sport.calories} kkal</p>
                                    <p><strong>Area:</strong> {sport.area}</p>
                                    <p><strong>Durasi:</strong> {sport.prepTime} menit</p>
                                </div>

                                <DialogFooter>
                                    <Button type="button">Mulai Latihan</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SportCard;
