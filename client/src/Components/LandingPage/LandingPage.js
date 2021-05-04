import React, { useEffect, useState } from 'react';
import Axios from "axios";
import LandingCarousel from "./LandingCarousel";
import Home from '../Home/Home';
import Category from '../Home/Category';

function LandingPage() {

    useEffect(() => {
        Axios.post('/api/test')
            .then(response => console.log(response));
    }, []);

    return (
        <div>
            <LandingCarousel />
            <Category />
            <Home />
        </div>
    )
}

export default LandingPage;