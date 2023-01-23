import React from "react";
import "./product.css";
const Products = ({ state, dispatch }) => {
  const { products, cart } = state;
  return (
    <>
      <div className="products__head">
        {products.map((prod) => {
          return (
            <div className="products__listing">
              <img
                style={{ height: 200, objectFit: "cover" }}
                src={prod.thumbnail}
                alt={prod.title}
              />
              <div className="product__title">
                <span>{prod.title}</span>
                <b>$ {prod.price}</b>
              </div>
              {cart.some((p) => p.id === prod.id) ? (
                <button
                  style={{
                    padding: 5,
                    border: 0,
                    borderRadius: 5,
                    backgroundColor: "orange",
                    color: "black",
                    gap: 10,
                  }}
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: prod,
                    });
                  }}
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  style={{
                    padding: 5,
                    border: 0,
                    borderRadius: 5,
                    backgroundColor: "green",
                    color: "white",
                    gap: 10,
                  }}
                  onClick={() => {
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: {
                        id: prod.id,
                        title: prod.title,
                        thumbnail: prod.thumbnail,
                        qty: 1,
                        price: prod.price,
                      },
                    });
                  }}
                >
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
