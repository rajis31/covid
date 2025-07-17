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
    const [data, setData] = useState({
        name: "",
        email: "",
        content: "",
        isAnonymous: false,
        selectedSymptoms: [],
        lastInfectionDate: "",
        infectionCount: "",
        isVaccinated: false,
        vaccineType: "",
        vaccineDoses: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (key) => (e) => {
        const value = e?.target?.value ?? e;
        setData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.content.trim()) return;

        const symptomValues = data.selectedSymptoms.map((s) => s.value);

        router.post(
            "/testimonial/store",
            {
                name: data.name,
                email: data.email,
                content: data.content,
                is_anonymous: data.isAnonymous,
                symptoms: symptomValues,
                last_infection_date: data.lastInfectionDate,
                infection_count: data.infectionCount,
                is_vaccinated: data.isVaccinated,
                vaccine_type: data.vaccineType,
                vaccine_doses: data.vaccineDoses,
            },
            {
                onSuccess: () => {
                    setSubmitted(true);
                    setData({
                        name: "",
                        email: "",
                        content: "",
                        isAnonymous: false,
                        selectedSymptoms: [],
                        lastInfectionDate: "",
                        infectionCount: "",
                        isVaccinated: false,
                        vaccineType: "",
                        vaccineDoses: "",
                    });
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
                                    <Label htmlFor="name" className="font-bold">
                                        Name
                                    </Label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={data.name}
                                        onChange={handleChange("name")}
                                        className="mt-1 block w-full rounded border border-gray-300 p-2"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <Label
                                        htmlFor="email"
                                        className="font-bold"
                                    >
                                        Email
                                    </Label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={data.email}
                                        onChange={handleChange("email")}
                                        className="mt-1 block w-full rounded border border-gray-300 p-2"
                                        placeholder="you@example.com"
                                    />
                                </div>

                                <div>
                                    <Label className="font-bold">
                                        Date of Last Infection
                                    </Label>
                                    <input
                                        type="date"
                                        value={data.lastInfectionDate}
                                        onChange={handleChange(
                                            "lastInfectionDate"
                                        )}
                                        className="mt-1 block w-full rounded border border-gray-300 p-2"
                                    />
                                </div>

                                <div>
                                    <Label className="font-bold">
                                        How Many Times Have You Been Infected?
                                    </Label>
                                    <input
                                        type="number"
                                        min="0"
                                        value={data.infectionCount}
                                        onChange={handleChange(
                                            "infectionCount"
                                        )}
                                        className="mt-1 block w-full rounded border border-gray-300 p-2"
                                        placeholder="e.g. 3"
                                    />
                                </div>

                                {/* Vaccination fields */}
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="isVaccinated"
                                        checked={data.isVaccinated}
                                        onCheckedChange={(val) =>
                                            setData((prev) => ({
                                                ...prev,
                                                isVaccinated: !!val,
                                            }))
                                        }
                                    />
                                    <Label
                                        htmlFor="isVaccinated"
                                        className="font-bold"
                                    >
                                        Are you vaccinated?
                                    </Label>
                                </div>

                                {data.isVaccinated && (
                                    <>
                                        <div>
                                            <Label className="font-bold">
                                                Which vaccine did you receive?
                                            </Label>
                                            <input
                                                type="text"
                                                value={data.vaccineType}
                                                onChange={handleChange(
                                                    "vaccineType"
                                                )}
                                                className="mt-1 block w-full rounded border border-gray-300 p-2"
                                                placeholder="e.g. Pfizer, Moderna, J&J"
                                            />
                                        </div>

                                        <div>
                                            <Label className="font-bold">
                                                How many total doses (including
                                                boosters)?
                                            </Label>
                                            <input
                                                type="number"
                                                min="0"
                                                value={data.vaccineDoses}
                                                onChange={handleChange(
                                                    "vaccineDoses"
                                                )}
                                                className="mt-1 block w-full rounded border border-gray-300 p-2"
                                                placeholder="e.g. 3"
                                            />
                                        </div>
                                    </>
                                )}

                                <div>
                                    <Label className="font-bold">
                                        Your Story
                                    </Label>
                                    <Textarea
                                        value={data.content}
                                        onChange={handleChange("content")}
                                        placeholder="Tell us about your long COVID journey..."
                                        className="mt-1"
                                        rows={5}
                                    />
                                </div>

                                <div>
                                    <Label className="font-bold">
                                        Symptoms Experienced
                                    </Label>
                                    <CreatableSelect
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        isMulti
                                        isSearchable
                                        onChange={(val) =>
                                            setData((prev) => ({
                                                ...prev,
                                                selectedSymptoms: val,
                                            }))
                                        }
                                        value={data.selectedSymptoms}
                                        options={symptomOptions}
                                        placeholder="Select or type to add symptoms..."
                                        className="mt-1"
                                    />
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="anonymous"
                                        checked={data.isAnonymous}
                                        onCheckedChange={(val) =>
                                            setData((prev) => ({
                                                ...prev,
                                                isAnonymous: !!val,
                                            }))
                                        }
                                    />
                                    <Label
                                        htmlFor="anonymous"
                                        className="font-bold"
                                    >
                                        Post Anonymously
                                    </Label>
                                </div>
                            </CardContent>

                            <CardFooter>
                                <Button type="submit" className="w-full">
                                    Submit Story
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
