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

interface SectionItem {
  id: number;
}

interface DashProviderData {
  section: SectionItem[];
  fav: SectionItem[];

  addSection: () => void;
  setSection: (section: SectionItem[]) => void;

  removeSection: (sectionId: number) => void;
  addNewItemFav: (itemId: number) => void;
  removeItemFav: (itemId: number) => void;
}

const DashContext = createContext<DashProviderData>({} as DashProviderData);

export function DashProvider({ children }: DashProviderProps) {
  const [fav, setFav] = useState<SectionItem[]>([]);

  const [section, setSection] = useState<SectionItem[]>(() => {
    const savedSections = localStorage.getItem("sections");
    return savedSections ? JSON.parse(savedSections) : [{ id: 1 }];
  });

  useEffect(() => {
    localStorage.setItem("sections", JSON.stringify(section));
  }, [section]);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(fav));
  }, [fav]);

  function addSection() {
    setSection([...section, { id: Number(new Date()) }]);
  }

  function addNewItemFav(itemId: number) {
    const itemExists = section.find((e) => e.id === itemId);

    if (!itemExists) {
      return;
    }

    const itemAlreadyFav = fav.find((e) => e.id === itemId);

    if (itemAlreadyFav) {
      return;
    }

    setFav([...fav, itemExists]);
  }

  function removeSection(sectionId: number) {
    if (section.length > 1) {
      setSection((prev) => prev.filter((section) => section.id !== sectionId));
    }
  }

  function removeItemFav(itemId: number) {
    setFav((prev) => prev.filter((f) => f.id !== itemId));
  }

  return (
    <DashContext.Provider
      value={{
        section,
        setSection,
        addSection,
        removeSection,
        fav,
        addNewItemFav,
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
