import "./Header.css";
import logoGradient from "../../imgs/logo_gradient.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Header = () => {

    const [searchInput, setSearchInput] = useState("");
    const headerRef = useRef();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 32.5) headerRef?.current?.classList?.add("scrolled");
            else headerRef?.current?.classList?.remove("scrolled");
        });
    }, []);
    

    return (
        <header ref={headerRef}>
            <div className="logo">
                <a href="#"><img src={logoGradient} alt="logo-image" /></a>
            </div>

            <div className="rest-items">

                
                <div className="item">
                    <a href="#what-is"><p>What's AdaptFit</p></a>
                </div>

                <div className="item">
                    <a href="#advantages"><p>Our advantages</p></a>
                </div>

                <div className="item">
                    <p>Models</p>
                </div>

                <div className="item">
                    <p>Testimonials</p>
                </div>

                <div className="search-bar">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    <input type="text" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
                </div>

                <div className="basket">
                    <FontAwesomeIcon icon={faBasketShopping} className="basket-icon" />
                </div>
           

                
            </div>
        </header>
    );
};

export default Header;