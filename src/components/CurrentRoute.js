
import React, {Component} from 'react';

import {Query} from 'react-apollo';
import {GET_ROUTE} from '../queries/queries';


import RenderGraph from './RenderGraph';

import testData from '../js/testData';

class CurrentRoute extends Component {



    parseTimesData(data){
        let averaged;
        let maxTime = 0;
        let dataPoints = data.map((d, i) => {
            if(d === null){
                return {x: i, y: 0}
            }
            averaged = d.reduce((a,b) => a + b) / d.length
            if(averaged > maxTime) maxTime = averaged;
            return {x: i, y: averaged}
        })
        return {dataPoints, maxTime}
    }



    render(){
        // console.log(this.parseTimesData(testData()))
        const {routeID} = this.props
        if(routeID){
            return(
                <Query query={GET_ROUTE} variables={{id: routeID}}>
                    {
                        ({data, loading}) => {
                            console.log(data)
                            
                            if(loading) return <h3>Loading Route Data...</h3>

                            if(data.route){
                                const {route} = data;
                                // REPLACE TEST DATA WITH ACTUAL DATA
                                // const parsedData = this.parseTimesData(testData())
                                const parsedData = this.parseTimesData(route.times)
                                return(
                                    <div>
                                        <h3>{route.origin} | {route.destination}</h3>
                                        <RenderGraph parsedData={parsedData} />
                                    </div>
                                )
                            }
                        }
                    }
                </Query>
            )
        } else {
            return(<h3>No Route Data Available</h3>)
        }
    }
}

export default CurrentRoute;