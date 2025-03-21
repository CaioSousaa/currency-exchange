import { FaRegBookmark, FaBookmark, FaRegTrashAlt } from "react-icons/fa";
import { RiAddLargeLine } from "react-icons/ri";
import {
  Icons,
  TrashAnimation,
  SaveAnimation,
  AddAnimation,
  TippyStylized,
  TrashAnimationInative,
} from "./styles";
import { motion } from "framer-motion";
import { useDash } from "../../hooks/useDash";
import { useState } from "react";

interface SectionProps {
  id: number;
  initialFav?: boolean;
}

export function IconsItem({ id, initialFav = false }: SectionProps) {
  const [isFav, setIsFav] = useState(initialFav);
  const { addSection, removeSection, section, addNewItemFav, removeItemFav } =
    useDash();

  const toggleFav = () => {
    if (isFav) {
      removeItemFav(id);
    } else {
      addNewItemFav(id);
    }
    setIsFav(!isFav);
  };

  return (
    <Icons>
      <TippyStylized
        content="Excluir conversão"
        theme="custom"
        animation="fade"
        placement="bottom"
        offset={[0, 20]}
        duration={0}
      >
        {section.length > 1 ? (
          <TrashAnimation
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            <FaRegTrashAlt onClick={() => removeSection(id)} />
          </TrashAnimation>
        ) : (
          <TrashAnimationInative as={motion.div}>
            <FaRegTrashAlt />
          </TrashAnimationInative>
        )}
      </TippyStylized>

      <TippyStylized
        {...(isFav
          ? { content: "Remover dos favoritos " }
          : { content: "Adicionar aos favoritos" })}
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
        >
          {isFav ? (
            <FaBookmark onClick={toggleFav} />
          ) : (
            <FaRegBookmark onClick={toggleFav} />
          )}
        </SaveAnimation>
      </TippyStylized>

      <TippyStylized
        content="Adicionar conversão"
        theme="custom"
        animation="fade"
        placement="bottom"
        offset={[0, 20]}
        duration={0}
      >
        <AddAnimation
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        >
          <RiAddLargeLine onClick={addSection} />
        </AddAnimation>
      </TippyStylized>
    </Icons>
  );
}
