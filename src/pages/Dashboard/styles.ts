import Tippy from "@tippyjs/react";
import { motion } from "framer-motion";
import styled from "styled-components";

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
    padding-bottom: 2rem;
    font-size: xx-large;
  }
`;

export const Card = styled.div`
  width: 900px;
  height: 170px;
  background: #171b27;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

export const MoneyBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 192px;
  height: 95px;
  background: #ede9e5;
  border-radius: 3px;
  font-size: 1.5rem;

  input {
    width: 100%;
    height: 100%;
    text-align: center;
    border: none;
    background: transparent;
    font-size: 1.5rem;
  }

  input::placeholder {
    color: black;
  }
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

export const SaveAnimation = styled(motion.div)`
  padding-left: 0.6rem;
  color: #9fb0ca;

  transition: color 0.2s;

  &:hover {
    color: #c6d2e5;
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

export const TippyStylizedSaving = styled(Tippy)`
  background: #ffd700;
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
