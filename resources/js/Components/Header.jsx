import { useState } from "react";
import { Link, router } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import { Menu, X } from "lucide-react"; // Lucide icons (optional)

export default function Header({ auth }) {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileOpen((prev) => !prev);
    };

    const handleLogout = (e) => {
        e.preventDefault();
        router.post(route("logout"));
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-indigo-700">
                    Long COVID Support
                </Link>

                {/* Mobile toggle button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden text-gray-700 focus:outline-none"
                >
                    {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-4 items-center">
                    <Link
                        href="/"
                        className="text-gray-700 hover:text-indigo-600 font-medium"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="text-gray-700 hover:text-indigo-600 font-medium"
                    >
                        About
                    </Link>
                    <Button asChild>
                        <Link
                            href={route("stats.show")}
                            className="text-gray-700 hover:text-indigo-600 font-medium"
                        >
                            Statistics
                        </Link>
                    </Button>
                    <Link
                        href={route("testimonial.show")}
                        className="text-gray-700 hover:text-indigo-600 font-medium"
                    >
                        Your Story
                    </Link>
                    {auth?.user ? (
                        <form onSubmit={handleLogout}>
                            <Button type="submit" variant="outline">
                                Logout
                            </Button>
                        </form>
                    ) : (
                        <Link
                            href="/login"
                            className="text-gray-700 hover:text-indigo-600 font-medium"
                        >
                            Login
                        </Link>
                    )}
                </nav>
            </div>

            {/* Mobile Menu */}
            {isMobileOpen && (
                <div className="md:hidden bg-white shadow-md absolute w-full z-40">
                    <nav className="flex flex-col px-6 py-4 space-y-3">
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-indigo-600 font-medium"
                            onClick={toggleMobileMenu}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-700 hover:text-indigo-600 font-medium"
                            onClick={toggleMobileMenu}
                        >
                            About
                        </Link>
                        <Link
                            href={route("stats.show")}
                            className="text-gray-700 hover:text-indigo-600 font-medium"
                            onClick={toggleMobileMenu}
                        >
                            Statistics
                        </Link>
                        <Link
                            href={route("testimonial.show")}
                            className="text-gray-700 hover:text-indigo-600 font-medium"
                            onClick={toggleMobileMenu}
                        >
                            Your Story
                        </Link>
                        {auth?.user ? (
                            <form onSubmit={handleLogout}>
                                <Button type="submit" variant="outline" className="w-full">
                                    Logout
                                </Button>
                            </form>
                        ) : (
                            <Link
                                href="/login"
                                className="text-gray-700 hover:text-indigo-600 font-medium"
                                onClick={toggleMobileMenu}
                            >
                                Login
                            </Link>
                        )}
                    </nav>
                </div>
            )}
        </header>
    );
}
