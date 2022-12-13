import React,{ useState } from 'react'
import axios from 'axios'
import { Form, Button, Container, Dropdown, DropdownButton, Alert } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { url } from './constants'

export default function Main() {

  const [range, setRange] = useState(36)
  const [batch, setBatch] = useState()
  const [name, setName] = useState()
  const [alert, setAlert] = useState(false)
  const [error, setError] = useState(false)
  const params = useParams()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      Age: range,
      Session: batch.id,
      Mail: params.email,
      Name: name
    }
    try{
      axios.post(`${url}`, data)
      .then(() => {
        setAlert(true)
      })
    }catch(err){
      setError(true)
    }
  }
  return (
    <Container style={{height:"100vh"}} className="d-flex justify-content-center align-items-center">
      <Container className="shadow-lg col-md-6 rounded py-4">
        <Form onSubmit={handleSubmit}>
        {alert && <Alert variant="success">Details added successfully</Alert>}
        {error && <Alert variant="danger">Some error occurred</Alert>}
          <Form.Group className="mb-3">
            <Form.Range min={18} max={65} onChange={(e) => setRange(e.target.value)}/>
            <Form.Text>Set your age {range}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3 d-flex justify-content-center" >
            <Form.Control
            style={{width: "60%"}}
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <div className="d-flex justify-content-center">
              <input style={{textAlign : 'center'}} type="text" placeholder="Monthly Fee 500 INR" disabled></input>
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
            <DropdownButton id="dropdown-basic-button" title={batch ? batch.batch : `Select Batch`}>
              <Dropdown.Item eventKey="6-7" onClick={() => setBatch({batch: "6-7 AM", id: 1})}>6-7 AM</Dropdown.Item>
              <Dropdown.Item eventKey="7-8" onClick={() => setBatch({batch: "7-8 AM", id: 2})}>7-8 AM</Dropdown.Item>
              <Dropdown.Item eventKey="8-9" onClick={() => setBatch({batch: "8-10 AM", id: 3})}>8-9 AM</Dropdown.Item>
              <Dropdown.Item eventKey="9-10" onClick={() => setBatch({batch: "10-11 AM", id: 4})}>9-10 AM</Dropdown.Item>
            </DropdownButton>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </Container>
  )
}
