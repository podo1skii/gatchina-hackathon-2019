import React from 'react';
import {Link} from 'react-router-dom';
import './DurationPage.css';


class DurationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: 0
         }
    
    }
    change(e){
        console.log(e);
        
        this.setState({value: e})
    }

    render() { 
        return ( 
            <div className="start-page start-page_change-color">
                <div className="header-text text text_bold">
                    Сколько времени планируете потратить?
                </div>
                <div className="header-text text small-text">
                Мы постараемся учесть всё.
                </div>
                <input className="slider" type="range" min="0" max="120" step="1" defaultValue="120" onChange={(e)=>{this.setState({value: 120 - e.target.value});
                }}/>
                <div className="slider-value" >
                    {this.state.value}<br/><span>мин</span>
                </div>
                <div className="button accept-button">
                    <Link className="link" to={{ pathname: '/map' }}>Выбрать</Link>
                </div>
            </div>
         );
    }
}
 
export default DurationPage;