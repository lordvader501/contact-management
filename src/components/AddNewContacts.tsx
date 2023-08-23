import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewContacts: React.FC = () => {
  const { register, handleSubmit, formState:{errors}} = useForm();
  const submitHandler = () => {console.log('hello');};
  return (
    <div className='h-screen w-full flex justify-center text-yellow-300 bg-black bg-opacity-95'>
      <div className='p-6 w-1/2 mt-8'>
        <h1 className='font-extrabold text-center text-2xl mb-4'>Enter Contact Details</h1>
        <form className='flex flex-col' onSubmit={handleSubmit(submitHandler)}>
          <label htmlFor='Frist Name'>First Name:</label>
          <input className='mb-3 border-2  border-yellow-700 bg-yellow-100 rounded-lg pl-4 py-2 placeholder:text-yellow-700 text-yellow-700' placeholder='First Name' {...register('firstname', { required: true })} />
          {errors.firstname && <span>Firstname Required</span>}
          <label htmlFor='Last Name'>First Name:</label>
          <input className='mb-3 border-2  border-yellow-700 bg-yellow-100 rounded-lg pl-4 py-2 placeholder:text-yellow-700 text-yellow-700' placeholder='Last Name' {...register('lastname', { required: true })} />
          {errors.lastname && <span>Firstname Required</span>}
          <label htmlFor='status'>Status:</label>
          <select className='border border-yellow-700 bg-yellow-100 rounded-lg py-2 pl-4 text-yellow-700 mb-3' {...register('status', { required:true })}>
            <option value={0}>Active</option>
            <option value={1}>Inactive</option>
          </select>
          {errors.status && <span>Feild required!</span>}
          <button type='submit' className='border-2 border-yellow-700 bg-yellow-400 text-black font-medium rounded-xl py-2 mt-3'>Submit</button>
        </form>
      </div>    
    </div>
  );
};

export default AddNewContacts;