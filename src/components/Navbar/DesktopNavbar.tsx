import React from 'react' 

const DesktopNavbar = () => {

    return ( 
        <div>
            <ul>
                <li className="">Logo</li>
                <li className="">Tutorials</li>
                <li className="">Roadmap</li>
                <li className="">About</li>
                <li className="">
                    <span>... (dropdown menu)</span>
                    <ul>
                        <li className="">contribute</li>
                        <li className="">request tutorials</li>
                        <li className="">language</li>
                        <li className="">light/dark theme</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default DesktopNavbar