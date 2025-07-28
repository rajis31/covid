import React from "react";
import { Link, usePage } from "@inertiajs/react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { StatsGrid } from "@/Components/charts/stats-grid";
import { GenderBreakdownChart } from "@/Components/charts/gender-chart";

export default function Stats({ auth }) {
    const {
        totalLongHaulers,
        percentFullyRecovered,
        averageRecoveryDuration,
        newHaulersYTD,
        topSymptoms,
        haulersByGender
    } = usePage().props;

    console.log(topSymptoms);
    
    const data = {
        totalLongHaulers,
        percentFullyRecovered,
        averageRecoveryDuration,
        newHaulersYTD,
        haulersByGender
    };

    console.log(haulersByGender);

    return (
        <>
            <Header auth={auth} />
            <div className="mx-auto w-[90%] mt-[50px]">
                <StatsGrid data={data} />
                <GenderBreakdownChart />
            </div>

            <Footer />
        </>
    );
}
