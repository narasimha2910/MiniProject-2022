import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <p className="text-5xl mb-20">Welcome</p>
      <Link to="/docs">
        <div className='text-2xl'>Docs</div>
      </Link>
    </div>
  );
}

export default Welcome