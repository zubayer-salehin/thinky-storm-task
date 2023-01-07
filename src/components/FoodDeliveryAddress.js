import React from 'react';
import BillingAddress from './BillingAddress';
import ShippingAddress from './ShippingAddress';
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