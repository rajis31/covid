import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function StatsGrid() {
    const stats = [
        { label: "Total Long Haulers", value: "21,450" },
        { label: "% Fully Recovered", value: "43%" },
        { label: "New Long Haulers YTD", value: "150" },
        { label: "Avg. Recovery Time", value: "6.2 Months" },
    ];

    return (
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
    );
}
