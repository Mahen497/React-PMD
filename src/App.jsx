import React, { useState, useEffect } from "react";
import { getProducts, addProduct, updateProduct, deleteProduct } from "./api";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import SearchFilter from "./components/SearchFilter";
import Modal from "./components/Modal";

function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showSearchPanel, setShowSearchPanel] = useState(true);
  

  const productsPerPage = 5;

  // Fetch products on mount
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, categoryFilter]);

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
        const { data } = await updateProduct(editingProduct.id, productData);
        setProducts(products.map((p) => (p.id === editingProduct.id ? data : p)));
        setEditingProduct(null);
      } else {
        const { data } = await addProduct(productData);
        setProducts([...products, data]);
      }
      setShowModal(false);
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

  const handleAddProductClick = () => {
    console.log("Add Product Clicked");
    setShowModal(true);
    setEditingProduct(null);
  }

  const handleSearchProductClick = () => {
    setShowSearchPanel((prev) => !prev);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">

      <div className="flex">
        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          category={categoryFilter}
          setCategory={setCategoryFilter}
          show={showSearchPanel}
        />
        <div className="sm:ml-6 w-full">
          <button
            className="button_card px-2 md:px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
            type="submit"
            onClick={handleAddProductClick}
          >
            Add Product
          </button>
          <button className="button_card px-2 ml-4" onClick={handleSearchProductClick}>
            {
              showSearchPanel ? " Hide Search" : " 🔍 Search Product"
            }
          </button>
          <h1 className="text-base md:2xl xl:text-3xl font-bold mb-6 text-center">
            📦 Product Management Dashboard (PMD)
          </h1>
          <ProductList
            products={filteredProducts}
            onDelete={handleDelete}
            onEdit={(product) => {
              setEditingProduct(product);
              setShowModal(true);
            }}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            productsPerPage={productsPerPage}
          />
          <Modal isOpen={showModal} onClose={() => setShowModal(false)} >
            <ProductForm onSubmit={handleAddOrUpdate} editingProduct={editingProduct} />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default App;
