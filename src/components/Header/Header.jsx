import React, { useContext } from "react";
import './header.css';
import logo from '../../logo.svg';
import { FiPlus, FiGift } from "react-icons/fi";
import { AllContext } from '../context/SearchContext'

const Header = () => {

    const { searchText, search } = useContext(AllContext);

    const getString = (evt) => {
        console.log({ evt })
        search(evt.target.value)
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
                                    <input className="form-control border-0 border-bottom custom-height" type="search" value={searchText} placeholder="search" id="example-search-input" onChange={getString}></input>
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