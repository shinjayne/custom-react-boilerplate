import React, {Component} from 'react';

class Bitcoin extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }


    componentDidMount(){
        fetch("https://blockchain.info/ticker")
            .then(result => result.json())
            .then((result) => {
                this.setState(result.USD);
            },
                (error) => {
                this.setState({
                    isLoaded:true,
                    error:error
                })
                })
    }

    render(){
        return (
            <div>
                <h1>BitCoin USD</h1>
                <div>Buy : $ {this.state.buy}</div>
                <div>Sell : $ {this.state.sell}</div>
            </div>
        )
    }
}

export default Bitcoin ;