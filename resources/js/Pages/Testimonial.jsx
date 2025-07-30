import { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import { Textarea } from "@/Components/ui/textarea";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "@/Components/ui/card";
import { Label } from "@/Components/ui/label";
import { Checkbox } from "@/Components/ui/checkbox";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { symptomOptions } from "@/data/symptoms";
import { treatmentOptions } from "@/data/treatments";
import { router, usePage } from "@inertiajs/react";
import { useToast } from "@/hooks/use-toast";

const animatedComponents = makeAnimated();

export default function Testimonial({ auth }) {
    const [data, setData] = useState({
        name: "",
        gender: "",
        content: "",
        isAnonymous: false,
        selectedSymptoms: [],
        selectedTreatments: [],
        lastInfectionDate: "",
        infectionCount: "",
        isVaccinated: false,
        vaccineType: "",
        vaccineDoses: "",
        dateOfLongCovidOnset: "",
        hasRecovered: false,
        dateOfRecovery: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const { flash, errors } = usePage().props;
    const { toast } = useToast();

    const handleChange = (key) => (e) => {
        const value = e?.target?.value ?? e;
        setData((prev) => ({ ...prev, [key]: value }));
    };

    useEffect(() => {
        if (flash?.success && flash?.type === "login") {
            toast({
                title: "Success",
                description: "Successfully logged in",
                variant: "success",
            });
        }
    }, [flash]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const symptomValues = data.selectedSymptoms.map((s) => s.value);
        const treatmentValues = data.selectedTreatments.map((t) => t.value);

        router.post(
            "/testimonial/store",
            {
                name: data.name,
                gender: data.gender,
                story: data.content,
                is_anonymous: data.isAnonymous,
                symptoms: symptomValues,
                treatments: treatmentValues,
                last_infection_date: data.lastInfectionDate,
                date_of_long_covid_onset: data.dateOfLongCovidOnset,
                num_of_times_infected: data.infectionCount,
                vaccinated: data.isVaccinated,
                vaccine_type: data.vaccineType,
                num_of_vaccines: data.vaccineDoses,
                has_recovered: data.hasRecovered,
                date_of_recovery: data.dateOfRecovery,
            },
            {
                onSuccess: () => {
                    setSubmitted(true);
                    setData({
                        name: "",
                        gender: "",
                        content: "",
                        isAnonymous: false,
                        selectedSymptoms: [],
                        selectedTreatments: [],
                        lastInfectionDate: "",
                        infectionCount: "",
                        isVaccinated: false,
                        vaccineType: "",
                        vaccineDoses: "",
                        dateOfLongCovidOnset: "",
                        hasRecovered: false,
                        dateOfRecovery: "",
                    });
                    setError("");
                },
                onError: (errors) => {
                    setError("Something went wrong. Please try again.");
                },
            }
        );
    };

    if (!auth) {
        return (
            <>
                <Header auth={auth} />
                <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-100 flex items-center justify-center px-4">
                    <div className="w-full max-w-md">
                        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md shadow">
                            <p className="font-semibold">
                                You must be logged in to share your story.
                            </p>
                            <a
                                href="/login"
                                className="mt-3 inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition"
                            >
                                Go to Login
                            </a>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header auth={auth} />
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
                                        Thank you for sharing your story. You can manage your story in the dashboard section :)
                                    </div>
                                )}

                                {errors && Object.keys(errors).length > 0 && (
                                    <div className="text-red-700 bg-red-100 border border-red-300 p-4 rounded text-sm space-y-1">
                                        <p className="font-bold">Please fix the following:</p>
                                        <ul className="list-disc list-inside">
                                            {Object.entries(errors).map(([field, message]) => (
                                                <li key={field}>{message}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div>
                                    <Label htmlFor="name" className="font-bold">Name</Label>
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
                                    <Label htmlFor="gender" className="font-bold">
                                        Gender <span className="text-red-500">*</span>
                                    </Label>
                                    <select
                                        id="gender"
                                        value={data.gender}
                                        onChange={handleChange("gender")}
                                        required
                                        className="mt-1 block w-full rounded border border-gray-300 p-2"
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <Label className="font-bold">Date of Last Infection</Label>
                                    <input
                                        type="date"
                                        value={data.lastInfectionDate}
                                        onChange={handleChange("lastInfectionDate")}
                                        className="mt-1 block w-full rounded border border-gray-300 p-2"
                                    />
                                </div>

                                <div>
                                    <Label className="font-bold">
                                        Date of Long COVID Onset <span className="text-red-500">*</span>
                                    </Label>
                                    <input
                                        type="date"
                                        value={data.dateOfLongCovidOnset}
                                        onChange={handleChange("dateOfLongCovidOnset")}
                                        className="mt-1 block w-full rounded border border-gray-300 p-2"
                                    />
                                </div>

                                <div>
                                    <Label className="font-bold">How Many Times Have You Been Infected?</Label>
                                    <input
                                        type="number"
                                        min="0"
                                        value={data.infectionCount}
                                        onChange={handleChange("infectionCount")}
                                        className="mt-1 block w-full rounded border border-gray-300 p-2"
                                        placeholder="e.g. 3"
                                    />
                                </div>

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
                                    <Label htmlFor="isVaccinated" className="font-bold">
                                        Are you vaccinated?
                                    </Label>
                                </div>

                                {data.isVaccinated && (
                                    <>
                                        <div>
                                            <Label className="font-bold">Which vaccine did you receive?</Label>
                                            <input
                                                type="text"
                                                value={data.vaccineType}
                                                onChange={handleChange("vaccineType")}
                                                className="mt-1 block w-full rounded border border-gray-300 p-2"
                                                placeholder="e.g. Pfizer, Moderna, J&J"
                                            />
                                        </div>

                                        <div>
                                            <Label className="font-bold">
                                                How many total doses (including boosters)?
                                            </Label>
                                            <input
                                                type="number"
                                                min="0"
                                                value={data.vaccineDoses}
                                                onChange={handleChange("vaccineDoses")}
                                                className="mt-1 block w-full rounded border border-gray-300 p-2"
                                                placeholder="e.g. 3"
                                            />
                                        </div>
                                    </>
                                )}

                                <div>
                                    <Label className="font-bold">
                                        Your Story <span className="text-red-500">*</span>
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
                                        Symptoms Experienced <span className="text-red-500">*</span>
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

                                <div>
                                    <Label className="font-bold">Treatments or Supplements Used</Label>
                                    <CreatableSelect
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        isMulti
                                        isSearchable
                                        onChange={(val) =>
                                            setData((prev) => ({
                                                ...prev,
                                                selectedTreatments: val,
                                            }))
                                        }
                                        value={data.selectedTreatments}
                                        options={treatmentOptions}
                                        placeholder="Select or type to add treatments..."
                                        className="mt-1"
                                    />
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="hasRecovered"
                                        checked={data.hasRecovered}
                                        onCheckedChange={(val) =>
                                            setData((prev) => ({
                                                ...prev,
                                                hasRecovered: !!val,
                                            }))
                                        }
                                    />
                                    <Label htmlFor="hasRecovered" className="font-bold">
                                        Have you recovered?
                                    </Label>
                                </div>

                                {data.hasRecovered && (
                                    <div>
                                        <Label className="font-bold">
                                            Date of Recovery <span className="text-red-500">*</span>
                                        </Label>
                                        <input
                                            type="date"
                                            value={data.dateOfRecovery}
                                            onChange={handleChange("dateOfRecovery")}
                                            className="mt-1 block w-full rounded border border-gray-300 p-2"
                                        />
                                    </div>
                                )}

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
                                    <Label htmlFor="anonymous" className="font-bold">
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
