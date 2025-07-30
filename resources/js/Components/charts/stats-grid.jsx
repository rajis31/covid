import { useState } from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/Components/ui/card";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/Components/ui/collapsible";
import { Button } from "@/Components/ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";

export function StatsGrid({ data }) {
    const [isOpen, setIsOpen] = useState(true);

    const stats = [
        { label: "Total Long Haulers", value: data?.totalLongHaulers },
        { label: "% Fully Recovered", value: `${data?.percentFullyRecovered}%` },
        { label: "New Long Haulers YTD", value: data?.newHaulersYTD},
        { label: "Avg. Recovery Time", value: `${data?.averageRecoveryDuration ?? 0} months`},
    ];

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Long COVID Statistics</h2>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                        {isOpen ? (
                            <>
                                <ChevronDown className="w-4 h-4 mr-1" />
                                Collapse
                            </>
                        ) : (
                            <>
                                <ChevronRight className="w-4 h-4 mr-1" />
                                Expand
                            </>
                        )}
                    </Button>
                </CollapsibleTrigger>
            </div>

            <CollapsibleContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-5">
                    {stats.map((stat, idx) => (
                        <Card key={idx} className="rounded-xl shadow-sm">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm text-muted-foreground">
                                    {stat.label}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stat.value}</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </CollapsibleContent>
        </Collapsible>
    );
}
