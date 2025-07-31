import React ,{useState} from 'react'

const HighlightStyle = () => {

     const [projectCount, setProjectCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const [serviceCount, setServiceCount] = useState(0);
  let countInterval;

  const startCounting = () => {
    countInterval = setInterval(() => {
      setProjectCount(prevCount => (prevCount < 8000 ? prevCount + 40 : prevCount));
      setClientCount(prevCount => (prevCount < 1000 ? prevCount + 10 : prevCount));
      setServiceCount(prevCount => (prevCount < 17 ? prevCount + 1 : prevCount));
    }, 30);
  };

  const stopCounting = () => {
    clearInterval(countInterval);
  };
  return (
    <div className='mx-6 -mt-6'>
         <div className="bg-gray-100  px-6 md:px-1 w-full h-50 overflow-hidden relative rounded-bl-full  ">
<div 
        className="container mx-auto px-4 py-16 lg:px-8  xl:max-w-7xl" 
        onMouseEnter={startCounting} 
        onMouseLeave={stopCounting}
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-center">
          <dl className="space-y-1 px-5 py-8">
            <dt className="text-4xl font-extrabold text-black dark:text-white">
              {projectCount}+
            </dt>
            <dd className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-500">
              Projects
            </dd>
          </dl>
          <dl className="space-y-1 px-5 py-8">
            <dt className="text-4xl font-extrabold text-black dark:text-white">
              {clientCount}+
            </dt>
            <dd className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-500">
              Clients
            </dd>
          </dl>
          <dl className="space-y-1 px-5 py-8">
            <dt className="text-4xl font-extrabold text-black dark:text-white">
              {serviceCount}+
            </dt>
            <dd className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-500">
              Years
            </dd>
          </dl>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HighlightStyle