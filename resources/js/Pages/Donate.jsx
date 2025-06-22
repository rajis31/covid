import React from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BanknoteArrowDown } from "lucide-react";

export default function Donate() {
    return (
        <div className="px-4 py-16 sm:py-20">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl font-bold mb-6">
                    Donate to Long COVID Research
                </h1>
                <p className="text-base sm:text-lg mb-8 text-gray-700">
                    Your contribution goes directly to supporting patient-led,
                    independent research projects.
                </p>
                <div className="bg-indigo-600 text-white rounded-xl p-8 mb-12 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold">
                            Support Long COVID Research
                        </h2>
                        <p className="text-sm mt-1">
                            Every donation helps us get closer to answers and
                            treatments.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-2xl mx-auto w-full px-4">
                <Tabs defaultValue="account" className="w-full">
                    <TabsList className="grid grid-cols-2 w-full mb-6">
                        <TabsTrigger value="GiveButter">GiveButter</TabsTrigger>
                        <TabsTrigger value="GoFundMe">Go Fund Me</TabsTrigger>
                    </TabsList>

                    <TabsContent value="GiveButter">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex flex-row">
                                    <BanknoteArrowDown className="mr-2" />
                                    GiveButter
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="tabs-demo-name">Name</Label>
                                    <Input
                                        id="tabs-demo-name"
                                        defaultValue="Pedro Duarte"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="tabs-demo-username">
                                        Username
                                    </Label>
                                    <Input
                                        id="tabs-demo-username"
                                        defaultValue="@peduarte"
                                    />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Send</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    <TabsContent value="GoFundMe">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex flex-row">
                                    <BanknoteArrowDown className="mr-2" />
                                    Go Fund Me
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="tabs-demo-current">
                                        Current password
                                    </Label>
                                    <Input
                                        id="tabs-demo-current"
                                        type="password"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="tabs-demo-new">
                                        New password
                                    </Label>
                                    <Input id="tabs-demo-new" type="password" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Confirm</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
