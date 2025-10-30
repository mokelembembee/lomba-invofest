'use client'

import { BarChart10, Clock, Star } from "iconest-react";
import { Flame, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Menu } from "@/types";

interface FeaturedMenuCardProps {
    menu: Menu;
}

const FeaturedMenuCard: React.FC<FeaturedMenuCardProps> = ({ menu }) => {
    return (
        <div className="col-span-1 bg-white rounded-xl flex flex-col border">
            <div className="relative w-full h-36 bg-gray-200 rounded-t-xl overflow-hidden">
                <img 
                    src={menu.image} 
                    alt={menu.title} 
                    className="w-full h-full rounded-t-xl object-cover " 
                />
                <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full">
                    Pilihan Chef
                </span>
            </div>
            <div className="p-4 flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-gray-800 leading-tight">
                    {menu.title}
                </h3>
                <div className="flex items-center text-sm text-gray-600">
                    <Star size={16} className="text-yellow-400 mr-1" fill="currentColor"/>
                    <span>{menu.rating}/10 ({menu.calories} review)</span> 
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
                        <BarChart10 size={16} className="text-gray-500" />
                        <div className="flex flex-col">
                            <span className="text-gray-500">Kesulitan</span>
                            <span className="font-medium text-gray-800">{menu.difficulty}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
                        <Flame size={16} className="text-red-500" />
                        <div className="flex flex-col">
                            <span className="text-gray-500">Kalori</span>
                            <span className="font-medium text-gray-800">{menu.calories} kkal</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
                        <Clock size={16} className="text-blue-500" />
                        <div className="flex flex-col">
                            <span className="text-gray-500">Durasi</span>
                            <span className="font-medium text-gray-800">{menu.prepTime} menit</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
                        <Info size={16} className="text-green-500" /> 
                        <div className="flex flex-col">
                            <span className="text-gray-500">Langkah</span>
                            <span className="font-medium text-gray-800">{menu.steps} langkah</span>
                        </div>
                    </div>
                </div>
                <Button className="w-full mt-3 bg-primary hover:bg-primary-shade">Lihat Detail</Button>
            </div>
        </div>
    );
}

export default FeaturedMenuCard;