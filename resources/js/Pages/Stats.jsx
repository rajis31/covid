import React from "react";
import { Link, usePage } from "@inertiajs/react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { ExampleChart } from "@/Components/charts/example-chart";
import { StatsGrid } from "@/Components/charts/stats-grid";

export default function Stats({ auth }) {
     const { totalLongHaulers } = usePage().props;
     const data = {
        totalLongHaulers,
     }

    return (
        <>
            <Header auth={auth} />
            <div className="mx-auto w-[90%] mt-[50px]">
                <StatsGrid data={data} />
                <ExampleChart />
            </div>

            <Footer />
        </>
    );
}
