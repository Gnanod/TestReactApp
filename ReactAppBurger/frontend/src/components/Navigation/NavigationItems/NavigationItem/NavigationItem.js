import React from 'react';
import classes from './NavigationItem.css'

const navItem =(props)=>(

    <li className="NavigationItem"><a href={props.link} className={props.active ? classes.active :null}>{props.children}</a></li>

);

export default navItem;
