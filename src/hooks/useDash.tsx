import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface DashProviderProps {
  children: ReactNode;
}

interface SectionItemProps {
  id: number;
}
interface FavProps {
  id: string;
  key: string;
  baseKey: string;
  quotedKey: string;
  low: number;
  high: number;
}

interface DashProviderData {
  section: SectionItemProps[];
  fav: FavProps[];
  key: string;

  setKey: (key: string) => void;
  setSection: (section: SectionItemProps[]) => void;

  addNewItemFav: (
    key: string,
    baseKey: string,
    quotedKey: string,
    low: number,
    high: number
  ) => void;
  removeItemFav: (itemId: string) => void;
}

const DashContext = createContext<DashProviderData>({} as DashProviderData);

export function DashProvider({ children }: DashProviderProps) {
  const [fav, setFav] = useState<FavProps[]>([]);
  const [key, setKey] = useState("");

  const [section, setSection] = useState<SectionItemProps[]>(() => {
    const savedSections = localStorage.getItem("sections");
    return savedSections ? JSON.parse(savedSections) : [{ id: 1 }];
  });

  useEffect(() => {
    localStorage.setItem("sections", JSON.stringify(section));
  }, [section]);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(fav));
  }, [fav]);

  function addNewItemFav(
    key: string,
    baseKey: string,
    quotedKey: string,
    low: number,
    high: number
  ) {
    const keyAlreadyExists = fav.find((f) => f.key === key);

    if (keyAlreadyExists) return "Esta conversão já foi salva!";

    const newFav: FavProps = {
      id: crypto.randomUUID(),
      key,
      baseKey,
      quotedKey,
      low,
      high,
    };

    setFav([...fav, newFav]);
  }

  function removeItemFav(itemId: string) {
    setFav((prev) => prev.filter((f) => f.id !== itemId));
  }

  return (
    <DashContext.Provider
      value={{
        section,
        setSection,
        fav,
        addNewItemFav,
        key,
        setKey,
        removeItemFav,
      }}
    >
      {children}
    </DashContext.Provider>
  );
}

export function useDash() {
  return useContext(DashContext);
}
