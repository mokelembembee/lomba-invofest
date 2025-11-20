'use client'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
import { Home } from "iconest-react"
import { ChefHat, Dumbbell, BookOpenText , MessageCircle} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const DashboardNav = () => {
    const navigations = [{
        title: 'Beranda',
        url: '/home',
        icon: Home
    }, {
        title: 'Masak',
        url: '/cook',
        icon: ChefHat
    }, {
        title: 'Olahraga',
        url: '/sport',
        icon: Dumbbell
    }, {
        title: 'Artikel',
        url: '/article',
        icon: BookOpenText
    },{
        title: 'Social',
        url: '/social',
        icon: MessageCircle
    }]

    const pathname = usePathname()
    return (
        <TooltipProvider delayDuration = { 100 }>
            <div className="h-[85px] w-full md:h-full md:w-[85px] shrink-0" />
            
            <div className={`fixed bg-white shadow flex items-center z-50
                /* Mobile Styles: Bawah, Horizontal, Full Width */
                bottom-0 left-0 right-0 w-full h-[85px] flex-row justify-evenly border-t
                /* Desktop Styles: Samping Kiri, Vertikal, Fixed Width */
                md:top-0 md:border-t-0 md:h-full md:w-[85px] md:flex-col md:justify-between md:py-8 md:px-4 
            `}>
                {/* Logo: Hidden on Mobile, Visible on Desktop */}
                <button className="hidden md:block">
                    <img className={`rounded-full size-12 object-cover`} src={`/images/Logo.jpeg`} />
                </button>

                <nav className={`flex w-full justify-evenly md:w-auto md:flex-col md:gap-4`}>
                    {navigations.map((nav) => {
                        const isActive = pathname === nav.url

                        return (
                            <Tooltip key = { nav.url }>
                                <TooltipTrigger asChild>
                                    <Link href = { nav.url }> 
                                    <button 
                                        className={`rounded-full p-3 transition-all duration-150 ${
                                            isActive
                                                ? nav.title === "Beranda"
                                                    ? "bg-primary text-white shadow-md"
                                                : nav.title === "Masak"
                                                    ? "bg-primary text-white shadow-md"
                                                : nav.title === "Olahraga"
                                                    ? "bg-purple-600 text-white shadow-md"
                                                : nav.title === "Artikel"
                                                    ? "bg-pink-500 text-white shadow-md"
                                                : nav.title === "Social"
                                                    ? "bg-orange-400 text-white shadow-md"
                                                : "bg-primary text-white"
                                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                        }`}
                                    >
                                        <nav.icon
                                            className={`size-6 ${
                                                isActive ? "text-white" : "text-gray-500"
                                            }`}
                                        />
                                    </button>
                                    </Link>
                                </TooltipTrigger>
                                {/* Tooltip content hidden on mobile to prevent visual clutter */}
                                <TooltipContent 
                                    side="right" 
                                    align="center" 
                                    sideOffset={32}
                                    className="hidden md:block z-10 bg-white text-sm text-gray-800 px-4 py-1.5 rounded-full shadow-lg border"
                                >
                                    <p>{nav.title}</p>
                                </TooltipContent>
                            </Tooltip>
                        )
                    })}
                </nav>

                <button className="hidden md:block">
                    <img className={`rounded-full size-12`} src={`/images/users/1.png`}/>    
                </button> 
            </div>
        </TooltipProvider>
    )
}

export default DashboardNav
