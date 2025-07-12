import { useState } from "react";
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { symptomOptions } from "@/data/symptoms";
import { router } from "@inertiajs/react";

const animatedComponents = makeAnimated();

export default function Testimonial() {
    const [name, setName] = useState(""); // ✅ added
    const [email, setEmail] = useState(""); // ✅ added
    const [content, setContent] = useState("");
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!content.trim()) return;

        const symptomValues = selectedSymptoms.map((s) => s.value);

        router.post(
            "/testimonial/store",
            {
                name,
                email,
                content,
                is_anonymous: isAnonymous,
                symptoms: symptomValues,
            },
            {
                onSuccess: () => {
                    setSubmitted(true);
                    setName("");
                    setEmail("");
                    setContent("");
                    setIsAnonymous(false);
                    setSelectedSymptoms([]);
                },
                onError: (errors) => {
                    console.error(errors);
                },
            }
        );
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-100 py-12 px-4 flex flex-col items-center">
                <div className="w-full max-w-2xl">
                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle className="text-indigo-700 text-2xl">
                                Share Your Long COVID Experience
                            </CardTitle>
                        </CardHeader>

                        <form onSubmit={handleSubmit}>
                            <CardContent className="space-y-4">
                                {submitted && (
                                    <div className="text-green-700 bg-green-100 border border-green-300 p-2 rounded text-sm">
                                        Thank you for sharing your story.
                                    </div>
                                )}

                                {error && (
                                    <div className="text-red-700 bg-red-100 border border-red-300 p-2 rounded text-sm">
                                        {error}
                                    </div>
                                )}

                                <div>
                                    <Label htmlFor="name" className="font-bold">Name</Label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="mt-1 block w-full rounded border border-gray-300 p-2"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="email" className="font-bold">Email</Label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="mt-1 block w-full rounded border border-gray-300 p-2"
                                        placeholder="you@example.com"
                                    />
                                </div>

                                <div>
                                    <Label className="font-bold">Your Story</Label>
                                    <Textarea
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        placeholder="Tell us about your long COVID journey..."
                                        className="mt-1"
                                        rows={5}
                                    />
                                </div>

                                <div>
                                    <Label className="font-bold">Symptoms Experienced</Label>
                                    <CreatableSelect
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        isMulti
                                        isSearchable
                                        onChange={setSelectedSymptoms}
                                        value={selectedSymptoms}
                                        options={symptomOptions}
                                        placeholder="Select or type to add symptoms..."
                                        className="mt-1"
                                    />
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="anonymous"
                                        checked={isAnonymous}
                                        onCheckedChange={(val) =>
                                            setIsAnonymous(!!val)
                                        }
                                    />
                                    <Label htmlFor="anonymous" className="font-bold">
                                        Post Anonymously
                                    </Label>
                                </div>
                            </CardContent>

                            <CardFooter>
                                <Button type="submit" className="w-full">
                                    Submit Testimonial
                                </Button>
                            </CardFooter>
                        </form>
                    </Card>
                </div>
            </div>
            <Footer />
        </>
    );
}
