'use client'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
import { Compass, Compass3, Home, ImageUser, UserCircle, Users, Users2, Users3 } from "iconest-react"
import { ChefHat, Dumbbell } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const DashboardNav = () => {
    const navigations = [{
        title: 'Beranda',
        url: '/dashboard',
        icon: Home
    }, {
        title: 'Masak',
        url: '/dashboard/cook',
        icon: ChefHat
    }, {
        title: 'Teman',
        url: '/dashboard/social',
        icon: Dumbbell
    }]

    const pathname = usePathname()
    
    return (
        <TooltipProvider delayDuration={100}>
            <div className = "p-6 bg-gray-100 flex flex-col justify-center">
                <nav className = "flex flex-col gap-6 mt-auto">
                    {navigations.map((nav) => {
                        const isActive = (nav.url === '/dashboard')
                            ? pathname === nav.url
                            : pathname.startsWith(nav.url)

                        return (
                            <Tooltip key={nav.url}>
                                <TooltipTrigger asChild>
                                    <Link href={nav.url}> 
                                        <button
                                            className={`rounded-full p-2.5 ${
                                                isActive
                                                    ? 'bg-primary text-primary-foreground transition-all duration-150'
                                                    : 'text-gray-600'
                                            }`}
                                        >
                                            <nav.icon
                                                className={`size-5.5 transition-all duration-100 ${
                                                    isActive ? 'fill-white text-primary' : 'fill transparent'
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

                <button className = "mt-auto">
                    <img className = "rounded-full size-10 mt-auto" src = "https://media-cgk2-1.cdn.whatsapp.net/v/t61.24694-24/569354245_839797792057289_4133156723757990270_n.jpg?ccb=11-4&oh=01_Q5Aa2wES15oo33uIOvs3NUQFhqZr9sFBN4M8oUJn2_1Cn9LlrA&oe=690576AF&_nc_sid=5e03e0&_nc_cat=108"/>    
                </button> 
            </div>
        </TooltipProvider>
    )
}

export default DashboardNav