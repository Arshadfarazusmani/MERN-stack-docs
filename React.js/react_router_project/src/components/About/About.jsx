// import React from 'react'

// function About() {
//     return (
//         <>
//         <div className="py-16 bg-white">
//             <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
//                 <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
//                     <div className="md:5/12 lg:w-5/12">
//                         <img
//                             src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
//                             alt="image"
//                         />
//                     </div>
//                     <div className="md:7/12 lg:w-6/12">
//                         <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
//                             React development is carried out by passionate developers
//                         </h2>
//                         <p className="mt-6 text-gray-600">
//                             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
//                             accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
//                             aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
//                         </p>
//                         <p className="mt-4 text-gray-600">
//                             Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
//                             Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }

// export default About



// import React from 'react';

// // --- About Us Page Component ---
// // This component provides the UI for the "About Us" page,
// // designed to reflect the spiritual and professional aesthetic of the store.
// const AboutUsPage = () => {
//   return (
//     <div className="bg-[#f2e7d7] text-[#4a342b] min-h-screen py-16">
//       <div className="container mx-auto px-4 max-w-4xl">
//         <h1 className="text-5xl font-bold text-center font-serif mb-12">About Us</h1>

//         {/* Introduction Section */}
//         <section className="mb-12">
//           <p className="text-lg text-center leading-relaxed">
//             Welcome to Arshad Book Depot, a haven for those seeking a deeper understanding of Islamic wisdom and literature. We are a dedicated bookstore based in **Deoband, Uttar Pradesh**, committed to providing a comprehensive collection of Urdu and Arabic books. Our mission is to serve as a one-stop solution for scholars, students, and enthusiasts of Islamic knowledge.
//           </p>
//         </section>

//         <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
//           {/* Our Mission Section */}
//           <div>
//             <h2 className="text-3xl font-semibold font-serif mb-4">Our Mission</h2>
//             <p className="text-md leading-relaxed mb-4">
//               At Arshad Book Depot, our goal is to bridge the gap between ancient wisdom and the modern reader. We believe that access to authentic Islamic texts is essential for personal growth and spiritual enlightenment. Our carefully curated collection spans various genres, from theology and history to poetry and philosophy.
//             </p>
//             <p className="text-md leading-relaxed">
//               We are passionate about fostering a community of learners and thinkers, providing them with the resources they need to explore the rich heritage of Islamic thought.
//             </p>
//           </div>
          
//           {/* Image Placeholder */}
//           <div className="relative h-72 rounded-lg overflow-hidden shadow-xl">
//             <img
//               src="https://placehold.co/600x400/5E412F/fff?text=Our+Store"
//               alt="Arshad Book Depot store interior"
//               className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//             />
//           </div>
//         </div>

//         {/* Our Vision Section */}
//         <section className="text-center">
//           <h2 className="text-3xl font-semibold font-serif mb-4">Our Vision</h2>
//           <p className="text-md leading-relaxed max-w-3xl mx-auto">
//             We envision a world where the profound teachings of Islamic culture are easily accessible and widely appreciated. Through our commitment to quality, authenticity, and excellent service, we strive to be the most trusted source for Islamic books, both locally in Deoband and for a global audience through our online platform.
//           </p>
//         </section>

//       </div>
//     </div>
//   );
// };

// export default AboutUsPage;



import React from 'react';

// --- About Us Page Component ---
// یہ کمپوننٹ "ہمارے بارے میں" صفحے کے لیے UI فراہم کرتا ہے،
// جو اسٹور کی روحانی اور پیشہ ورانہ خوبصورتی کی عکاسی کرتا ہے۔
const AboutUsPage = () => {
  return (
    <div className="bg-[#f2e7d7] text-[#4a342b] min-h-screen py-16" style={{ direction: 'rtl' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold text-center font-serif mb-12">ہمارے بارے میں</h1>

        {/* Introduction Section */}
        <section className="mb-12">
          <p className="text-lg text-center leading-relaxed">
            ارشد بک ڈپو میں خوش آمدید، جو اسلامی حکمت اور ادب کی گہری سمجھ کے متلاشیوں کے لیے ایک پناہ گاہ ہے۔ ہم **دیوبند، اتر پردیش** میں واقع ایک وقف شدہ بک اسٹور ہیں، جو اردو اور عربی کتابوں کا ایک جامع مجموعہ فراہم کرنے کے لیے پرعزم ہیں۔ ہمارا مشن علمائے کرام، طلباء اور اسلامی علم کے شائقین کے لیے ایک واحد حل کے طور پر کام کرنا ہے۔
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Our Mission Section */}
          <div className="text-right">
            <h2 className="text-3xl font-semibold font-serif mb-4">ہمارا مشن</h2>
            <p className="text-md leading-relaxed mb-4">
              ارشد بک ڈپو میں، ہمارا مقصد قدیم حکمت اور جدید قاری کے درمیان فاصلے کو ختم کرنا ہے۔ ہم سمجھتے ہیں کہ مستند اسلامی کتابوں تک رسائی ذاتی ترقی اور روحانی روشنی کے لیے ضروری ہے۔ ہمارا احتیاط سے تیار کردہ مجموعہ مختلف انواع پر محیط ہے، جس میں الہیات اور تاریخ سے لے کر شاعری اور فلسفہ تک شامل ہے۔
            </p>
            <p className="text-md leading-relaxed">
              ہم سیکھنے والوں اور سوچنے والوں کی ایک کمیونٹی کو فروغ دینے کے لیے پرجوش ہیں، اور انہیں اسلامی فکر کے بھرپور ورثے کو دریافت کرنے کے لیے درکار وسائل فراہم کرتے ہیں۔
            </p>
          </div>
          
          {/* Image Placeholder */}
          <div className="relative h-72 rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://i.pinimg.com/736x/c7/a0/2c/c7a02c089341bd918d9ffc4d1cd394ba.jpg"
              alt="Arshad Book Depot store interior"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Our Vision Section */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold font-serif mb-4">ہمارا وژن</h2>
          <p className="text-md leading-relaxed max-w-3xl mx-auto">
            ہم ایک ایسی دنیا کا تصور کرتے ہیں جہاں اسلامی ثقافت کی گہری تعلیمات آسانی سے قابل رسائی اور وسیع پیمانے پر سراہا جائے۔ معیار، صداقت اور بہترین سروس کے ہمارے عزم کے ذریعے، ہم دیوبند میں مقامی طور پر اور اپنے آن لائن پلیٹ فارم کے ذریعے عالمی سامعین کے لیے اسلامی کتابوں کا سب سے معتبر ذریعہ بننے کی کوشش کرتے ہیں۔
          </p>
        </section>

      </div>
    </div>
  );
};

export default AboutUsPage;
