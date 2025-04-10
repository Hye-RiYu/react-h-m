import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import { useParams } from 'react-router'

const ProductDetail = () => {

  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/Hye-RiYu/react-h-m/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    setProduct(data);
    console.log('data',data)
  }
  useEffect(() => {
    getProductDetail();
  },[])

  return (
    <Container className='detail-container'>
      <Row>
        <Col xs={12} md={6} className='product-detail'>
          <img className='product-detail-img' src={product?.img} alt={product?.title} />
        </Col>
        <Col xs={12} md={6} className='product-detail-info'>
          <div className='product-detail-title'>{product?.title}</div>
          <div className='product-detail-price'>₩{product?.price}</div>
          <div className='product-conscious'>{product?.new === true ? "Conscious choice" : ""}</div>
          <Dropdown className="drop-down">
              <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product?.size.length > 0 &&
                  product.size.map((item) => (
                    <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="danger" className="add-button">
              추가
            </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
