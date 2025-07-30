import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card";

export function GenderBreakdownChart({ data }) {
    const genderData = Object.entries(data).map(([gender, percent]) => {
        const formattedGender =
            gender.charAt(0).toUpperCase() + gender.slice(1);
        return { gender: formattedGender, percent };
    });
    return (
        <Card className="shadow-md rounded-xl border border-gray-200">
            <CardHeader>
                <CardTitle>Long Covid Cases by Gender (%)</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            layout="vertical"
                            data={genderData}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 60,
                                bottom: 20,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                type="number"
                                domain={[0, 100]}
                                tickFormatter={(val) => `${val}%`}
                            />
                            <YAxis
                                type="category"
                                dataKey="gender"
                                tickLine={false}
                                axisLine={false}
                            />
                            <Tooltip
                                formatter={(val) => `${val}%`}
                                cursor={{ fill: "rgba(0,0,0,0.05)" }}
                            />
                            <Bar
                                dataKey="percent"
                                fill="#3b82f6"
                                radius={[0, 6, 6, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
