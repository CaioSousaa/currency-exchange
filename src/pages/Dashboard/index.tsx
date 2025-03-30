import { Chart } from "@/components/Chart";
import { NavBar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { ContentScreen, Main, Content } from "./styles";

export function Dashboard() {
  return (
    <Main>
      <NavBar />
      <ContentScreen>
        <Sidebar pageUrl="/dashboard" />
        <Content>
          <h1>Desvalorização do Real nos últimos 5 meses</h1>
          <Chart />
        </Content>
      </ContentScreen>
    </Main>
  );
}
