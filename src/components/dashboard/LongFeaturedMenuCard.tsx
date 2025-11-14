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
import { DialogDescription } from "@radix-ui/react-dialog";
import { ProgressiveBlur } from "../ui/progressive-blur";

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
                        <span className = "line-clamp-2">
                            {menu.description}
                        </span>
                        <div className="bg-white p-4 rounded-xl mt-auto w-full flex flex-col">
                            <span className="text-gray-500 text-xs">Bahan</span>

                            <div className = "line-clamp-1">
                                {Object.keys(menu.ingredients).map((ingredient: string, index) => (
                                    <span key = {index}>
                                        {ingredient}

                                        {(index != Object.keys(menu.ingredients).length - 1) && (
                                            ', '
                                        )}
                                    </span>
                                ))}
                            </div>
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
                                <span className="font-medium text-gray-800 text-sm">{menu.steps.length} langkah</span>
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

                    <DialogContent className = "max-h-[75vh] overflow-y-auto min-w-[35vw] rounded-3xl p-0 !border-0">                        
                        <DialogHeader className = "p-4 h-80 bg-black relative">
                            <img src={menu.image} alt={menu.title} className="w-full h-full object-cover absolute top-0 left-0 mask-b-from-50%"/>

                            <div className = "w-full h-full absolute top-0 left-0 mask-t-to-50% mask-t-from-5% backdrop-blur-md bg-black-10"/>

                            <div className = "absolute w-full bottom-0 left-0 p-6 z-20 text-white">
                                <DialogTitle className = "text-2xl font-semibold">{menu.title}</DialogTitle>
                                <DialogDescription className = "text-slate-100/70 max-w-3/4">{menu.description}</DialogDescription>
                            </div>
                        </DialogHeader>

                        <div className = "flex flex-col gap-2 px-6 py-2">
                            <div className="space-y-2">
                                <div className = "grid grid-cols-3 gap-2">
                                    <div className = "bg-slate-100 p-4 rounded-lg w-full">
                                        <div className="flex items-center gap-3 rounded-lg">
                                            <BarChart10 size={16} className="text-gray-500" />
                                            <div className="flex flex-col">
                                                <span className="text-gray-500 text-xs">Kesulitan</span>
                                                <span className="font-medium text-gray-800 text-sm">{menu.difficulty}</span>
                                            </div>
                                        </div>
                                    </div>   

                                <div className = "bg-slate-100 p-4 rounded-lg w-full">
                                        <div className="flex items-center gap-3 rounded-lg">
                                            <Flame size={16} className="text-red-500" />
                                            <div className="flex flex-col">
                                                <span className="text-gray-500 text-xs">Kalori</span>
                                                <span className="font-medium text-gray-800 text-sm">{menu.calories} kkal</span>
                                            </div>
                                        </div>
                                    </div>   

                                <div className = "bg-slate-100 p-4 rounded-lg w-full">
                                        <div className="flex items-center gap-3 rounded-lg">
                                            <Clock size={16} className="text-blue-500" />
                                            <div className="flex flex-col">
                                                <span className="text-gray-500 text-xs">Durasi</span>
                                                <span className="font-medium text-gray-800 text-sm">{menu.prepTime} menit</span>
                                            </div>
                                        </div>
                                    </div>   
                                </div>
                            </div>

                            <h2 className = "text-2xl font-medium my-4">Bahan</h2>

                            <div className = "p-4 bg-slate-100 rounded-2xl flex flex-col gap-1">
                                {Object.keys(menu.ingredients).map((ingredient: string, index) => (
                                    <div className = "flex text-center" key={index}>
                                        <span className = "mr-auto text-gray-800 font-medium">{ingredient}</span>
                                        <span className = "text-sm text-gray-600">{menu.ingredients[ingredient].humanValue}</span>
                                    </div>
                                ))}
                            </div>

                            <h2 className = "text-2xl font-medium my-4">Langkah Memasak</h2>

                            <ul className = "p-4 bg-slate-100 rounded-2xl flex flex-col gap-1">
                                {menu.steps.map((step: string, index) => (
                                    <div className = "flex text-center gap-3 items-center" key={index}>
                                        <span className = "text-gray-500 text-sm select-none">{index + 1}.</span>
                                        <li key={index}>{step}</li>
                                    </div>
                                ))}
                            </ul>
                        </div>

                        <DialogFooter className = "w-full px-6 pb-4 pt-0 w-full">
                            <div className = "flex w-full gap-2">
                                <Button type="button" className = "!text-base w-1/2 h-auto">Mulai Memasak</Button>
                                <Button type="button" className = "!text-base w-1/2 h-auto">Mulai Memasak</Button>
                            </div>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};

export default MenuCardLong;
