import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://project-sunsine.herokuapp.com/service')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div>
      <h1 className='text-center text-4xl'>Our services</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {
          services.map(service => <Service
            key={service._id}
            service={service}
          ></Service>)
        }
      </div>
    </div>
  );
};

export default Services;