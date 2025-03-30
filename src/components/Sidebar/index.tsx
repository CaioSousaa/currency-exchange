import { motion } from "framer-motion";
import { FaRegBookmark } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { DivAnimation, Main, Section, Title } from "./styles";
import { ModalItemsFav } from "./modal/index";
import { useState } from "react";
import { ImHome } from "react-icons/im";

interface SidebarProps {
  pageUrl: string;
}

export function Sidebar({ pageUrl }: SidebarProps) {
  const [modalShow, setModalShow] = useState(false);

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
          onClick={() => setModalShow(true)}
        >
          <FaRegBookmark />
          <p>Favoritos</p>
        </DivAnimation>
        <DivAnimation
          as={motion.div}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          {pageUrl === "/home" ? (
            <>
              <LuLayoutDashboard />
              <a href="/dashboard">Dashboard</a>
            </>
          ) : (
            <>
              <ImHome />
              <a href="/home">Home</a>
            </>
          )}
        </DivAnimation>
      </Section>
      <ModalItemsFav show={modalShow} onHide={() => setModalShow(false)} />
    </Main>
  );
}
