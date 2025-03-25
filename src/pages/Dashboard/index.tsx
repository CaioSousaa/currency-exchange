import { NavBar } from "../../components/Navbar";
import { SelectCoins } from "../../components/Select";
import { Sidebar } from "../../components/Sidebar";
import { HiArrowsRightLeft } from "react-icons/hi2";

import {
  Card,
  Content,
  ContentScreen,
  Main,
  MoneyBox,
  ContentCard,
  Section,
  ArrowsRightLeft,
} from "./styles";
import { IconsItem } from "./Items/index";
import { useDash } from "../../hooks/useDash";

export function Dashboard() {
  const { section } = useDash();

  return (
    <Main>
      <NavBar />
      <ContentScreen>
        <Sidebar />
        <Content>
          <h1>Conversor de Moedas</h1>
          {section.map((item) => (
            <Section key={item.id}>
              <Card>
                <ContentCard>
                  <div>
                    <SelectCoins />
                    <MoneyBox>1.0000</MoneyBox>
                  </div>
                  <div>
                    <ArrowsRightLeft>
                      <HiArrowsRightLeft />
                    </ArrowsRightLeft>
                  </div>
                  <div>
                    <MoneyBox>1.0000</MoneyBox>
                    <SelectCoins />
                  </div>
                </ContentCard>
              </Card>
              <IconsItem id={item.id} />
            </Section>
          ))}
        </Content>
      </ContentScreen>
    </Main>
  );
}
