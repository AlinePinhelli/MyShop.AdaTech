import styled from "styled-components";

export const StyleHeader = styled.header`
  background-color: navy;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 60px;
`;

export const HeaderTitle = styled.h1`
  color: white;
  font-size: 1.6rem;
  font-weight: 500;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

interface AuthButtonProps {
  isLogged: boolean;
}

export const AuthButton = styled.button<AuthButtonProps>`
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 1rem;
  background-color: ${(props) => (props.isLogged ? "red" : "green")};
  color: white;
  font-size: 0.75rem;

  display: flex;
  align-items: center;
  gap: 0.3rem;

  svg {
    font-size: 0.7rem;
  }
`;
export const AuthButtonName = styled.button<AuthButtonProps>`
  border: none;
  background-color: navy;

  color: white;
  font-size: 0.75rem;

  display: flex;
  align-items: center;
`;
export const divShowUser = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AuthButtonEmail = styled.button<AuthButtonProps>`
  border: none;
  background-color: navy;

  color: white;
  font-size: 0.75rem;

  display: flex;
  align-items: center;
`;

export const CartButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 1rem;
  background-color: violet;
  color: black;
  font-size: 0.75rem;

  display: flex;
  align-items: center;
  gap: 0.3rem;

  svg {
    font-size: 0.7rem;
  }
`;
