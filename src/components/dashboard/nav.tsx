'use client'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
import { Home } from "iconest-react"
import { ChefHat, Dumbbell, BookOpenText } from "lucide-react"
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
    }]

    const pathname = usePathname()
    
    return (
        <TooltipProvider delayDuration = { 100 }>
            <div className = "w-[85px]"/>
            <div className = {`fixed px-4 py-8 bg-white shadow flex flex-col justify-between h-full`}>
                <div className = {`flex flex-col gap-12`}>
                    <button>
                        <img className = {`rounded-full size-12`} src = {`https://img.freepik.com/free-vector/charity-logo-hands-supporting-heart-icon-flat-design-vector-illustration_53876-136266.jpg?semt=ais_hybrid&w=740&q=80`} />
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
                </div>

                <button>
                    <img className = {`rounded-full size-12`} src = {`https://media-cgk2-1.cdn.whatsapp.net/v/t61.24694-24/569354245_839797792057289_4133156723757990270_n.jpg?ccb=11-4&oh=01_Q5Aa2wES15oo33uIOvs3NUQFhqZr9sFBN4M8oUJn2_1Cn9LlrA&oe=690576AF&_nc_sid=5e03e0&_nc_cat=108`}/>    
                </button> 
            </div>
        </TooltipProvider>
    )
}

export default DashboardNav