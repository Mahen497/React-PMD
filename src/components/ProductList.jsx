import React from "react";
import Pagination from "./Pagination";

const ProductList = ({ products, onEdit, onDelete, currentPage, setCurrentPage, productsPerPage }) => {
  if (products.length === 0) {
    return <p className="text-center text-gray-500 text-2xl">No products found</p>;
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <>
        {products.length === 0 ? (
          <p className="text-center text-gray-500">No products found</p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {currentProducts.map((p) => (
              <div
                key={p.id}
                className="card bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition border-1 relative"
              >
                <img
                  src={p.image || "https://via.placeholder.com/200"}
                  alt={p.title}
                  className="h-40 w-full object-contain p-4 bg-gray-50"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-1">{p.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3 h-10">
                    {p.description}
                  </p>
                  <div className="flex justify-between items-center mb-3 flex-col lg:flex-row">
                    <span className="text-blue-600 font-bold mb-2 lg:mb-0">${p.price}</span>
                    <span className="text-sm bg-gray-200 px-2 py-1 rounded">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex gap-5">
                    <button
                      onClick={() => onEdit(p)}
                      className="button_card "
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(p.id)}
                      className="button_card "
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default ProductList;
