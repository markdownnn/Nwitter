import React from "react";
import { authService } from "../fbase";

const Profile = () => {
  const onLogOutClick = () => {
    authService.signOut();
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log out</button>
    </>
  );
};

export default Profile;
