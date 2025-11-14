'use client'

import { BarChart10, Clock, Star } from "iconest-react";
import { Flame, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Menu } from "@/types";

import { 
    Dialog, 
    DialogTrigger, 
    DialogContent, 
    DialogHeader, 
    DialogTitle, 
    DialogFooter 
} from "@/components/ui/dialog";

interface FeaturedMenuCardProps {
    menu: Menu;
}

const FeaturedMenuCard: React.FC<FeaturedMenuCardProps> = ({ menu }) => {
    return (
        <div className="col-span-1 bg-slate-100 rounded-xl flex flex-col h-full p-2 gap-2">
            <div className="relative w-full h-48 bg-gray-200 rounded-xl overflow-hidden">
                <img 
                    src={menu.image} 
                    alt={menu.title} 
                    className="w-full h-full object-cover" 
                />

                <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full">
                    Pilihan Kami
                </span>
            </div>

            <div className="flex flex-col gap-2 p-2">
                <h3 className="text-xl font-semibold text-gray-800 leading-tight">
                    {menu.title}
                </h3>

                <div className="flex items-center text-sm text-gray-600">
                    <Star size={16} className="text-yellow-400 mr-1" fill="currentColor"/>
                    <span>{menu.rating}/10 ({menu.calories} review)</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-sm bg-white rounded-lg p-4 my-2">
                    <div className="flex items-center gap-3 rounded-lg">
                        <BarChart10 size={16} className="text-gray-500" />
                        <div className="flex flex-col">
                            <span className="text-gray-500 text-xs">Kesulitan</span>
                            <span className="font-medium text-gray-800 text-sm">{menu.difficulty}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-lg">
                        <Flame size={16} className="text-red-500" />
                        <div className="flex flex-col">
                            <span className="text-gray-500 text-xs">Kalori</span>
                            <span className="font-medium text-gray-800 text-sm">{menu.calories} kkal</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-lg">
                        <Clock size={16} className="text-blue-500" />
                        <div className="flex flex-col">
                            <span className="text-gray-500 text-xs">Durasi</span>
                            <span className="font-medium text-gray-800 text-sm">{menu.prepTime} menit</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-lg">
                        <Info size={16} className="text-green-500" /> 
                        <div className="flex flex-col">
                            <span className="text-gray-500 text-xs">Langkah</span>
                            <span className="font-medium text-gray-800 text-sm">{menu.steps.length} langkah</span>
                        </div>
                    </div>
                </div>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-primary hover:bg-primary-shade text-white text-sm px-3 py-2 h-auto rounded-md">Lihat Detail</Button>
                    </DialogTrigger>
                    
                    <DialogContent>

                    <DialogHeader>
                        <DialogTitle>{menu.title}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-2">
                        <img src={menu.image} alt={menu.title} className="rounded-lg w-full object-cover" />
                        <p>Kesulitan: {menu.difficulty}</p>
                        <p>Kalori: {menu.calories} kkal</p>
                        <p>Langkah: {menu.steps} langkah</p>
                        <p>Waktu Persiapan: {menu.prepTime} menit</p>
                    </div>
                    <DialogFooter>
                        <Button type="submit" className = "!text-base">Mulai Memasak</Button>
                    </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}

export default FeaturedMenuCard;
