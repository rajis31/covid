import { useState } from "react";
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

export default function Testimonial() {
    const [content, setContent] = useState("");
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [submitted, setSubmitted] = useState(false);


    const handleSubmit = () => {
        if (!content.trim()) return;

        // Normally you'd post to the backend here
        console.log("Submitting:", { content, isAnonymous });

        setSubmitted(true);
        setContent("");
        setIsAnonymous(false);
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

                        <CardContent className="space-y-4">
                            {submitted && (
                                <div className="text-green-700 bg-green-100 border border-green-300 p-2 rounded text-sm">
                                    Thank you for sharing your story.
                                </div>
                            )}

                            <div>
                                <Label htmlFor="testimonial">Your Story</Label>
                                <Textarea
                                    id="testimonial"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    placeholder="Tell us about your long COVID journey..."
                                    className="mt-1"
                                    rows={5}
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
                                <Label htmlFor="anonymous">
                                    Post Anonymously
                                </Label>
                            </div>
                        </CardContent>

                        <CardFooter>
                            <Button onClick={handleSubmit} className="w-full">
                                Submit Testimonial
                            </Button>
                        </CardFooter>
                    </Card>

                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-800">
                            What Others Are Saying
                        </h2>
                        {/* {testimonials.map((t) => (
                            <Card key={t.id}>
                                <CardContent className="py-4">
                                    <p className="text-gray-700 whitespace-pre-wrap">
                                        {t.content}
                                    </p>
                                    <p className="text-sm text-gray-500 mt-2">
                                        — {t.name || "Anonymous"}
                                    </p>
                                </CardContent>
                            </Card>
                        ))} */}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
