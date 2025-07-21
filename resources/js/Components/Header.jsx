import { Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";

export default function Header({ auth }) {

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-indigo-700">
                    Long COVID Support
                </Link>

                <nav className="space-x-4">
                    <Link
                        href="/"
                        className="text-gray-700 hover:text-indigo-600 font-medium"
                    >
                        Home
                    </Link>
                    <Link
                        href={route("donate")}
                        className="text-gray-700 hover:text-indigo-600 font-medium"
                    >
                        Donate
                    </Link>
                    <Link
                        href="/about"
                        className="text-gray-700 hover:text-indigo-600 font-medium"
                    >
                        About
                    </Link>
                  
                    <Link
                        href={route("stats.show")}
                        className="text-gray-700 hover:text-indigo-600 font-medium"
                    >
                        Statistics
                    </Link>
                    <Button asChild>
                        <Link href={route("donate")}>Give Now</Link>
                    </Button>
                      {!auth?.user && (
                        <Link
                            href="/login"
                            className="text-gray-700 hover:text-indigo-600 font-medium"
                        >
                            Login
                        </Link>
                    )}

                </nav>
            </div>
        </header>
    );
}
