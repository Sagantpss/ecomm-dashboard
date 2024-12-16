import { React, useEffect } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

function Login() {

    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            navigate("/addproduct");
        }
    }, [])

    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <h1>Login</h1>
        </div>
    )
}

export default Login;