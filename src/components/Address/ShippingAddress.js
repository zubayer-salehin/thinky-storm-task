import React from 'react';

const ShippingAddress = () => {
    return (
        <div>
            <h4 className='shippingAndBillingAddressText'>Shipping Address</h4>
            <h4 className='attention_text'>Attention</h4>
            <div className="form_container">
                <input type="text" className='name_input' placeholder='Enter person/site name' />
                <div className="select_input_container">
                    <div className="single_select_input">
                        <label className='single_select_input_label' htmlFor="country">Country</label>
                        <input type="text" className='select_input' id='country' placeholder='Please Search' />
                    </div>
                    <div className="single_select_input">
                        <label className='single_select_input_label' htmlFor="devision">Devision/Province/State</label>
                        <input type="text" className='select_input' id='devision' placeholder='Please Search' />
                    </div>
                    <div className="single_select_input">
                        <label className='single_select_input_label' htmlFor="district">District</label>
                        <input type="text" className='select_input' id='district' placeholder='Please Search' />
                    </div>
                    <div className="single_select_input">
                        <label className='single_select_input_label' htmlFor="thana">City/Sub District/Thana</label>
                        <input type="text" className='select_input' id='thana' placeholder='Please Search' />
                    </div>
                    <div className="single_select_input">
                        <label className='single_select_input_label' htmlFor="union">Union/Area/Town</label>
                        <input type="text" className='select_input' id='union' placeholder='Please Search' />
                    </div>
                    <div className="single_select_input">
                        <label className='single_select_input_label' htmlFor="zipcode">Zip Code</label>
                        <input type="text" className='select_input' id='zipcode' placeholder='Please Search' />
                    </div>
                    <div className="single_select_input">
                        <label className='single_select_input_label' htmlFor="streetAddress">Street Address/Village</label>
                        <input type="text" className='select_input' id='streetAddress' placeholder='Please Search' />
                    </div>
                </div>
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

export default ShippingAddress;