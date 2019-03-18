import React, {Component} from 'react';

import {Mutation} from 'react-apollo';

class RunCommuteQueries extends Component {


    startQueryInterval(){
        setInterval(() => {
            let d = new Date();
            let currentMinute = (d.getHours() * 60) + (d.getMinutes())
            console.log(currentMinute)
        }, 1000)
    }

    render(){
        return(
            <div className="run-commute-queries-buttons">
                <button onClick={this.startQueryInterval}>Run Commute Queries</button>
            </div>
        )
    }
}

export default RunCommuteQueries;