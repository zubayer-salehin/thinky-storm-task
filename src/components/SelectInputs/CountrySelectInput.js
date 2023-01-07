import React, { useEffect, useState } from 'react';

const CountrySelectInput = ({ countryProps }) => {

    const { selectCountry, setSelectCountry, setSelectDivision } = countryProps;
    const [country, setCountry] = useState([]);
    const [listShow, setListShow] = useState(false);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("countrys.json")
            .then(res => res.json())
            .then(data => {
                setCountry(data)
                setLoading(false);
            })
    }, [])

    const handleFilter = (e) => {
        const filtervalue = country.filter(c => c.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilter(filtervalue);
    }

    const handleChoose = (singleCountry) => {
        setSelectCountry(singleCountry);
        setSelectDivision(null);
        setFilter([])
        setListShow(false);
    }

    return (
        <div className="single_select_input">
            <label className='single_select_input_label' htmlFor="country">Country</label>
            <input onClick={() => setListShow(!listShow)} type="text" onChange={() => setSelectCountry(selectCountry)} className='select_input' id='country' placeholder='Please Search' defaultValue={selectCountry?.name} readOnly />
            <i className={`uil uil-angle-down input-arrow ${listShow && "input-arrow-active"}`}></i>
            <div className="option-box-parent">
                {listShow &&
                    // Country Options Box
                    <div className="option-container">
                        {/* Country Search Box */}
                        <input onChange={(e) => handleFilter(e)} className='filter-input' type="text" autoFocus />
                        {loading ? <p className='loading-text'>Loading...</p> :
                            <div className='option-box'>
                                <p className='search-text'>Search for Select</p>
                                <ul>
                                    {/* Country Options */}
                                    {filter.length ?
                                        filter.map(sc => <li key={Math.random() * 1000} onClick={() => handleChoose(sc)}>{sc.name}</li>)
                                        :
                                        country.map(sc => <li key={Math.random() * 1000} onClick={() => handleChoose(sc)}>{sc.name}</li>)
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

export default CountrySelectInput;