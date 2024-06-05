import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getCurrentUser } from 'aws-amplify/auth';

function PrivateRoute({ children }) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUser = async () => {
            try {
                const {username, userId, signInDetails} = await getCurrentUser();
                console.log(`The username: ${username}`);
                console.log(`The userId: ${userId}`);
                console.log(`The signInDetails: ${signInDetails}`);
                setLoggedIn(true);
            } catch (err) {
                console.log('Error:', err);
                setLoggedIn(false);
            } finally {
                setLoading(false);
            }
        };

        checkUser();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return loggedIn ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
