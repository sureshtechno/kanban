import React, { useState } from "react";
import './header.css';
import logo from '../../logo.svg';
import { FiPlus } from "react-icons/fi";
import { FiGift } from "react-icons/fi";
import { Get } from "../../Api/Api";

const Header = () => {

    const [search, setSearch] = useState('');

    console.log(search);
    const getString = (evt) => {
        setSearch(evt.target.value);
        fetchApi(evt.target.value);
    }


    function fetchApi(data) {
        Get(search);
    }

    return (
        <>
            <header>
                <div className="header-section">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="logo-part">
                                <img src={logo} width="80px" alt="logo"></img>
                                <span>Kanban</span>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="row">
                                <div className="col-md-4">
                                    <input className="form-control border-0 border-bottom custom-height" type="search" value={search} placeholder="search" id="example-search-input" onChange={getString}></input>
                                </div>
                                <div className="col-md-4">
                                    <div className="border-rights text-center">
                                        <button className="btn btn-add"><FiPlus /> Add New</button>
                                    </div>
                                </div>
                                <div className="col-md-1">
                                    <div className="icon-button text-center mt-2">
                                        <span><FiGift /></span>
                                        <span className="icon-button__badge">2</span>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="profile">
                                        <p>S</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header;