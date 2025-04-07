"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../public/logoNavbar.svg";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
            <header className={`fixed top-0 left-0 w-full transition-all duration-300 text-black ${isScrolled ? "backdrop-blur-md bg-white/50 my-4 mx-6 md:mx-36 max-w-[90%] md:max-w-[80%] rounded-xl shadow-md z-[9999] p-2" : "backdrop-blur-sm bg-white/30 h-[80px]"}`}>
                <div className="flex items-center justify-between px-6 w-full relative">
                    <div className="w-24 md:w-24 h-auto transition-all duration-500">
                        <Image src={logo} alt="Logo BKMoklet" className="w-full h-auto" />
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl md:hidden focus:outline-none">
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    {/* Navigation */}
                    <nav className={`absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ${menuOpen ? "block" : "hidden"} md:flex md:items-center md:space-x-10 text-gray-700 font-medium p-4 md:p-0`}>
                        <ul className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0">
                            {[
                                { href: "/", label: "Home" },
                                { href: "/about", label: "About Us" },
                                { href: "/services", label: "Services" },
                                { href: "/therapists", label: "Therapist Profile" },
                                { href: "/testimonials", label: "Testimonials" },
                                { href: "/blog", label: "Blog" },
                                { href: "/contact", label: "Contact" },
                                { href: "/login", label: "Login" }
                            ].map((item, index) => (
                                <li key={index}>
                                    <Link href={item.href} className="hover:text-red-500 transition-colors duration-300 block py-2 px-4">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
        </div>
    );
}
