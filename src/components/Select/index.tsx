import { FiChevronDown } from "react-icons/fi";
import * as SelectPrimitive from "@radix-ui/react-select";

export function Select() {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger className="rounded-sm bg-red-400 flex items-center justify-center gap-1 w-40 h-12 shadow-md font-bold text-base text-white">
        <SelectPrimitive.Value placeholder="selecione a moeda" />
        <SelectPrimitive.Icon>
          <FiChevronDown />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
    </SelectPrimitive.Root>
  );
}
