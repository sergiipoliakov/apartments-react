import React from 'react';
// import withAuthContext from '../components/hoc/withAuthContext';

const Profile = ({ auth }) => (
  <>
    <h1>Profile page</h1>
    {/* <img src={auth.user.avatar} alt="avatar" /> */}
    <p>Name: </p>
    <p>Email: </p>
  </>
);

export default Profile;
