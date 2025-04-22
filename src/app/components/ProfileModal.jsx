import React, { useState } from "react";
import { Pencil } from "lucide-react";
import ImageUploadModal from "./ImageUploadModal";
import supabase from "../../config/supabaseClient";
import { useAuth } from "../../context/AuthContext";

const ProfileModal = ({ isOpen, onClose }) => {
  const { profile, user } = useAuth();

  const [formData, setFormData] = useState({
    first_name: profile?.first_name || "",
    last_name: profile?.last_name || "",
    email: profile?.email || "",
    phone: profile?.phone || "",
    profile_picture: profile?.profile_picture || "",
  });

  const [modalOpen, setModalOpen] = useState(false);

  console.log("Profile:", profile);
  console.log("User:", user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    const { error } = await supabase
      .from("accounts")
      .update({
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        phone: formData.phone,
        profile_picture: formData.profile_picture,
      })
      .eq("user_id", user.id)
      .select();

    if (error) {
      alert("Error updating profile");
      console.error(error);
    } else {
      alert("Profile updated!");
      onClose();
    }
  };

  const updateProfilePhoto = async (userId, url) => {
    setFormData((prev) => ({ ...prev, profile_picture: url }));

    const { error } = await supabase
      .from("accounts")
      .update({ profile_picture: url })
      .eq("user_id", userId);

    if (error) {
      console.error("Error saving profile picture:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed text-black inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>

        <div className="space-y-4">
          {/* 4. Profile photo with edit icon and modal trigger */}
          <div
            className="cursor-pointer group relative w-fit m-auto"
            onClick={() => setModalOpen(true)}
          >
            <Pencil
              className="hidden group-hover:block absolute top-[45%] left-[45%]"
              color="black"
            />
            <img
              src={formData.profile_picture}
              alt="profile phot"
              className="w-24 h-24 rounded-full object-cover hover:opacity-60"
            />
          </div>

          <input
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full border p-2 rounded"
          />
          <input
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full border p-2 rounded"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border p-2 rounded"
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="flex justify-end mt-6 gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="px-4 py-2 bg-teal-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>

      {/* 5. The reusable modal itself */}
      <ImageUploadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        folder="profile-pictures"
        defaultPath={user.id}
        onUpload={(url) => updateProfilePhoto(user.id, url)}
        title="Update Profile Photo"
      />
    </div>
  );
};

export default ProfileModal;
