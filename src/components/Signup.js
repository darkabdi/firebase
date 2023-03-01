import React, {useRef} from 'react'
import {Form, Button, Card} from "react-bootstrap"
 
export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
  return (
    <>
    <Card>
        <Card.Body>
        <h2>Sign Up</h2>
        <Form>
        <Form.Group id="email" >
            <Form.Label>Email</Form.Label>
            <Form.Control type = "email" ref={emailRef} required/>
        </Form.Group>

        <Form.Group id="password" >
            <Form.Label>Password</Form.Label>
            <Form.Control type = "Password" ref ={passwordRef} required/>
        </Form.Group>

        <Form.Group id="confirmPassword" >
            <Form.Label>confirm password</Form.Label>
            <Form.Control type = "password" ref={confirmPasswordRef}  required/>
        </Form.Group>
        <Button className="w-100" type="submit">
            sign up!
        </Button>
        </Form>
        </Card.Body>        
    </Card>
    <div className="w-100 text-center mt-2">
        Already have an account?
    </div>
    </>
  )
}
