import React, { Component } from 'react';

class UsersList extends Component {
  render() {
    const users = this.props.usersList;
    return users.map(user => <li key={user.profileId}>{user.userName}</li>);
  }
}

export default UsersList;