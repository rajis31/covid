import React from 'react';
import { Link } from '@inertiajs/react';

export default function SupportResearch() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Support Long COVID Research. Help Us Find Answers.
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Millions are suffering from Long COVID — a condition that has left people debilitated, unheard, and without a cure. Your donation fuels real research, driven by patients, scientists, and advocates who won’t give up.
          </p>
          <Link
            href="#"
            className="inline-block bg-white text-indigo-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition"
          >
            🔬 Donate to Research
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">What Is Long COVID?</h2>
          <p className="text-gray-700 text-lg mb-6">
            Long COVID is a complex, post-viral illness that affects the nervous system, gut, lungs, and beyond — even months or years after a COVID-19 infection. It’s impacting millions of people globally, regardless of age or health history.
          </p>

          <h3 className="text-2xl font-semibold mb-2">Why We Exist</h3>
          <p className="text-gray-700 text-lg">
            We are a patient-led initiative raising funds to support <strong>urgent, independent Long COVID research</strong> — studies that prioritize real-world data, innovative treatments, and uncovering the root causes of this condition.  
            <br /><br />
            We believe research should be <strong>transparent</strong>, <strong>community-backed</strong>, and focused on <strong>getting people their lives back</strong>.
          </p>
        </div>
      </section>

      {/* Donation Appeal Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Every Dollar Drives Discovery</h2>
          <p className="text-gray-700 text-lg mb-10">
            Unlike large institutions that take years to act, we’re channeling your donations directly into fast-moving projects:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-gray-800">
            <ul className="space-y-3 list-disc list-inside">
              <li>📊 Data-driven analysis of symptoms and treatments</li>
              <li>🧪 Biomarker and immune response testing</li>
            </ul>
            <ul className="space-y-3 list-disc list-inside">
              <li>🧠 Neurological and autonomic dysfunction research</li>
              <li>🌍 Global patient-led studies</li>
            </ul>
          </div>
          <div className="mt-10">
            <p className="text-lg font-medium mb-4">
              You can be part of the solution. Together, we can push science forward — and give millions of people hope.
            </p>
            <Link
              href="#"
              className="inline-block bg-indigo-600 text-white hover:bg-indigo-700 font-semibold py-3 px-6 rounded-lg transition"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="italic text-gray-700 text-xl">
            “Long COVID took my energy, my job, and my ability to live normally. But it didn’t take my voice. Supporting research gives me — and millions like me — a chance at recovery.”
          </blockquote>
          <p className="mt-4 text-gray-600 font-semibold">
            — Anonymous Long COVID Patient
          </p>
        </div>
      </section>
    </div>
  );
}
