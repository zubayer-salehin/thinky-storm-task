import React, { useContext, useEffect, useState } from 'react';
import { SHIPPING_CONTEXT } from '../Address/ShippingAddress';

const UnionSelectSInput = () => {

    const { selectSUnion, setSelectSUnion, selectSUpazila } = useContext(SHIPPING_CONTEXT);
    const [union, setUnion] = useState([]);
    const [listShow, setListShow] = useState(false);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        fetch("unions.json")
            .then(res => res.json())
            .then(data => {
                const filterUnions = data.filter(d => Number(d.upazilla_id) === Number(selectSUpazila?.id))
                setUnion(filterUnions);
            })
    }, [selectSUpazila])

    const handleFilter = (e) => {
        const filtervalue = union.filter(d => d.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilter(filtervalue);
    }

    const handleChoose = (singleUnion) => {
        setSelectSUnion(singleUnion);
        setFilter([])
        setListShow(false);
    }

    return (
        <div className="single_select_input">
            <label className='single_select_input_label' htmlFor="union">Union/Area/Town</label>
            <input onClick={() => setListShow(!listShow)} type="text" onChange={() => setSelectSUnion(selectSUnion)} className='select_input' id='union' placeholder='Please Search' defaultValue={selectSUnion?.name} disabled={!selectSUpazila?.id ? true : false} readOnly />
            <i className={`uil uil-angle-down input-arrow ${listShow && "input-arrow-active"}`}></i>
            <div className="option-box-parent">
                {listShow &&
                    <div className="option-container">
                        <input onChange={(e) => handleFilter(e)} className='filter-input' type="text" autoFocus />
                        <div className='option-box'>
                            <p className='search-text'>Search for Select</p>
                            <ul>
                                {filter.length ?
                                    filter.map(sd => <li key={Math.random() * 1000} onClick={() => handleChoose(sd)}>{sd.name}</li>)
                                    :
                                    union.map(sd => <li key={Math.random() * 1000} onClick={() => handleChoose(sd)}>{sd.name}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default UnionSelectSInput;