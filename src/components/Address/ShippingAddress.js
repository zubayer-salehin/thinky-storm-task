import React, { createContext, useContext, useState } from 'react';
import { BILLING_CONTEXT } from '../FoodDeliveryAddress';
import CountrySelectSInput from '../ShippingAddressSelectInputs/CountrySelectSInput';
import DistrictSelectSInput from '../ShippingAddressSelectInputs/DistrictSelectSInput';
import DivisionSelectSInput from '../ShippingAddressSelectInputs/DivisionSelectSInput';
import UnionSelectSInput from '../ShippingAddressSelectInputs/UnionSelectSInput';
import UpazilaSelectSInput from '../ShippingAddressSelectInputs/UpazilaSelectSInput';
import VillageSelectSInput from '../ShippingAddressSelectInputs/VillageSelectSInput';
import ZipSelectSInput from '../ShippingAddressSelectInputs/ZipSelectSInput';


export const SHIPPING_CONTEXT = createContext();

const ShippingAddress = () => {

    const { selectBCountry, selectBDivision, selectBDistrict, selectBUpazila, selectBUnion, selectBZip, selectBVillage, bName, bHouse, bPhone, bFax } = useContext(BILLING_CONTEXT);

    const [selectSCountry, setSelectSCountry] = useState({});
    const [selectSDivision, setSelectSDivision] = useState({});
    const [selectSDistrict, setSelectSDistrict] = useState({});
    const [selectSUpazila, setSelectSUpazila] = useState({});
    const [selectSUnion, setSelectSUnion] = useState({});
    const [selectSZip, setSelectSZip] = useState({});
    const [selectSVillage, setSelectSVillage] = useState({});
    const [sName, setSName] = useState("");
    const [sHouse, setSHouse] = useState("");
    const [sPhone, setSPhone] = useState("");
    const [sFax, setSFax] = useState("");

    const values = { selectSCountry, setSelectSCountry, selectSDivision, setSelectSDivision, selectSDistrict, setSelectSDistrict, selectSUpazila, setSelectSUpazila, selectSUnion, setSelectSUnion, selectSZip, setSelectSZip, selectSVillage, setSelectSVillage }

    const copyBillingAddress = () => {
        setSelectSCountry(selectBCountry)
        setSelectSDivision(selectBDivision)
        setSelectSDistrict(selectBDistrict)
        setSelectSUpazila(selectBUpazila)
        setSelectSUnion(selectBUnion)
        setSelectSZip(selectBZip)
        setSelectSVillage(selectBVillage)
        setSName(bName)
        setSHouse(bHouse)
        setSPhone(bPhone)
        setSFax(bFax)
    }

    return (
        <div>
            <div className='shippingAddressTitle'>
                <h4 className='shippingAndBillingAddressText'>Shipping Address</h4>
                <div onClick={copyBillingAddress} className='billingAddressCopy'>
                    <i className="uil uil-arrow-down"></i>
                    <span>Copy Billing Address</span>
                </div>
            </div>
            <h4 className='attention_text'>Attention</h4>
            <div className="form_container">
                <input type="text" onBlur={(e) => setSName(e.target.value)} className='name_input' placeholder='Enter person/site name' defaultValue={sName}/>
                <SHIPPING_CONTEXT.Provider value={values}>
                    <div className="select_input_container">
                        {/* Country Select Input */}
                        <CountrySelectSInput />

                        {/* Division Select Input */}
                        <DivisionSelectSInput />

                        {/* District Select Input */}
                        <DistrictSelectSInput />

                        {/* Upazila Select Input */}
                        <UpazilaSelectSInput />

                        {/* Union Select Input */}
                        <UnionSelectSInput />

                        {/* Zipcode Select Input */}
                        <ZipSelectSInput />

                        {/* Zipcode Select Input */}
                        <VillageSelectSInput />
                    </div>
                </SHIPPING_CONTEXT.Provider>

                {/* House,Phone,Fax Input Field*/}
                <div>
                    <div className="single_input">
                        <label className='single_input_label' htmlFor="house">House/Suite/Apartment no</label>
                        <input type="text" onBlur={(e) => setSHouse(e.target.value)} className='other_input_address' id='house' defaultValue={sHouse}/>
                    </div>
                    <div className="single_input">
                        <label className='single_input_label' htmlFor="phone">Phone</label>
                        <input type="text" onBlur={(e) => setSPhone(e.target.value)} className='other_input_address' id='phone' defaultValue={sPhone}/>
                    </div>
                    <div className="single_input">
                        <label className='single_input_label' htmlFor="fax">Fax</label>
                        <input type="text" onBlur={(e) => setSFax(e.target.value)} className='other_input_address' id='fax' defaultValue={sFax}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShippingAddress;