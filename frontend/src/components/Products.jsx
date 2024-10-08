import React, { useState } from "react";

const Products = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [products, setProducts] = useState([]);

  const isVisable = () => {
    setShowProducts(!showProducts);

    if (!showProducts) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      fetch("http://localhost:8000/api/products")
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setProducts(result);
        })

        .catch((error) => console.error(error));
    }
  };

  return (
    <section
      id="products"
      className="bg-zinc-300 opacity-90 min-h-[100vh] flex flex-col justify-start items-center p-8"
    >
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <button
        onClick={isVisable}
        className="rounded-3xl bg-zinc-800 text-white p-3 mb-8 hover:bg-transparent hover:text-zinc-800 transition-colors duration-500"
      >
        {showProducts ? "Hide Products" : "Go To Products"}
      </button>

      {!showProducts && (
        <p className="font-extrabold text-zinc-700 backdrop-blur text-[1.2rem] mt-4 max-w-5xl text-center">
          "Our Shop offers the ultimate pleasurable experience of shopping and
          makes the process even more great!" — Nahom Tewodros, Jr.Software
          Engineer
        </p>
      )}

      {showProducts && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={product.imageUrl}
                alt={product.image}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold text-zinc-800 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <h3 className="text-lg font-semibold text-zinc-800">
                ${product.price}
              </h3>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;
