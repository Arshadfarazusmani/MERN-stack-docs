import React from 'react';
import { Link } from 'react-router-dom';

// --- Catalog Page Component ---
// This component displays a grid of all available books in a catalog format.
const CatalogPage = () => {
  // Sample data for the books in the catalog.
  const catalogBooks = [
    { id: 1, title: 'The Prophet', author: 'Khalil Gibran', imageUrl: 'https://placehold.co/400x600/5E412F/fff?text=Book+1', price: 'Rs. 500' },
    { id: 2, title: 'Rumi\'s Little Book of Love', author: 'Rumi', imageUrl: 'https://placehold.co/400x600/5E412F/fff?text=Book+2', price: 'Rs. 650' },
    { id: 3, title: 'The Holy Quran', author: 'Various', imageUrl: 'https://placehold.co/400x600/5E412F/fff?text=Book+3', price: 'Rs. 800' },
    { id: 4, title: 'Mystical Poems of the East', author: 'Allama Iqbal', imageUrl: 'https://placehold.co/400x600/5E412F/fff?text=Book+4', price: 'Rs. 720' },
    { id: 5, title: 'The Conference of the Birds', author: 'Farid ud-Din Attar', imageUrl: 'https://placehold.co/400x600/5E412F/fff?text=Book+5', price: 'Rs. 750' },
    { id: 6, title: 'The Masnavi', author: 'Rumi', imageUrl: 'https://placehold.co/400x600/5E412F/fff?text=Book+6', price: 'Rs. 1200' },
    { id: 7, title: 'The Road to Mecca', author: 'Muhammad Asad', imageUrl: 'https://placehold.co/400x600/5E412F/fff?text=Book+7', price: 'Rs. 950' },
    { id: 8, title: 'Iqbal: The Poet of the East', author: 'Various', imageUrl: 'https://placehold.co/400x600/5E412F/fff?text=Book+8', price: 'Rs. 600' },
  ];

  return (
    <div className="bg-[#f2e7d7] min-h-screen p-8">
      <h1 className="text-5xl font-bold text-center text-[#4a342b] mb-12">Book Catalog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {catalogBooks.map(book => (
          <ProductCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

// --- Product Card Component ---
// This component displays a single book item.
const ProductCard = ({ book }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 transform hover:shadow-2xl hover:-translate-y-1">
      <img
        src={book.imageUrl}
        alt={book.title}
        className="w-full h-80 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/400x600/5E412F/fff?text=No+Image";
        }}
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-[#4a342b] font-serif mb-1 line-clamp-2">
          {book.title}
        </h3>
        <p className="text-sm text-[#888] mb-3">by {book.author}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-[#4a342b]">
            {book.price}
          </span>
          <button className="bg-[#4a342b] text-[#e0c9a4] py-2 px-4 rounded-full text-sm font-semibold transition-colors duration-300 hover:bg-[#5E412F]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
