import Image from "next/image"; // Pastikan impor ini benar 
import logo from "../../../public/images/logo_bk.svg"
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-center items-start px-6 mb-5">
            <div className="flex justify-center">
                {/* Logo */}
                <div className="flex items-start ml-auto"> {/* Geser logo ke kanan */}
                    <Image
                        src={logo}
                        alt="Logo BKMoklet"
                        width={500}
                        height={500}
                        className="w-full h-full"
                    />
                </div>

                {/* Navigation */}
                <nav className="w-full">
                    <ul className="flex items-center space-x-20 text-gray-700 font-medium py-4 pl-11 text-black">
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
    );
}
