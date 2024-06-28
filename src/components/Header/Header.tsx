import { useState } from "react";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { Cart } from "../Cart/Cart";

import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/User/root-reducer";
import { login, logout } from "../../redux/User/user-slice";

export const Header: React.FC = () => {
  const { user } = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer
  );
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  const dispatch = useDispatch();

  const [showCart, setShowCart] = useState(false);
  const isLogged = user !== null;

  function handleUserAuth() {
    if (user === null) {
      dispatch(
        login({
          name: "Aline Pinhelli",
          email: "aline@gmail.com",
        })
      );
    } else {
      dispatch(logout({}));
    }
  }
  const showLogin = handleUserAuth.toString;
  function handlerSetShowCart(bool: boolean) {
    setShowCart(bool);
  }
  return (
    <S.StyleHeader>
      <S.Wrapper>
        <S.HeaderTitle> MyShop.</S.HeaderTitle>
        <S.ButtonsWrapper>
          <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>
          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
          <S.divShowUser>
            <S.AuthButtonName isLogged={isLogged} onClick={handleUserAuth}>
              {isLogged ? "Aline Pinhelli" : ""}
            </S.AuthButtonName>
            <S.AuthButtonEmail isLogged={isLogged} onClick={handleUserAuth}>
              {isLogged ? "aline@email.com" : ""}
            </S.AuthButtonEmail>
          </S.divShowUser>
        </S.ButtonsWrapper>
      </S.Wrapper>

      <Cart showCart={showCart} setShowCart={handlerSetShowCart} cart={cart} />
    </S.StyleHeader>
  );
};
