import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div className=' '>
      <div className=' d-flex align-items-center justify-content-center '>
        <Spinner animation="border" />
      </div>
    </div>
  )
}

export default Loader