import React from 'react';

const ExtraTwo = () => {
  return (
    <div class="form-control w-full max-w-xs mt-5 mx-96 items-center">
      <h4 className='text-3xl font-bold'>Drop Here Message</h4>
      <label class="label">
        <span class="label-text">Name</span>
      </label>
      <input type="text" placeholder="Type here Name" class="input input-bordered w-full max-w-xs" />
      <label class="label">
        <span class="label-text">Email</span>
      </label>
      <input type="email" placeholder="Type here Email" class="input input-bordered w-full max-w-xs" />
      <label class="label">
        <span class="label-text">Message</span>
      </label>
      <textarea type='' placeholder="Type here Message" class="input input-bordered w-full max-w-xs" />
      <button className='btn btn-success mt-2'>Submit</button>
    </div>
  );
};

export default ExtraTwo;