import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  useQuery, 
  // useQueryClient 
} from '@tanstack/react-query';

const Contacts: React.FC = () => {

  const navigate = useNavigate();
  // const queryClient = useQueryClient();
  const query = useQuery({ queryKey: ['contacts'], queryFn: ()=>{setTimeout(()=>{console.log('hello');},1000);} });
  if (query.isLoading) {
    return (
      <div className='h-screen w-full flex align-middle justify-center bg-black text-white font-black bg-opacity-95'>
        <h1>loading...</h1>   
      </div>
    );
  }

  return (
    <div className='h-screen w-full flex justify-center bg-black bg-opacity-95'>
      <div className='p-6'>
        <button onClick={()=>{navigate('/contacts/new');}} className='border-[3px] border-yellow-700 bg-yellow-400 rounded-2xl text-black font-medium px-2 py-1 mt-6'>Create Contact</button>
      </div>    
    </div>
  );
};

export default Contacts;