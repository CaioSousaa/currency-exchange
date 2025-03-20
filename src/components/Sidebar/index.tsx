import { Main, Section, Title } from "./styles";
import { FaRegBookmark } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";

export function Sidebar() {
  return (
    <Main>
      <Section>
        <Title>
          <span>GERAL</span>
        </Title>

        <div>
          <FaRegBookmark />
          <a href="">Salvos</a>
        </div>
        <div>
          <LuLayoutDashboard />
          <a href="">Dashboard</a>
        </div>
      </Section>
    </Main>
  );
}
