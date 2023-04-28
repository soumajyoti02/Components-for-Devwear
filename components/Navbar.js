import Link from 'next/link';
import { useState, useEffect } from 'react';
// import styles from '../styles/Nav.module.css';


function Navbar() {
    const [active, setActive] = useState(false);
    const [dropdownToggle, setDropdownToggle] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > document.querySelector('nav').offsetHeight + 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleDropDown = () => {
        dropdownToggle ? setDropdownToggle(false) : setDropdownToggle(true)
        console.log("Drop")
    }

    return (
        <>
            <header className={`container ${active ? 'bg-[#fff] shadow-xl' : 'bg-[#222]'} sticky top-0 z-20 `}>
                <nav className={`navbar ${active ? 'active' : ''} z-20`}>
                    {/* Navigation content here */}
                    <div className="logo"><a href="#">DEVWEAR</a></div>
                    <ul className='links'>
                        <li><a href="#" className="active">TShirts</a></li>
                        <li><a href="#">Hoodies</a></li>
                        <li><a href="#">Mugs</a></li>
                        <li><a href="#">Stickers</a></li>
                    </ul>
                    <a href="#" className='action_btn '>Login</a>
                    <button className="toggle_btn mr-8" >
                        <input type="checkbox" id="checkbox" />
                        <label htmlFor="checkbox" className="toggle" onClick={handleDropDown}>
                            <div className="bars" id="bar1"></div>
                            <div className="bars" id="bar2"></div>
                            <div className="bars" id="bar3"></div>
                        </label>
                    </button>
                </nav>

                <div className={`dropdown_menu ${dropdownToggle === true ? 'open' : ''} z-30`}>
                    <li><a href="#" className="active">TShirts</a></li>
                    <li><a href="#">Hoodies</a></li>
                    <li><a href="#">Mugs</a></li>
                    <li><a href="#">Stickers</a></li>
                    <li><a href="#" className={`action_btn`}>Login</a></li>
                </div>
            </header>
        </>
    );
}

export default Navbar;

