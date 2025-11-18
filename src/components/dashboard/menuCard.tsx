'use client'

import { useState } from "react"
import { BarChart10, Clock } from "iconest-react";
import { Flame, Star, Heart } from "lucide-react";
import { Menu } from "@/types";

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";


interface MenuCardProps {
    menu: Menu;
    onToggleLike: (title: string) => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ menu, onToggleLike }) => {
    const [liked, setLiked] = useState(menu.liked ?? false)
    const toggleLike = () => setLiked(prev => !prev)

    return (
        <div className="flex p-3 text-justify bg-slate-100 rounded-lg gap-4 w-full">
            <div className="rounded-xl w-1/3 h-32 overflow-hidden">
                <img src={menu.image} alt={menu.title} className="object-cover w-full h-full" />
            </div>

            <div className="flex flex-col w-full justify-between">
                <div className="flex justify-between items-start">
                    <div className={`flex px-3 py-1 rounded-full font-semibold items-center gap-1.5 ${
                        menu.difficulty === 'Mudah' ? 'bg-primary text-white' :
                        menu.difficulty === 'Sedang' ? 'bg-btn-medium text-white' :
                        menu.difficulty === 'Sulit' ? 'bg-btn-hard text-white' :
                        'bg-white text-gray-700'
                    }`}>
                        <BarChart10 size={12} />
                        <span className="text-xs">{menu.difficulty}</span>
                    </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-1">{menu.title}</h3>

                {/* === RATING === */}
                <div className="flex items-center gap-2 mb-1">
                    <Star size={16} className="text-yellow-400" fill="currentColor" />
                    <span className="text-xs font-medium text-gray-700">{menu.rating}/5</span>
                    <div className="flex h-[10px] gap-0.5">
                        {/* {Array.from({ length: 5 }, (_, i) => (
                            <div
                                key={i}
                                className={`w-1.5 h-full rounded ${i < menu.rating ? "bg-yellow-400" : "bg-gray-300"}`}
                            />
                        ))} */}
                    </div>
                </div>

                <div className="flex justify-between items-center mt-2">
                    <div className="flex px-2 py-1.5 bg-white rounded font-semibold text-gray-700 items-center gap-1.5">
                        <div className="flex items-center gap-2">
                            <Flame size={12} className="text-yellow-500" />
                            <span className="text-xs">{menu.calories} kkal</span>
                        </div>

                        <div className="w-px h-full bg-gray-300" />
                        <div className="flex items-center gap-2">
                            <Clock size={12} />
                            <span className="text-xs">{menu.duration} menit</span>
                        </div>
                    </div>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="bg-primary hover:bg-primary-shade text-white text-sm px-3 py-2 h-auto rounded-md">
                                Lihat Detail
                            </Button>
                        </DialogTrigger>

                        <DialogContent className="rounded-3xl p-0 !border-0 max-w-2xl max-h-[85vh] overflow-y-auto">
                            <DialogHeader className="p-4 h-72 bg-black relative">
                                <img
                                    src={menu.image}
                                    alt={menu.title}
                                    className="w-full h-full object-cover absolute top-0 left-0 mask-b-from-50%"
                                />

                                <div className="absolute inset-0 mask-t-to-50% mask-t-from-5% backdrop-blur-md bg-black-10" />

                                <div className="absolute w-full bottom-0 left-0 p-6 z-20 text-white">
                                    <DialogTitle className="text-2xl font-bold">{menu.title}</DialogTitle>
                                    <DialogDescription className="text-slate-100/70 max-w-3/4 text-base">
                                        {menu.description}
                                    </DialogDescription>
                                </div>
                            </DialogHeader>

                            <div className="px-6 py-4 space-y-6">
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="bg-slate-100 p-4 rounded-lg">
                                        <span className="text-xs text-gray-500">Kesulitan</span>
                                        <p className="font-medium text-gray-800">{menu.difficulty}</p>
                                    </div>
                                    <div className="bg-slate-100 p-4 rounded-lg">
                                        <span className="text-xs text-gray-500">Kalori</span>
                                        <p className="font-medium text-gray-800">{menu.calories} kkal</p>
                                    </div>
                                    <div className="bg-slate-100 p-4 rounded-lg">
                                        <span className="text-xs text-gray-500">Durasi</span>
                                        <p className="font-medium text-gray-800">{menu.duration} menit</p>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold mb-2">Bahan</h2>
                                    <div className="bg-slate-100 p-4 rounded-2xl space-y-2">
                                        {Object.keys(menu.ingredients).map((ing, i) => (
                                            <div key={i} className="flex justify-between text-sm">
                                                <span className="font-medium text-gray-800">{ing}</span>
                                                <span className="text-gray-600">
                                                    {menu.ingredients[ing].humanValue}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                                        <div>
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800">Nilai Gizi</h2>
                                <div className="p-4 bg-slate-100 rounded-2xl flex flex-col gap-2">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-gray-800">Kalori</span>
                                        <span className="text-sm text-gray-600">
                                            500 kkcal
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-gray-800">Protein</span>
                                        <span className="text-sm text-gray-600">
                                            500 kkcal
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-gray-800">Karbohidrat</span>
                                        <span className="text-sm text-gray-600">
                                            500 kkcal
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-gray-800">Gula</span>
                                        <span className="text-sm text-gray-600">
                                            500 kkcal
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-gray-800">Natrium</span>
                                        <span className="text-sm text-gray-600">
                                            500 kkcal
                                        </span>
                                    </div>

                                
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-gray-800">Lemak</span>
                                        <span className="text-sm text-gray-600">
                                            500 kkcal
                                        </span>
                                    </div>


                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-gray-800">Serat Pangan</span>
                                        <span className="text-sm text-gray-600">
                                            500 kkcal
                                        </span>
                                    </div>


                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-gray-800">Kolestrol</span>
                                        <span className="text-sm text-gray-600">
                                            500 kkcal
                                        </span>
                                    </div>
                                </div>
                            </div>


                                <div>
                                    <h2 className="text-xl font-semibold mb-2">Langkah Memasak</h2>
                                    <ol className="bg-slate-100 p-4 rounded-2xl space-y-3 list-decimal list-inside text-left">
                                        {menu.steps.map((step, i) => (
                                            <li key={i} className="text-gray-800 text-sm leading-relaxed">
                                                {step}
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>

                            <DialogFooter className="px-6 pb-4 gap-2">
                                <Button
                                className={`w-1/2 text-base ${menu.liked ? "bg-red-500 hover:bg-red-600" : "bg-red-400 hover:bg-red-500"}`}
                                onClick={() => onToggleLike(menu.title)}
                                >
                                <Heart size={16} className="mr-1" fill="currentColor" />
                                {menu.liked ? "Disukai" : "Tambahkan Suka"}
                                </Button>


                        
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}

export default MenuCard;
