import Image from "next/image"; // Pastikan impor ini benar
import logo from "../../public/images/bkmoklet.png"; // Pastikan path ini benar

export default function Header() {
    return (
        <header className="flex justify-between items-start px-6 mb-5">
            {/* Logo */}
            <div className="flex items-start ml-auto"> {/* Geser logo ke kanan */}
                <Image
                    src={logo}
                    alt="Logo BKMoklet"
                    width={50} // Sesuaikan lebar
                    height={50} // Sesuaikan tinggi
                    className="w-24 h-auto"
                    priority
                />
            </div>

            {/* Navigation */}
            <nav className="flex justify-center w-full">
                <ul className="flex space-x-20 text-gray-700 font-medium pl-20">
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
        </header>
    );
}
