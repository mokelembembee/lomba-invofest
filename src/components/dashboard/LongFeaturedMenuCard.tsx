'use client'

import { BarChart10 } from "iconest-react";
import { Clock, Flame, Info, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Menu } from "@/types";

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";

interface RecipeCardProps {
    menu: Menu;
}

const MenuCardLong: React.FC<RecipeCardProps> = ({ menu }) => {
    return (
        <div className="w-full col-span-2 bg-slate-100 rounded-xl flex flex-col h-full p-2 gap-2">
            <div className="relative w-full h-48 bg-gray-200 rounded-xl overflow-hidden">
                <img
                    src={menu.image}
                    alt={menu.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-2 flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-gray-800 leading-tight">
                    {menu.title}
                </h3>
                <div className="flex items-center text-sm text-gray-600">
                    <Star size={16} className="text-yellow-400 mr-1" fill="currentColor" />
                    <span>{menu.rating}/10</span>
                </div>
                <div className="flex gap-2">
                    <div className="text-sm mr-auto w-1/2 mt-2 text-gray-800 flex flex-col mb-2">
                        <span>
                            Resep {menu.title} dengan tingkat kesulitan {menu.difficulty.toLowerCase()}
                            dan waktu pembuatan sekitar {menu.prepTime} menit.
                        </span>
                        <div className="bg-white p-2 rounded-xl mt-auto w-full gap-2 flex items-center">
                            <Star size={20} />
                            <span className="text-sm text-gray-700">Favorit</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm bg-white rounded-lg p-4 my-2 w-1/2">
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
                                <span className="font-medium text-gray-800 text-sm">{menu.steps} langkah</span>
                            </div>
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
                            <DialogTitle>{menu.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-2">
                            <img src={menu.image} alt={menu.title} className="rounded-lg w-full object-cover"/>
                            <p><strong>Kesulitan:</strong> {menu.difficulty}</p>
                            <p><strong>Kalori:</strong> {menu.calories} kkal</p>
                            <p><strong>Langkah:</strong> {menu.steps} langkah</p>
                            <p><strong>Waktu Persiapan:</strong> {menu.prepTime} menit</p>
                        </div>
                        <DialogFooter>
                            <Button type="button">Mulai Memasak</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};

export default MenuCardLong;
