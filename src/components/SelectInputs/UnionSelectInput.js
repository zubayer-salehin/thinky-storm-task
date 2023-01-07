import React, { useEffect, useState } from 'react';

const UnionSelectInput = ({ unionProps }) => {

    const { selectUnion, setSelectUnion, selectUpazila } = unionProps;
    const [union, setUnion] = useState([]);
    const [listShow, setListShow] = useState(false);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        fetch("unions.json")
            .then(res => res.json())
            .then(data => {
                const filterUnions = data.filter(d => Number(d.upazilla_id) === Number(selectUpazila?.id))
                setUnion(filterUnions);
            })
    }, [selectUpazila])

    const handleFilter = (e) => {
        const filtervalue = union.filter(d => d.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilter(filtervalue);
    }

    const handleChoose = (singleUnion) => {
        setSelectUnion(singleUnion);
        setFilter([])
        setListShow(false);
    }

    return (
        <div className="single_select_input">
            <label className='single_select_input_label' htmlFor="union">Union/Area/Town</label>
            <input onClick={() => setListShow(!listShow)} type="text" onChange={() => setSelectUnion(selectUnion)} className='select_input' id='union' placeholder='Please Search' defaultValue={selectUnion?.name} disabled={!selectUpazila?.id ? true : false} readOnly />
            <i className={`uil uil-angle-down input-arrow ${listShow && "input-arrow-active"}`}></i>
            <div className="option-box-parent">
                {listShow &&
                    <div className="option-container">
                        <input onChange={(e) => handleFilter(e)} className='filter-input' type="text" autoFocus/>
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

export default UnionSelectInput;