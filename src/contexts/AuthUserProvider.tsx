import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../Firebase";
 
type ContextProps = {
  user: User | null;
  isLoading: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

//react Context object met standaardwaarde
//globale opslagplaats voor auth data = doos
const AuthContext = createContext<ContextProps>({
  user: null,
  isLoading: true,
});

// Custom hook/ helper!! useAuth
//inplaats van const { user, isLoading } =
 // useContext(AuthContext); in home bv.
 //useContext = react hook van react library -> leest data uit context
export function useAuth(): ContextProps {
  return useContext(AuthContext);
}

// Provider component = geeft auth data aan je hele app= hier stop ik de echte waarden in de doos
export function AuthUserProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
//onAuthStateChanged firebase functie luistert naar login/logout gebeurtenissen
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);
//stopt waarden in context 
  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
