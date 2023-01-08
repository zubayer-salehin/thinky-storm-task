import React, { useContext, useState } from 'react';
import { BILLING_CONTEXT } from '../FoodDeliveryAddress';

const ZipSelectBInput = () => {

    const { selectBZip, setSelectBZip, selectBUnion } = useContext(BILLING_CONTEXT);
    const [listShow, setListShow] = useState(false);


    return (
        <div className="single_select_input">
            <label className='single_select_input_label' htmlFor="zipcode">Zip Code</label>
            <input onClick={() => setListShow(!listShow)} type="text" className='select_input' id='zipcode' placeholder='Please Search' defaultValue={selectBZip?.code} disabled={!selectBUnion?.id ? true : false} readOnly />
            <i className={`uil uil-angle-down input-arrow ${listShow && "input-arrow-active"}`}></i>
            <div className="option-box-parent">
                {listShow &&
                    <div className="option-container">
                        <input onBlur={(e) => setSelectBZip({ code: e.target.value })} className='filter-input' type="text" defaultValue={selectBZip?.name} autoFocus/>
                        <div className='option-box'>
                            <p className='search-text'>Search for Select</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default ZipSelectBInput;