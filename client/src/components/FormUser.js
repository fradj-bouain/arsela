import React, { useState }  from "react";
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import { Button , Row,Container,Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';

export default function FormUser(){
    const { register, handleSubmit, errors } = useForm();
    const [stat, setStat] = useState(0);
    const [show, setShow] = useState(true);

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:8080/api/addUser', {
          
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
          
        }).then(res => {
         console.log(res);
        
         setStat(1)         
        }).catch(err => {
          console.log(err);
        });
    };

    return(
  
<Container fluid style={{ backgroundColor:"#B2B2B1"}}>
  <Row style={{margin:"30px 100px 0 100px"}}>
<Form onSubmit={handleSubmit(onSubmit)}>
<Form.Group controlId="formBasicfirstName">
  <Form.Label>first Name</Form.Label>
  <Form.Control type="text" placeholder="Enter first Name" name="firstName" ref={register({required: "first Name Required"})} />
  <Form.Text className="text-muted">
    {errors.firstName }
  </Form.Text>
</Form.Group>

<Form.Group controlId="formBasiclastName">
  <Form.Label>last Name</Form.Label>
  <Form.Control type="text" placeholder="Enter last Name" name="lastName" ref={register({required: "last Name Required"})} />
  <Form.Text className="text-muted">
    {errors.lastName }
  </Form.Text>
</Form.Group>

<Form.Group controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="text" placeholder="Enter email" name="email" ref={register({required: "email Required"})} />
  <Form.Text className="text-muted">
  {errors.email }
  </Form.Text>
</Form.Group>


<Button variant="primary" type="submit">
  Submit
</Button>
<div style={{margin:"15px"}}>
{stat ? <Alert show={show} variant="success" >
         <p>User Created!</p>
         <hr/>
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
        </Alert>: null}
        </div>
</Form>

      
</Row>
</Container>
    )

}