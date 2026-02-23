import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { packagesData } from "../data/packages";
import OurPackages from "./OurPackages";

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("client");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Common fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Owner-specific fields
  const [businessName, setBusinessName] = useState("");
  const [location, setLocation] = useState("");
  const [cacFile, setCacFile] = useState(null);
  const [idFile, setIdFile] = useState(null);

  // Previews
  const [cacPreview, setCacPreview] = useState(null);
  const [idPreview, setIdPreview] = useState(null);

  // File input refs
  const cacInputRef = useRef(null);
  const idInputRef = useRef(null);

  const handleRegister = (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number."
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const newUser = {
      firstName,
      lastName,
      email,
      role,
      verified: role === "owner" ? false : true,
    };

    if (role === "owner") {
      newUser.businessName = businessName;
      newUser.location = location;
      newUser.cacFile = cacFile ? cacFile.name : null;
      newUser.idFile = idFile ? idFile.name : null;

      alert(
        "Property Owner registration received! We will contact you via Goggle Meet for verification within 48hours."
      );

      navigate("/our-packages");
    } else {
      navigate("/");
    }

    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const handleFile = (file, setFile, setPreview) => {
    setFile(file);

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleRemoveFile = (setFile, setPreview, inputRef) => {
    setFile(null);
    setPreview(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const renderFileInput = (
    label,
    file,
    preview,
    setFile,
    setPreview,
    inputRef
  ) => (
    <div>
      <label className="block text-sm font-medium mt-2">{label}</label>

      <input
        type="file"
        accept="image/*,application/pdf"
        ref={inputRef}
        className="w-full border rounded-lg px-4 py-2 mt-1"
        onChange={(e) => handleFile(e.target.files[0], setFile, setPreview)}
        required
      />

      {preview && (
        <div className="relative mt-2 inline-block">
          <img
            src={preview}
            alt="Preview"
            className="max-h-40 object-contain border rounded-lg"
          />
          <i
            className="ri-close-circle-fill absolute -top-2 -right-2 text-red-500 text-2xl cursor-pointer bg-white rounded-full"
            onClick={() => handleRemoveFile(setFile, setPreview, inputRef)}
          ></i>
        </div>
      )}

      {file && !preview && (
        <div className="flex items-center justify-between mt-2 bg-gray-100 px-3 py-2 rounded-lg">
          <p className="text-gray-700 text-sm">{file.name}</p>
          <i
            className="ri-close-circle-fill text-red-500 text-xl cursor-pointer"
            onClick={() => handleRemoveFile(setFile, setPreview, inputRef)}
          ></i>
        </div>
      )}
    </div>
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[90%] max-w-md">
        
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

        <div className="flex gap-4 justify-center mb-6">
          <button
            type="button"
            onClick={() => setRole("client")}
            className={`px-4 py-2 rounded-lg border ${
              role === "client" ? "bg-indigo-500 text-white" : "bg-gray-100"
            }`}
          >
            Client
          </button>
          <button
            type="button"
            onClick={() => setRole("owner")}
            className={`px-4 py-2 rounded-lg border ${
              role === "owner" ? "bg-indigo-500 text-white" : "bg-gray-100"
            }`}
          >
            Property Owner
          </button>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full border rounded-lg px-4 py-2"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Last Name"
            className="w-full border rounded-lg px-4 py-2"
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          {/* CLIENT SECTION */}
          {role === "client" && (
            <>
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg px-4 py-2"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full border rounded-lg px-4 py-2 pr-10"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <i
                  className={`${
                    showPassword ? "ri-eye-off-line" : "ri-eye-line"
                  } absolute right-3 top-3 cursor-pointer text-gray-500`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="w-full border rounded-lg px-4 py-2 pr-10"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <i
                  className={`${
                    showConfirmPassword
                      ? "ri-eye-off-line"
                      : "ri-eye-line"
                  } absolute right-3 top-3 cursor-pointer text-gray-500`}
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                ></i>
              </div>
            </>
          )}

          {/* OWNER SECTION */}
          {role === "owner" && (
            <>
              <input
                type="text"
                placeholder="Business Name"
                className="w-full border rounded-lg px-4 py-2"
                onChange={(e) => setBusinessName(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="State of Residence"
                className="w-full border rounded-lg px-4 py-2"
                onChange={(e) => setLocation(e.target.value)}
                required
              />

              {renderFileInput(
                "Upload CAC (PDF or Image)",
                cacFile,
                cacPreview,
                setCacFile,
                setCacPreview,
                cacInputRef
              )}

                {renderFileInput(
                "Upload Recent Passsport Photo",
                cacFile,
                cacPreview,
                setCacFile,
                setCacPreview,
                cacInputRef
              )}

              {renderFileInput(
                "Upload National ID / Voter's Card / Driver's License",
                idFile,
                idPreview,
                setIdFile,
                setIdPreview,
                idInputRef
              )}

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full border rounded-lg px-4 py-2 pr-10"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <i
                  className={`${
                    showPassword ? "ri-eye-off-line" : "ri-eye-line"
                  } absolute right-3 top-3 cursor-pointer text-gray-500`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="w-full border rounded-lg px-4 py-2 pr-10"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <i
                  className={`${
                    showConfirmPassword
                      ? "ri-eye-off-line"
                      : "ri-eye-line"
                  } absolute right-3 top-3 cursor-pointer text-gray-500`}
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                ></i>
              </div>

              <p className="text-sm text-gray-500 mt-2">
                After registering, we will contact you via Google Meet video call
                for quick interview and verification.
              </p>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg mt-4"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
