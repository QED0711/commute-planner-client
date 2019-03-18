import React, {Component} from 'react';

import {Mutation} from 'react-apollo';
import {NEW_ROUTE} from '../queries/mutations';


class NewRouteForm extends Component {
    


    render(){
        return(
            <Mutation mutation={NEW_ROUTE} >
                {
                    (newRoute, {data}) => {
                        if(data){
                            console.log(data)
                        }
                        
                        return(
                            <form classNme="new-route-form" onSubmit={e => {
                                e.preventDefault()
                                console.log("submitted")
                            }}>
                                <h2>Define A New Route</h2>
                                <label for="new-route-origin">Origin</label><br/>
                                <input type="text" id="new-route-origin"/><br/>
                                
                                <label for="new-route-destination">Destination</label><br/>
                                <input type="text" id="new-route-destination"/><br/>
        
                                <input type="submit" value="Create Route"/>
                            </form>
                        )
                    }
                }
            </Mutation>
        )

    }
}

export default NewRouteForm