import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Protected(props) {
    let Component = props.Component;
    const navigate = useNavigate();

    useEffect(() => {
        let login = localStorage.getItem("user-info");
        if (!login) {
            navigate('/register');
        }
    });
    return (
        <div>
            <Component />
        </div>
    )
}

export default Protected;