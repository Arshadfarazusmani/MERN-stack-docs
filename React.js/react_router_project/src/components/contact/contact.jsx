// import React from 'react'

// function Contact() {
//     return (
//         <>

//          <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
//             <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
//                 <div className="mt-8 overflow-hidden">
//                     <div className="grid grid-cols-1 md:grid-cols-2">
//                         <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
//                             <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
//                                 Get in touch: 
//                             </h1>
//                             <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
//                                 Fill in the form to start a conversation
//                             </p>

//                             <div className="flex items-center mt-8 text-gray-600">
//                                 <svg
//                                     fill="none"
//                                     stroke="currentColor"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                     stroke-width="1.5"
//                                     viewBox="0 0 24 24"
//                                     className="w-8 h-8 text-gray-500"
//                                 >
//                                     <path
//                                         stroke-linecap="round"
//                                         stroke-linejoin="round"
//                                         stroke-width="1.5"
//                                         d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                                     />
//                                     <path
//                                         stroke-linecap="round"
//                                         stroke-linejoin="round"
//                                         stroke-width="1.5"
//                                         d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                                     />
//                                 </svg>
//                                 <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                                     Acme Inc, Street, State, Postal Code
//                                 </div>
//                             </div>

//                             <div className="flex items-center mt-4 text-gray-600">
//                                 <svg
//                                     fill="none"
//                                     stroke="currentColor"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                     stroke-width="1.5"
//                                     viewBox="0 0 24 24"
//                                     className="w-8 h-8 text-gray-500"
//                                 >
//                                     <path
//                                         stroke-linecap="round"
//                                         stroke-linejoin="round"
//                                         stroke-width="1.5"
//                                         d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                                     />
//                                 </svg>
//                                 <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                                     +44 1234567890
//                                 </div>
//                             </div>

//                             <div className="flex items-center mt-2 text-gray-600">
//                                 <svg
//                                     fill="none"
//                                     stroke="currentColor"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                     stroke-width="1.5"
//                                     viewBox="0 0 24 24"
//                                     className="w-8 h-8 text-gray-500"
//                                 >
//                                     <path
//                                         stroke-linecap="round"
//                                         stroke-linejoin="round"
//                                         stroke-width="1.5"
//                                         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                                     />
//                                 </svg>
//                                 <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                                     info@acme.org
//                                 </div>
//                             </div>
//                         </div>

//                         <form className="p-6 flex flex-col justify-center">
//                             <div className="flex flex-col">
//                                 <label for="name" className="hidden">
//                                     Full Name
//                                 </label>
//                                 <input
//                                     type="name"
//                                     name="name"
//                                     id="name"
//                                     placeholder="Full Name"
//                                     className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
//                                 />
//                             </div>

//                             <div className="flex flex-col mt-2">
//                                 <label for="email" className="hidden">
//                                     Email
//                                 </label>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     id="email"
//                                     placeholder="Email"
//                                     className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
//                                 />
//                             </div>

//                             <div className="flex flex-col mt-2">
//                                 <label for="tel" className="hidden">
//                                     Number
//                                 </label>
//                                 <input
//                                     type="tel"
//                                     name="tel"
//                                     id="tel"
//                                     placeholder="Telephone Number"
//                                     className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
//                                 />
//                             </div>

//                             <button
//                                 type="submit"
//                                 className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
//                             >
//                                 Submit
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
        
//         </>
//     )
// }

// export default Contact


import React, { useState } from 'react';

// --- Contact Us Page Component ---
// This component provides a professional and aesthetically pleasing
// contact page with a form and contact details.
const ContactUsPage = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // State for form submission status
  const [status, setStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to an API
    console.log('Form submitted:', formData);
    
    // For this example, we'll just simulate a successful submission.
    setTimeout(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div className="bg-[#f2e7d7] text-[#4a342b] min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold text-center font-serif mb-12">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <div>
            <h2 className="text-3xl font-semibold font-serif mb-4">Get in Touch</h2>
            <p className="text-md leading-relaxed mb-6">
              We would love to hear from you. Whether you have a question about our collection, need support, or just want to share your thoughts, please reach out to us.
            </p>
            
            <ul className="space-y-4 text-lg">
              <li className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-[#4a342b]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-5.6-5.62A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.18 2h3a2 2 0 0 1 2 1.72c.15.9.44 1.74.88 2.52a2 2 0 0 1-.32 2.76L6.5 10.5a11 11 0 0 0 5 5l1.25-1.74a2 2 0 0 1 2.76-.32c.78.44 1.62.73 2.52.88a2 2 0 0 1 1.72 2v3z" />
                </svg>
                <p>+91-1234567890</p>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-[#4a342b]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <p>contact@arshadbookdepot.com</p>
              </li>
              <li className="flex items-start space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-[#4a342b] mt-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="3" />
                </svg>
                <p>
                  Arshad Book Depot, Deoband, Uttar Pradesh, India
                </p>
              </li>
            </ul>
          </div>
          
          {/* Contact Form Section */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-semibold font-serif mb-6 text-center">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#4a342b]">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4a342b] focus:ring focus:ring-[#4a342b] focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#4a342b]">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4a342b] focus:ring focus:ring-[#4a342b] focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#4a342b]">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4a342b] focus:ring focus:ring-[#4a342b] focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#4a342b]">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4a342b] focus:ring focus:ring-[#4a342b] focus:ring-opacity-50"
                  required
                ></textarea>
              </div>
              {status && <p className="text-center text-green-600 font-semibold">{status}</p>}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#4a342b] text-[#e0c9a4] font-semibold py-2 px-6 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
