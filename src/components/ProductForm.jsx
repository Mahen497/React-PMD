import React, { useState, useEffect } from "react";

const ProductForm = ({ onSubmit, editingProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingProduct) {
      setTitle(editingProduct.title);
      setPrice(editingProduct.price);
      setCategory(editingProduct.category);
      setDescription(editingProduct.description);
    }
  }, [editingProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, price, category, description });
    setTitle("");
    setPrice("");
    setCategory("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="card bg-white p-4 lg:p-6 rounded-xl shadow-md mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
      {/* Title */}
      <div>
        <label className="block text-gray-700 mb-1">Title</label>
        <input
          className="w-full border p-2 rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      {/* Price */}
      <div>
        <label className="block text-gray-700 mb-1">Price</label>
        <input
          className="w-full border p-2 rounded"
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-gray-700 mb-1">Category</label>
        <input
          className="w-full border p-2 rounded"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>

      {/* Description */}
      <div className="sm:col-span-3">
        <label className="block text-gray-700 mb-1">Description</label>
        <textarea
          className="w-full border p-2 rounded"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="sm:col-span-3 text-right">
        <button
          className="button_card px-2 md:px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
          type="submit"
        >
          {editingProduct ? "Update" : "Add"} Product
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
