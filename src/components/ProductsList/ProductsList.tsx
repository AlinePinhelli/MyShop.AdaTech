import { ProductCard } from "../ProductsCard/ProductsCard";
import { products } from "../../data/products";

import * as S from "./styles";

export const ProductsList: React.FC = () => {
  return (
    <S.Container>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.Container>
  );
};
