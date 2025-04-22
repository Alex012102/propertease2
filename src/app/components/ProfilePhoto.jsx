import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import ProfileModal from "./ProfileModal";

const ProfilePhoto = () => {
  const { profile } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  if (!profile) return null;

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="hidden md:flex m-auto mt-6 w-[6rem] p-[.15em] bg-white shadow rounded-full cursor-pointer"
      >
        <img
          src={profile.profile_picture}
          className="w-[6em] aspect-square rounded-full object-cover"
          alt="Profile"
        />
      </div>

      <ProfileModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default ProfilePhoto;
