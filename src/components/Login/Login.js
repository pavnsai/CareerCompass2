import React, { useState, useEffect } from 'react';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Loader from "../Utils/Loader";
import { Hub } from 'aws-amplify/utils';

function Login() {
    const { user } = useAuthenticator((context) => [context.user]);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (user) {
            console.log("coming to login")
            setIsLoading(true);
            setTimeout(() => {
                navigate('/jobs');
            }, 1000);
        }
    }, [user, navigate]);



    Hub.listen('auth', ({ payload }) => {
        switch (payload.event) {
            case 'signedIn':
                navigate('/jobs');
                break;
        }
    });
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