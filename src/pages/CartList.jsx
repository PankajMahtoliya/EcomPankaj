// eslint-disable-next-line no-unused-vars
import React, { memo, useEffect } from "react";
import Cart from "./Cart";
import { getProductData } from "../Api";
import { useState } from "react";

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
function CartList({ cart, updatecart }) {
  const [items, setItems] = useState([]);
  const [loading, setloading] = useState(true);
  const [localcart, setLocalcart] = useState(cart);

  console.log("localcart", localcart);

  const productID = Object.keys(cart);

  useEffect(
    function () {
      const itemsPromises = productID.map(function (id) {
        return getProductData(id);
      });

      Promise.all(itemsPromises).then(function (items) {
        setItems(items);
        setloading(false);
      });
    },
    [cart]
  );

  return (
    <div>
      {items.map(function (d) {
        return (
          <Cart
            key={d.id}
            {...d}
            cart={cart}
            updatecart={updatecart}
            loading={loading}
            setloading={setloading}
            localcart={localcart}
            setLocalcart={setLocalcart}
          />
        );
      })}
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(CartList);
