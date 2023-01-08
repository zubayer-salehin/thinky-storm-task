import React, { useContext } from 'react';
import CountrySelectBInput from '../BillingAddressSelectInputs/CountrySelectBInput';
import DistrictSelectBInput from '../BillingAddressSelectInputs/DistrictSelectBInput';
import DivisionSelectBInput from '../BillingAddressSelectInputs/DivisionSelectBInput';
import UnionSelectBInput from '../BillingAddressSelectInputs/UnionSelectBInput';
import UpazilaSelectBInput from '../BillingAddressSelectInputs/UpazilaSelectBInput';
import VillageSelectBInput from '../BillingAddressSelectInputs/VillageSelectBInput';
import ZipSelectBInput from '../BillingAddressSelectInputs/ZipSelectBInput';
import { BILLING_CONTEXT } from '../FoodDeliveryAddress';

const BillingAddress = () => {

    const { bName, setBName, bHouse, setBHouse, bPhone, setBPhone, bFax, setBFax } = useContext(BILLING_CONTEXT);

    return (
        <div>
            <h4 className='shippingAndBillingAddressText'>Billing Address</h4>
            <h4 className='attention_text'>Attention</h4>
            <div className="form_container">
                <input type="text" onBlur={(e) => setBName(e.target.value)} className='name_input' placeholder='Enter person/site name' defaultValue={bName} />
                <div className="select_input_container">

                    {/* Country Select Input */}
                    <CountrySelectBInput />

                    {/* Division Select Input */}
                    <DivisionSelectBInput />

                    {/* District Select Input */}
                    <DistrictSelectBInput />

                    {/* Upazila Select Input */}
                    <UpazilaSelectBInput />

                    {/* Union Select Input */}
                    <UnionSelectBInput />

                    {/* Zipcode Select Input */}
                    <ZipSelectBInput />

                    {/* Zipcode Select Input */}
                    <VillageSelectBInput />

                </div>

                {/* House,Phone,Fax Input Field*/}
                <div>
                    <div className="single_input">
                        <label className='single_input_label' htmlFor="house">House/Suite/Apartment no</label>
                        <input type="text" onBlur={(e) => setBHouse(e.target.value)} className='other_input_address' id='house' defaultValue={bHouse} />
                    </div>
                    <div className="single_input">
                        <label className='single_input_label' htmlFor="phone">Phone</label>
                        <input type="text" onBlur={(e) => setBPhone(e.target.value)} className='other_input_address' id='phone' defaultValue={bPhone} />
                    </div>
                    <div className="single_input">
                        <label className='single_input_label' htmlFor="fax">Fax</label>
                        <input type="text" onBlur={(e) => setBFax(e.target.value)} className='other_input_address' id='fax' defaultValue={bFax} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillingAddress;