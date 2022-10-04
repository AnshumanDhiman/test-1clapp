import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import s1 from '../../resources/man.png';
import s2 from '../../resources/profile.png';
import s3 from '../../resources/woman.png';
import React, { useState } from 'react';
import { Carousel } from 'primereact/carousel';
import './Carousel.css';

const namedata1 = "Anshuman Dhiman";
const namedata2 = "Harsh Neolia";
const namedata3 = "Prashant Sharma";
const data1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const data2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const data3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const headingStyle= {
    textAlign:"center",
    fontWeight: "500"
}


const CarouselImage = () => {
    const [products, setProducts] = useState([
    {imageUrl: s1,ndata : namedata1, data: data1},
    {imageUrl: s2,ndata : namedata2, data: data2},
    {imageUrl: s3,ndata : namedata3, data: data3},
    {imageUrl: s1,ndata : namedata1, data: data1},
    {imageUrl: s2,ndata : namedata2, data: data2},
    {imageUrl: s3,ndata : namedata3, data: data3}

])
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1,  
        }

      
    ];
    

    const productTemplate = (product) => {
        return (
            <div className="product-item">
                <div className="product-item-content ">
                    <div className="p-mb-3">
                   
                        <img src={product.imageUrl} alt="" className="product-image" />
                        <br/>
                        <br/>
                     
                        <h3 style={headingStyle}>{product.ndata} </h3>
                         <p  style={{textAlign:"center"}}>{product.data}  </p> 
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="carousel-demo ">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
                <div className="card">
                <Carousel value={products} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={3000} itemTemplate={productTemplate} />
            </div>
        </div>
    );
}

export default CarouselImage;