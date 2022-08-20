import React from 'react';
import {  useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link , useNavigate} from 'react-router-dom';
import Loading from './Loading';

const SignUp = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [
    createUserWithEmailAndPassword,
    user1,
    loading1,
    error1,
  ] = useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  
  if (loading ) {
    return <Loading></Loading>
  }
  if (user) {
    console.log(user);
  }

  const onSubmit = data => {
    console.log(data);
    createUserWithEmailAndPassword(data.email,data.password)
    navigate('/')
    
  }
  return (
    <div className='flex justify-center items-center h-screen'>
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-center text-3xl">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              class="input input-bordered w-full max-w-xs"
              {...register("name", { required: true })}
            />
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your email"
              class="input input-bordered w-full max-w-xs"
              {...register("email", { required: true })}
            />
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Your password"
              class="input input-bordered w-full max-w-xs"
              {...register("password", { required: true })}
            />
          </div>


          <input className='btn btn-success w-full max-w-xs mt-5' type="submit" value="SignUp" />
        </form>
        <p>Already have an Account <Link className='text-cyan-500' to='/login'>login here</Link></p>
        <div class="divider">OR</div>
        <button
          onClick={() => signInWithGoogle()}
          class="btn btn-outline btn-success">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  </div>
  );
};

export default SignUp;