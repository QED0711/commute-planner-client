import React, {Component} from 'react';
import {AreaChart} from 'react-easy-chart';

class RenderGraph extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentDataPoint: {x: null, y: null}
        }

        this.setCurrentDataPoint = this.setCurrentDataPoint.bind(this);
    }

    setCurrentDataPoint(dataPoint){
        this.setState({currentDataPoint: dataPoint})
    }

    mouseOverHandler(setCurrentDataPoint){
        return (d, e) => {
            setCurrentDataPoint(d)
        }
    }

    render(){
        const {parsedData} = this.props
        const {currentDataPoint} = this.state
        const timeOfDay = `${Math.floor(currentDataPoint.x/12)}:${currentDataPoint.x % 12}`
        const commuteTime = `${Math.floor(currentDataPoint.y/60)}:${Math.floor(currentDataPoint.y % 60)}`
        return(
            <div className="graph-box">
                <h3>Time of Day: {timeOfDay} | Commute Time: {commuteTime}</h3>
                <AreaChart 
                    axes
                    grid
                    dataPoints
                    mouseOverHandler={this.mouseOverHandler(this.setCurrentDataPoint)}
                    noAreaGradient
                    areaColors={['#00B2EE']}
                    xTicks={72}
                    xDomainRange={[0, 287]}
                    yDomainRange={[0, parsedData.maxTime + 10]}
                    margin={{top: 10, right: 10, bottom: 50, left: 50}}
                    axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
                    interpolate={'cardinal'}
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