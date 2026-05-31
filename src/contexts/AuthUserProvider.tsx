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

// Context met standaardwaarde
//globale opslagplaats voor auth data
const AuthContext = createContext<ContextProps>({
  user: null,
  isLoading: true,
});

// Custom hook
export function useAuth(): ContextProps {
  return useContext(AuthContext);
}

// Provider component = geeft auth data aan je hele app
export function AuthUserProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
