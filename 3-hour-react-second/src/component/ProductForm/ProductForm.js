import React, { Fragment, useState } from "react";

import ProductList from "../ProductList/ProductList";
import Card from "../UI/Card";

const ProductForm = (props) => {
  console.log("rerender product form")
  const [productList, setProductList] = useState([]);

  const [enteredShoeName, setShoeName] = useState("");
  const [enteredDescription, setDescription] = useState("");
  const [enteredPrice, setPrice] = useState("");
  const [enteredlarge, setlarge] = useState("");
  const [enteredMedium, setMedium] = useState("");
  const [enteredSmall, setSmall] = useState("");

  const shoeNameChangeHandler = (e) => {
    setShoeName(e.target.value);
  };

  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };

  const largeChangeHandler = (e) => {
    setlarge(e.target.value);
  };

  const mediumChangeHandler = (e) => {
    setMedium(e.target.value);
  };

  const smallChangeHandler = (e) => {
    setSmall(e.target.value);
  };

  const addSubmitHandler = (e) => {
    e.preventDefault();

    setProductList((prevList) => {
      return [
        ...prevList,
        {
          id:Math.random(),
          shoeName: enteredShoeName,
          description: enteredDescription,
          price: enteredPrice,
          large: enteredlarge,
          medium: enteredMedium,
          small: enteredSmall,
        }
      ];
    });
    setShoeName("");
    setDescription("")
    setPrice("");
    setlarge("")
    setMedium("");
    setSmall("");
  };

  return (
    <Card>
      <form onSubmit={addSubmitHandler}>
        <label htmlFor="shoeName">Shoe Name</label>
        <input
          type="text"
          id="shoeName"
          value={enteredShoeName}
          onChange={shoeNameChangeHandler}
        ></input>
        <label htmlFor="Description">Description</label>
        <input
          type="text"
          id="Description"
          value={enteredDescription}
          onChange={descriptionChangeHandler}
        ></input>
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          value={enteredPrice}
          onChange={priceChangeHandler}
        ></input>
      
        <label htmlFor="large">Large</label>
        <input
          type="number"
          id="large"
          value={enteredlarge}
          onChange={largeChangeHandler}
        ></input>
        <label htmlFor="medium">Medium</label>
        <input
          type="number"
          id="medium"
          value={enteredMedium}
          onChange={mediumChangeHandler}
        ></input>
        <label htmlFor="small">Small</label>
        <input
          type="number"
          id="small"
          value={enteredSmall}
          onChange={smallChangeHandler}
        ></input>

        <button type="submit"> Add product</button>
      </form>
      <ProductList productItem={productList} />
    </Card>
  );
};

export default ProductForm;
