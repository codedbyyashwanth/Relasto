import { Suspense, useState } from "react"
import { NavLink } from "react-router-dom"
import Fallback from "../../pages/others/Fallback"
import { IoSearch } from "react-icons/io5"
import { RiMenu3Fill, RiCloseFill  } from "react-icons/ri"

const Navbar = () => {
    const navItems = [
        ["Home", "/"],
        ["About", "/about"],
        ["Properties", "/properties"],
        ["Agents", "/agents"],
        ["Article", "/blogs"],
    ];

    const [open, openMenu] = useState<boolean>(false);


    return (
        <Suspense fallback={<Fallback />}>
            <nav>
                <div className="container">
                    <div className="flex justify-between items-center py-4 ">
                        <div className="logo_container">
                            <img src="/logo.svg" alt="Logo" />
                        </div>

                        <div className="nav_items space-x-8 md:hidden">
                            {
                                navItems.map((data, index) => (
                                    <NavLink 
                                    className="font-semibold hover:text-accent-color motion"
                                    style={
                                        ({isActive}) => {
                                            return {
                                                color: isActive ? "#FD650B" : ""
                                            }
                                        }
                                    }
                                    key={index} to={data[1]}>{data[0]}</NavLink>
                                ))
                            }
                        </div>

                        <div 
                            className="mobile_nav_items hidden fixed top-0 left-0 right-0 h-screen p-10 bg-accent-color z-[1000]"
                            style={{
                                display: open ? "block" : "none"
                            }}
                            >
                                
                            <RiCloseFill className=" absolute top-5 right-5 text-3xl text-white z-10" onClick={() => openMenu(false)} />
                            <div className="wrapper space-y-8 text-center">
                                {
                                    navItems.map((data, index) => (
                                        <NavLink 
                                        className="block font-semibold text-white motion text-xl hover:text-gray-200"
                                        style={
                                            ({isActive}) => {
                                                return {
                                                    color: isActive ? "" : ""
                                                }
                                            }
                                        }
                                        key={index} to={data[1]}>{data[0]}</NavLink>
                                    ))
                                }
                                <NavLink to="login" className="btn-primary block py-4 text-lg font-medium">Sign In</NavLink>
                            </div>
                        </div>

                        <div className="access_container flex items-center">
                            <div className="search_container flex items-center cursor-pointer group/search">
                                <IoSearch className="text-lg mt-0.5 mr-0.5 group-hover/search:text-accent-color motion" />
                                <span className="font-bold text-gray-600 mr-6 md:mr-4 outline-none border-none text-md group-hover/search:text-accent-color motion">Search</span>
                            </div>
                            <NavLink to="login" className="btn-primary md:hidden">Sign In</NavLink>
                            <RiMenu3Fill className="text-3xl font-bold hidden md:block" onClick={() => openMenu(true)} />
                        </div>
                    </div>
                </div>
            </nav>
        </Suspense>
    )
}

export default Navbar