import React from "react";
const Header = () => {

return (
<div className='header'>
    <div className="container">
        <div className="header_inner">
            <div className="header__logo">
                <img className="tutu" src={require("../img/rose.jpg")} alt="spy"/>
            </div>
            <div className="nav">
                <a className="nav__link" href='#'>
                    spooky
                </a>
                <a className="nav__link" href='#'>
                    scary
                </a>
                <a className="nav__link" href='#'>
                    skeletons
                </a>
                <a className="nav__link" href='#'>
                    Send shivers
                </a>
                <a className="nav__link" href='#'>
                    down your spine
                </a>

            </div>
        </div>
    </div>
</div>
);}
export default Header;