import React, {Component} from 'react';
import {AreaChart} from 'react-easy-chart';

class RenderGraph extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentDataPoint: {x: null, y: null},
            showDataPoints: false,
        }

        this.setCurrentDataPoint = this.setCurrentDataPoint.bind(this);
        this.handleToggleDataPoints = this.handleToggleDataPoints.bind(this);
    }

    setCurrentDataPoint(dataPoint){
        this.setState({currentDataPoint: dataPoint})
    }

    mouseOverHandler(setCurrentDataPoint){
        return (d, e) => {
            setCurrentDataPoint(d)
        }
    }

    handleToggleDataPoints(){
        const dataPointsButton = document.getElementById("toggle-datapoints");

        if(dataPointsButton.innerText === "Show Data Points"){
            dataPointsButton.innerText = "Hide Data Points"
        } else {
            dataPointsButton.innerText = "Show Data Points"
        }

        const showDataPoints = !this.state.showDataPoints;
        this.setState({showDataPoints})
    }

    render(){
        const {parsedData} = this.props
        const {currentDataPoint} = this.state
        const timeOfDay = `${Math.floor(((currentDataPoint.x) * 5) / 60)}:${((currentDataPoint.x) * 5) % 60}` 
        const commuteTime = `${Math.floor(currentDataPoint.y/60)}:${Math.floor(currentDataPoint.y % 60)}`
        return(
            <div className="graph-box">
                <button id="toggle-datapoints" onClick={this.handleToggleDataPoints}>Show Data Points</button>
                <h3>Time of Day: {timeOfDay} | Commute Time: {commuteTime}</h3>
                <AreaChart 
                    axes
                    grid
                    dataPoints={this.state.showDataPoints}
                    mouseOverHandler={this.mouseOverHandler(this.setCurrentDataPoint)}
                    noAreaGradient
                    areaColors={['#00B2EE']}
                    xTicks={72}
                    xDomainRange={[0, 287]}
                    yDomainRange={[0, parsedData.maxTime + 10]}
                    margin={{top: 10, right: 10, bottom: 50, left: 50}}
                    axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
                    height={500}
                    width={1500}
                    data={[
                        parsedData.dataPoints
                    ]}
                />
                
            </div>
        )
    }
}

export default RenderGraph;