'use client'

import { BarChart10 } from "iconest-react";
import { Clock, Flame, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sport } from "@/types";

import { 
    Dialog, 
    DialogTrigger, 
    DialogContent, 
    DialogHeader, 
    DialogTitle, 
    DialogFooter 
} from "@/components/ui/dialog";

interface FeaturedSportCardProps {
    sport: Sport;
}

const FeaturedSportCard: React.FC<FeaturedSportCardProps> = ({ sport }) => {
    return (
        <div className="col-span-1 bg-slate-100 rounded-xl flex flex-col h-full p-2 gap-2">
            {/* Gambar utama */}
            <div className="relative w-full h-48 bg-gray-200 rounded-xl overflow-hidden">
                <img 
                    src={sport.image} 
                    alt={sport.title} 
                    className="w-full h-full object-cover" 
                />

                <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full">
                    Pilihan Hari Ini
                </span>
            </div>

            {/* Konten */}
            <div className="flex flex-col gap-2 p-2">
                <h3 className="text-xl font-semibold text-gray-800 leading-tight">
                    {sport.title}
                </h3>

                <div className="flex items-center text-sm text-gray-600">
                    <Target size={16} className="text-purple-500 mr-1" />
                    <span>{sport.area}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-sm bg-white rounded-lg p-4 my-2">
                    <div className="flex items-center gap-3 rounded-lg">
                        <BarChart10 size={16} className="text-gray-500" />
                        <div className="flex flex-col">
                            <span className="text-gray-500 text-xs">Kesulitan</span>
                            <span className="font-medium text-gray-800 text-sm">{sport.difficulty}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-lg">
                        <Flame size={16} className="text-red-500" />
                        <div className="flex flex-col">
                            <span className="text-gray-500 text-xs">Kalori</span>
                            <span className="font-medium text-gray-800 text-sm">{sport.calories} kkal</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-lg">
                        <Clock size={16} className="text-blue-500" />
                        <div className="flex flex-col">
                            <span className="text-gray-500 text-xs">Durasi</span>
                            <span className="font-medium text-gray-800 text-sm">{sport.prepTime} menit</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-lg">
                        <Target size={16} className="text-purple-500" /> 
                        <div className="flex flex-col">
                            <span className="text-gray-500 text-xs">Area</span>
                            <span className="font-medium text-gray-800 text-sm">{sport.area}</span>
                        </div>
                    </div>
                </div>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-primary hover:bg-primary-shade text-white text-sm px-3 py-2 h-auto rounded-md">
                            Lihat Detail
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
    );
}

export default FeaturedSportCard;
