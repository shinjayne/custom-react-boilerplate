import React, {Component} from 'react';

class Clock extends Component{
    //Override Constructor to set state
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };

        this.tick = this.tick.bind(this);
    }
    //Life Cycle
    //LC-1 : runs after Component Rendered
    componentDidMount(){
        this.timerID = setInterval(
            this.tick, 1000
        );
    }
    //LC-2 : runs after Component Removed
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    //Custom function : tick
    tick() {
        this.setState({
            date : new Date()
        });
    }

    // Render function
    render(){
        return (
            <div>
                <h1>Clock !</h1>
                <h3>I`ll tell you the time. The time is ... </h3>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock;