import React from "react";
import './sidenav.css'
import logo from '../../logo.svg';
import { FiHome, FiBriefcase, FiAperture, FiUsers, FiSettings } from "react-icons/fi";


const SideNav = () => {



    return (
        <>
            <aside>
                <nav className="side-nav-menu">
                    <div className="nav-header">
                        <figure className="text-center border-bottom">
                            <img className="mb-2 mt-2" src={logo} alt="logo" width="80px" />
                        </figure>
                    </div>
                    <ul className="p-0 text-center">
                        <li className="side-menu mb-4" data-toggle="tooltip" data-placement="top" title="API Call"><a href="/dashboard"><FiAperture /></a></li>
                        <li className="side-menu  mb-4" data-toggle="tooltip" data-placement="top" title=""><FiHome /></li>
                        <li className="side-menu active mb-4" data-toggle="tooltip" data-placement="top" title="Drag & Drop"><a href="/"><FiBriefcase /></a></li>
                        <li className="side-menu  mb-4" data-toggle="tooltip" data-placement="top" title=""><FiUsers /></li>
                        <li className="side-menu  mb-4" data-toggle="tooltip" data-placement="top" title="Settings"><a href="/settings"><FiSettings /></a></li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default SideNav;