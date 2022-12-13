import React,{ useRef, useState } from 'react'
import axios from "axios"
import { Container, Form, Alert, Button} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { url } from './constants.js'

export default function Login() {
  const emailRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [redirectForm, setRedirectForm] = useState(false)
  const [alert, setAlert] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      setError("")
      axios.get(`${url}/${emailRef.current.value}`)
      .then(res => {
        if(res.data === null){
          setRedirectForm(true)
        }else{
          setAlert(true)
          setLoading(false)
        }
      })
    }catch(error) {
      setError(error)
    }
  }
  return (
    <Container style={{height: "100vh"}} className="d-flex align-items-center">
      {redirectForm && <Redirect to={`/${emailRef.current.value}`}/>}
      <Container className="shadow-lg col-md-6 rounded py-4">
        <Form onSubmit={handleSubmit}>
          {error && <Alert variant="danger">{error}</Alert>}
          {alert && <Alert variant="success">You already added your details</Alert>}
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label className="mb-2"><h3>Email address</h3></Form.Label>
            <Form.Control required className="px-3" type="email" placeholder="Enter email" ref={emailRef}/>
          </Form.Group>
          <Button disabled={loading} variant="primary" type="submit">Submit</Button>
        </Form>
      </Container>
    </Container>
  )
}
