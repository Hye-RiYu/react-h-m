import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router';

const Login = ({setAuthenticate}) => {

  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate('/')
  }

  return (
    <Container className='login-wrap'>
      <Form className='login-form' onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="danger" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  )
}

export default Login
