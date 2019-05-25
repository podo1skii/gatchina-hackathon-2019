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
            places: [{type:"museum", name: "ghbdrrgreg bbffbfb cbffbfbc"}]
         }
         this.onChangeStatus = this.onChangeStatus.bind(this)
    }

    onChangeStatus(){
        if (this.state.status === "down"){
            this.setState({status: "up"})
        }else{
            this.setState({status:"down"})
        }
    }

    render() { 
        return ( 
            <div>
                <div onClick={()=>{this.onChangeStatus()}} className={this.state.status === "down"? "tinder-card tinder-card-down": "tinder-card tinder-card-up"}>
                    <div className="tinder-card-header">
                        Информация
                    </div>
                    <img className={this.state.status === "down" ? "move-button move-button-up" : "move-button move-button-down"} src={arrowup}/>
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