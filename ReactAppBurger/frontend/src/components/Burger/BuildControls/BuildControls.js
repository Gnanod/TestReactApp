import React from 'react';
import './BuildControls.css'
import BuildControl from "./BuildControl/BuildControl";


const controls =[
    {label :'Salad',type :'salad'},
    {label :'Bacon',type :'bacon'},
    {label :'Cheese',type :'cheese'},
    {label :'Meat',type :'meat'}
];



const buildControls = (props)=>(


    <div className="BuildControls">
        <p> Current Price :{props.price.toFixed(2)} </p>
        {controls.map( ctrl=>(
            <BuildControl
                key={ctrl.label}
                label={ctrl.label }
                added ={()=>props.ingredientAdd(ctrl.type)}
                remove ={()=>props.ingredientDeduction(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                price ={props.totalPrice}
            />
        ))}
        <button
            className="OrderButton"
            disabled ={!props.purchasable}
            onClick={props.ordered}> Order Now </button>
    </div>
);


export default buildControls;
