import React from "react";
import { Link } from "@inertiajs/react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function About() {
    return (
        <>
            <Header />
            <div className="bg-white">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            About This Site
                        </h1>
                        <p className="text-lg md:text-xl mb-8">
                            This platform is built by patients — for patients —
                            to spotlight a truth many have forgotten: Long COVID
                            is still here, and it’s devastating lives. Even
                            though the pandemic has been declared “over,”
                            millions of people are still fighting every day to
                            function, to be heard, and to heal. I know this
                            because I’m one of them. After becoming infected in
                            January 2025, I was hit with Long COVID — and it
                            changed everything. The symptoms are not just
                            lingering; they are life-altering. I created this
                            space so people like me — and people like you — can
                            share their stories, connect, and be part of
                            something bigger. Because behind every number is a
                            person struggling to be understood. The urgency is
                            real. While research is underway, we need answers
                            faster. We need a cure. In the U.S. alone, an
                            estimated 5% of the population is still living with
                            Long COVID — including over 6 million children,
                            making it the most common chronic illness in kids
                            today. That’s not a footnote. That’s a national
                            emergency. Let’s make sure the world doesn’t move on
                            without us.
                        </p>
                    </div>
                </section>

                {/* Our Mission */}
                <section className="py-20 px-6 bg-yellow-50">
                    <div className="max-w-5xl mx-auto text-gray-800">
                        <h2 className="text-3xl font-bold mb-6 text-yellow-800 text-center">
                            Why We Exist
                        </h2>
                        <p className="mb-4 text-lg leading-relaxed">
                            This platform was created by people living with Long
                            COVID — for those still struggling to be heard.
                        </p>
                        <p className="mb-4 text-lg leading-relaxed">
                            <strong>Our mission:</strong> to elevate patient
                            voices, support independent research, and accelerate
                            hope.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                            <li>
                                <strong>Real stories matter</strong> — they
                                guide research and empower others.
                            </li>
                            <li>
                                <strong>Research must be transparent</strong> —
                                findings should serve the community.
                            </li>
                            <li>
                                <strong>Healing requires innovation</strong> —
                                we support science that moves fast and thinks
                                differently.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* What is Long COVID */}
                <section className="py-16 px-6 bg-gray-50">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            What Is Long COVID?
                        </h2>
                        <p className="text-gray-700 text-lg mb-6">
                            Long COVID is a complex, post-viral illness that can
                            affect the GI system, heart, brain, muscles, and
                            more — months or even years after infection. It’s
                            impacting millions globally, regardless of age or
                            health history.
                        </p>
                        <p className="text-gray-700 text-lg">
                            It’s defined by symptoms lasting three months or
                            longer after COVID-19 infection — with over 200
                            possible effects including fatigue, brain fog, and
                            chest pain.
                        </p>
                    </div>
                </section>

                {/* What We Support */}
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">
                            What We Support
                        </h2>
                        <p className="text-gray-700 text-lg mb-10">
                            We champion research that is practical,
                            human-centered, and community-driven. Our focus
                            includes:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-gray-800">
                            <ul className="space-y-3 list-disc list-inside">
                                <li>
                                    📊 Real-world symptom and treatment data
                                </li>
                                <li>
                                    🧪 Biomarker and immune system profiling
                                </li>
                            </ul>
                            <ul className="space-y-3 list-disc list-inside">
                                <li>
                                    🧠 Neurological and autonomic dysfunction
                                    studies
                                </li>
                                <li>
                                    🌍 Global, patient-led clinical
                                    investigations
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Who It's For */}
                <section className="py-16 px-6 bg-gray-50">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            Who This Is For
                        </h2>
                        <p className="text-gray-700 text-lg mb-4">
                            Whether you’re living with Long COVID, caring for
                            someone affected, or researching better solutions —
                            this space is for you.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg text-left max-w-2xl mx-auto">
                            <li>💬 Patients looking to connect and be heard</li>
                            <li>🧑‍⚕️ Researchers seeking real-world insight</li>
                            <li>👨‍👩‍👧‍👦 Families supporting loved ones</li>
                            <li>
                                📢 Advocates and policymakers who want to listen
                                and help
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Share Your Story CTA */}
                <section className="py-20 px-6 bg-white text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">
                            Your Story Matters
                        </h2>
                        <p className="text-gray-700 text-lg mb-8">
                            Every journey is unique — and every story is
                            powerful. By sharing yours, you help others feel
                            seen and help researchers understand the true impact
                            of this condition.
                        </p>
                        <Link
                            href="/testimonial"
                            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition"
                        >
                            ✍️ Share Your Long COVID Story
                        </Link>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
