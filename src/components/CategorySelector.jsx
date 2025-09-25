import React from 'react';

const categories = ['Saree', 'Kurti', 'Dress', 'Shirt', 'Pants', 'lehenga choli', 'watch'];

export default function CategorySelector({ selected, onSelect }) {
  return (
    <div className="category-selector">
      <label>Select Category:</label>
      <select value={selected} onChange={e => onSelect(e.target.value)}>
        <option value="">Choose...</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
}
