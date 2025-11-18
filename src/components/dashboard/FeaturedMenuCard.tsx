'use client'

import { BarChart10 } from "iconest-react";
import { Clock, Flame, Info, Star, Heart } from "lucide-react";
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
import { DialogDescription } from "@radix-ui/react-dialog";

interface FeaturedMenuCardProps {
    menu: Menu;
    onToggleLike: (title: string) => void;
}

const FeaturedMenuCard: React.FC<FeaturedMenuCardProps> = ({ menu, onToggleLike }) => {
    return (
        <div className="col-span-1 bg-slate-100 rounded-xl flex flex-col h-full p-2 gap-2">
            <div className="relative w-full h-48 bg-gray-200 rounded-xl overflow-hidden">
                <img src={menu.image} alt={menu.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full">
                    Pilihan Kami
                </span>
            </div>

            <div className="flex flex-col gap-2 p-2">
                <h3 className="text-xl font-semibold text-gray-800 leading-tight whitespace-nowrap flex items-start h-[3.1rem]">
                    {menu.title}
                </h3>

                <div className="flex items-center text-sm text-gray-600">
                    <Star size={16} className="text-yellow-400 mr-1" fill="currentColor" />
                    <span>{menu.rating}/5</span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm bg-white rounded-lg p-4 my-2">
                    <div className="flex items-center gap-3">
                        <BarChart10 size={16} className="text-gray-500" />
                        <div className="flex flex-col">
                            <span className="text-gray-500 text-xs">Kesulitan</span>
                            <span className="font-medium text-gray-800 text-sm">{menu.difficulty}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Flame size={16} className="text-red-500" />
                        <div className="flex flex-col">
                            <span className="text-gray-500 text-xs">Kalori</span>
                            <span className="font-medium text-gray-800 text-sm">{menu.calories} kkal</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Clock size={16} className="text-blue-500" />
                        <div className="flex flex-col">
                            <span className="text-gray-500 text-xs">Durasi</span>
                            <span className="font-medium text-gray-800 text-sm">{menu.duration} menit</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Info size={16} className="text-green-500" />
                        <div className="flex flex-col">
                            <span className="text-gray-500 text-xs">Langkah</span>
                            <span className="font-medium text-gray-800 text-sm">{menu.steps.length} langkah</span>
                        </div>
                    </div>
                </div>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-primary hover:bg-primary-shade text-white text-sm px-3 py-2 h-auto rounded-md">
                            Lihat Detail
                        </Button>
                    </DialogTrigger>

                    <DialogContent className="max-h-[80vh] overflow-y-auto min-w-[40vw] rounded-3xl p-0 border-0 shadow-xl">
                        <div className="relative h-72 w-full">
                            <img src={menu.image} alt={menu.title} className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                            <div className="absolute bottom-0 p-6 text-white">
                                <DialogTitle className="text-3xl font-semibold leading-snug">
                                    {menu.title}
                                </DialogTitle>
                                <DialogDescription className="text-slate-200/80 mt-2 text-sm leading-relaxed">
                                    {menu.description}
                                </DialogDescription>
                            </div>
                        </div>

                        <div className="flex flex-col gap-8 px-6 py-6">
                            <div className="grid grid-cols-3 gap-3">
                                <div className="bg-slate-100 p-4 rounded-xl">
                                    <span className="text-xs text-gray-500">Kesulitan</span>
                                    <p className="font-semibold text-gray-800 mt-1">{menu.difficulty}</p>
                                </div>
                                <div className="bg-slate-100 p-4 rounded-xl">
                                    <span className="text-xs text-gray-500">Kalori</span>
                                    <p className="font-semibold text-gray-800 mt-1">{menu.calories} kkal</p>
                                </div>
                                <div className="bg-slate-100 p-4 rounded-xl">
                                    <span className="text-xs text-gray-500">Durasi</span>
                                    <p className="font-semibold text-gray-800 mt-1">{menu.duration} menit</p>
                                </div>
                            </div>

                            {menu.portion && (
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800">Informasi Gizi</h2>
                                    <div className="p-4 bg-slate-100 rounded-2xl text-gray-800 text-sm leading-relaxed">
                                        {menu.portion}
                                    </div>
                                </div>
                            )}

                            <div>
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800">Bahan</h2>
                                <div className="p-4 bg-slate-100 rounded-2xl flex flex-col gap-2">
                                    {Object.keys(menu.ingredients).map((ingredient, index) => (
                                        <div className="flex justify-between items-center" key={index}>
                                            <span className="font-medium text-gray-800">{ingredient}</span>
                                            <span className="text-sm text-gray-600">
                                                {menu.ingredients[ingredient].humanValue}
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
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800">Langkah Memasak</h2>
                                <ol className="p-4 bg-slate-100 rounded-2xl flex flex-col gap-4 list-decimal list-inside text-left">
                                    {menu.steps.map((step, index) => (
                                        <li key={index} className="text-gray-800 text-sm leading-relaxed">
                                            {step}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>

                        <DialogFooter className="px-6 pb-6 pt-0 gap-2 flex-col sm:flex-row">
                            <Button
                                className={`w-full sm:w-1/2 text-base ${
                                    menu.liked ? "bg-red-500 hover:bg-red-600" : "bg-red-400 hover:bg-red-500"
                                }`}
                                onClick={() => onToggleLike(menu.title)}
                            >
                                <Heart size={18} className="mr-2" fill="currentColor" />
                                {menu.liked ? "Disukai" : "Tambahkan Suka"}
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};

export default FeaturedMenuCard;
