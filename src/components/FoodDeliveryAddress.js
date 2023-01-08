import React, { createContext, useState } from 'react';
import BillingAddress from './Address/BillingAddress';
import ShippingAddress from './Address/ShippingAddress';
import "./Main.css";


export const BILLING_CONTEXT = createContext();

const FoodDeliveryAddress = () => {

    const [selectBCountry, setSelectBCountry] = useState({});
    const [selectBDivision, setSelectBDivision] = useState({});
    const [selectBDistrict, setSelectBDistrict] = useState({});
    const [selectBUpazila, setSelectBUpazila] = useState({});
    const [selectBUnion, setSelectBUnion] = useState({});
    const [selectBZip, setSelectBZip] = useState({});
    const [selectBVillage, setSelectBVillage] = useState({});

    const values = { selectBCountry, setSelectBCountry, selectBDivision, setSelectBDivision, selectBDistrict, setSelectBDistrict, selectBUpazila, setSelectBUpazila, selectBUnion, setSelectBUnion, selectBZip, setSelectBZip, selectBVillage, setSelectBVillage }

    return (
        <BILLING_CONTEXT.Provider value={values}>
            <div className="container">
                <div className='FoodDeliveryAddress'>
                    <BillingAddress />
                    <ShippingAddress />
                </div>
            </div>
        </BILLING_CONTEXT.Provider>
    );
};

export default FoodDeliveryAddress;