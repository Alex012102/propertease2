import React from 'react';
import { Button } from "../../app/components";

const ActionCall = () => {
  return (
    <div className='flex justify-between items-center p-[10rem] bg-brand-secondary'>
      <h5 className='title text-white'>Work on your business, rather than in it.</h5>
      <div>
      <Button text={"Request a demo"} color='subtle' />
      </div>
    </div>
  );
};

export default ActionCall;