import React, { useEffect, useState } from 'react';
import { Button, Form, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import Header from './Header';
function Register() {
    useEffect(() => {
       if(localStorage.getItem("user-info")){
           navigate("/addproduct");
       } 
    },[])
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();

    async function signUp(e){
        e.preventDefault();
        let item = {name,email,password}
        console.log(item);
        let result = await fetch("http://localhost:8000/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
        result = await result.json();
        console.log("Result",result);
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate("/addproduct");
    }

    return (
        <div>
            <Header />
            <h1>Register</h1>
            <Stack gap={2} className="col-md-5 mx-auto">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" onClick={signUp}>
                        Submit
                    </Button>
                </Form>
            </Stack>
        </div>
    )
}
export default Register