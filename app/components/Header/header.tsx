"use client"

import Image from "next/image"; // Pastikan impor ini benar 
import logo from "../../../public/logoNavbar.svg"
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {

    const [scrollY, setScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setIsScrolled(window.scrollY > 200);
            setScrolled(window.scrollY > 100); // Logo hilang saat scrollY > 100
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div className="max-w-7xl mx-auto">
            <header className={`fixed -top-[16px] left-0 w-full transition-all duration-300 text-black ${isScrolled ? "backdrop-blur-md bg-white/50 my-8 mx-36 max-w-[80%] rounded-xl shadow-md z-[9999]" : "py-4 backdrop-blur-sm bg-white/30 h-[80px]"}`}>
                <div className="flex items-start justify-between px-6 w-full">
                    {/* Logo */}
                    {!scrolled && (
                        <div
                        className={`w-32 h-auto transition-all duration-500 ease-in-out ${
                            scrolled ? "opacity-0 scale-95 translate-y-[-10px]" : "opacity-100 scale-100 translate-y-0"
                        }`}
                    >
                        <Image
                            src={logo}
                            alt="Logo BKMoklet"
                            width={500}
                            height={500}
                            className="w-full h-full"
                        />
                    </div>

                    )}

                    {/* Navigation */}
                    <nav className="w-full flex justify-center">
                        <ul className={`flex items-center space-x-20 text-gray-700 font-medium py-4 pl-11`}>
                            <li>
                                <Link href="/" className="hover:text-red-500 transition-colors duration-300">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-red-500 transition-colors duration-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-red-500 transition-colors duration-300">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/therapists" className="hover:text-red-500 transition-colors duration-300">
                                    Therapist Profile
                                </Link>
                            </li>
                            <li>
                                <Link href="/testimonials" className="hover:text-red-500 transition-colors duration-300">
                                    Testimonials
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-red-500 transition-colors duration-300">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-red-500 transition-colors duration-300">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/login" className="hover:text-red-500 transition-colors duration-300">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}