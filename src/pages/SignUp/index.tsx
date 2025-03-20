import { Box, Main } from "./styles";
import { MdAlternateEmail } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BiError } from "react-icons/bi";
import { db } from "../../services/firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { FaRegAddressBook } from "react-icons/fa";

const createUserFormSchema = z.object({
  name: z
    .string()
    .nonempty("o nome é obrigatorio")
    .min(2, "seu nome deve ter no minimo 2 caracteres"),
  email: z.string().nonempty("o email é obrigatorio").email("email invalido"),
  password: z
    .string()
    .nonempty("a senha é obrigatoria")
    .min(8, "sua senha deve ter no minimo 8 caracteres"),
});

type CreateUserFormData = z.infer<typeof createUserFormSchema>;

export function SignUp() {
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  async function createUser(data: CreateUserFormData) {
    setOutput(JSON.stringify(data, null, 3));

    try {
      const users = collection(db, "users");
      const q = query(users, where("email", "==", data.email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setError("email ja registrado");
        return true;
      }

      await addDoc(collection(db, "users"), {
        email: data.email,
        password: data.password,
        name: data.name,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Main>
      <Box onSubmit={handleSubmit(createUser)}>
        <span>Nome</span>
        <label>
          <input
            type="text"
            placeholder="Seu nome aqui"
            {...register("name")}
          />
          <FaRegAddressBook />
        </label>
        {errors.name && (
          <div>
            <BiError />
            <p>{errors.name.message}</p>
          </div>
        )}

        <span>E-mail</span>
        <label>
          <input
            placeholder="Seu melhor e-mail aqui"
            {...register("email")}
            onChange={() => setError("")}
          />
          <MdAlternateEmail />
        </label>
        {errors.email && (
          <div>
            <BiError />
            <p>{errors.email.message}</p>
          </div>
        )}

        {error && !errors.email && (
          <div>
            <BiError />
            <p>{error}</p>
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
        <button type="submit">Criar</button>
      </Box>
    </Main>
  );
}
