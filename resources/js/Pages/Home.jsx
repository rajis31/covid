import React from "react";
import { Link, usePage } from "@inertiajs/react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { Card, CardContent } from "@/Components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";


export default function Home({ auth }) {
    const { testimonials } = usePage().props;

    return (
        <>
            <Header auth={auth} />
            <div className="bg-white">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Share Your Long COVID Experience
                        </h1>
                        <p className="text-lg md:text-xl mb-8">
                            Millions are suffering from Long COVID — a condition
                            that has left people debilitated, unheard, and
                            without a cure. Help others by sharing your story.
                        </p>
                        <Link
                            href="/testimonial"
                            className="inline-block bg-white text-indigo-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition"
                        >
                            ✍️ Share Your Story
                        </Link>
                    </div>
                </section>

                {/* Impact Section */}
                <section className="py-20 px-6 bg-yellow-50">
                    <div className="max-w-5xl mx-auto text-gray-800">
                        <h2 className="text-3xl font-bold mb-6 text-yellow-800 text-center">
                            Long COVID: A Global Emergency
                        </h2>
                        <p className="mb-4 text-lg leading-relaxed">
                            <strong>Millions around the world</strong> continue
                            to suffer from Long COVID—a complex, debilitating
                            condition that can last for months or even years.
                            COVID-19 is a multi-systemic virus with over 200+
                            documented symptoms including fatigue, brain fog,
                            chest pain, and digestive issues.
                        </p>
                        <p className="mb-4 text-lg leading-relaxed">
                            In the U.S. alone, it's estimated that{" "}
                            <strong>21 million people</strong> — including{" "}
                            <strong>5.8 million children</strong> — are
                            currently living with Long COVID. Yet despite the
                            widespread impact, research funding remains
                            critically low.
                        </p>
                        <p className="mb-4 text-lg leading-relaxed">
                            Patients are often left to navigate this condition
                            alone, cycling through doctors just to be heard, let
                            alone treated. Many are unable to work, and some
                            face severe financial hardship.
                        </p>
                    </div>
                </section>

                {/* About Section */}
                <section className="py-16 px-6 bg-gray-50">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            What Is Long COVID?
                        </h2>
                        <p className="text-gray-700 text-lg mb-6">
                            Long COVID is a complex, post-viral illness that
                            affects multiple body systems which include the GI
                            System, Heart, Brain, Muscular, and much more — even
                            months or years after a COVID-19 infection. Long
                            Covid is defined to be any set of symptoms that you
                            experience for 3 months or longer after the
                            infection. It’s impacting millions of people
                            globally, regardless of age or health history.
                        </p>
                        <h3 className="text-2xl font-semibold mb-2">
                            Why We Exist
                        </h3>
                        <p className="text-gray-700 text-lg">
                            We are a patient-led initiative supporting{" "}
                            <strong>
                                urgent, independent Long COVID research
                            </strong>{" "}
                            — studies that prioritize real-world data,
                            innovative treatments, and uncovering the root
                            causes of this condition.
                            <br />
                            <br />
                            We believe research should be{" "}
                            <strong>transparent</strong>,{" "}
                            <strong>community-backed</strong>, and focused on{" "}
                            <strong>getting people their lives back</strong>.
                        </p>
                    </div>
                </section>

                {/* Research Section */}
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">
                            Research Areas of Focus
                        </h2>
                        <p className="text-gray-700 text-lg mb-10">
                            We support fast-moving studies focused on:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-gray-800">
                            <ul className="space-y-3 list-disc list-inside">
                                <li>
                                    📊 Data-driven analysis of symptoms and
                                    treatments
                                </li>
                                <li>
                                    🧪 Biomarker and immune response testing
                                </li>
                            </ul>
                            <ul className="space-y-3 list-disc list-inside">
                                <li>
                                    🧠 Neurological and autonomic dysfunction
                                    research
                                </li>
                                <li>🌍 Global patient-led studies</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Testimonial Carousel */}
                <section className="py-16 px-6 bg-gray-100">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                            Real Patient Voices
                        </h2>
                        {testimonials && testimonials.length > 0 ? (
                            <section className="my-12 px-4 md:px-8 lg:px-16">
                                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
                                    What People Are Saying
                                </h2>
                                <Carousel>
                                    <CarouselContent>
                                        {testimonials
                                            .slice(0, 5)
                                            .map((t, i) => (
                                                <CarouselItem
                                                    key={i}
                                                    className="md:basis-1/2 lg:basis-1/3 px-2"
                                                >
                                                    <Card className="h-full shadow-md border border-gray-100 rounded-xl bg-white">
                                                        <CardContent className="p-6 flex flex-col justify-between h-full">
                                                            <blockquote className="relative text-gray-800 italic text-base pl-6 mb-4">
                                                                <span className="absolute left-0 -top-1 text-4xl text-indigo-400 font-serif leading-none">
                                                                    “
                                                                </span>
                                                                {t.story
                                                                    ?.length >
                                                                200
                                                                    ? t.story.slice(
                                                                          0,
                                                                          200
                                                                      ) + "..."
                                                                    : t.story}
                                                            </blockquote>
                                                            <footer className="text-sm text-gray-500 font-medium mt-auto text-right">
                                                                —{" "}
                                                                {t.is_anonymous
                                                                    ? t.anonymous_user_id
                                                                    : t.name}
                                                            </footer>
                                                        </CardContent>
                                                    </Card>
                                                </CarouselItem>
                                            ))}
                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </Carousel>
                            </section>
                        ) : (
                            <div className="text-center text-gray-600 text-lg mt-10">
                                🙁 There are no testimonials at this time. Be
                                the first to{" "}
                                <Link
                                    href="/testimonial"
                                    className="text-indigo-600 hover:underline font-medium"
                                >
                                    share your story
                                </Link>
                                .
                            </div>
                        )}
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
