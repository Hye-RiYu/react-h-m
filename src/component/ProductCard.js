import React from 'react'
import { useNavigate } from 'react-router'

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`)
  }
  return (
    <div className='product-card' onClick={showDetail}>
      <img className='product-img' src={item?.img} alt={item?.title} />
      <div className='product-conscious'>{item?.new === true ? "Conscious choice" : ""}</div>
      <div className='product-title'>{item?.title}</div>
      <div className='product-price'>₩{item?.price}</div>
      <div className='product-new'>{item?.new === true ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard
