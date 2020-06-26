import React from 'react';

function AddCartButton(props) {
  const { product, testid } = props;

  const addSession = (itemProduct) => {
    if (!sessionStorage.carrinho) sessionStorage.carrinho = JSON.stringify([]);
    const carrinho = JSON.parse(sessionStorage.carrinho);
    const colocarList = [...carrinho, itemProduct];
    sessionStorage.carrinho = JSON.stringify(colocarList);
  };

  return (
    <button
      data-testid={testid}
      onClick={() => addSession(product)}
    >
    add carrinho
    </button>
  );
}

export default AddCartButton;
