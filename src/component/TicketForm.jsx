import React, { useState, useEffect } from "react";
import upload from "../assets/images/icon-upload.svg";
import uploadBg from "../assets/images/pattern-squiggly-line-bottom-desktop.svg";

const TicketForm = ({ onGenerate }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    handle: "",
    avatar: null,
    avatarPreview: null,
  });
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatarError, setAvatarError] = useState("");
  const [emailError, setEmailError] = useState("");
  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 500 * 1024) {
        setAvatarError(
          "File is too large. Please upload JPG or PNG under 500KB."
        );
        setAvatarFile(null);
        setAvatarPreview(null);
        return;
      }

      setAvatarError("");
      const previewURL = URL.createObjectURL(file);
      setAvatarFile(file);
      setAvatarPreview(previewURL);
      setFormData((prev) => ({
        ...prev,
        avatar: file,
        avatarPreview: previewURL,
      }));
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setEmailError("Please enter a valid email address.");
      } else {
        setEmailError("");
      }
    }
  };

  useEffect(() => {
    return () => {
      if (avatarPreview) {
        URL.revokeObjectURL(avatarPreview);
      }
    };
  }, [avatarPreview]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 bg-transparent text-white p-6 rounded-xl"
    >
      <div className="text-center mb-10">
        <h1
          className="text-3xl md:text-4xl font-bold font-mono "
          style={{ wordSpacing: "0.1em" }}
        >
          Your Journey to Coding Conf <br />
          2025 Starts Here!
        </h1>
        <p className="mt-3 text-gray-400">
          Secure your spot at next year’s biggest coding conference.
        </p>
      </div>

      <div
        className="border-2 border-dashed border-purple-400 rounded-lg p-6 text-center hover:bg-purple-800/20 transition bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${uploadBg})`,
        }}
      >
        <input
          type="file"
          accept="image/png, image/jpeg"
          required
          name="avatar"
          onChange={handleAvatarUpload}
          className="hidden"
          id="avatar"
        />
        <label
          htmlFor="avatar"
          className="cursor-pointer flex flex-col items-center justify-center gap-2"
        >
          {avatarPreview ? (
            <img
              src={avatarPreview}
              alt="Avatar Preview"
              className="w-24 h-24 rounded-full object-cover"
            />
          ) : (
            <>
              <img
                src={upload}
                alt=""
                className="w-15 h-15 rounded-full object-cover"
              />
              <p className="text-sm">Drag and drop or click to upload</p>
            </>
          )}
        </label>
      </div>

      {avatarError && (
        <p className="text-xs mt-2 text-red-500">{avatarError}</p>
      )}

      <label className="block mb-4">
        <p className="mb-1">Full Name</p>
        <input
          type="text"
          name="name"
          required
          className="w-full p-3 rounded-md bg-[#1f1f2e] text-white border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Jonatan Kristof"
          onChange={handleChange}
        />
      </label>

      <label className="block mb-4">
        <p className="mb-1">Email Address</p>
        <input
          type="email"
          name="email"
          required
          className="w-full p-3 rounded-md bg-[#1f1f2e] text-white border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="example@gmail.com"
          onChange={handleChange}
        />
      </label>
      {emailError && <p className="text-xs mt-2 text-red-500">{emailError}</p>}

      <label className="block mb-6">
        <p className="mb-1">GitHub Username</p>
        <input
          type="text"
          name="handle"
          required
          className="w-full p-3 rounded-md bg-[#1f1f2e] text-white border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="@yourusername"
          onChange={handleChange}
        />
      </label>

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition"
      >
        Generate My Ticket
      </button>
    </form>
  );
};

export default TicketForm;
