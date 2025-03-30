import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { Select } from "radix-ui";
import { useEffect, useState } from "react";
import "../styles/index.css";
import api from "../services/api";
import { ItemSelect } from "../utils/functions/ItemsSelect";

export type CountriesResponse = {
  symbols: Record<string, string>;
};

interface SelectCoinsProps {
  setItemSelect: (item: string) => void;
}

export function SelectCoins({ setItemSelect }: SelectCoinsProps) {
  const [countries, setCountries] = useState<CountriesResponse | null>(null);
  const [selectedCoin, setSelectedCoin] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(
          `/symbols?access_key=${import.meta.env.VITE_SECRET_KEY_API}`
        );
        setCountries(response.data);
      } catch (error) {
        console.error("Erro ao buscar países:", error);
      }
    };

    fetchData();
  }, []);

  if (!countries) return null;

  const itemsArray = Object.entries(countries.symbols).map(([key, value]) => ({
    key,
    value,
  }));

  const itemsSelect = ItemSelect(itemsArray);

  return (
    <Select.Root
      value={selectedCoin}
      onValueChange={(value) => {
        setSelectedCoin(value);
        setItemSelect(value);
      }}
    >
      <Select.Trigger
        className="rounded-sm bg-red-400 flex items-center justify-center gap-1 w-48 h-[95px] shadow-md font-bold text-base text-white"
        aria-label="Coins"
      >
        <Select.Value placeholder="Selecione a moeda" />
        <Select.Icon className="text-white">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className="bg-red-400 rounded-md shadow-md flex items-center justify-center gap-1 w-48"
          position="popper"
          sideOffset={5}
        >
          <Select.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-white">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-1">
            <Select.Group>
              {itemsSelect?.map((item) => (
                <Select.Item
                  key={item.key}
                  value={item.key}
                  className="p-2 cursor-pointer text-white hover:bg-red-800 hover:border-black shadow-sm"
                >
                  <div className="flex justify-between items-center gap-2">
                    <Select.ItemText>{item.value}</Select.ItemText>
                    <Select.ItemIndicator>
                      <CheckIcon className="text-zinc-900" />
                    </Select.ItemIndicator>
                  </div>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-white">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
