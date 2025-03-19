import { Box, Main } from "./styles";
import { MdAlternateEmail } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BiError } from "react-icons/bi";
import { db } from "../../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const createUserFormSchema = z.object({
  email: z
    .string()
    .nonempty("o campo precisa ser preenchido")
    .email("email invalido"),
  password: z
    .string()
    .nonempty("o campo precisa ser preenchido")
    .min(8, "sua senha deve ter no minimo 8 caracteres"),
});

type CreateUserFormData = z.infer<typeof createUserFormSchema>;

export function Home() {
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  async function loginUser(data: CreateUserFormData) {
    setOutput(JSON.stringify(data, null, 2));

    try {
      const users = collection(db, "users");
      const q = query(
        users,
        where("email", "==", data.email),
        where("password", "==", data.password)
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError("email ou senha inválido");
        return false;
      }

      document.cookie = `${new Date(Date.now())}${data.email}`;
      console.log(document.cookie);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Main>
      <Box onSubmit={handleSubmit(loginUser)}>
        <span>E-mail</span>
        <label>
          <input
            placeholder="Seu melhor e-mail aqui"
            {...register("email")}
            onChange={() => setError("")}
          />
          <MdAlternateEmail />
        </label>
        {error && (
          <div>
            <BiError />
            <p>{error}</p>
          </div>
        )}

        {errors.email && (
          <div>
            <BiError />
            <p>{errors.email.message}</p>
          </div>
        )}
        <span>Senha</span>
        <label>
          <input
            placeholder="Sua senha aqui"
            type="password"
            {...register("password")}
          />
          <GiPadlock />
        </label>
        {errors.password && (
          <div>
            <BiError />
            <p>{errors.password.message}</p>
          </div>
        )}
        <a href="/signup">Ainda não possui uma conta? Inscreva-se</a>
        <button type="submit">Entrar</button>
      </Box>
    </Main>
  );
}
