import React, { Component } from 'react';



class UserInfo extends Component{
    render(){
        return (
            <div>
                <h4>User Info</h4>
                <div>Name : {this.props.name}</div>
                <div>Birth : {this.props.birth}</div>
            </div>
        )
    }
}

export default UserInfo;