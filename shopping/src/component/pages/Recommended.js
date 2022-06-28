import React from 'react';
import img2 from '../assets/images/recommended.png'
const Recommended = () => {
  return (
    <>
       <div className='container'>
        <div className='row'>
          <div className='col-4 mt-5'>
            <h1 className='mt-5'><b>Recommended Products</b></h1>
            
          </div>
          <div className='col-6 mt-5 mx-2'>
            <img src={img2} style={{ width: '600px' }}></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default Recommended;

