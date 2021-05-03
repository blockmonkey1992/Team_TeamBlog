import React, { useEffect, useState } from 'react';
import Axios from "axios";
import LandingCarousel from "./LandingCarousel";

function LandingPage() {

    useEffect(() => {
        Axios.post('/api/test')
            .then(response => console.log(response));
    }, []);

    return (
        <div>
            <LandingCarousel />
            LANDING PAGE !
        </div>
    )
}

export default LandingPage;