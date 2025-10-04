import React, { useState, useEffect } from "react";
import { getProducts, addProduct, updateProduct, deleteProduct } from "./api";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import SearchFilter from "./components/SearchFilter";

function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // Fetch products on mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddOrUpdate = async (productData) => {
    try {
      if (editingProduct) {
        console.log("productData", productData);
        
        const { data } = await updateProduct(editingProduct.id, productData);
        setProducts(products.map((p) => (p.id === editingProduct.id ? data : p)));
        setEditingProduct(null);
      } else {
        const { data } = await addProduct(productData);
        setProducts([...products, data]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((p) => p.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  // Filter products
  const filteredProducts = products.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      p.category.toLowerCase().includes(categoryFilter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-base md:text-2xl font-bold mb-6 text-center">
        📦 Product Management Dashboard
      </h1>
      <ProductForm onSubmit={handleAddOrUpdate} editingProduct={editingProduct} />
      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        category={categoryFilter}
        setCategory={setCategoryFilter}
      />
      <ProductList products={filteredProducts} onEdit={setEditingProduct} onDelete={handleDelete} />
    </div>
  );
}

export default App;
