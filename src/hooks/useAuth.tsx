import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { db } from "../services/firebase";

interface LoginProviderProps {
  children: ReactNode;
}

interface LoginContextData {
  isAuthenticated: boolean;
  userEmail: string | null;
  error: string | null;

  register: any;
  handleSubmit: any;
  errors: any;

  loginUser: (data: LoginFormData) => void;
  setError: (error: string | null) => void;
}

const loginSchema = z.object({
  email: z
    .string()
    .nonempty("O campo precisa ser preenchido")
    .email("Email inválido"),
  password: z
    .string()
    .nonempty("O campo precisa ser preenchido")
    .min(8, "Sua senha deve ter no mínimo 8 caracteres"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginContext = createContext<LoginContextData>({} as LoginContextData);

export function AuthProvider({ children }: LoginProviderProps) {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("userEmail");
    if (storedUser) {
      setUserEmail(storedUser);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  async function loginUser(data: LoginFormData) {
    try {
      const usersRef = collection(db, "users");
      const q = query(
        usersRef,
        where("email", "==", data.email),
        where("password", "==", data.password)
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError("Email ou senha inválidos");
        return;
      }

      localStorage.setItem("userEmail", data.email);
      setUserEmail(data.email);

      navigate("/dashboard");
    } catch (err) {
      console.error("Erro ao fazer login:", err);
      setError("Erro ao autenticar. Tente novamente.");
    }
  }

  return (
    <LoginContext.Provider
      value={{
        isAuthenticated: !!userEmail,
        userEmail,
        error,
        register,
        handleSubmit,
        errors,
        loginUser,
        setError,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export function useAuth() {
  return useContext(LoginContext);
}
