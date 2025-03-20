import { Logo } from "./Logo";
import { Content, Main, Profile } from "./styles";
import { FiSearch } from "react-icons/fi";

export function NavBar() {
  return (
    <Main>
      <Content>
        <Logo />
        <label>
          <FiSearch />
          <input type="text" placeholder="Pesquise algo" />
        </label>

        <Profile>
          <div>
            <span>Caio Sousa</span>
            <p>caiorocha@gmail.com</p>
          </div>

          <img src="https://github.com/CaioSousaa.png" />
        </Profile>
      </Content>
    </Main>
  );
}
