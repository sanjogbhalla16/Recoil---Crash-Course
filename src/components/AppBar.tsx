import React from "react";
import { useNavigate } from "react-router-dom";

const AppBar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing
      </button>
      <button
        onClick={() => {
          navigate("/Dashboard");
        }}
      >
        Dashboard
      </button>
    </div>
  );
};

export default AppBar;
