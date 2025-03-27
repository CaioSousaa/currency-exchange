import axios from "axios";
import { useEffect, useState } from "react";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { NavBar } from "../../components/Navbar";
import { SelectCoins } from "../../components/Select";
import { Sidebar } from "../../components/Sidebar";
import { useDash } from "../../hooks/useDash";
import { IconsItem } from "./Items/index";
import {
  ArrowsRightLeft,
  Card,
  Content,
  ContentCard,
  ContentScreen,
  Main,
  MoneyBox,
  Section,
} from "./styles";

interface ExchangeRate {
  ask: string;
  bid: string;
  code: string;
  codein: string;
  create_date: string;
  high: string;
  low: string;
  name: string;
  pctChange: string;
  timestamp: string;
  varBid: string;
}

export function Dashboard() {
  const { section, key, setKey } = useDash();
  const [itemSelectLeft, setItemSelectLeft] = useState("");
  const [itemSelectRight, setItemSelectRight] = useState("");
  const [ratesLeft, setRatesLeft] = useState<ExchangeRate | null>(null);
  const [ratesRight, setRatesRight] = useState<ExchangeRate | null>(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseRatesLeftLabel = await axios.get(
          `https://economia.awesomeapi.com.br/json/last/${itemSelectLeft}-${itemSelectRight}?token=${
            import.meta.env.VITE_SECRET_AWESOME_KEY_API
          }`
        );

        const keyLeftLabel = `${itemSelectLeft}${itemSelectRight}`;
        setRatesLeft(responseRatesLeftLabel.data[keyLeftLabel]);

        const responseRatesRightLabel = await axios.get(
          `https://economia.awesomeapi.com.br/json/last/${itemSelectRight}-${itemSelectLeft}?token=${
            import.meta.env.VITE_SECRET_AWESOME_KEY_API
          }`
        );

        const keyRightLabel = `${itemSelectRight}${itemSelectLeft}`;
        setRatesRight(responseRatesRightLabel.data[keyRightLabel]);
      } catch (error) {
        console.error(error);
      }
    };

    if (itemSelectLeft && itemSelectRight) {
      setValue("1");
      fetchData();
    }
  }, [itemSelectLeft, itemSelectRight, setKey]);

  setKey(`${itemSelectLeft}${itemSelectRight}`);

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
                    <SelectCoins setItemSelect={setItemSelectLeft} />
                    <MoneyBox>
                      <input
                        placeholder={value === "" ? "0.000" : "1"}
                        onChange={(e) => setValue(e.target.value)}
                      />
                    </MoneyBox>
                  </div>
                  <div>
                    <ArrowsRightLeft>
                      <HiArrowsRightLeft />
                    </ArrowsRightLeft>
                  </div>
                  <div>
                    <MoneyBox>
                      {ratesRight
                        ? Number(
                            Number(value) / Number(ratesRight?.low)
                          ).toFixed(3)
                        : "0.000"}
                    </MoneyBox>
                    <SelectCoins setItemSelect={setItemSelectRight} />
                  </div>
                </ContentCard>
              </Card>
              <IconsItem itemKey={key} />
            </Section>
          ))}
        </Content>
      </ContentScreen>
    </Main>
  );
}
