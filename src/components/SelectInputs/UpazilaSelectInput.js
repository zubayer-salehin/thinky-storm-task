import React, { useEffect, useState } from 'react';

const UpazilaSelectInput = ({ upazilaProps }) => {

    const { selectUpazila, setSelectUpazila, selectDistrict, setSelectUnion } = upazilaProps;
    const [upazila, setUpazila] = useState([]);
    const [listShow, setListShow] = useState(false);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("upazilas.json")
            .then(res => res.json())
            .then(data => {
                const filterUpazilas = data.filter(d => Number(d.district_id) === Number(selectDistrict?.id))
                setUpazila(filterUpazilas);
                setLoading(false);
            })
    }, [selectDistrict])

    const handleFilter = (e) => {
        const filtervalue = upazila.filter(d => d.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilter(filtervalue);
    }

    const handleChoose = (singleUpazila) => {
        setSelectUpazila(singleUpazila);
        setSelectUnion(false)
        setFilter([])
        setListShow(false);
    }

    return (
        <div className="single_select_input">
            <label className='single_select_input_label' htmlFor="thana">City/Sub District/Thana</label>
            <input onClick={() => setListShow(!listShow)} type="text" onChange={() => setSelectUpazila(selectUpazila)} className='select_input' id='thana' placeholder='Please Search' defaultValue={selectUpazila?.name} disabled={!selectDistrict?.id ? true : false} readOnly />
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
                                        upazila.map(sc => <li key={Math.random() * 1000} onClick={() => handleChoose(sc)}>{sc.name}</li>)
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

export default UpazilaSelectInput;