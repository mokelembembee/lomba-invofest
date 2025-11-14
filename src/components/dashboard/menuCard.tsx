'use client'

import { BarChart10, Clock, Star } from "iconest-react";
import { Flame } from "lucide-react";
import { Menu } from "@/types";

import { 
    Dialog, 
    DialogTrigger, 
    DialogContent, 
    DialogHeader, 
    DialogTitle, 
    DialogFooter 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface MenuCardProps {
    menu: Menu;
}

const MenuCard: React.FC<MenuCardProps> = ({ menu }) => {
    return (
        <div className="flex p-3 text-justify bg-slate-100 rounded-lg gap-3">
            <div className="rounded-xl w-1/3 h-24 overflow-hidden">
                {menu?.image && (
                    <img src={menu.image} alt={menu.title} className="object-cover w-full h-full" />
                )}
            </div>
            <div className="flex flex-col w-full justify-between">
                <div className="flex justify-between">
                    <div className={`flex px-4 rounded font-semibold items-center gap-1 ${
                        menu.difficulty === 'Mudah' ? 'bg-primary text-white' : 
                        menu.difficulty === 'Sedang' ? 'bg-btn-medium text-white' : 
                        menu.difficulty === 'Sulit' ? 'bg-btn-hard text-white' : 
                        'bg-white text-gray-700'
                    }`}>
                        <BarChart10 size={12} />
                        <span className="text-xs">{menu.difficulty}</span>
                    </div>
                    <div className="flex px-1 py-0.5 text-gray-500 items-center gap-1">
                        <span className="text-xs"><span className="font-semibold text-gray-700">{menu.rating}</span>/10</span>
                        <div className="flex h-full gap-0.5">
                            {Array.from({ length: 10 }, (_, i) => (
                                <div key={ i } className={`w-1 h-full rounded ${
                                    i < menu.rating ? 'bg-yellow-400' : 'bg-gray-300'
                                }`} />
                            ))}
                        </div>
                    </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800">
                    {menu.title}
                </h3>
                <div className="flex justify-between">
                    <div className="flex px-1 py-0.5 bg-white rounded font-semibold text-gray-700 items-center gap-1.5">
                        <div className="flex items-center gap-0.5">
                            <Flame size={12} className="text-yellow-500" />
                            <span className="text-xs ">{menu.calories} kkal</span>
                        </div>
                        <div className="w-px h-full bg-gray-300" />
                        <div className="flex items-center gap-0.5">
                            <Clock size={12} />
                            <span className="text-xs">{menu.prepTime} menit</span>
                        </div>
                    </div>
                    <div className="flex gap-1 items-center"> 
                        <div className="flex px-1 py-0.5 rounded text-gray-700 items-center">
                            <Star size={20} />
                        </div>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="bg-primary hover:bg-primary-shade text-white text-sm px-3 py-1 h-auto">Lihat</Button>
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
                                <Button type="submit">Mulai Memasak</Button>
                            </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuCard;
