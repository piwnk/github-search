import React, { Component } from 'react';
import PropTypes from 'prop-types';

import User from './User';

export default class UsersList extends Component {
   static propTypes = {
      users: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
         PropTypes.string,
         PropTypes.number,
         PropTypes.bool
      ]))).isRequired
   }

   get users() {
      return this.props.users.map(user => (
         <User
            key={user.id}
            user={user}
         />
      ));
   }

   render() {
      return (
         <div
            className={this.props.users.length ? 'users' : 'users empty'}
         >
            {this.users}
         </div>
      );
   }
}
