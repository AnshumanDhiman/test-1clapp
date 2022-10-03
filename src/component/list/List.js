import React, { useState, useEffect } from 'react';
import tiffin from '../../resources/tiffin.jpg'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../index.css';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Rating } from 'primereact/rating';
import './List.css';
import Table from '../table/Table';

function List(props) {
    const [toggle, settoggle] = useState(false)
    function onChangeToggle(){
        settoggle(!toggle)
        console.log(toggle)
    }
    const [listitems, setlistitems] = useState([{
        name: "ABC Tiffin",
        description: "lorem ipsum",
        category: "1 time",
        image: tiffin
    },{
        name: "ABC Tiffin",
        description: "lorem ipsum",
        category: "1 time",
        image: tiffin
    }])
    const [layout, setLayout] = useState('list');
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [sortField, setSortField] = useState(null);
    const sortOptions = [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'},
    ];

    const onSortChange = (event) => {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            setSortOrder(-1);
            setSortField(value.substring(1, value.length));
            setSortKey(value);
        }
        else {
            setSortOrder(1);
            setSortField(value);
            setSortKey(value);
        }
    }

    const renderListItem = (data) => {
        return (
            <div className="p-col-12">
                <div className="product-list-item" onClick = {()=>onChangeToggle()}>
                    <img src={`${data.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                    <div className="product-list-detail">
                        <div className="product-name">{data.name}</div>
                        <div className="product-description">{data.description}</div>
                        <Rating value={data.rating} readOnly cancel={false}></Rating>
                        <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>
                    </div>
                    <div className="product-list-action">
                        <span className="product-price">${data.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Place Order" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    </div>
                </div>
            </div>
        );
    }

    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }

        return renderListItem(product);
    }

    const renderHeader = () => {
        return (
            <div className="p-grid p-nogutter">
                <div className="p-col-6" style={{textAlign: 'left'}}>
                    <Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Sort By Price" onChange={onSortChange}/>
                </div>
                <div className="p-col-6" style={{textAlign: 'right'}}>
                    <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
                </div>
            </div>
        );
    }

    const header = renderHeader();
    return (
        <>
    <div className="dataview-demo">
            <div className="card">
                <DataView value={listitems} layout={layout} header={header}
                        itemTemplate={itemTemplate} paginator rows={9}
                        sortOrder={sortOrder} sortField={sortField} />
            </div>
        </div>
        <Table toggle = {toggle}/>
        </>
    )
}

export default List
