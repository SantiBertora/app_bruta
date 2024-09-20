import React from "react";
import ControlProductosContainer from "./ControlProductosContainer";

const UserPanel = ({ user, onLogout }) => {
  return (
    <div>
      <p>Usuario: {user.email}</p>
      <button onClick={onLogout}>Cerrar sesión</button>
      <ControlProductosContainer />
    </div>
  );
};

export default UserPanel;
