import React, { useState, useEffect } from 'react';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Loader from "../Utils/Loader";

function Login() {
    const { user } = useAuthenticator((context) => [context.user]);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (user) {
            setIsLoading(true);
            setTimeout(() => {
                navigate('/jobs2');
            }, 1000);
        }
    }, [user, navigate]);

    return (
        <div className="authenticator-container">
            {isLoading && <Loader />}
            <div style={{ marginTop: '50px' }}>
                <Authenticator />
            </div>
        </div>
    );
}

export default Login;