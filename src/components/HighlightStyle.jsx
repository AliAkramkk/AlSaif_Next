import React, { useState, useRef, useEffect } from 'react';

const HighlightStyle = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const [serviceCount, setServiceCount] = useState(0);
  const scrollRef = useRef(null);

  // Count animation
  useEffect(() => {
    const countInterval = setInterval(() => {
      setProjectCount(prev => (prev < 8000 ? prev + 40 : prev));
      setClientCount(prev => (prev < 1000 ? prev + 10 : prev));
      setServiceCount(prev => (prev < 17 ? prev + 1 : prev));
    }, 30);

    return () => clearInterval(countInterval);
  }, []);

  // Auto-scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollStep = 0;
    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

        if (scrollContainer.scrollLeft >= maxScroll) {
          scrollStep = 0;
          scrollContainer.scrollLeft = 0;
        } else {
          scrollStep += scrollContainer.clientWidth; // Scroll by one full view
          scrollContainer.scrollTo({
            left: scrollStep,
            behavior: 'smooth',
          });
        }
      }
    }, 3000); // scroll every 3 seconds

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className='mx-6 -mt-6'>
      <div className="bg-gray-100 px-6 md:px-1 w-full overflow-visible relative rounded-bl-full">
        <div className="container mx-auto px-4 py-16 lg:px-8 xl:max-w-7xl">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto md:grid md:grid-cols-3 text-center scroll-smooth"
          >
            <dl className="min-w-[220px] space-y-1 px-5 py-8 shrink-0 md:min-w-0">
              <dt className="text-4xl font-extrabold text-black">
                {projectCount}+
              </dt>
              <dd className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                Projects
              </dd>
            </dl>
            <dl className="min-w-[220px] space-y-1 px-5 py-8 shrink-0 md:min-w-0">
              <dt className="text-4xl font-extrabold text-black">
                {clientCount}+
              </dt>
              <dd className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                Clients
              </dd>
            </dl>
            <dl className="min-w-[220px] space-y-1 px-5 py-8 shrink-0 md:min-w-0">
              <dt className="text-4xl font-extrabold text-black">
                {serviceCount}+
              </dt>
              <dd className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                Years
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightStyle;
