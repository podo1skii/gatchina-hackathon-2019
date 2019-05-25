import React from 'react';

import Card from './Card';
import { isTemplateElement } from '@babel/types';





class TinderCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            routes: [1,2,3,4]
         }
         this.onRemoveCard = this.onRemoveCard.bind(this)
    }

    onRemoveCard(){
        let routes = this.state.routes;
        routes.shift();
        this.setState({routes: routes})
        console.log();
        
        
    }

    render() { 
        console.log('prerender');
        console.log(this.state.routes);
        
        return ( 
            <>
            {this.state.routes.length === 4 && <Card id={this.state.routes[0]} onRemoveCard={this.onRemoveCard} />}
            {this.state.routes.length === 3 && <Card id={this.state.routes[0]} onRemoveCard={this.onRemoveCard} />}
            {this.state.routes.length === 2 && <Card id={this.state.routes[0]} onRemoveCard={this.onRemoveCard} />}
            {this.state.routes.length === 1 && <Card id={this.state.routes[0]} onRemoveCard={this.onRemoveCard} />}
            </>
        );
    }
}
 
export default TinderCard;