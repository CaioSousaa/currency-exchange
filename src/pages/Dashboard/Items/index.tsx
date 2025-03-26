import { motion } from "framer-motion";
import { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { useDash } from "../../../hooks/useDash";
import {
  Icons,
  SaveAnimation,
  TippyStylized,
  TippyStylizedSaving,
} from "../styles";

interface SectionProps {
  itemKey: string;
  initialFav?: boolean;
}

const Spinner = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    style={{
      width: 30,
      height: 30,
      border: "2px solid #FFD700",
      borderTop: "2px solid transparent",
      borderRadius: "50%",
    }}
  />
);

export function IconsItem({ itemKey, initialFav = false }: SectionProps) {
  const [isFav, setIsFav] = useState(initialFav);
  const [isSaving, setIsSaving] = useState(false);
  const { addNewItemFav } = useDash();

  const handleSave = async () => {
    setIsSaving(true);
    await addNewItemFav(itemKey);
    setTimeout(() => {
      setIsFav(true);
      setIsSaving(false);
    }, 900);
  };

  return (
    <Icons>
      {isSaving ? (
        <TippyStylizedSaving
          content="Salvando..."
          theme="custom"
          animation="fade"
          placement="bottom"
          offset={[0, 20]}
          duration={0}
        >
          <SaveAnimation
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <Spinner />
          </SaveAnimation>
        </TippyStylizedSaving>
      ) : (
        <TippyStylized
          content="Salvar conversão"
          theme="custom"
          animation="fade"
          placement="bottom"
          offset={[0, 20]}
          duration={0}
        >
          <SaveAnimation
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <FaRegBookmark onClick={handleSave} />
          </SaveAnimation>
        </TippyStylized>
      )}
    </Icons>
  );
}
