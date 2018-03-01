import React, { Component } from 'react';
import Avatar from './Avatar.js';
import UserInfo from './UserInfo.js';

class UserCard extends Component{
    render(){
        return (
            <div>
                <h3>User Card!</h3>
                <Avatar name={this.props.name}/>
                <UserInfo  name={this.props.name} birth={this.props.birth}/>
            </div>
        )
    }
}

export default UserCard;