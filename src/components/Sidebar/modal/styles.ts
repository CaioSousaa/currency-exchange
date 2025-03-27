import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import Tippy from "@tippyjs/react";
import { motion } from "framer-motion";

export const ModalHeader = styled(Modal.Header)`
  background: #171b27;

  .btn-close {
    filter: invert(1);
    opacity: 0.8;
  }

  transition: scale 0.2s;

  .btn-close:hover {
    scale: 1.05;
  }
`;

export const ModalTitle = styled(Modal.Title)`
  margin: 0 auto;
  color: #e4e3e4;
  padding-left: 8rem;
`;

export const Table = styled.table`
  width: 100%;

  th {
    font-size: larger;
    padding-bottom: 1rem;
  }

  td {
    width: 1rem;
  }

  svg {
    width: 20px;
    height: 20px;
    color: rgb(229, 96, 96);
  }
`;

export const TrashAnimation = styled(motion.div)`
  color: #ff5d82;
  transition: color 0.2s;

  &:hover {
    color: #ffa1b5;
  }
`;

export const TippyStylized = styled(Tippy)`
  background: #ede9e5;
  display: inline-block;
  white-space: normal;
  width: 100%;
  height: 35px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  color: #0f0f10;
  margin: 0.5rem;

  &[data-placement] > .tippy-arrow {
    color: #ede9e5;
  }

  &[data-placement] {
    transform: translateX(-30px);
  }
`;
