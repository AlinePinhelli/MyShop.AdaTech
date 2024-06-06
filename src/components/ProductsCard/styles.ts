import styled from "styled-components";

export const Card = styled.article`
  background-color: white;
  width: 100%;

  padding: 2rem;
  margin: 0 auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0, 15);
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const ProductImage = styled.img`
  width: 250px;
  height: 400px;

  object-fit: contain;
`;

export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;

  min-height: 4rem;
  margin-top: 1rem;
`;

export const ReviewPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-top: 1rem;
`;

export const Review = styled.span`
  display: flex;
  font-size: 0.75rem;

  svg {
    font-size: 1rem;
  }
`;

export const Price = styled.strong``;

export const AddToCardButtonWhapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const AddToCardButton = styled.button`
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 40px;

  background-color: blue;
  color: white;
  font-size: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  svg {
    font-size: 0.7rem;
  }
`;
