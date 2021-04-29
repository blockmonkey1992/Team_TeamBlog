import React, { useEffect, useState } from 'react';
import Axios from "axios";

function LandingPage() {

    useEffect(() => {
        Axios.post('/api/test')
            .then(response => console.log(response));
    }, []);

    return (
        <div>
            LANDING PAGE !
        </div>
    )
}

export default LandingPage;