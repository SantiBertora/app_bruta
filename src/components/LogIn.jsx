import React, { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import ControlProductos from "./ControlProductos";


const LogIn = () => {
    const auth = getAuth();
    const [user, setUser] = useState(null);
    const [firebaseInitialized, setFirebaseInitialized] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Verificar la inicialización de Firebase antes de usar los servicios
    useEffect(() => {
      // Verificar si Firebase se ha inicializado correctamente
      if (auth) {
        setFirebaseInitialized(true);
      }
    }, []);
  
    const login = async () => {
        try {
          console.log(user)
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          setUser(userCredential.user);
          console.log("Usuario inició sesión:", userCredential.user.email)
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
                    <h1>Autenticación con Firebase</h1>
                    {user ? (
                        <div>
                            <p>Usuario: {user.email}</p>
                        <button onClick={logout}>Cerrar sesión</button>
                        <ControlProductos />
                        </div>
                    ) : (
                        <div>
                            <input 
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder="Correo electrónico" 
                            />
                            <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder="Contraseña" 
                            />
                            <button onClick={login}>Iniciar sesión</button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default LogIn;
