import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Link, usePage, router } from "@inertiajs/react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { props } = usePage();
    const successMessage = props.flash?.success;

    useEffect(() => {
        console.log(successMessage);
    }, [successMessage]);

    const handleLogin = () => {
        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }

        setError("");

        router.post(
            "/login",
            { email, password },
            {
                onError: (errors) => {
                    if (errors.email || errors.password) {
                        setError(errors.email || errors.password);
                    } else if (errors.message) {
                        setError(errors.message);
                    } else {
                        setError("Login failed. Please try again.");
                    }
                },
                onSuccess: () => {
                    console.log("Logged in successfully!");
                },
            }
        );
    };

    return (
        <>
            <Header />
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 px-4">
                <Card className="w-full max-w-md shadow-lg border border-gray-200">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-bold text-indigo-700">
                            Welcome Back
                        </CardTitle>
                        <p className="text-sm text-gray-500 mt-1">
                            Log in to your account
                        </p>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        {error && (
                            <div className="text-red-600 bg-red-100 border border-red-300 p-2 rounded text-sm">
                                {error}
                            </div>
                        )}

                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="flex justify-between items-center text-sm">
                            <Link
                                href="/forgot-password"
                                className="text-indigo-600 hover:underline"
                            >
                                Forgot password?
                            </Link>
                        </div>
                        {successMessage && (
                            <div className="bg-green-100 text-green-800 border border-green-300 p-2 mb-4 rounded text-sm text-center">
                                {successMessage}
                            </div>
                        )}
                    </CardContent>

                    <CardFooter className="flex flex-col gap-3">
                        <Button className="w-full" onClick={handleLogin}>
                            Login
                        </Button>
                        <p className="text-sm text-center text-gray-500">
                            Don’t have an account?{" "}
                            <Link
                                href="/register"
                                className="text-indigo-600 hover:underline"
                            >
                                Sign up
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </div>
            <Footer />
        </>
    );
}
