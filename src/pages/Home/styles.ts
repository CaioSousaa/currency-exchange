import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.form`
  width: 27rem;
  height: 25rem;
  background: #1a202c;
  margin-top: 16rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 0 1.5rem;
  padding-bottom: 2rem;
  gap: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    display: flex;
    gap: 4px;

    p {
      color: #ff5d82;
    }

    svg {
      color: #ff5d82;
    }
  }

  span {
    color: #f3f3f3;
    font-size: x-large;
    padding-top: 0.5rem;
  }

  label {
    display: flex;
    align-items: center;
    background: #f3f3f3;
    height: 45px;
    border-radius: 10px;
    justify-content: space-between;

    input {
      padding-left: 0.5rem;
      outline: none;
      background: transparent;
      border: 0;
      height: 30px;
      width: 300px;
      font-size: larger;
    }

    svg {
      width: 25px;
      height: 25px;
      margin-right: 1rem;
    }
  }

  button {
    margin-top: 2rem;
    height: 50px;
    border-radius: 10px;
    background: #ff7ee0;
    font-size: larger;
  }
`;
