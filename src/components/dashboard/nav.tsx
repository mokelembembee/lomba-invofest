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
            <div className = "w-[85px]"/>
            <div className = {`fixed px-4 py-8 bg-white shadow flex flex-col items-center justify-between h-full z-50`}>
                <button>
                    <img className={`rounded-full size-12 object-cover`} src={`/images/logo.png`} />
                </button>
                <nav className = {`flex flex-col gap-4`}>
                    {navigations.map((nav) => {
                        const isActive = pathname === nav.url

                        return (
                            <Tooltip key = { nav.url }>
                                <TooltipTrigger asChild>
                                    <Link href = { nav.url }> 
                                        <button className = {`rounded-full p-3 transition-all duration-100 ${
                                                isActive ? 'bg-primary' : 'text-gray-500'
                                            }`}
                                        >
                                            <nav.icon
                                                className = {`size-6 transition-all duration-100 ${
                                                    isActive ? 'fill-primary text-white' : 'fill transparent'
                                                }`}
                                            />
                                        </button>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent 
                                    side="right" 
                                    align="center" 
                                    sideOffset={32}
                                    className="z-10 bg-white text-sm text-gray-800 px-4 py-1.5 rounded-full"
                                >
                                    <p>{nav.title}</p>
                                </TooltipContent>
                            </Tooltip>
                        )
                    })}
                </nav>
                <button>
                    <img className={`rounded-full size-12`} src={`/images/users/1.png`}/>    
                </button> 
            </div>
        </TooltipProvider>
    )
}

export default DashboardNav
