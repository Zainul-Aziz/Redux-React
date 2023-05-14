import React from 'react';
import classes from './UserProfile.module.css';
import Counter from './Counter';

const UserProfile = () => {
  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      <Counter />
    </main>
  );
};

export default UserProfile;
