import { render, screen } from "@testing-library/react";
import { Cart } from "./Cart";
import { products } from "../../data/products";
import userEvent from "@testing-library/user-event";
import { removeProduct } from "../../redux/Cart/cart-slice";

const cart = products.slice(0, 2); //obtendo os dois primeiro produtos do array
// alternativa: mock > tornar a biblioteca react-redux fake
const mockDispatch = jest.fn();
jest.mock("react-redux", () => {
  return {
    useDispatch: () => {
      return mockDispatch;
    },
  };
});

const renderCart = render(
  <Cart
    showCart={true}
    setShowCart={function (arg: boolean): void {
      throw new Error("Function not implemented.");
    }}
    cart={[]}
  />
);

describe("Cart >Unit test", () => {
  it("should render an empty cart correctly", () => {
    renderCart;
    const titleElement = screen.getByRole("heading", { level: 1 });
    const totalElement = screen.getByTestId("total");
    const cartListElement = screen.getByRole("list");

    screen.debug(totalElement);

    expect(titleElement).toHaveTextContent("Carrinho");
    expect(totalElement).toHaveTextContent("$0");
    expect(cartListElement).toBeEmptyDOMElement();
  });

  it("should render a car with two products", () => {
    render(
      <Cart
        showCart={true}
        setShowCart={function (arg: boolean): void {
          throw new Error("Function not implemented.");
        }}
        cart={cart}
      />
    );
    const productsItemElements = screen.getAllByRole("listitem");
    const firstProductTitleElement = screen.getByText(cart[0].title);
    const secondProductTitleElement = screen.getByText(cart[1].title);

    expect(productsItemElements.length).toBe(2);
    expect(firstProductTitleElement).toBeInTheDocument();
    expect(secondProductTitleElement).toBeInTheDocument();
  });

  it("should remove product when remove button is clicked", () => {
    render(
      <Cart
        showCart={true}
        setShowCart={function (arg: boolean): void {
          throw new Error("Function not implemented.");
        }}
        cart={[products[0]]}
      />
    );
    const removeProductButton = screen.getByTestId("remover");

    userEvent.click(removeProductButton);
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(removeProduct(products[0]));
  });
});
