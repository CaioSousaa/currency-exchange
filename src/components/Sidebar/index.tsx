import { DivAnimation, Main, Section, Title } from "./styles";
import { FaRegBookmark } from "react-icons/fa";
import { motion } from "framer-motion";
import { LuLayoutDashboard } from "react-icons/lu";

export function Sidebar() {
  return (
    <Main>
      <Section>
        <Title>
          <span>GERAL</span>
        </Title>

        <DivAnimation
          as={motion.div}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaRegBookmark />
          <a href="">Salvos</a>
        </DivAnimation>
        <DivAnimation
          as={motion.div}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          <LuLayoutDashboard />
          <a href="">Dashboard</a>
        </DivAnimation>
      </Section>
    </Main>
  );
}
