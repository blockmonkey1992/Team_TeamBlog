import React from 'react'
import '../../Scss/Footer.scss';

function Footer() {

    const year = new Date();

    return (
        <div className="footerWrapper">
            <div>
                Copyright © 2021 Ninja Coders All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer
