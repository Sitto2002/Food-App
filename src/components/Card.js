import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from './ContextReducer'

export default function Card(props) {

  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  let options = props.options;
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const handleAddToCart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === props._id) {
        food = item;
        break;
      }
    }

    if (food !== []) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: props._id,
          Price: finalPrice,
          qty: qty,
        });
        return ;
      } else if ( food.size !== size ){
      await dispatch({
        type: "ADD",
        id: props._id,
        Name: props.Name,
        Price: finalPrice,
        qty: qty,
        size: size,
      });
      return ;
    }
    return ;
  }
    await dispatch({
      type: "ADD",
      id: props._id,
      Name: props.Name,
      Price: finalPrice,
      qty: qty,
      size: size, 
    });
  };

  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <div>
      <div className="card" style={{ width: "18rem", maxHeight: "360px" }}>
        <img
          src={props.img}
          className="card-img-top"
          alt="..."
          style={{ height: "100px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title"> {props.Name} </h5>
          <div className="container w-100">
            <select
              className="m-2 h-100 bg-warning rounded"
              onChange={(e) => setQty(e.target.value)}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {" "}
                    {i + 1}{" "}
                  </option>
                );
              })}
            </select>

            <select
              className="m-2 h-100 bg-warning rounded"
              ref={priceRef}
              onChange={(e) => setSize(e.target.value)}
            >
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {" "}
                    {data}{" "}
                  </option>
                );
              })}
            </select>

            <div className="d-inline h-100 fs-10"> ₹{finalPrice} /- </div>
          </div>
        </div>
        <hr />
        <button className={"btn btn-success"} onClick={handleAddToCart}>
          {" "}
          Add to Cart{" "}
        </button>
      </div>
    </div>
  );
}
