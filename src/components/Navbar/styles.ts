import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  align-items: center;
  padding: 3rem 0;
  width: 100%;
  height: 80px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1220px;
  margin: 0 auto;

  label {
    display: flex;
    gap: 10px;
    align-items: center;
    width: 400px;
    height: 50px;
    border-radius: 20px;
    background: #23262d;

    svg {
      width: 20px;
      height: 20px;
      color: #f3f3f3;
      margin-left: 1rem;
    }

    input {
      width: 320px;
      background: transparent;
      outline: none;
      border: 0;
      font-size: large;
      color: #f3f3f3;
    }

    input::placeholder {
      font-size: large;
      color: #c9c9ca;
    }
  }

  label:hover {
    border: 0.5px solid #ff7ee0;
  }

  img {
    width: 210px;
    height: 210px;
  }
`;

export const Profile = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;

    p {
      color: #c9c9ca;
      font-size: small;
    }

    span {
      font-size: medium;
      color: #f3f3f3;
    }
  }

  img {
    width: 55px;
    height: 55px;
    border-radius: 999999999999999999px;
  }
`;
