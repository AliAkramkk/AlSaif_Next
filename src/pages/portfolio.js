import React ,{useState} from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { portfolio, portfolioDetail,categories,categoryData } from '@/data/clientsData';
import Image from 'next/image';
import homecard from '../../public/assets/homcard6.jpg';
const Portfolio = () => {


 const [selectedCategory, setSelectedCategory] = useState(categories[0].key);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  console.log("categoryData",categoryData[selectedCategory]);
  return (
    <>
      <Navbar />

      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
<div >
           

          <div className="md:w-1/3">
            <h1 className="text-xl md:text-2xl md:text-start font-mono mt-4 px-2 text-gray-600">Portfolio</h1>
            <hr className="hidden md:block border-t-2 border-gray-500 md:w-1/4 w-1/2 md:-mt-1 ml-1" />
            <h2 className="text-3xl font-mono text-gray-800 mt-2">Our Creations Speak for Themselves</h2>
            <p className="text-gray-600 mt-2 mb-6 max-w-xl font-mono">
              Explore our diverse range of projects showcasing innovation, elegance, and functionality.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Featured project */}
            <div className="lg:col-span-2">
              <Image
                src={portfolio[1].image}
                alt={portfolio[1].title}
                width={1000}
                height={450}
                className="w-full md:h-[450px] object-cover"
              />
              <p className="mt-2 text-lg font-medium text-gray-700">{portfolio[1].title}</p>
            </div>

            {/* Side images */}
            <div className="flex flex-col gap-6 md:-mt-36">
              {[portfolio[0], portfolio[2]].map((item, idx) => (
                <div key={idx}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={350}
                    className="w-full h-36 object-cover md:h-[350px]"
                  />
                  <p className="mt-2 text-lg font-medium text-gray-700">{item.title}</p>
                </div>
              ))}
            </div>

            {/* Bottom images */}
            <div className="flex lg:col-span-2 md:w-full gap-6 md:-mt-34">
              {[portfolio[3], portfolio[4]].map((item, idx) => (
                <div key={idx}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={350}
                    className="w-full h-72 object-cover md:h-[350px] md:w-auto md:-mt-12"
                  />
                  <p className="mt-2 text-lg font-medium text-gray-700">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="font-mono bg-gray-50">
        <h3 className="text-sm uppercase text-gray-400 mb-2 text-center">How it Works</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">How We Bring Your Vision to Life</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-center">
          A simple, seamless process to create stunning architectural and interior designs.
        </p>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
         {portfolioDetail.map((step, index) => (
  <div
    key={index}
    className="p-6 shadow-inner hover:shadow-lg hover:scale-105 duration-300 bg-no-repeat bg-center bg-contain"
    style={{
      backgroundImage: `url('/assets/logo.png')`,
      backgroundColor: 'rgba(255,255,255,0.5)', // optional light background
      backgroundBlendMode: 'overlay',
    }}
  >
    <p className="text-sm text-gray-800 mb-2">Step {index + 1}</p>
    <h3 className="text-xl font-semibold mb-2 text-left">{step.title}</h3>
    <p className="text-gray-900 text-left">{step.description}</p>
  </div>
))}

        </div>

        {/* Final Showcase Section */}
        <div className="mt-16 relative w-full max-w-7xl mx-auto">
          <Image
            src={homecard}
            alt="Interior Design Showcase"
            width={1600}
            height={600}
            className="w-full object-cover"
          />
          <h1 className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs md:text-5xl font-mono bg-black/10 px-4 py-2 rounded">
            Shape Your Space <br /> with <span className="font-mono">Al Saif</span>
          </h1>
        </div>
 <div className='m-8 '>
    

    

    <div className="flex flex-col md:flex-row min-h-screen bg-white m-5 lg:m-10 ">
      {/* Sidebar */}
      <div className="hidden  md:flex md:flex-col  w-full md:w-1/4 p-4 lg:mt-20  h-fit ">
        <h2 className="text-sm font-thin mb-4">P O P U L A R C A T E G O R I E S</h2>

        <ul className="space-y-5 md:flex md:flex-col items-start ">
         {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
      className={`transition-colors duration-200 ${
        selectedCategory === cat.key
         ? "text-gray-900 font-semibold"
      : "text-gray-400 hover:text-gray-900"
      }`}
          >
            {cat.title}
          </button>
        ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 p-4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">What's new?</h1>
          {/* <button className="bg-black text-white text-xs font-thin px-10 py-1 rounded-full">VIEW ALL <br /> PRODUCTS</button> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 lg:mt-10">
          {(categoryData[selectedCategory] || []).map((item, index) => (
            <div key={index} className="bg-white   overflow-hidden lg:even:mt-10 lg:odd:mb-10">
              <img src={item.image} alt={item.title} className="w-full h-52 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <div className='flex justify-between lg:mt-16'>
                {/* <p className="text-gray-500 text-xs">{article.category}</p>
                <p className="text-gray-500 text-xs text-end"> {article.date}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
        <Footer />
      </section>
    </>
  );
};

export default Portfolio;
