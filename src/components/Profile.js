import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
console.log(currentUser)
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
        <strong>Pseudo :  </strong>{currentUser.username}
        </h3>
      </header>
      <p>
        <h3><strong>Numéro de téléphone : </strong>{currentUser.phoneNumber} </h3>
        </p>
      {/* <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p> */}
      <p>
        <h3>
        <strong>Email : </strong> {currentUser.email}
        </h3>
      </p>
     {/* < strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul> */}


    </div>
  );
};

export default Profile;
