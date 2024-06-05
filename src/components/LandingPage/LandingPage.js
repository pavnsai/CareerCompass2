import React from 'react';
import { useNavigate } from 'react-router-dom';


function LandingPage() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/login');
    };

    return (
        <div className="landing-page">
                <h1>Welcome to Our Website</h1>
                <p>Discover amazing features and benefits.</p>
                <button onClick={handleGetStarted}>Get Started</button>
        </div>
    );
}

export default LandingPage;
