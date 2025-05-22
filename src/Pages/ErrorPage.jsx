import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
           <div className='flex flex-col justify-center items-center h-screen '>
            <img className='w-[40%] ' src="https://res.cloudinary.com/drogaimmk/image/upload/v1747938757/3814263_njoz68.png" alt="" />
            <Link to='/'><button className='bg-[#C6FF00] btn px-6 py-3 font-semibold rounded-full'>Go Back Home</button></Link>
           </div>
        </div>
    );
};

export default ErrorPage;