import React, { useState } from 'react';
import CountrySelectInput from '../SelectInputs/CountrySelectInput';
import DistrictSelectInput from '../SelectInputs/DistrictSelectInput';
import DivisionSelectInput from '../SelectInputs/DivisionSelectInput';
import UnionSelectInput from '../SelectInputs/UnionSelectInput';
import UpazilaSelectInput from '../SelectInputs/UpazilaSelectInput';
import VillageSelectInput from '../SelectInputs/VillageSelectInput';
import ZipSelectInput from '../SelectInputs/ZipSelectInput';

const BillingAddress = () => {

    const [selectCountry, setSelectCountry] = useState({});
    const [selectDivision, setSelectDivision] = useState({});
    const [selectDistrict, setSelectDistrict] = useState({});
    const [selectUpazila, setSelectUpazila] = useState({});
    const [selectUnion, setSelectUnion] = useState({});
    const [selectZip, setSelectZip] = useState({});
    const [selectVillage, setSelectVillage] = useState({});

    return (
        <div>
            <h4 className='shippingAndBillingAddressText'>Billing Address</h4>
            <h4 className='attention_text'>Attention</h4>
            <div className="form_container">
                <input type="text" className='name_input' placeholder='Enter person/site name' />
                <div className="select_input_container">

                    {/* Country Select Input */}
                    <CountrySelectInput countryProps={{ selectCountry, setSelectCountry, setSelectDivision }} />

                    {/* Division Select Input */}
                    <DivisionSelectInput divisionProps={{ selectDivision, setSelectDivision, selectCountry, setSelectDistrict }} />

                    {/* District Select Input */}
                    <DistrictSelectInput districtProps={{ selectDistrict, setSelectDistrict, selectDivision, setSelectUpazila }} />

                    {/* Upazila Select Input */}
                    <UpazilaSelectInput upazilaProps={{ selectUpazila, setSelectUpazila, selectDistrict, setSelectUnion }} />

                    {/* Union Select Input */}
                    <UnionSelectInput unionProps={{ selectUnion, setSelectUnion, selectUpazila }} />

                    {/* Zipcode Select Input */}
                    <ZipSelectInput zipProps={{ selectZip, setSelectZip, selectUnion }} />

                    {/* Zipcode Select Input */}
                    <VillageSelectInput villageProps={{ selectVillage, setSelectVillage, selectZip }} />

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