import React from 'react';

function AddCartButton(props) {
  const { product } = props;

  const addSession = (product) => {
    if (!sessionStorage.carrinho) sessionStorage.carrinho = JSON.stringify([]);
    const carrinho = JSON.parse(sessionStorage.carrinho);
    const colocarList = [...carrinho, product];
    sessionStorage.carrinho = JSON.stringify(colocarList);
  };

  return (
    <button
      data-testid="product-add-to-cart"
      onClick={() => addSession(product)}
    >
      add carrinho
    </button>
  );
}

export default AddCartButton;
