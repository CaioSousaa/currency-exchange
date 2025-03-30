import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import api from "../services/api";
import { useEffect, useState } from "react";
import { ExchangeRate } from "@/pages/Home";

const chartConfig = {
  base: {
    label: "Dolar Americano",
    color: "#ff5d82",
  },
  quoted: {
    label: "Real Brasileiro",
    color: "#ede9e5",
  },
} satisfies ChartConfig;

export function Chart() {
  const [rates, setRates] = useState<ExchangeRate[]>([]);

  useEffect(() => {
    const fetchRates = async () => {
      const endDate = new Date();
      const allRates = [];

      const formatDate = (date) =>
        date.toISOString().split("T")[0].replace(/-/g, "");

      for (let i = 0; i < 6; i++) {
        const startDate = new Date();
        startDate.setMonth(endDate.getMonth() - i);
        startDate.setDate(1);

        const lastDate = new Date(
          startDate.getFullYear(),
          startDate.getMonth() + 1,
          0
        );

        const url = `https://economia.awesomeapi.com.br/json/daily/USD-BRL/?start_date=${formatDate(
          startDate
        )}&end_date=${formatDate(lastDate)}`;

        try {
          const response = await api.get(url);
          allRates.push(...response.data);
        } catch (error) {
          console.error(error);
        }
      }

      setRates(allRates);
    };

    fetchRates();
  }, []);

  const valuesLowRates = rates.map((item) => item.low);

  const chartData = [
    { month: "Outubro", base: 1000, quoted: Number(valuesLowRates[5]) * 1000 },
    { month: "Novembro", base: 1000, quoted: Number(valuesLowRates[4]) * 1000 },
    { month: "Dezembro", base: 1000, quoted: Number(valuesLowRates[3]) * 1000 },
    { month: "Janeiro", base: 1000, quoted: Number(valuesLowRates[2]) * 1000 },
    {
      month: "Fevereiro",
      base: 1000,
      quoted: Number(valuesLowRates[1]) * 1000,
    },
    { month: "Março", base: 1000, quoted: Number(valuesLowRates[0]) * 1000 },
  ];

  return (
    <ChartContainer config={chartConfig} className="h-96 w-[800px]">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="base" fill="var(--color-base)" radius={4} />
        <Bar dataKey="quoted" fill="var(--color-quoted)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
