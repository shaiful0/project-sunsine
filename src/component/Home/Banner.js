import React from 'react';
import picture from '../../image/HD-wallpaper-glasses-book-reading.jpg'

const Banner = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={picture} class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">Welcome to open Library</h1>
          <p class="py-6">Open Library is an open, editable library catalog, building towards a web page for every book ever published.</p>
          <button class="btn btn-success">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;