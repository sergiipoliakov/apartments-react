import { useContext } from 'react';
import withAuthContext from '../components/hoc/withAuthContext';

import React from 'react';

export default function Profile() {
  const auth = useContext(withAuthContext);
  return (
    <>
      <h1>Profile page</h1>
      {/* <img src={auth.user.avatar} alt="avatar" /> */}
      <p>Name: </p>
      <p>Email: </p>
    </>
  );
}

// const Profile = ({ auth }) => (
//   <>
//     <h1>Profile page</h1>
//     {/* <img src={auth.user.avatar} alt="avatar" /> */}
//     <p>Name: </p>
//     <p>Email: </p>
//   </>
// );

// export default Profile;
