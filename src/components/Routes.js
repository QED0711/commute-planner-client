
import React, {Component} from 'react';

import {Query} from 'react-apollo';
import {GET_ROUTES} from '../queries/queries';


class Routes extends Component {

    routeSelect(routes){
        return routes.map(route => {
            return <option key={route.id} data-id={route.id}>{route.origin} => {route.destination}</option>
        })
    }

    handleChange(setCurrentRoute){
        return () => {
            const route = document.getElementById("route-select")
            let selectedRoute = [...route.children].filter(r => {
                return r.value === route.value;
            })
            
            setCurrentRoute(selectedRoute[0].attributes[0].nodeValue)
        }
    }

    render(){
        
        return(

            <Query query={GET_ROUTES} >
            {
                ({data, loading}) => {
                    if(loading) return <h3>Loading Routes...</h3>
                    
                    return(
                        <div className="current-searches">
                            <select id="route-select" onChange={this.handleChange(this.props.setCurrentRoute)}>
                            <option>Select A Route</option>
                                {this.routeSelect(data.routes)}
                            </select>
                        </div>
                    )
                }
            }
            </Query>
        )
    }
}

export default Routes;