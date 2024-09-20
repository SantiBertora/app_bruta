import React, { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import LogInForm from "./LogInForm";
import UserPanel from "./UserPanel";

const LogIn = () => {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    if (auth) {
      setFirebaseInitialized(true);
    }
  }, [auth]);

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      console.log("Usuario inició sesión:", userCredential.user.email);
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };

  return (
    <div>
      {firebaseInitialized && (
        <>
          {user ? (
            <UserPanel user={user} onLogout={logout} />
          ) : (
            <LogInForm onLogin={login} />
          )}
        </>
      )}
    </div>
  );
};

export default LogIn;
