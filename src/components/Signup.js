import React, {useRef,useState} from 'react'
import {Form, Button, Card} from "react-bootstrap"
import { useAuth } from '../context/AuthContext'
import {Link} from "react-router-dom"
 
export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const { signup } = useAuth()
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)

   async function handleSubmit(e){
        e.preventDefault()
        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            return setError("sorry passwords dont match!")
        }
       try {
           setError("")
           setLoading(true)
           await  signup(emailRef.current.value, passwordRef.current.value)
       } catch (error) {
           setError("failed to create account")
       }
setLoading(false)
    }





  return (
    <>
    <Card>
        <Card.Body>
        <h2>Sign Up</h2>
        <h4>{error}</h4>
        <Form onSubmit={handleSubmit} >
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
        <Button disabled={loading} className="w-100" type="submit">
            sign up!
        </Button>
        </Form>
        </Card.Body>        
    </Card>
    <div className="w-100 text-center mt-2">
        Already have an account? <Link to={"/login"}> Login </Link>
    </div>
    </>
  )
}
