import React from "react";

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table border="1" cellPadding="10" className="w-full border-collapse bg-white shadow-md rounded-xl overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Description</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td className="p-3">{p.title}</td>
              <td className="p-3">{p.price}</td>
              <td className="p-3">{p.category}</td>
              <td className="p-3">{p.description}</td>
              <td className="p-3 flex justify-center gap-2">
                <button onClick={() => onEdit(p)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 cursor-pointer">
                    Edit
                </button>
                <button onClick={() => onDelete(p.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer"
                >Delete</button>
              </td>
            </tr>
          ))}
          {
            products.length === 0 && (
              <tr>
                <td colSpan="5" className="p-3 text-center text-gray-500">
                  No Products
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
