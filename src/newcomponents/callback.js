import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RotateCw } from "lucide-react";

const Callback = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    navigate("/"); // Navigate to "/" when the component mounts
  }, [navigate]); // Include navigate in the dependency array to avoid warnings

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <RotateCw className="animate-spin h-12 w-12 text-gray-600" />
      </div>
    </div>
  );
};

export default Callback;
