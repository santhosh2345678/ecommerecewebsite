import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import DisplaySection from "../DisplaySection/DisplaySection";
import Featureproducts from "../Featuredproducts/Featureproducts";


export const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <DisplaySection />
            <Featureproducts/>
        </div>
    )
}
