import React, {Component} from 'react';

import {Mutation} from 'react-apollo';
import {RUN_ALL_COMMUTES} from '../queries/mutations';

class RunCommuteQueries extends Component {


    startQueryInterval(runAllCommutes){
        setInterval(() => {
            let d = new Date();
            let currentMinute = (d.getHours() * 60) + (d.getMinutes())
            console.log(currentMinute)
            currentMinute = currentMinute.toString()
            if(currentMinute % 5 === 0){
                runAllCommutes({variables: {currentMinute}})
            }
        }, 60000)
    }

    render(){
        return(
            <Mutation mutation={RUN_ALL_COMMUTES}>
                {
                    (runAllCommutes, {data}) => {
                        if(data){
                            console.log(data);
                        }
                        return(
                            <form className="run-commute-queries-form" onSubmit={e => {
                                e.preventDefault();
                                this.startQueryInterval(runAllCommutes);
                            }}>
                                <input type="submit" value="Run Commute Queries" />
                            </form>
                        )
                    }
                }
            </Mutation>
        )
    }
}

export default RunCommuteQueries;