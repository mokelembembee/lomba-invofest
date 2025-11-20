'use client'

import { Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className = "w-full border-t pt-4 hidden md:flex text-xs justify-between items-center">
            <div className = "flex gap-3">
                <span className = "font-bold">
                    Copyright © 2025 MyHolo
                </span>
                <a className = "text-gray-500">
                    Privacy Policy
                </a>
                <a className = "text-gray-500">
                    Term and Conditions
                </a>
            </div>
            <div className = "flex gap-2">
                <Link className="text-gray-500" href="#">
                    <Facebook size={16} />
                </Link>
                <Link className="text-gray-500" href="#">
                    <Instagram size={16} />
                </Link>
                <Link className="text-gray-500" href="#">
                    <Linkedin size={16} />
                </Link>
            </div>
        </footer>
    )
}

export default Footer
