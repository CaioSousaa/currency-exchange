import styled from "styled-components";
import { motion } from "framer-motion";
import Tippy from "@tippyjs/react";

export const Main = styled.div``;
export const ContentScreen = styled.div`
  display: flex;
`;

export const Section = styled.div`
  display: flex;

  & + & {
    padding-top: 1rem;
  }
`;

export const Content = styled.div`
  width: 1220px;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #9fb0ca;
    padding-bottom: 1rem;
    font-size: xx-large;
  }
`;

export const Card = styled.div`
  width: 900px;
  height: 100px;
  background: #171b27;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-left: 9rem;
`;

export const MoneyBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 48px;
  background: #ede9e5;
  border-radius: 3px;
`;

export const ContentCard = styled.div`
  display: flex;
  width: 900px;
  padding: 1rem;
  justify-content: space-between;

  div {
    display: flex;
    gap: 6px;
  }
`;

export const ArrowsRightLeft = styled(motion.div)`
  justify-content: center;
  align-items: center;
  svg {
    color: #9fb0ca;
    width: 50px;
    height: 30px;
  }
`;

export const Icons = styled.div`
  padding-left: 1.5rem;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  svg {
    width: 30px;
    height: 30px;
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
  }

  & > svg:nth-child(3) {
    height: 90px;
    width: 80px;
  }
`;

export const TrashAnimation = styled(motion.div)`
  color: #ff5d82;
  transition: color 0.2s;

  &:hover {
    color: #ffa1b5;
  }
`;

export const TrashAnimationInative = styled(motion.div)`
  color: #616273;
`;

export const SaveAnimation = styled(motion.div)`
  padding-left: 0.6rem;
  color: #9fb0ca;

  transition: color 0.2s;

  &:hover {
    color: #c6d2e5;
  }
`;

export const AddAnimation = styled(motion.div)`
  color: #159a32;
  transition: color 0.2s;

  &:hover {
    color: #5ac865;
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
`;
