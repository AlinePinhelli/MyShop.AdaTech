import { Dispatch, SetStateAction } from "react";
import { styled } from "styled-components";

interface ContainerProps {
  showCart: boolean;
}
export const CloseCart = styled.button`
  border: none;
  background-color: white;
  font-size: 25px;
`;
export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.showCart ? "0" : "-360px")};

  width: 360px;
  height: 100%;
  background-color: white;

  padding: 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);

  transition: right 0.5s;
`;

export const Title = styled.h1``;

export const CartProductList = styled.ul`
  padding: 2rem 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CartProductItem = styled.li``;

export const CartTotal = styled.strong``;

export const RemoveProductCart = styled.button`
  background-color: white;
  border: none;
  padding: 0.1rem;
`;
