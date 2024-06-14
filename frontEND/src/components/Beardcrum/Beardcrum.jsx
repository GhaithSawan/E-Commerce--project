import React from 'react'

const Beardcrum = ({CurrentProduct}) => {
  return (
    <div className='container pt-3'>
        Home <img src="/assets/breadcrum_arrow.png" alt="" /> Shop <img src="/assets/breadcrum_arrow.png" alt="" /> {CurrentProduct?.category} <img src="/assets/breadcrum_arrow.png" alt="" /> {CurrentProduct?.title} 
    </div>
  )
}

export default Beardcrum