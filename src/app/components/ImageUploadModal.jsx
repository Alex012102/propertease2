// components/modals/ImageUploadModal.jsx
import React, { useState } from "react";
import supabase from "../../config/supabaseClient";

/**
 * A reusable modal component for uploading or linking images.
 *
 * Props:
 * - isOpen (bool): Controls modal visibility.
 * - onClose (func): Closes the modal.
 * - folder (string): Supabase storage folder to save the image (e.g., 'profile-pictures', 'receipts').
 * - defaultPath (string): File path/name to save the image under (e.g., `${user.id}`).
 * - onUpload (func): Callback fired with the final public image URL after success.
 * - title (string): Optional UI title to display in the modal (e.g., "Upload Profile Photo").
 */

const ImageUploadModal = ({
  isOpen,
  onClose,
  folder = "uploads",
  onUpload,
  title = "Upload Image",
  defaultPath = "default",
}) => {
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleImageUrlSubmit = async () => {
    if (!imageUrl) return;
    try {
      await onUpload(imageUrl);
      alert("Image added via URL!");
      console.log("Image:", imageUrl);
      onClose();
    } catch (err) {
      alert("Failed to update with URL");
      console.error(err);
    }
  };

  const handleFileUpload = async () => {
    if (!file) return;
    setUploading(true);
    const fileExt = file.name.split(".").pop();
    const fileName = `${defaultPath}.${fileExt}`;
    const filePath = `${folder}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from(folder)
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      alert("File upload failed!");
      console.error(uploadError);
      setUploading(false);
      return;
    }

    const { data: publicUrlData } = supabase.storage
      .from(folder)
      .getPublicUrl(filePath);

    try {
      await onUpload(publicUrlData.publicUrl);
      alert("Image uploaded!");

      console.log("Image:", publicUrlData.publicUrl);
      onClose();
    } catch (err) {
      alert("Failed to update after upload");
      console.error(err);
    }

    setUploading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-md space-y-4 shadow-xl relative">
        <h2 className="text-xl font-bold">{title}</h2>

        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            type="text"
            placeholder="Paste image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={handleImageUrlSubmit}
            className="mt-2 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
          >
            Use Image URL
          </button>
        </div>

        <div className="relative text-center">
          <span className="text-gray-500">or</span>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full"
          />
          <button
            onClick={handleFileUpload}
            disabled={uploading}
            className="mt-2 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 disabled:opacity-50"
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </div>

        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-black"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default ImageUploadModal;
