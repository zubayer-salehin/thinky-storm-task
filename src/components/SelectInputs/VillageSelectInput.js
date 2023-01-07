import React, { useState } from 'react';

const VillageSelectInput = ({ villageProps }) => {

    const { selectVillage, setSelectVillage, selectZip } = villageProps;
    const [listShow, setListShow] = useState(false);

    return (
        <div className="single_select_input">
            <label className='single_select_input_label' htmlFor="streetAddress">Street Address/Village</label>
            <input onClick={() => setListShow(!listShow)} type="text" className='select_input' id='streetAddress' placeholder='Please Search' defaultValue={selectVillage?.name} disabled={!selectZip?.code ? true : false} readOnly />
            <i className={`uil uil-angle-down input-arrow ${listShow && "input-arrow-active"}`}></i>
            <div className="option-box-parent">
                {listShow &&
                    <div className="option-container">
                        <input onBlur={(e) => setSelectVillage({ name: e.target.value })} className='filter-input' type="text" defaultValue={selectVillage?.name} autoFocus/>
                        <div className='option-box'>
                            <p className='search-text'>Search for Select</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default VillageSelectInput;