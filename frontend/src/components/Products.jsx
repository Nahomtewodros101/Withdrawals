import React, { useEffect, useState } from "react";

const Products = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [products, setProducts] = useState([]);

  const isVisable = () => {
    setShowProducts(!showProducts);
  };

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://localhost:8000/api/products", requestOptions)
      .then((response) => response.json()) // Parse directly as JSON
      .then((result) => {
        console.log("Products:", result);
        setProducts(result); // Directly set the result
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <section
      id="products"
      className="bg-zinc-300 h-[150vh] flex flex-col justify-start items-center p-8"
    >
      <h1>Products</h1>
      <button
        onClick={isVisable}
        className="rounded-3xl bg-zinc-800 text-white p-3"
      >
        {showProducts ? "Hide Products" : "Go To Products"}
      </button>
      {showProducts &&
        products.length > 0 &&
        products.map((smth) => (
          <div key={smth.id}>
            <p>{smth.name}</p>
            <h1>{smth.price}</h1>
            <p>{smth.description}</p>
            <img className="w-50" src={smth.imageUrl} alt={smth.name} />
          </div>
        ))}
    </section>
  );
};

export default Products;
