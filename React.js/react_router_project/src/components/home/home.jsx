// import React from 'react'
// import { NavLink , Link } from 'react-router-dom'

// function Home() {
//     return (
//         <>
//         <div className="mx-auto w-full max-w-7xl">
//             <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
//                 <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
//                     <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
//                         <h2 className="text-4xl font-bold sm:text-5xl">
//                             Download Now
//                             <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
//                         </h2>

//                         <Link
//                             className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
//                             to="/"
//                         >
//                             <svg
//                                 fill="white"
//                                 width="24"
//                                 height="24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                             >
//                                 <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
//                             </svg>
//                             &nbsp; Download now
//                         </Link>
//                     </div>
//                 </div>

//                 <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
//                     <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
//                 </div>
//             </aside>

//             <div className="grid  place-items-center sm:mt-20">
//                 <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
//             </div>

//             <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
//         </div>
//         </>

//     )
// }

// export default Home


// import React from 'react';
// import { Link } from 'react-router-dom';

// // --- Home Page Component ---
// // This component encapsulates all the UI for the main homepage content.
// const HomePageUI = () => {
//   // Sample data for the product cards to showcase the layout.
//   const books = [
//     { id: 1, title: 'The Prophet', author: 'Khalil Gibran', imageUrl: 'https://placehold.co/400x600/5E412F/fff?text=Book+1', price: 'Rs. 500' },
//     { id: 2, title: 'Rumi\'s Little Book of Love', author: 'Rumi', imageUrl: 'https://placehold.co/400x600/5E412F/fff?text=Book+2', price: 'Rs. 650' },
//     { id: 3, title: 'The Holy Quran', author: 'Various', imageUrl: 'https://placehold.co/400x600/5E412F/fff?text=Book+3', price: 'Rs. 800' },
//     { id: 4, title: 'Mystical Poems of the East', author: 'Allama Iqbal', imageUrl: 'https://placehold.co/400x600/5E412F/fff?text=Book+4', price: 'Rs. 720' },
//   ];

//   return (
//     <div className="bg-[#f2e7d7] min-h-screen">
//       <HeroSection />
//       <section className="py-16">
//         <h2 className="text-4xl font-bold text-center text-[#4a342b] mb-12">Featured Books</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {books.map(book => (
//             <ProductCard key={book.id} book={book} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// // --- Hero Section Component ---
// // This component is the main banner for the homepage.
// const HeroSection = () => {
//   return (
//     <section className="relative h-96 mb-12 rounded-lg overflow-hidden shadow-xl">
//       <div 
//         className="absolute inset-0 bg-cover bg-center" 
//         style={{ backgroundImage: 'url("https://placehold.co/1200x500/5E412F/FFFFFF?text=Arshad+Book+Depot")' }}
//       ></div>
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
//         <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
//           Discover Spiritual Wisdom
//         </h1>
//         {/* <p className="text-lg md:text-xl text-white mb-6 max-w-2xl">
//           Explore a curated collection of Islamic literature, philosophy, and history to enlighten your mind and soul.
//         </p> */}
//         <button className="bg-[#e0c9a4] text-[#4a342b] font-semibold py-3 px-8 rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
//           Explore Now
//         </button>
//       </div>
//     </section>
//   );
// };

// // --- Product Card Component ---
// // This component displays a single book item.
// const ProductCard = ({ book }) => {
//   return (
//     <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 transform hover:shadow-2xl hover:-translate-y-1">
//       <img
//         src={book.imageUrl}
//         alt={book.title}
//         className="w-full h-80 object-cover"
//         onError={(e) => {
//           e.target.onerror = null;
//           e.target.src = "https://placehold.co/400x600/5E412F/fff?text=No+Image";
//         }}
//       />
//       <div className="p-5">
//         <h3 className="text-xl font-semibold text-[#4a342b] font-serif mb-1 line-clamp-2">
//           {book.title}
//         </h3>
//         <p className="text-sm text-[#888] mb-3">by {book.author}</p>
//         <div className="flex justify-between items-center mt-4">
//           <span className="text-xl font-bold text-[#4a342b]">
//             {book.price}
//           </span>
//           <button className="bg-[#4a342b] text-[#e0c9a4] py-2 px-4 rounded-full text-sm font-semibold transition-colors duration-300 hover:bg-[#5E412F]">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePageUI;



import React from 'react';
import { Link } from 'react-router-dom';

// --- Home Page Component ---
// This component encapsulates all the UI for the main homepage content.
const HomePageUI = () => {
  // Sample data for the product cards to showcase the layout.
  const books = [
    { id: 1, title: 'The Prophet', author: 'Khalil Gibran', imageUrl: 'https://placehold.co/400x600/5E412F/fff?text=Book+1', price: 'Rs. 500' },
    { id: 2, title: 'Rumi\'s Little Book of Love', author: 'Rumi', imageUrl: 'https://placehold.co/400x600/5E412F/fff?text=Book+2', price: 'Rs. 650' },
    { id: 3, title: 'The Holy Quran', author: 'Various', imageUrl: 'https://placehold.co/400x600/5E412F/fff?text=Book+3', price: 'Rs. 800' },
    { id: 4, title: 'Mystical Poems of the East', author: 'Allama Iqbal', imageUrl: 'https://placehold.co/400x600/5E412F/fff?text=Book+4', price: 'Rs. 720' },
  ];

  return (
    <div className="bg-[#f2e7d7] min-h-screen">
      <HeroSection />
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center text-[#4a342b] mb-12">Featured Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map(book => (
            <ProductCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
};

// --- Hero Section Component ---
// This component is the main banner for the homepage.
const HeroSection = () => {
  return (
    <section className="relative h-96 mb-12 rounded-lg overflow-hidden shadow-xl">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: 'url("https://i.pinimg.com/736x/61/10/e7/6110e7fa774d639e168c82cc630b371b.jpg")' }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Discover Spiritual Wisdom
        </h1>
        <p className="text-lg md:text-xl text-white mb-6 max-w-2xl">
          Explore a curated collection of Islamic literature, philosophy, and history to enlighten your mind and soul.
        </p>
        <button className="bg-[#e0c9a4] text-[#4a342b] font-semibold py-3 px-8 rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
          Explore Now
        </button>
      </div>
    </section>
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

export default HomePageUI;
