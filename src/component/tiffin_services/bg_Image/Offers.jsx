import React, { useState } from 'react';
import { Carousel } from 'primereact/carousel';
import './Offers.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeflex/primeflex.css';

import img1 from '../../../resources/img1.jpg'
import img2 from '../../../resources/img2.jpg'
import img3 from '../../../resources/img3.jpg'


const Offers = () => {
    const [products, setProducts] = useState([
        {imgsrc:img1 },
        {imgsrc:img2 },
        {imgsrc:img3 },
        {imgsrc:img1 },
        {imgsrc:img2 },
        {imgsrc:img3 }

    ]);
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const productTemplate = (product) => {
        return (
            <>
            
            <div className="product-item-tiffin">
                <div className="product-item-content">
   
                    <div className="p-mb-3 img-div">
                        <img src={product.imgsrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={product.name} className="product-image-tiffin carousel-img" />
                    </div>
                    {/* <div>
                        <h4 className="p-mb-1">{product.name}</h4>
                        <h6 className="p-mt-0 p-mb-3">${product.price}</h6>
                        <span className={`product-badge status-${product.inventoryStatus.toLowerCase()}`}>{product.inventoryStatus}</span>
                    </div> */}


                </div>
            </div>
           </>
        );
    }

    return (
        <div className="carousel-align ">

            <div className="card">
                <Carousel value={products} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={3000} itemTemplate={productTemplate} 
                    // header={<h3 className="carousel-heading">Special Offers!</h3>}
                     />
            </div>
         </div>
    );
}

export default Offers