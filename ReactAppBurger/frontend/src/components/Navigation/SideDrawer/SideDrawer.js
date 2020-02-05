import React from 'react';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import './SideDrawer.css'
import Auxi from "../../../hoc/Auxi";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {

    return (
        <Auxi>
            <Backdrop show/>
            <div className="SideDrawer">
                <div className="LogoSide">
                    <Logo/>
                </div>

                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Auxi>
    );
}

export default sideDrawer;
