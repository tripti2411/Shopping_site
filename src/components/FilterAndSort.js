import React from "react";

const FilterAndSort = ({ categories, onFilterChange, onSortChange }) => {
  return (
    <div className="filter-and-sort">
      <select className="select" onChange={onFilterChange}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <select className="select" onChange={onSortChange}>
        <option value="">Sort by</option>
        <option value="price-low-to-high">Price: Low to High</option>
        <option value="price-high-to-low">Price: High to Low</option>
      </select>
    </div>
  );
};

export default FilterAndSort;
