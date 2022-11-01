import React from "react";
const Header = () => {

return (
<div className='header'>
    <div className="container">
        <div className="header_inner">
            <div className="header__logo">
                <img className="tutu" src={require("../../assets/img/rose.jpg")} alt="spy"/>
            </div>
            <div className="nav">
                <a className="nav__link" href='src/components/Header/Header#'>
                    spooky
                </a>
                <a className="nav__link" href='src/components/Header/Header#'>
                    scary
                </a>
                <a className="nav__link" href='src/components/Header/Header#'>
                    skeletons
                </a>
                <a className="nav__link" href='src/components/Header/Header#'>
                    Send shivers
                </a>
                <a className="nav__link" href='src/components/Header/Header#'>
                    down your spine
                </a>

            </div>
        </div>
    </div>
</div>
);}
export default Header;