import { FaTrash } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { RootReducer } from "../../redux/User/root-reducer";
import { removeProduct } from "../../redux/Cart/cart-slice";
import { Product } from "../../data/products";

interface CartProps {
  showCart: boolean;
  setShowCart: (arg: boolean) => void;
  cart: Product[];
}

export const Cart: React.FC<CartProps> = ({ showCart, setShowCart, cart }) => {
  const dispatch = useDispatch();

  const total = cart.reduce((totalCart, product) => {
    return totalCart + product.price;
  }, 0);
  return (
    <S.Container showCart={showCart}>
      <S.CloseCart onClick={() => setShowCart(false)}>
        <IoMdClose />
      </S.CloseCart>

      <S.Title>Carrinho</S.Title>

      <S.CartProductList>
        {cart.map((product) => (
          <S.CartProductItem key={product.id}>
            <strong> {product.title}</strong> - ${product.price}
            <S.RemoveProductCart
              onClick={() => dispatch(removeProduct(product))}
              data-testid="remover"
            >
              <FaTrash />
            </S.RemoveProductCart>
          </S.CartProductItem>
        ))}
      </S.CartProductList>
      <S.CartTotal data-testid="total">Total: ${total}</S.CartTotal>
    </S.Container>
  );
};
