// import "primeicons/primeicons.css";
// import "primereact/resources/themes/saga-blue/theme.css";
// import "primereact/resources/primereact.css";

// import React, { useState } from "react";
// import { Dropdown } from "primereact/dropdown";
// import "./Dropdown.css";

// const SearchDropdDown = () => {

//     const [selectedCountry, setSelectedCountry] = useState(null);

//     const countries = [
//         { code: 110091 },
//         { code: 110092 },
//         { code: 110093 },
//         { code: 110094 },
//         { code: 110095 },
//         { code: 110096 },
//         { code: 110097 },
//         { code: 110098 },
//         { code: 110099 },
//         { code: 110081 },
//         { code: 110071 },
        
//     ];



//     const onCountryChange = (e) => {
//         setSelectedCountry(e.value);
//     }


//     const selectedCountryTemplate = (option, props) => {
//         if (option) {
//             return (
//                 <div className="country-item country-item-value">
//                    <div>{option.code}</div>
//                 </div>
//             );
//         }

//         return (
//             <span>
//                 {props.placeholder}
//             </span>
//         );
//     }

//     const countryOptionTemplate = (option) => {
//         return (
//             <div className="country-item">
//                 <div>{option.code}</div>
//             </div>
//         );
//     }

//     return (
//         <div className="card">
//             <Dropdown value={selectedCountry} options={countries} onChange={onCountryChange} optionLabel="name" filter showClear filterBy="name" placeholder="PIN"
//                 valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} />
//         </div>
//     );
// }

// export default SearchDropdDown;