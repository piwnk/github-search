import React from 'react';
import PropTypes from 'prop-types';

const User = props => (
   <div
      className="user"
   >
      <img
         src={props.user.avatar_url}
         alt="avatar"
         style={{
            maxWidth: '100px'
         }}
      />
      <a
         href={props.user.html_url}
         target="_blank"
      >{props.user.login}
      </a>
      <p>{parseFloat(props.user.score).toFixed(2)}</p>
   </div>
);

User.propTypes = {
   user: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool
   ])).isRequired
};

export default User;
