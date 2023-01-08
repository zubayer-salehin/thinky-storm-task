import React, { useContext, useEffect, useState } from 'react';
import { SHIPPING_CONTEXT } from '../Address/ShippingAddress';

const DivisionSelectSInput = () => {

    const {selectSDivision, setSelectSDivision, selectSCountry, setSelectSDistrict} = useContext(SHIPPING_CONTEXT);
    const [division, setDivision] = useState([]);
    const [listShow, setListShow] = useState(false);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("divisions.json")
            .then(res => res.json())
            .then(data => {
                if (selectSCountry?.id === data.country_id) {
                    setDivision(data?.divisions)
                }
                setLoading(false);
            })
    }, [selectSCountry])

    const handleFilter = (e) => {
        const filtervalue = division.filter(d => d.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilter(filtervalue);
    }

    const handleChoose = (singleDivision) => {
        setSelectSDivision(singleDivision);
        setSelectSDistrict(null);
        setFilter([])
        setListShow(false);
    }

    return (
        <div className="single_select_input">
            <label className='single_select_input_label' htmlFor="devision">Devision/Province/State</label>
            <input onClick={() => setListShow(!listShow)} type="text" onChange={() => setSelectSDivision(selectSDivision)} className='select_input' id='devision' placeholder='Please Search' defaultValue={selectSDivision?.name} disabled={!selectSCountry?.id ? true : false} readOnly />
            <i className={`uil uil-angle-down input-arrow ${listShow && "input-arrow-active"}`}></i>
            <div className="option-box-parent">
                {listShow &&
                    <div className="option-container">
                        <input onChange={(e) => handleFilter(e)} className='filter-input' type="text" autoFocus />
                        {loading ? <p className='loading-text'>Loading...</p> :
                            <div className='option-box'>
                                <p className='search-text'>Search for Select</p>
                                <ul>
                                    {filter.length ?
                                        filter.map(sc => <li key={Math.random() * 1000} onClick={() => handleChoose(sc)}>{sc.name}</li>)
                                        :
                                        division.map(sc => <li key={Math.random() * 1000} onClick={() => handleChoose(sc)}>{sc.name}</li>)
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default DivisionSelectSInput;