import React from 'react';
import Worldwide from './Worldwide';
import LineChart from './LineChart';

const Charts: React.FC = () => {
  return (
    <div className='h-full w-full flex flex-col justify-between bg-black bg-opacity-95 text-yellow-300 p-10'>
      <Worldwide />
      <LineChart />
    </div>
  );
};

export default Charts;