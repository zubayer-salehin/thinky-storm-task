import React, { useContext, useState } from 'react';
import { SHIPPING_CONTEXT } from '../Address/ShippingAddress';

const VillageSelectSInput = () => {

    const { selectSVillage, setSelectSVillage, selectSZip } = useContext(SHIPPING_CONTEXT);
    const [listShow, setListShow] = useState(false);

    return (
        <div className="single_select_input">
            <label className='single_select_input_label' htmlFor="streetAddress">Street Address/Village</label>
            <input onClick={() => setListShow(!listShow)} type="text" className='select_input' id='streetAddress' placeholder='Please Search' defaultValue={selectSVillage?.name} disabled={!selectSZip?.code ? true : false} readOnly />
            <i className={`uil uil-angle-down input-arrow ${listShow && "input-arrow-active"}`}></i>
            <div className="option-box-parent">
                {listShow &&
                    <div className="option-container">
                        <input onBlur={(e) => setSelectSVillage({ name: e.target.value })} className='filter-input' type="text" defaultValue={selectSVillage?.name} autoFocus />
                        <div className='option-box'>
                            <p className='search-text'>Search for Select</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default VillageSelectSInput;