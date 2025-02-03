import Image from "next/image"; // Pastikan impor ini benar 
import logo from "../../public/images/logo_bk.svg"

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
                            <a href="/" className="hover:text-red-500 transition-colors duration-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-red-500 transition-colors duration-300">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/services" className="hover:text-red-500 transition-colors duration-300">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="/therapists" className="hover:text-red-500 transition-colors duration-300">
                                Therapist Profile
                            </a>
                        </li>
                        <li>
                            <a href="/testimonials" className="hover:text-red-500 transition-colors duration-300">
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <a href="/blog" className="hover:text-red-500 transition-colors duration-300">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-red-500 transition-colors duration-300">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="/login" className="hover:text-red-500 transition-colors duration-300">
                                Login
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
