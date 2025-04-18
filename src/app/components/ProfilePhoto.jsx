import React from "react";
import { useAuth } from "../../context/AuthContext";

const ProfilePhoto = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="hidden md:flex m-auto mt-6 w-[6rem] p-[.15em] bg-white shadow rounded-full">
      <img
        src={user.profilePhoto}
        alt={user.name}
        className="w-[6em] aspect-square rounded-full object-cover"
      />
    </div>
  );
};

export default ProfilePhoto;
