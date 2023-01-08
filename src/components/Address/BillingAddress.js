import React from 'react';
import CountrySelectBInput from '../BillingAddressSelectInputs/CountrySelectBInput';
import DistrictSelectBInput from '../BillingAddressSelectInputs/DistrictSelectBInput';
import DivisionSelectBInput from '../BillingAddressSelectInputs/DivisionSelectBInput';
import UnionSelectBInput from '../BillingAddressSelectInputs/UnionSelectBInput';
import UpazilaSelectBInput from '../BillingAddressSelectInputs/UpazilaSelectBInput';
import VillageSelectBInput from '../BillingAddressSelectInputs/VillageSelectBInput';
import ZipSelectBInput from '../BillingAddressSelectInputs/ZipSelectBInput';

const BillingAddress = () => {

    return (
        <div>
            <h4 className='shippingAndBillingAddressText'>Billing Address</h4>
            <h4 className='attention_text'>Attention</h4>
            <div className="form_container">
                <input type="text" className='name_input' placeholder='Enter person/site name' />
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
                        <input type="text" className='other_input_address' id='house' />
                    </div>
                    <div className="single_input">
                        <label className='single_input_label' htmlFor="phone">Phone</label>
                        <input type="text" className='other_input_address' id='phone' />
                    </div>
                    <div className="single_input">
                        <label className='single_input_label' htmlFor="fax">Fax</label>
                        <input type="text" className='other_input_address' id='fax' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillingAddress;