import { BiError } from "react-icons/bi";
import { GiPadlock } from "react-icons/gi";
import { MdAlternateEmail } from "react-icons/md";
import { Box, Main } from "./styles";
import { useAuth } from "../../hooks/useAuth";

export function Login() {
  const { register, handleSubmit, loginUser, errors, error, setError } =
    useAuth();

  return (
    <Main>
      <Box onSubmit={handleSubmit(loginUser)}>
        <span>E-mail</span>
        <label>
          <input
            placeholder="Seu melhor e-mail aqui"
            {...register("email")}
            onChange={() => setError(null)}
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
