import React,{ useState } from 'react'
import { Form, Button, Container, Dropdown, DropdownButton } from 'react-bootstrap'


export default function Main() {

  const [range, setRange] = useState(36)
  const [batch, setBatch] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <Container style={{height:"100vh"}} className="d-flex justify-content-center align-items-center">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Range min={18} max={65} onChange={(e) => setRange(e.target.value)}/>
          <Form.Text>Set your age {range}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <div className="d-flex justify-content-center">
            <input style={{textAlign : 'center'}} type="text" placeholder="Monthly Fee 500 INR" disabled></input>
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <DropdownButton id="dropdown-basic-button" title={batch ? batch : `Select Batch`}>
            <Dropdown.Item eventKey="6-7" onClick={() => setBatch("6-7 AM")}>6-7 AM</Dropdown.Item>
            <Dropdown.Item eventKey="7-8" onClick={() => setBatch("7-8 AM")}>7-8 AM</Dropdown.Item>
            <Dropdown.Item eventKey="8-9" onClick={() => setBatch("8-9 AM")}>8-9 AM</Dropdown.Item>
            <Dropdown.Item eventKey="9-10" onClick={() => setBatch("9-10 AM")}>9-10 AM</Dropdown.Item>
          </DropdownButton>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}
