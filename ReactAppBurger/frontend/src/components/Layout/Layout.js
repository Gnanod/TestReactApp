import React from 'react';
import Auxi from '../../hoc/Auxi';
import './Layout.css'
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = (props) => (

    <Auxi>
        <Toolbar/>
        <SideDrawer/>
        <main className="content">
            {props.children}
        </main>
    </Auxi>

);

export default layout;
