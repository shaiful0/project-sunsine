import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
  const { _id, name, img, description, price } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = id =>{
    navigate(`/service/${id}`)
  }
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p><span className='text-xl'>Description:</span>{description}</p>
        <p>Price:{price}</p>
        <div class="card-actions">
          <button onClick={() => navigateToServiceDetail(_id) } class="btn btn-success">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Service;