import styled from "styled-components";

export const Main = styled.div`
  width: 350px;
  padding: 3rem 3rem;
`;

export const Title = styled.div`
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #9fb0ca;
  width: 83px;
  border-radius: 2px;

  span {
    color: #9fb0ca;
    font-size: x-large;
  }
`;

export const Section = styled.section`
  height: 120px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    display: flex;
    align-items: center;
    gap: 0.3rem;

    a {
      color: #c9c9ca;
      font-size: medium;
      text-decoration: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #ff5d82;
    }

    transition: color 0.2s;
    transition: scale 0.2s;

    &:hover {
      a {
        color: #d4d4d5;
        scale: 1.02;
      }

      svg {
        color: #ff7a97;
        scale: 1.02;
      }
    }
  }
`;
