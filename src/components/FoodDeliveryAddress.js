import React from 'react';
import BillingAddress from './Address/BillingAddress';
import ShippingAddress from './Address/ShippingAddress';
import "./Main.css";

const FoodDeliveryAddress = () => {
    return (
        <div className='FoodDeliveryAddress-container'>
            <BillingAddress />
            <ShippingAddress />
        </div>
    );
};

export default FoodDeliveryAddress;