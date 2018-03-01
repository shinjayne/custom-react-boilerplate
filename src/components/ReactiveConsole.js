import React, {Component} from 'react';

class ReactiveConsole extends Component{
    constructor(props){
        super(props);
        this.state = {value : ''};

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({value : event.target.value});
    }

    render(){
        return (
            <div>
                <h1>Reactive Console!</h1>
                <h3>Display : {this.state.value}</h3>
            <form>
                <label>Type Something:</label>
                <input type="text" onChange={this.handleChange} />
            </form>
            </div>
        )
    }
}

export default ReactiveConsole;