import React, { useState } from 'react'
import './HeroSection.css'
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
// import SearchDropdDown from './searchDropdown/SearchDropDown'
import Searchbar from './searchbar/Searchbar'; 


import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function HeroSection(props) {
    // const data = {
    //     heading: 'Welcome To 1Clapp',
    // }
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (event) => {
        setSearchInput(event.target.value);
    }

    
    return (
        <section className = "heroSection">
            <div className = "heroSection_Overlay">
            </div>

            <h1 className="heroHeading text-center">
                    {/* {data.heading} */}
                    Welcome To 1<span class="clapp-text">Clapp</span>
            </h1>
            <h2 class="tagline text-center">" Just A Clapp Away " 
            {/* <img class="clapp" src={clapp}/> */}
            </h2>
                <div className = "searchBoxSection">
                    <Searchbar />
                    {/* <div className = "searchInput">
                        <i className="pi pi-search"></i>
                        <input type="text" autoComplete="off" className="p-dropdown-filter p-inputtext p-component" alt = "Backround" value={searchInput} onChange = {handleChange} />
                    </div> */}
                </div>
        </section>
    )
}

export default HeroSection;
