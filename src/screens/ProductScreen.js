import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleProduct } from "../redux/products/productActions";
import Rating from "../components/Rating";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const ProductScreen = ({ match, history }) => {
  const productId = match.params.id;
  const disptach = useDispatch();
  const singleProductReducer = useSelector((state) => state.singleProduct);
  const { singleProductsLoading, singleProductsData, singleProductsError } =
    singleProductReducer;

  const [qty, setQty] = useState(1);

  const addToCartHandler = () => {
    history.push(`/cart/${productId}?qty=${qty}`);
  };

  useEffect(() => {
    disptach(getSingleProduct(productId));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disptach]);

  return (
    <div>
      {singleProductsLoading ? (
        <LoadingBox />
      ) : singleProductsError ? (
        <MessageBox variant="danger">{singleProductsError}</MessageBox>
      ) : (
        <>
          <Link to="/">Back to result</Link>
          <div className="row top">
            <div className="col-2">
              <img
                src={singleProductsData.image}
                alt={singleProductsData.name}
                className="large"
              />
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{singleProductsData.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={singleProductsData.rating}
                    numReviews={singleProductsData.numReviews}
                  />
                </li>
                <li>Price: &#8377;{singleProductsData.price}</li>
                <li>Description: {singleProductsData.description}</li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">
                        &#8377;{singleProductsData.price}
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {singleProductsData.countInStock > 0 ? (
                          <span className="success">In stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {singleProductsData.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Quantity</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[
                                ...Array(
                                  singleProductsData.countInStock
                                ).keys(),
                              ].map((x) => (
                                <option value={x + 1} key={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </li>
                    </>
                  )}
                  <li>
                    <button
                      className="primary block"
                      onClick={addToCartHandler}
                    >
                      Add to cart
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
