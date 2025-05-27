'use client';

import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead'; // 🛜 add SEO Head
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    description: '',
  });

  const handleClick = () => {
    const phoneNumber = '971588742991';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleChange = (e) => { // 👉 No TypeScript here
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => { // 👉 No TypeScript here
    e.preventDefault();

    // 🛜 Later you will call EmailJS API here
    setTimeout(() => {
      toast.success('Message sent successfully!');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', description: '' });
    }, 800);
  };

  return (
    <>
      <SeoHead 
        title="Contact Us - Al Saif Decor"
        description="Get in touch with Al Saif Decor for top interior designing services in Sharjah, UAE."
        keywords="Contact, Interior Design, Sharjah, UAE, Al Saif Decor"
        canonical="https://www.alsaifdecor.com/contact"
      />

      <Toaster position="top-right" />
      <Navbar />

      <div className="min-h-screen px-6 py-12 md:px-20 bg-white text-black">
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Left Side */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Contact us.</h2>
            <p className="text-gray-700 font-mono">
              If you have any questions, projects or requests,<br /> please do not hesitate to contact us.
            </p>
            <div className="space-y-1 text-sm text-gray-600 font-mono">
              <p>Office 307, Al Faisal Building 1,<br />King Faisal Street,<br />Sharjah, U.A.E</p>
              <p className="text-blue-600 underline mt-2">contact@alsaif.com</p>
              <p>+971 (0) 58 874 29 91</p>
            </div>
            <button
              onClick={handleClick}
              className="relative overflow-hidden px-4 py-2 rounded-md text-sm tracking-widest flex items-center gap-2 group border"
            >
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">Chat on WhatsApp</span>
              <span className="text-2xl relative z-10 text-black group-hover:text-white transition-colors duration-300">↗</span>
              <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></span>
            </button>
          </div>

          {/* Right Side Form */}
          <form className="space-y-6 w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block text-xs mb-1 font-medium">First Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border border-black w-full px-3 py-2"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block text-xs mb-1 font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border border-black w-full px-3 py-2"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs mb-1 font-medium">E-mail <span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-black w-full px-3 py-2"
                placeholder="Enter your email"
                required
              />
            </div>

          <div>
  <label className="block text-xs mb-1 font-medium">Phone <span className="text-red-500">*</span></label>
  <div className="w-full">
    <PhoneInput
      country={'ae'}
      value={formData.phone}
      onChange={(phone) => setFormData((prev) => ({ ...prev, phone }))}
      inputStyle={{
        width: '100%',
        height: '44px',
        border: '1px solid black',
        borderRadius: '0.375rem',
        paddingLeft: '50px', // space for flag and code
        fontSize: '14px',
      }}
      buttonStyle={{
        border: '1px solid black',
        backgroundColor: '',
      }}
      containerStyle={{
        width: '100%',
      }}
      dropdownStyle={{
        zIndex: 999,
        color: 'black',
      }}
      enableSearch={true}
      inputProps={{
        required: true,
        name: 'phone',
        autoFocus: false,
      }}
    />
  </div>
</div>

            <div>
              <label className="block text-xs mb-1 font-medium">Describe your project <span className="text-red-500">*</span></label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="border border-black w-full px-3 py-2 h-24 resize-none"
                placeholder="Tell us about your project..."
                required
              />
            </div>

            <button type="submit" className="border border-black px-6 py-2 hover:bg-black hover:text-white transition-all">
              SEND
            </button>
          </form>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
