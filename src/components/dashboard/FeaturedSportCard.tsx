'use client'

import { BarChart10, Clock } from "iconest-react";
import { Flame, Target } from "lucide-react";
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
        <div className="col-span-1 bg-white rounded-xl flex flex-col border h-full">
            <div className="relative w-full h-48 bg-gray-200 rounded-t-xl overflow-hidden">
                <img 
                    src={sport.image} 
                    alt={sport.title} 
                    className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full">
                    Pilihan Hari Ini
                </span>
            </div>
            
            <div className="p-4 flex flex-col gap-3 flex-1">
                <h3 className="text-xl font-semibold text-gray-800 leading-tight">
                    {sport.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-3 text-sm mt-2">
                    <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
                        <BarChart10 size={16} className="text-gray-500" />
                        <div className="flex flex-col">
                            <span className="text-gray-500">Kesulitan</span>
                            <span className="font-medium text-gray-800">{sport.difficulty}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
                        <Flame size={16} className="text-red-500" />
                        <div className="flex flex-col">
                            <span className="text-gray-500">Kalori</span>
                            <span className="font-medium text-gray-800">{sport.calories} kkal</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
                        <Clock size={16} className="text-blue-500" />
                        <div className="flex flex-col">
                            <span className="text-gray-500">Durasi</span>
                            <span className="font-medium text-gray-800">{sport.prepTime} menit</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
                        <Target size={16} className="text-purple-500" /> 
                        <div className="flex flex-col">
                            <span className="text-gray-500">Area</span>
                            <span className="font-medium text-gray-800">{sport.area}</span>
                        </div>
                    </div>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-primary hover:bg-primary-shade text-white text-sm px-3 py-1 h-auto">Lihat Detail</Button>
                    </DialogTrigger>
                    
                    <DialogContent>

                    <DialogHeader>
                        <DialogTitle>{sport.title}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-2">
                        <img src={sport.image} alt={sport.title} className="rounded-lg w-full object-cover" />
                        <p>Kesulitan: {sport.difficulty}</p>
                        <p>Kalori: {sport.calories} kkal</p>
                        <p>Area: {sport.area}</p>
                        <p>Waktu Persiapan: {sport.prepTime} menit</p>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Mulai Memasak</Button>
                    </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}

export default FeaturedSportCard;
