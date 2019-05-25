import React, { Component } from 'react';
import './Card.css';
import arrowup from "../Images/up-arrow.svg"; 


import museum from '../Images/bank.svg';
import monument from '../Images/greek-column.svg';
import { getTypeOfPlace } from '../API';


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            status: "down",
            places: [{type:"museum", name: "ghbdrrgreg bbffbfb cbffbfbc"}],
            moveButton: "move-button-new",
            moveTinder: "tinder-card-new"
         }
         this.onChangeStatus = this.onChangeStatus.bind(this)
    }

    onChangeStatus(){
        console.log(this);
        
        if (this.state.status === "down"){
            this.setState({status: "up", moveButton: "move-button-down", moveTinder:"tinder-card-up"})
        }else{
            this.setState({status:"down", moveButton: "move-button-up", moveTinder:"tinder-card-down"})
        }
    }

    render() { 
        return ( 
            <div>
                <div onTouchMove={(e)=>console.log(e.value)} onTouchMove={(e)=>console.log(e.targetTouches, e.changedTouches, e.touches)} onClick={()=>{this.onChangeStatus()}} className={"tinder-card "+this.state.moveTinder}>
                    <div className="tinder-card-header">
                        Информация
                    </div>
                    <img className={"move-button "+this.state.moveButton} src={arrowup}/>
                    <div className="line"></div>
                    <div className="scrolling">
                        {this.state.places.map((item)=>
                            <div className="place-info">
                                <img className={"typeof-place "+item.type} src={getTypeOfPlace(item.type)}></img>
                                <div className="nameof-place">{item.name}</div>
                                <div></div>
                                <div className="desc-place">{item.description}</div>
                            </div> 
                        ) }
                    </div>
                    
                </div>
                
            </div>
            
         );
    }
}
 
export default Card;