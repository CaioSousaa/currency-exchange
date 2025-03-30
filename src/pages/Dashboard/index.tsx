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
          <Chart />
        </Content>
      </ContentScreen>
    </Main>
  );
}
