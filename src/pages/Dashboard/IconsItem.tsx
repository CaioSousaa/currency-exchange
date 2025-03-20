import { FaRegBookmark, FaRegTrashAlt } from "react-icons/fa";
import { RiAddLargeLine } from "react-icons/ri";
import {
  Icons,
  TrashAnimation,
  SaveAnimation,
  AddAnimation,
  TippyStylized,
} from "./styles";
import { motion } from "framer-motion";

export function IconsItem() {
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
        <TrashAnimation
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        >
          <FaRegTrashAlt />
        </TrashAnimation>
      </TippyStylized>

      <TippyStylized
        content="Salvar nos favoritos"
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
          <FaRegBookmark />
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
          <RiAddLargeLine />
        </AddAnimation>
      </TippyStylized>
    </Icons>
  );
}
