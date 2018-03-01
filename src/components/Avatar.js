import React, { Component } from 'react';



class Avatar extends Component{
    render(){
        return (
            <div>
                <h4>Avatar</h4>
                <div>this is Avatar image of {this.props.name}</div>
            </div>
        )
    }
}

export default Avatar;