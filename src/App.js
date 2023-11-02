import React, { useState } from "react";
import "./styles.css"; // Import your styles
import productsData from "./components/productsData";
import ProductList from "./components/productList";
import FilterAndSort from "./components/FilterAndSort";
import Pagination from "./components/pagination";

function App() {
  const [products, setProducts] = useState(productsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortOption, setSortOption] = useState("");

  const categories = Array.from(new Set(productsData.map((product) => product.category)));

  // Filter products based on category
  const filteredProducts = products.filter((product) =>
    categoryFilter ? product.category === categoryFilter : true
  );

  // Sort products based on the selected sorting option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-low-to-high") {
      return a.price - b.price;
    } else if (sortOption === "price-high-to-low") {
      return b.price - a.price;
    }
    return 0;
  });

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  // Handle page change
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle category filter change
  const onCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
    setCurrentPage(1); // Reset to the first page when filtering
  };

  // Handle sorting change
  const onSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Product List</h1>
      </div>
      <FilterAndSort
        categories={categories}
        onFilterChange={onCategoryChange}
        onSortChange={onSortChange}
      />
      <ProductList products={currentProducts} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
      <div className="footer">
        &copy; {new Date().getFullYear} Desgined by Tripti
      </div>
    </div>
  );
}

export default App;
