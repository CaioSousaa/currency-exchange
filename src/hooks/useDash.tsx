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
}

interface DashProviderData {
  section: SectionItemProps[];
  fav: FavProps[];
  key: string;

  setKey: (key: string) => void;
  setSection: (section: SectionItemProps[]) => void;

  addNewItemFav: (key: string) => void;
  // removeItemFav: (itemId: number) => void;
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

  function addNewItemFav(key: string) {
    const keyAlreadyExists = fav.find((f) => f.key === key);

    if (keyAlreadyExists) return "Esta conversão já foi salva!";

    const newFav: FavProps = {
      id: crypto.randomUUID(),
      key,
    };

    setFav([...fav, newFav]);
  }

  // function removeItemFav(itemId: number) {
  //   setFav((prev) => prev.filter((f) => f.id !== itemId));
  // }

  return (
    <DashContext.Provider
      value={{
        section,
        setSection,
        fav,
        addNewItemFav,
        key,
        setKey,
        //  removeItemFav,
      }}
    >
      {children}
    </DashContext.Provider>
  );
}

export function useDash() {
  return useContext(DashContext);
}
