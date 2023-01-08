import React, { useContext, useEffect, useState } from 'react';
import { BILLING_CONTEXT } from '../FoodDeliveryAddress';

const DistrictSelectBInput = () => {

    const { selectBDistrict, setSelectBDistrict, selectBDivision, setSelectBUpazila } = useContext(BILLING_CONTEXT);
    const [district, setDistrict] = useState([]);
    const [listShow, setListShow] = useState(false);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("districts.json")
            .then(res => res.json())
            .then(data => {
                const filterDistrict = data.filter(d => Number(d.division_id) === Number(selectBDivision?.id))
                setDistrict(filterDistrict);
                setLoading(false);
            })
    }, [selectBDivision])

    const handleFilter = (e) => {
        const filtervalue = district.filter(d => d.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilter(filtervalue);
    }

    const handleChoose = (singleDistrict) => {
        setSelectBDistrict(singleDistrict);
        setSelectBUpazila(null)
        setFilter([])
        setListShow(false);
    }

    return (
        <div className="single_select_input">
            <label className='single_select_input_label' htmlFor="district">District</label>
            <input onClick={() => setListShow(!listShow)} type="text" onChange={() => setSelectBDistrict(selectBDistrict)} className='select_input' id='district' placeholder='Please Search' defaultValue={selectBDistrict?.name} disabled={!selectBDivision?.id ? true : false} readOnly />
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
                                        district.map(sc => <li key={Math.random() * 1000} onClick={() => handleChoose(sc)}>{sc.name}</li>)
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

export default DistrictSelectBInput;