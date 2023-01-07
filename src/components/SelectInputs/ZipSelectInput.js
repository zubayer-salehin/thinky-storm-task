import React, { useState } from 'react';

const ZipSelectInput = ({ zipProps }) => {

    const { selectZip, setSelectZip, selectUnion } = zipProps;
    const [listShow, setListShow] = useState(false);


    return (
        <div className="single_select_input">
            <label className='single_select_input_label' htmlFor="zipcode">Zip Code</label>
            <input onClick={() => setListShow(!listShow)} type="text" className='select_input' id='zipcode' placeholder='Please Search' defaultValue={selectZip?.code} disabled={!selectUnion?.id ? true : false} readOnly />
            <i className={`uil uil-angle-down input-arrow ${listShow && "input-arrow-active"}`}></i>
            <div className="option-box-parent">
                {listShow &&
                    <div className="option-container">
                        <input onBlur={(e) => setSelectZip({ code: e.target.value })} className='filter-input' type="text" defaultValue={selectZip?.name} autoFocus/>
                        <div className='option-box'>
                            <p className='search-text'>Search for Select</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default ZipSelectInput;