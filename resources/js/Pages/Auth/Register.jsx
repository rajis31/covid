import { useState } from "react";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Button } from "@/Components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/Components/ui/card";
import { Link, router, usePage } from '@inertiajs/react';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { props } = usePage();
  const serverErrors = props.errors || {};

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");

    router.post("/register", {
      name,
      email,
      password,
      password_confirmation: confirmPassword,
    });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 px-4">
        <Card className="w-full max-w-md shadow-lg border border-gray-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-indigo-700">Create Account</CardTitle>
            <p className="text-sm text-gray-500 mt-1">Sign up to get started</p>
          </CardHeader>

          <CardContent className="space-y-4">
            {(error || serverErrors?.email || serverErrors?.password) && (
              <div className="text-red-600 bg-red-100 border border-red-300 p-2 rounded text-sm">
                {error ||
                  serverErrors?.email ||
                  serverErrors?.password ||
                  "Something went wrong. Please check your inputs."}
              </div>
            )}

            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

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

            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3">
            <Button className="w-full" onClick={handleRegister}>Register</Button>
            <p className="text-sm text-center text-gray-500">
              Already have an account?{" "}
              <Link href="/login" className="text-indigo-600 hover:underline">
                Log in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </>
  );
}
