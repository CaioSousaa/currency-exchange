import { NavBar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { Content, ContentScreen, Main } from "./styles";

export function Dashboard() {
  return (
    <Main>
      <NavBar />
      <ContentScreen>
        <Sidebar />
        <Content>Content</Content>
      </ContentScreen>
    </Main>
  );
}
