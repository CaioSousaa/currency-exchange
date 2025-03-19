import { Box, Main } from "./styles";
import { MdAlternateEmail } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";

export function Home() {
  return (
    <Main>
      <Box>
        <span>E-mail</span>
        <label>
          <input placeholder="Seu melhor e-mail aqui" />
          <MdAlternateEmail />
        </label>
        <span>Senha</span>
        <label>
          <input placeholder="Sua senha aqui" type="password" />
          <GiPadlock />
        </label>
        <button>Enviar</button>
      </Box>
    </Main>
  );
}
