import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Product from "../components/Product";
import { getAllProducts } from "../redux/products/productActions";

const HomeScreen = () => {
  const disptach = useDispatch();
  const productReducer = useSelector((state) => state.allProducts);
  const { allProductsLoading, allProductsData, allProductsError } =
    productReducer;

  useEffect(() => {
    disptach(getAllProducts());
  }, [disptach]);

  return (
    <div>
      {allProductsLoading ? (
        <LoadingBox />
      ) : allProductsError ? (
        <MessageBox variant="danger">{allProductsError}</MessageBox>
      ) : (
        allProductsData.length > 0 && (
          <div className="row center">
            {allProductsData.map((product) => (
              <Product product={product} key={product._id} />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default HomeScreen;
